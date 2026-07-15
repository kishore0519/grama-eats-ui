import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {

    const error = useRouteError();

    return (
        <div className="error-container">
            <h1>Oops!!</h1>
            <h2>{error?.data}</h2>
            <h2>{error?.status}: {error?.statusText}</h2>
        </div>
    );
}

export default ErrorComponent;
