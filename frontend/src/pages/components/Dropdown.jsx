import {Link, useNavigate} from "react-router-dom";

const Dropdown = () => {

    const signOut = () => {
        localStorage.removeItem("token");
        navigate("/signIn");
    }

    const navigate = useNavigate();

    const update=()=>{
        navigate("/update");
    }

    return (
        <>
            <div className="flex flex-col dropdown">
                <ul className="grid gap-2">
                    <li><Link to={"/update"}/>
                        <button type="button"
                                className="w-full font-semibold"
                                onClick={update}
                        >
                            Update Profile
                        </button>
                    </li>
                    <li>
                        <button type="button"
                                className="w-full font-semibold text-white bg-black border border-black rounded hover:bg-white hover:text-black"
                                onClick={signOut}
                        >
                        Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Dropdown