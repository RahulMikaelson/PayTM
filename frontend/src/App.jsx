import './App.css'
import {RouterPages} from "./pages/RouterPages.jsx";
import {RouterProvider} from "react-router-dom";

const App=()=> {
    return (
        <>
            <RouterProvider router={RouterPages}/>
        </>
    )
}

export default App
