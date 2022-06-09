import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";

type ConfirmationModalProps = {
    open: boolean;
    title: string;
    description: string;
    handleClose: any;
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleConfirm} autoFocus>
                    Continuar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmationModal;
