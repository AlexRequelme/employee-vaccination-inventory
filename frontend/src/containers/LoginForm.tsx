import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });
    const { signIn } = useAuth();

    const onSubmit = (payload: any) => {
        signIn(payload);
    };

    return (
        <form
            autoComplete="off"
            className="flex flex-col gap-5 text-gray-700"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h3 className="font-normal">Por favor ingrese las credenciales.</h3>
            <div className="flex flex-col gap-2">
                <input
                    {...register("username", {
                        required: true,
                        pattern: /^[a-zA-Z\s]*$/,
                    })}
                    placeholder="Usuario"
                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                />
                {errors.username && (
                    <span className="text-red-400 text-sm font-medium">
                        El campo es requerido y solo acepta letras*
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <input
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                    type="password"
                />
                {errors.password && (
                    <span className="text-red-400 text-sm font-medium">
                        El campo es requerido*
                    </span>
                )}
            </div>
            <button
                type="submit"
                className="bg-kc-orange-light hover:bg-kc-orange-dark text-white rounded-md px-4 py-2 font-medium"
            >
                Ingresar
            </button>
        </form>
    );
}

export default LoginForm;
