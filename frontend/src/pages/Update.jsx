import Navbar from "./components/Navbar.jsx";
import Input from "./components/Input.jsx";
import {useEffect, useState} from "react";
import Api from "../interceptor/RequestInterceptor.js";

const Update =()=>{

    function update(){
        console.log("Updating...");
        Api.put('/api/v1/user/update',user).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        password: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    useEffect(() => {
        Api.get("api/v1/user/me").then((res)=>{
            setUser(res.data.user);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    return(
        <>
            <Navbar/>
            <div className=" flex justify-center p-5">
                <div className=" w-1/2">
                    <h1 className="font-bold text-2xl">Update Details</h1>
                    <br/>
                    <Input name={"firstName"} value={user.firstName} label={"First Name"} onChange={handleChange}/>
                    <Input name={"lastName"} value={user.lastName} label={"Last Name"} onChange={handleChange}/>
                    <Input name={"password"} value={user.password} label={"Password"} onChange={handleChange}/>
                    <button className="w-full py-1 border rounded font-semibold border-black bg-black text-white hover:bg-white hover:text-black" type="submit" onClick={update}>Update</button>
                </div>
            </div>
        </>
    );
}
export default Update;