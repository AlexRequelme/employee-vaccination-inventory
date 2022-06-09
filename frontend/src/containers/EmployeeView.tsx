function EmployeeView() {
    return (
        <div className="flex flex-col gap-2">
            <p>Como empleado puedes visualizar y actualizar tu información.</p>
            <div className="bg-white rounded-md border p-8">
                <form className="flex flex-col gap-5 text-gray-700">
                    <input
                        placeholder="Fecha de nacimiento"
                        className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    />
                    <input
                        placeholder="Dirección de domicilio"
                        className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    />
                    <input
                        placeholder="Teléfono móvil"
                        className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    />
                    <div className="flex flex-col">
                        <span>¿Estas vacunado?</span>
                        <label>
                            <input
                                className="mr-2"
                                name="isVaccination"
                                type="radio"
                                value="Vacunado"
                            />
                            Si
                        </label>
                        <label>
                            <input
                                className="mr-2"
                                name="isVaccination"
                                type="radio"
                                value="No vacunado"
                            />
                            No
                        </label>
                    </div>
                    <div className="flex flex-col">
                        <span>Tipo de vacuna</span>
                        {[
                            "Sputnik",
                            "AstraZeneca",
                            "Pfizer",
                            "Jhonson&Jhonson",
                        ].map((itm, index) => (
                            <label key={index}>
                                <input
                                    className="mr-2"
                                    name="vaccinationType"
                                    type="radio"
                                    value={itm}
                                />
                                {itm}
                            </label>
                        ))}
                    </div>
                    <input
                        placeholder="Fecha de vacunación"
                        className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    />
                    <input
                        placeholder="Número de dosis"
                        className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    />
                    <button
                        type="submit"
                        className="bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                    >
                        Ingresar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EmployeeView;
