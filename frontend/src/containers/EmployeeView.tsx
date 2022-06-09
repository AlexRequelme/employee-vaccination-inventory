function EmployeeView() {
    return (
        <div className="flex flex-col gap-2">
            <p>Como empleado puedes visualizar y actualizar tu información.</p>
            <div className="bg-white rounded-md border p-4 lg:p-8">
                <form className="flex flex-col gap-5 text-gray-600">
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Cédula
                            <input
                                placeholder="Cédula"
                                disabled
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Nombres
                            <input
                                placeholder="Nombres"
                                disabled
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Apellidos
                            <input
                                placeholder="Apellidos"
                                disabled
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Correo electrónico
                            <input
                                placeholder="Correo electrónico"
                                disabled
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Fecha de nacimiento
                            <input
                                placeholder="Fecha de nacimiento"
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Dirección de domicilio
                            <input
                                placeholder="Dirección de domicilio"
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Teléfono móvil
                            <input
                                placeholder="Teléfono móvil"
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>

                    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
                        <span className="font-semibold">¿Estas vacunado?</span>
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

                    <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
                        <span className="font-semibold">Tipo de vacuna</span>
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
                    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-between lg:items-center">
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Fecha de vacunación
                            <input
                                placeholder="Fecha de vacunación"
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                        <label className="flex-1 flex flex-col font-semibold gap-2">
                            Número de dosis
                            <input
                                placeholder="Número de dosis"
                                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="self-end bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
                    >
                        Actualizar información
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EmployeeView;
