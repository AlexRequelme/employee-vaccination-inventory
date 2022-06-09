import EmployeeList from "./EmployeeList";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { useState } from "react";
import ModalForm from "./ModalForm";
import ConfirmationModal from "../components/ConfirmationModal";

function AdminView() {
    const [showConfmModal, setShowConfmModal] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleShowConfmModal = () => {
        setShowConfmModal(true);
    };

    const handleCloseConfmModal = () => {
        setShowConfmModal(false);
    };

    const deleteEmployee = () => {
        console.log("Eliminando");
        setShowConfmModal(false);
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <p>
                    Como administrador puedes gestionar la informaciónde los
                    empleados.
                </p>
                <button
                    type="button"
                    onClick={handleClickOpen}
                    className="bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                >
                    <PlusIcon className="h-5 w-5" />
                    Añadir
                </button>
            </div>
            <EmployeeList
                employees={[
                    {
                        employee: "Alberto Ramosaaaaaaaaaaaaaqqqqqqqq",
                        vaccinationState: "Vacunado",
                        vaccinationType: "Jhonson&Jhonson",
                        vaccinationDate: "2022/07/12",
                    },
                    {
                        employee: "Alberto Ramos",
                        vaccinationState: "No Vacunado",
                        vaccinationType: "-",
                        vaccinationDate: "-",
                    },
                    {
                        employee: "Alberto Ramosaaaaaaaaaaaaaqqqqqqqq",
                        vaccinationState: "Vacunado",
                        vaccinationType: "Jhonson&Jhonson",
                        vaccinationDate: "2022/07/12",
                    },
                    {
                        employee: "Alberto Ramos",
                        vaccinationState: "No Vacunado",
                        vaccinationType: "-",
                        vaccinationDate: "-",
                    },
                    {
                        employee: "Alberto Ramosaaaaaaaaaaaaaqqqqqqqq",
                        vaccinationState: "Vacunado",
                        vaccinationType: "Jhonson&Jhonson",
                        vaccinationDate: "2022/07/12",
                    },
                    {
                        employee: "Alberto Ramos",
                        vaccinationState: "No Vacunado",
                        vaccinationType: "-",
                        vaccinationDate: "-",
                    },
                ]}
                handleDelete={handleShowConfmModal}
                handleEdit={handleClickOpen}
            />
            <ModalForm open={open} handleClose={handleClose} />
            <ConfirmationModal
                title="¿Desea eliminar al empleado?"
                description="Si decide continuar el empleado se eliminará permanentemente."
                open={showConfmModal}
                handleClose={handleCloseConfmModal}
                handleConfirm={deleteEmployee}
            />
        </>
    );
}

export default AdminView;
