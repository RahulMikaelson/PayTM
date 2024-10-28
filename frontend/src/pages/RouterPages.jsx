import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import ErrorPage from "./ErrorPage.jsx";
import SignIn from "./SignIn.jsx";
import SignUp from "./SignUp.jsx";
import Send from "./Send.jsx";

export const RouterPages = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        errorElement: <ErrorPage/>
    }, {
        path: "/signUp",
        element: <SignUp/>
    }, {
        path: "/signIn",
        element: <SignIn/>
    },{
        path: "/send",
        element: <Send/>
    }
]);
