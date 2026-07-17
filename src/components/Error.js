import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {

    const error = useRouteError();

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 text-center">
            <h1 className="mb-4 text-5xl font-extrabold text-red-600">
                Oops!!
            </h1>

            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
                {error?.data}
            </h2>

            <h2 className="text-xl font-medium text-gray-600">
                {error?.status}: {error?.statusText}
            </h2>
        </div>
    );
}

export default ErrorComponent;
