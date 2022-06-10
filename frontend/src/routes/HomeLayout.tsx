import AdminView from "../containers/AdminView";
import EmployeeView from "../containers/EmployeeView";
import Header from "../containers/Header";
import { useAuth } from "../hooks/useAuth";

function HomeLayout() {
    const { user } = useAuth();

    return (
        <div className="w-full bg-gray-50 flex flex-col gap-8 text-gray-700">
            <Header />
            <div className="mx-4 lg:w-4/5 lg:mx-auto h-full pb-8 text-lg text-gray-700 flex flex-col gap-4">
                <h2 className="text-xl">
                    <span className="text-kc-orange-dark">¡Bienvenido</span>{" "}
                    <span className="text-gray-700">Alexander Requelme!</span>
                </h2>
                {user.isAdmin ? <AdminView /> : <EmployeeView />}
            </div>
        </div>
    );
}

export default HomeLayout;
