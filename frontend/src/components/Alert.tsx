import { Renderable } from "react-hot-toast";
import { ReactComponent as SuccessIcon } from "../assets/icons/alert-success.svg";
import { ReactComponent as ErrorIcon } from "../assets/icons/alert-error.svg";

type AlertProps = {
    message: Renderable;
    type: string;
    isVisible: boolean;
};

function Alert(props: AlertProps) {
    return (
        <div
            className={`flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ${
                props.isVisible ? "animate-enter" : "animate-leave"
            }`}
        >
            <div
                className={`flex items-center justify-center w-12 ${
                    props.type === "success" ? "bg-emerald-500" : "bg-red-500"
                }`}
            >
                {props.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span
                        className={`font-semibold capitalize ${
                            props.type === "success"
                                ? "text-emerald-500"
                                : "text-red-500"
                        }`}
                    >
                        {props.type}
                    </span>
                    <p className="text-sm text-gray-600">{props.message}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;
