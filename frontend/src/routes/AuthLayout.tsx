import { useState } from "react";
import { ReactComponent as BackArrowIcon } from "../assets/icons/back-arrow.svg";
import LoginForm from "../containers/LoginForm";

function AuthLayout() {
    const [roleType, setRoleType] = useState<string>("");
    const isRoleSelected: boolean = roleType !== "";

    return (
        <div className="w-full h-full flex">
            <div className="w-1/2 py-8 flex items-center justify-center gap-2 relative bg-white">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h1 className="text-kc-orange-dark text-5xl flex items-center">
                        Kruger Corporation
                    </h1>
                    <em className="w-1/2 text-kc-orange-light text-lg font-semibold text-center">
                        Transformamos empresas impulsamos vidas
                    </em>
                </div>
                <img
                    className="absolute bottom-0"
                    alt="border-img"
                    src="https://krugercorp.com/wp-content/uploads/2022/02/borde-color3-03.png"
                />
            </div>
            <div className="w-1/2 flex items-center justify-center bg-gray-50">
                <div className="w-4/5 flex items-center flex-col justify-center">
                    {isRoleSelected ? (
                        <div className="w-full bg-white border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-2">
                            <button
                                type="button"
                                className="self-start flex items-center mb-2 text-gray-800"
                                onClick={() => setRoleType("")}
                            >
                                <BackArrowIcon className="h-5" />{" "}
                                <span className="leading-5">Regresar</span>
                            </button>
                            <LoginForm />
                        </div>
                    ) : (
                        <div className="w-full bg-white border border-gray-200 shadow-md rounded-lg p-8 flex flex-col gap-8">
                            <div className="flex-1 text-gray-700 text-lg">
                                <h2 className="font-semibold text-3xl">
                                    ¡Bienvenido!
                                </h2>
                                <h3 className="font-normal mb-4">
                                    Por favor seleciona tu rol para ingresar al
                                    sistema.
                                </h3>
                                <span>Selecciona tu tipo de usuario:</span>
                                <div className="mt-4 flex items-center justify-center gap-4">
                                    {["Administrador", "Empleado"].map(
                                        (typeEmp, index) => (
                                            <button
                                                key={`${typeEmp}-${index}`}
                                                type="button"
                                                onClick={() =>
                                                    setRoleType(
                                                        typeEmp.toLowerCase()
                                                    )
                                                }
                                                className={`w-60 py-4 text-kc-orange-light hover:shadow rounded border border-gray-200 bg-white text-center text-base font-medium`}
                                            >
                                                {typeEmp}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="text-gray-500 w-4/5 text-center mx-auto">
                                <small>
                                    Al acceder ha esta página estas aceptando
                                    nuestras{" "}
                                    <span className="font-bold text-gray-600">
                                        {" "}
                                        Términos y condiciones
                                    </span>{" "}
                                    y nuestra{" "}
                                    <span className="font-bold text-gray-600">
                                        Politica de privacidad.
                                    </span>
                                </small>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
