import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import API from "../api";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import ConfirmationModal from "../components/ConfirmationModal";
import employeeFilter from "../helpers/employee-filter";
import User from "../types/user";
import Drawer from "./Drawer";
import EmployeeList from "./EmployeeList";
import FilterBar from "./FilterBar";
import ModalForm from "./ModalForm";

type modalFormType = {
    show: string;
    employee: null | User;
};

function AdminView() {
    const [modalForm, setModalForm] = useState<modalFormType>({
        show: "",
        employee: null,
    });
    const [employees, setEmployees] = useState<User[]>([]);
    const [filterEmployees, setFilterEmployees] = useState<User[]>([]);
    const [drawerState, setDrawerState] = useState(false);

    useEffect(() => {
        const getEmployees = async () => {
            const data = await API.get("/users");
            if (data) {
                setEmployees(data.filter((emp: any) => !emp.isAdmin));
                setFilterEmployees(data.filter((emp: any) => !emp.isAdmin));
            }
        };

        getEmployees();
    }, []);

    const handleModalState = (type: string, employee: User | null) => () => {
        setModalForm({ show: type, employee });
    };

    const handleSave = (user: User) => {
        const index = employees.findIndex((itm) => itm.email === user.email);
        if (index === -1) {
            setEmployees((prev) => [...prev, user]);
        } else {
            const auxArray = [...employees];
            auxArray[index] = user;
            setEmployees(auxArray);
        }
    };

    const deleteEmployee = async () => {
        if (modalForm["employee"]) {
            const id = modalForm["employee"].id;
            await API.delete(`/users/${id}`);
            const auxArray = employees.filter((itm) => itm.id !== id);
            setModalForm({ show: "", employee: null });
            setEmployees(auxArray);
        }
    };

    const filterEmployee = (filters: any) => {
        const filterArray = employeeFilter(employees, filters);
        setFilterEmployees(filterArray);
    };

    const resetFilters = () => {
        setFilterEmployees(employees);
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
                    onClick={handleModalState("form", null)}
                    className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                >
                    <PlusIcon className="h-5 w-5" />
                    Añadir
                </button>
            </div>
            <EmployeeList
                employees={filterEmployees}
                handleDelete={handleModalState}
                handleEdit={handleModalState}
                filterEmployee={filterEmployee}
                resetFilters={resetFilters}
            />
            <button
                onClick={() => setDrawerState(true)}
                className="fixed bottom-4 lg:hidden left-1/2 transform -translate-x-1/2 w-12 h-12 bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-full font-medium"
            >
                <FilterAltIcon />
            </button>
            <Drawer state={drawerState} setState={setDrawerState}>
                <div className="w-64 h-max bg-white p-4">
                    <FilterBar
                        filterEmployee={filterEmployee}
                        resetFilters={resetFilters}
                    />
                </div>
            </Drawer>
            <ModalForm
                info={modalForm["employee"]}
                open={modalForm["show"] === "form"}
                handleClose={handleModalState("", null)}
                handleSave={handleSave}
            />
            <ConfirmationModal
                title="¿Desea eliminar al empleado?"
                description="Si decide continuar el empleado se eliminará permanentemente."
                open={modalForm["show"] === "confirm"}
                handleClose={handleModalState("", null)}
                handleConfirm={deleteEmployee}
            />
        </>
    );
}

export default AdminView;
