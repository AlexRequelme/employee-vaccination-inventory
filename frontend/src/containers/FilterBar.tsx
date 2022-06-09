import styles from "../styles/EmployeeList.module.scss";
import SearchIcon from "@mui/icons-material/Search";

function FilterBar() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Filtrar por</h3>
                <button className="text-kc-blue font-semibold text-sm underline">
                    Borrar Filtros
                </button>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col text-base gap-4">
                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Estado</span>
                    <label>
                        <input type="checkbox" />
                        Vacunado
                    </label>
                    <label>
                        <input type="checkbox" />
                        No vacunado
                    </label>
                </div>

                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Tipo</span>
                    <label>
                        <input type="checkbox" />
                        Sputnik
                    </label>
                    <label>
                        <input type="checkbox" />
                        AstraZeneca
                    </label>
                    <label>
                        <input type="checkbox" />
                        Pfizer
                    </label>
                    <label>
                        <input type="checkbox" />
                        Jhonson&Jhonson
                    </label>
                </div>
                <div className={styles["section"]}>
                    <span className={styles["section-title"]}>Fecha</span>
                    <label>
                        Desde
                        <input
                            className={styles["section-input-date"]}
                            type="date"
                        />
                    </label>
                    <label>
                        Hasta
                        <input
                            className={styles["section-input-date"]}
                            type="date"
                        />
                    </label>
                </div>
                <button
                    type="button"
                    className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium flex items-center gap-2"
                >
                    <SearchIcon />
                    Buscar
                </button>
            </div>
        </>
    );
}

export default FilterBar;
