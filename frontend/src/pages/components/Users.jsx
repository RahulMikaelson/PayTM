import { useNavigate} from "react-router-dom";

const Users = (props) => {

    const navigate = useNavigate();
    const sendMoney=()=>{
        navigate("/send");
    }
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center space-x-4">
                    <div
                        className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                    <span
                        id="user-initial">{props.user.firstName.charAt(0).toUpperCase() + props.user.lastName.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="font-bold text-gray-800 text-2xl"
                          id="username">{props.user.firstName + " " + props.user.lastName}</span>
                </div>
                <button type="button"
                        className="dark:hover:text-black bg-black  border border-black focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-black dark:text-white dark:border-black dark:hover:bg-white dark:hover:border-black dark:focus:ring-white"
                        onClick={sendMoney}
                >
                    Send
                </button>
            </div>

        </>
    )
}
export default Users;