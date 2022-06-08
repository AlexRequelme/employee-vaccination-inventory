import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    children: JSX.Element;
    isAuthenticated: boolean;
};

function PrivateRoute(props: PrivateRouteProps) {
    if (props.isAuthenticated) {
        return props.children;
    }

    return <Navigate to="/" />;
}

export default PrivateRoute;
