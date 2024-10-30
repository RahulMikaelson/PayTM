import Input from "./components/Input.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const SignIn = () => {



    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });

    const handleChange=(e)=>{
        const{name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/v1/auth/signIn", user).then((res)=>{
            if(res.status === 200){
                localStorage.setItem("token", res.data.token);
                setUser({userName: "", password: "", });
                navigate('/');
            }

        }).catch((err)=>{console.log(err)});
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="border border-black-200 rounded-md w-1/5 p-4 ">
                    <form onSubmit={(e) => handleSubmit(e)} autoComplete="on">
                        <h1 className="font-bold text-center text-3xl">Sign In</h1>
                        <p className="font-normal text-center text-gray-600 ">Enter your credentials to access your account</p>
                        <br/>
                        <Input label="Email" type="email" onChange={handleChange} value={user.userName} name={"userName"} autoComplete={"on"}/><br/>
                        <Input label="Password" type="password" onChange={handleChange} value={user.password} name={"password"} autoComplete={"on"}/><br/>
                        <button type="submit"
                                className="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black w-full">Sign
                            Up
                        </button>
                        <br/>
                        <p className="text-center">Don't have an account? <Link to="/signUp" className="underline"> Sing Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;