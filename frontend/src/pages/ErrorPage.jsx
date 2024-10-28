import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    // Function to go back to the previous page
    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page not found</h2>
            <p className="text-gray-600 mb-6">The page you are looking for doesn't exist or an error occurred.</p>
            <button
                onClick={handleGoBack}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Go Back
            </button>
        </div>
    );
}

export default ErrorPage;