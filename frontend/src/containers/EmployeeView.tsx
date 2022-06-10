import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import API from "../api";
import Input from "../components/Input";
import { useAuth } from "../hooks/useAuth";

function EmployeeView() {
    const { user, updateUserData } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            birthDate: user.birthDate || "",
            address: user.address || "",
            phone: user.phone || "",
            isVaccination: user.isVaccination || "",
            vaccinationType: user.vaccinationType || "",
            vaccinationDate: user.vaccinationDate || "",
            vaccinationNum: user.vaccinationNum || "",
        },
    });

    const watchIsVaccination = watch("isVaccination");

    const onSubmit = async (dataForm: any) => {
        const data = await API.put(`/users/${user.id}`, dataForm);
        if (data) {
            toast.success("Se actualizo correctamente");
            updateUserData(data);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <p>Como empleado puedes visualizar y actualizar tu información.</p>
            <div className="bg-white rounded-md border p-4 lg:p-8">
                <form
                    autoComplete="off"
                    className="flex flex-col gap-5 text-gray-600"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Cédula
                            <input
                                placeholder="Cédula"
                                disabled
                                value={user.cc}
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Nombres
                            <input
                                placeholder="Nombres"
                                disabled
                                value={user.name}
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Apellidos
                            <input
                                placeholder="Apellidos"
                                disabled
                                value={user.surname}
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Correo electrónico
                            <input
                                placeholder="Correo electrónico"
                                disabled
                                value={user.email}
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Fecha de nacimiento
                            <Input
                                registerObject={register("birthDate", {
                                    required: true,
                                })}
                                placeholder="Fecha de nacimiento"
                                type="date"
                                error={errors.birthDate}
                                errorMsg="El campo es requerido y debe ser una fecha"
                            />
                        </label>

                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Dirección de domicilio
                            <Input
                                registerObject={register("address", {
                                    required: true,
                                })}
                                placeholder="Dirección de domicilio"
                                error={errors.address}
                                errorMsg="El campo es requerido"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Teléfono móvil
                            <Input
                                registerObject={register("phone", {
                                    required: true,
                                })}
                                placeholder="Teléfono móvil"
                                error={errors.phone}
                                errorMsg="El campo es requerido"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                        <span className="font-semibold">¿Estas vacunado?</span>
                        <label>
                            <input
                                {...register("isVaccination", {
                                    required: true,
                                })}
                                className="mr-2"
                                type="radio"
                                value="Vacunado"
                            />
                            Si
                        </label>
                        <label>
                            <input
                                {...register("isVaccination", {
                                    required: true,
                                })}
                                className="mr-2"
                                type="radio"
                                value="No vacunado"
                            />
                            No
                        </label>
                        {errors.isVaccination && (
                            <span className="text-red-400 text-sm font-medium">
                                Selecciona una opción*
                            </span>
                        )}
                    </div>
                    {watchIsVaccination === "Vacunado" && (
                        <>
                            <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
                                <span className="font-semibold">
                                    Tipo de vacuna
                                </span>
                                {[
                                    "Sputnik",
                                    "AstraZeneca",
                                    "Pfizer",
                                    "Jhonson&Jhonson",
                                ].map((itm, index) => (
                                    <label key={index}>
                                        <input
                                            {...register("vaccinationType", {
                                                required: true,
                                            })}
                                            className="mr-2"
                                            type="radio"
                                            value={itm}
                                        />
                                        {itm}
                                    </label>
                                ))}
                                {errors.vaccinationType && (
                                    <span className="text-red-400 text-sm font-medium">
                                        Selecciona una opción*
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                                <label className="flex-1 flex flex-col font-semibold gap-2">
                                    Fecha de vacunación
                                    <Input
                                        registerObject={register(
                                            "vaccinationDate",
                                            {
                                                required: true,
                                            }
                                        )}
                                        type="date"
                                        placeholder="Fecha de vacunación"
                                        error={errors.vaccinationDate}
                                        errorMsg="El campo es requerido y debe ser una fecha"
                                    />
                                </label>
                                <label className="flex-1 flex flex-col font-semibold gap-2">
                                    Número de dosis
                                    <Input
                                        registerObject={register(
                                            "vaccinationNum",
                                            {
                                                required: true,
                                            }
                                        )}
                                        placeholder="Número de dosis"
                                        error={errors.vaccinationNum}
                                        errorMsg="El campo es requerido"
                                    />
                                </label>
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                    >
                        Actualizar información
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EmployeeView;
