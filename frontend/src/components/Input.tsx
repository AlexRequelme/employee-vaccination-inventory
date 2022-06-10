type InputProps = {
    registerObject: any;
    error: boolean;
    errorMsg: string;
    placeholder: string;
    type?: string;
};
function Input({
    registerObject,
    error,
    errorMsg,
    placeholder,
    type,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            <input
                {...registerObject}
                placeholder={placeholder}
                type={type}
                className="bg-gray-50 border border-gray-200 rounded-md px-4 py-2"
            />
            {error && (
                <span className="text-red-400 text-sm font-medium">
                    {errorMsg}*
                </span>
            )}
        </div>
    );
}

export default Input;
