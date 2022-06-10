import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import API from "../api";
import passwordGenerator from "../helpers/password-generator";
import User from "../types/user";

type ModalFormProps = {
    open: boolean;
    handleClose: any;
    info: User | null;
    handleSave: any;
};

function ModalForm({ open, handleClose, info, handleSave }: ModalFormProps) {
    const isUpdateMode = Boolean(info);
    const [credentials, setCredentials] = useState<any>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onBlur",
    });

    useEffect(() => {
        reset({
            cc: info ? info.cc : "",
            name: info ? info.name : "",
            surname: info ? info.surname : "",
            email: info ? info.email : "",
        });
        setCredentials(null);
    }, [open]);

    const buttonTitle = isUpdateMode ? "Actualizar" : "Registar";

    const getTitle = () => {
        if (Boolean(credentials)) {
            return "Credenciales del empleado";
        }

        return isUpdateMode ? "Actualizar información" : "Registrar empleado";
    };

    const onSubmit = async (dataForm: any) => {
        if (isUpdateMode) {
            const data = await API.put(`/users/${info!.id}`, dataForm);
            handleSave(data);
            handleClose();
        } else {
            const payload = {
                ...dataForm,
                username: `${dataForm.name.split(" ")[0].toLowerCase()}`,
                password: passwordGenerator(dataForm.surname),
                isAdmin: false,
                vaccinationState: "-",
            };
            const data = await API.post("/users", payload);
            if (data) {
                setCredentials({
                    username: payload.username,
                    password: payload.password,
                });
                handleSave(data);
            }
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{getTitle()}</DialogTitle>
            <DialogContent>
                {Boolean(credentials) ? (
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 text-gray-700">
                            <span>
                                <span className="font-semibold">
                                    Username:{" "}
                                </span>
                                {credentials.username}
                            </span>
                            <span>
                                <span className="font-semibold">
                                    Password:{" "}
                                </span>
                                {credentials.password}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={handleClose}
                            className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                        >
                            Continuar
                        </button>
                    </div>
                ) : (
                    <div>
                        <form
                            autoComplete="off"
                            className="flex flex-col gap-5 text-gray-700"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <h3 className="font-normal">
                                Por favor ingrese la siguiente información.
                            </h3>
                            <div className="flex flex-col gap-2">
                                <input
                                    {...register("cc", {
                                        required: true,
                                        pattern: /^\d*$/,
                                        minLength: 10,
                                        maxLength: 10,
                                    })}
                                    placeholder="Cédula"
                                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                                />
                                {errors.cc && (
                                    <span className="text-red-400 text-sm font-medium">
                                        El campo es requerido y de 10 digitos*
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    {...register("name", {
                                        required: true,
                                        pattern: /^[a-zA-Z\s]*$/,
                                    })}
                                    placeholder="Nombres"
                                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                                />
                                {errors.name && (
                                    <span className="text-red-400 text-sm font-medium">
                                        El campo es requerido y solo acepta
                                        letras*
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    {...register("surname", {
                                        required: true,
                                        pattern: /^[a-zA-Z\s]*$/,
                                    })}
                                    placeholder="Apellidos"
                                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                                />
                                {errors.surname && (
                                    <span className="text-red-400 text-sm font-medium">
                                        El campo es requerido y solo acepta
                                        letras*
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <input
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    })}
                                    placeholder="Correo electrónico"
                                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-sm font-medium">
                                        El campo es requerido y debe ser un
                                        email*
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-2 items-center justify-end">
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="bg-gray-400 hover:bg-gray-500 text-white rounded-md px-4 py-2 font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className=" bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                                >
                                    {buttonTitle}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}

export default ModalForm;
