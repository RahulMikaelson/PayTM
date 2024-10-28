import Input from "./components/Input.jsx";
import {Link} from "react-router-dom";

const submitForm=(e)=>{
    e.preventDefault();
}

const SignIn = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="border border-black-200 rounded-md w-1/5 p-4 ">
                    <form onSubmit={(e) => submitForm(e)} autoComplete="on">
                        <h1 className="font-bold text-center text-3xl">Sign In</h1>
                        <p className="font-normal text-center text-gray-600 ">Enter your credentials to access your account</p>
                        <br/>
                        <Input label="Email" type="email"/><br/>
                        <Input label="Password" type="password"/><br/>
                        <button type="button"
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