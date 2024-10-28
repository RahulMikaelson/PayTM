const Send = () => {
    return (
        <>
            <div className="h-screen flex items-center justify-center ">
                <div className="rounded-md w-1/4 p-4  shadow shadow-gray-500">
                    <h1 className="font-bold text-center text-3xl">Send Money</h1>
                    <br/>
                    <div className="flex items-center space-x-4">
                        <div
                            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                            <span id="user-initial">J</span>
                        </div>
                        <span className="font-bold text-gray-800 text-2xl" id="username">John</span>
                    </div>

                    <label className="font-semibold text-xs">Amount (in Rs)</label>
                    <br/>
                    <input className="border-2 border-gray-300 rounded mt-1 mb-3  pr-2 pl-2 pt-1 pb-1 w-full"
                           type="number"/>
                    <button type="button"
                            className="focus:outline-none text-white border font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-green-500 w-full hover:bg-white hover:border-green-500 hover:text-green-500">Send
                    </button>
                </div>
            </div>
        </>
    );
}
export default Send;