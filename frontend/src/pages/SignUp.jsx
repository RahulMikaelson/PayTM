import Input from "./components/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import Api from "../interceptor/RequestInterceptor.js";

const SignUp = () => {

    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        userName:"",
        password: "",
    });
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUserDetails({...userDetails,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Api.post("http://localhost:3000/api/v1/auth/signUp", userDetails).then((res)=>{
            localStorage.setItem("token", res.data.token);
            navigate("/");
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        < >
            <div className="h-screen flex items-center justify-center">
                <div className="border border-black-200 rounded-md w-1/5 p-4 ">
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <h1 className="font-bold text-center text-3xl ">Sign Up</h1>
                        <p className="font-normal text-center text-gray-600 ">Enter your information to create an account</p>
                        <br/>
                        <Input label="First Name" type="text" onChange={handleChange} value={userDetails.firstName} name={"firstName"} /><br/>
                        <Input label="Last Name" type="text" onChange={handleChange} value={userDetails.lastName} name={"lastName"}/><br/>
                        <Input label="Email" type="email" onChange={handleChange} value={userDetails.userName} name={"userName"}/><br/>
                        <Input label="Password" type="password" onChange={handleChange} value={userDetails.password} name={"password"}/><br/>
                        <button type="submit"
                                className="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black w-full">Sign Up
                        </button>
                        <br/>
                        <p className="text-center">Already have an account? <Link to="/signIn" className="underline">Log In</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;