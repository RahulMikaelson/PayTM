import Input from "./components/Input.jsx";
import {Link} from "react-router-dom";

const submitForm = (e) => {
    e.preventDefault();
}



const SignUp = () => {
    return (
        < >
            <div className="h-screen flex items-center justify-center">
                <div className="border border-black-200 rounded w-1/5 p-4 ">
                    <form onSubmit={(e)=>{submitForm(e)}}>
                        <h1 className="font-bold text-center text-3xl ">Sign Up</h1>
                        <p className="font-normal text-center text-gray-600 ">Enter your information to create an account</p>
                        <br/>
                        <Input label="First Name" type="text"/><br/>
                        <Input label="Last Name" type="text"/><br/>
                        <Input label="Email" type="email"/><br/>
                        <Input label="Password" type="password"/><br/>
                        <button type="button"
                                className="focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-black w-full">Sign
                            Up
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