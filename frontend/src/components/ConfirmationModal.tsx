import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

type ConfirmationModalProps = {
    open: boolean;
    title: string;
    description: string;
    handleClose?: any;
    handleConfirm: any;
};

function ConfirmationModal({
    open,
    handleClose,
    handleConfirm,
    title,
    description,
}: ConfirmationModalProps) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>

                <div className="mt-4 flex gap-2 items-center justify-end">
                    {handleClose && (
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-gray-400 hover:bg-gray-500 text-white rounded-md px-4 py-2 font-medium"
                        >
                            Cancelar
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={handleConfirm}
                        className=" bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                    >
                        Continuar
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmationModal;
