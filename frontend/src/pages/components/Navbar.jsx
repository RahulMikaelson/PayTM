import Dropdown from "./Dropdown.jsx";
import {useEffect, useState} from "react";
import Api from "../../interceptor/RequestInterceptor.js";

const Navbar = () => {
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        userName:"",
    });

    useEffect(()=>{
        Api.get("/api/v1/user/me").then((res) => {
            setUser(res.data.user)
        }).catch((err) => {
            console.log(err);
        })
    },[])
    const [dropdown, setDropdown] =useState(false);
    return (
        <>
            <div className="flex justify-center p-5">
                <div className=" w-1/2 flex justify-between">
                    <h1 className="font-bold text-4xl">Payments App</h1>
                    <div className="flex items-center space-x-4">
                        <span className="font-bold text-gray-800 text-2xl" id="username">Hello,{user.firstName}</span>
                        <div
                            onClick={() => setDropdown(!dropdown)}
                            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                            <span id="user-initial">{user.firstName.charAt(0).toUpperCase()}</span>
                        </div>
                    </div>
                    {dropdown && <Dropdown/>}
                </div>
            </div>
            <hr className="border-gray-300 my-4"/>
        </>
    )
}
export default Navbar