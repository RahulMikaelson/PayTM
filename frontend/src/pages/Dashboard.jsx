import Users from "./components/Users.jsx";

const Dashboard = () => {

    const api =[
        {userId:"fajdsfjla1",firstName:"John", lastName:"Doe", email:"john@example.com"},
        {userId:"fajdsfjla2",firstName:"John", lastName:"Doe", email:"john@example.com"},
        {userId:"fajdsfjla3",firstName:"John", lastName:"Doe", email:"john@example.com"},
        {userId:"fajdsfjla4",firstName:"John", lastName:"Doe", email:"john@example.com"},
    ]
    api.map((user) => {
        return <Users key={user.id} user={user} />
    })

    return (
        <>
            <div className="flex justify-center p-5">
                <div className=" w-1/2 flex justify-between">
                    <h1 className="font-bold text-4xl">Payments App</h1>
                    <div className="flex items-center space-x-4">
                        <span className="font-bold text-gray-800 text-2xl" id="username">Hello, John</span>
                        <div
                            className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
                            <span id="user-initial">J</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-300 my-4"/>
            <div className=" flex justify-center p-5">
                <div className=" w-1/2">
                    <h1 className="font-bold text-2xl">Your Balance 500000</h1>
                    <br/>

                    <h1 className="font-bold text-3xl">Users</h1>
                    <br/>
                    <input
                        className="border-2 border-gray-300 rounded mt-1 mb-3  pr-2 pl-2 pt-1 pb-1 w-full font-semibold text-gray-600"
                        placeholder="Search Users..."/>
                    <div className="space-y-4">
                        {api.map((user) => (
                            <Users key={user.userId} user={user}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;