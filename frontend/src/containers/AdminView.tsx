import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState } from "react";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import ConfirmationModal from "../components/ConfirmationModal";
import Drawer from "./Drawer";
import EmployeeList from "./EmployeeList";
import FilterBar from "./FilterBar";
import ModalForm from "./ModalForm";

function AdminView() {
    const [showConfmModal, setShowConfmModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [drawerState, setDrawerState] = useState(true);

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
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between lg:items-center">
                <p>
                    Como administrador puedes gestionar la informaciónde los
                    empleados.
                </p>
                <button
                    type="button"
                    onClick={handleClickOpen}
                    className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
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
            <button
                onClick={() => setDrawerState(true)}
                className="fixed bottom-4 lg:hidden left-1/2 transform -translate-x-1/2 w-12 h-12 bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-full font-medium"
            >
                <FilterAltIcon />
            </button>
            <Drawer state={drawerState} setState={setDrawerState}>
                <div className="w-64 h-max bg-white p-4">
                    <FilterBar />
                </div>
            </Drawer>
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
