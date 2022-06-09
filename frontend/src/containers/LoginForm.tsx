function LoginForm() {
    return (
        <form className="flex flex-col gap-5 text-gray-700">
            <h3 className="font-normal">
                Por favor ingrese las credenciales.
            </h3>
            <input
                placeholder="Usuario"
                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
            />
            <input
                placeholder="Contraseña"
                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
                type="password"
            />
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
