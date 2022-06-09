import {
    Dialog, DialogContent,
    DialogContentText, DialogTitle
} from "@mui/material";

type ModalFormProps = {
    open: boolean;
    handleClose: any;
    info?: any;
};

function ModalForm({ open, handleClose, info }: ModalFormProps) {
    const isUpdateMode = Boolean(info);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {isUpdateMode ? "Actualizar información" : "Registrar empleado"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <form className="flex flex-col gap-5 text-gray-700">
                        <h3 className="font-normal">
                            Por favor ingrese la siguiente información.
                        </h3>
                        <input
                            placeholder="Cédula"
                            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                        />
                        <input
                            placeholder="Nombres"
                            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                        />
                        <input
                            placeholder="Apellidos"
                            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                        />
                        <input
                            placeholder="Correo electrónico"
                            className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                        />
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
                                {isUpdateMode ? "Actualizar" : "Registar"}
                            </button>
                        </div>
                    </form>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}

export default ModalForm;
