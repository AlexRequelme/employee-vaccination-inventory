import EmployeeCard from "../components/EmployeeCard";
import User from "../types/user";
import FilterBar from "./FilterBar";

type EmployeeListProps = {
    employees: User[] | undefined;
    handleDelete: any;
    handleEdit: any;
    filterEmployee: any;
    resetFilters: any;
};

function EmployeeList({
    employees,
    handleDelete,
    handleEdit,
    filterEmployee,
    resetFilters,
}: EmployeeListProps) {
    return (
        <div className={`flex gap-2 flex-col lg:flex-row `}>
            <div className="w-80 h-max hidden lg:block sticky top-2 bg-white p-8 border rounded">
                <FilterBar
                    filterEmployee={filterEmployee}
                    resetFilters={resetFilters}
                />
            </div>

            <div className="flex-1 bg-white p-4 lg:p-8 border rounded text-base flex flex-col gap-4 overflow-auto">
                <h3 className="font-semibold text-lg">Empleados</h3>
                <hr />
                <div className="h-full flex flex-col gap-4">
                    {employees && employees.length > 0 ? (
                        employees.map((emp, index) => (
                            <EmployeeCard
                                key={index}
                                {...emp}
                                handleDelete={handleDelete("confirm", emp)}
                                handleEdit={handleEdit("form", emp)}
                            />
                        ))
                    ) : (
                        <span className="mx-auto my-auto text-gray-500">
                            No hay empleados registrados
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmployeeList;
