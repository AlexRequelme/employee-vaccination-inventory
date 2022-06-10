import styles from "../styles/EmployeeList.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";

type FilterBarProps = {
    filterEmployee: any;
    resetFilters: any;
};

function FilterBar({ filterEmployee, resetFilters }: FilterBarProps) {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data: any) => {
        filterEmployee(data);
    };

    const handleReset = () => {
        resetFilters();
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filtrar por</h3>
                <button
                    onClick={handleReset}
                    type="button"
                    className="text-kc-blue font-semibold text-sm underline"
                >
                    Borrar Filtros
                </button>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col text-base gap-4">
                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Estado</span>
                    <label>
                        <input
                            {...register("isVaccination")}
                            type="radio"
                            value="Vacunado"
                        />
                        Vacunado
                    </label>
                    <label>
                        <input
                            {...register("isVaccination")}
                            type="radio"
                            value="No vacunado"
                        />
                        No vacunado
                    </label>
                </div>

                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Tipo</span>
                    {[
                        "Sputnik",
                        "AstraZeneca",
                        "Pfizer",
                        "Jhonson&Jhonson",
                    ].map((type, index) => (
                        <label key={index}>
                            <input {...register(type)} type="checkbox" />
                            {type}
                        </label>
                    ))}
                </div>
                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Fecha</span>
                    <label>
                        Desde
                        <input
                            {...register("dateFrom")}
                            className={styles["section-input-date"]}
                            type="date"
                        />
                    </label>
                    <label>
                        Hasta
                        <input
                            {...register("dateTo")}
                            className={styles["section-input-date"]}
                            type="date"
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                >
                    <SearchIcon />
                    Buscar
                </button>
            </div>
        </form>
    );
}

export default FilterBar;
