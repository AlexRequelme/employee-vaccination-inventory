import { Navigate } from "react-router-dom";
import Banner from "../components/Banner";
import LoginForm from "../containers/LoginForm";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/AuthLayout.module.scss";

function AuthLayout() {
    const { user } = useAuth();

    if (user) return <Navigate to="/home" />;

    return (
        <div className="w-full h-full flex flex-col lg:flex-row">
            <Banner
                title="Kruger Corporation"
                slogan="Transformamos empresas impulsamos vidas"
            />
            <div className="w-full flex-1 lg:w-1/2 flex items-center justify-center bg-gray-50">
                <div className="w-4/5 flex items-center flex-col justify-center">
                    <div className="w-full bg-white border border-gray-200 shadow-md rounded-lg p-4 lg:p-8 flex flex-col">
                        <div className="flex-1 text-gray-700 text-base lg:text-lg">
                            <h2 className="font-semibold text-2xl lg:text-3xl">
                                ¡Bienvenido!
                            </h2>
                            <LoginForm />
                        </div>
                        <hr className="mt-4 mb-2 lg:mt-8 lg:mb-4" />
                        <div className="text-gray-500 w-full lg:w-4/5 text-center mx-auto">
                            <small className={styles["legal-copy"]}>
                                Al acceder ha esta página estas aceptando
                                nuestros{" "}
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
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
