import Users from "./components/Users.jsx";
import {useEffect, useState} from "react";
import Api from "../interceptor/RequestInterceptor.js";
import {useNavigate} from "react-router-dom";
import Dropdown from "./components/Dropdown.jsx";
import Navbar from "./components/Navbar.jsx";

const Dashboard = () => {


    const [users, setUsers] = useState([]);
    const [balance, setBalance] = useState(0);
    const [search, setSearch] =useState("");
    const navigate = useNavigate();

    const handleChange=(e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    useEffect(() => {
        Api.get("/api/v1/user/bulk").then((res) => {
            if (res.status === 200) {
                setUsers(res.data.users);
            }
        }).catch((err) => {
            if (err.response && err.response.status === 401) {
                navigate("/signIn");
            } else {
                console.log(err);
            }
        })
    }, []);

    useEffect(()=>{
        Api.get("/api/v1/account/balance").then((res) => {
            setBalance(res.data.account.balance);
        }).catch((err) => {
            console.log(err);
        })
    },[]);

    return (
        <>
            <Navbar/>
            <div className=" flex justify-center p-5">
                <div className=" w-1/2">
                    <h1 className="font-bold text-2xl">Your Balance: {balance}</h1>
                    <br/>

                    <h1 className="font-bold text-3xl">Users</h1>
                    <br/>
                    <input
                        className="border-2 border-gray-300 rounded mt-1 mb-3  pr-2 pl-2 pt-1 pb-1 w-full font-semibold text-gray-600"
                        name={"search"}
                        placeholder={"Search Users..."}
                        value={search}
                        onChange={handleChange}
                    />

                    <div className="space-y-4">
                        {users.map((user) => (
                            <Users key={user._id} user={user}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;