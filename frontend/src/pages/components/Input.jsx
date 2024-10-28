const Input = (props)=>{
    return (
        <>
            <label className="font-bold">{props.label}</label>
            <br/>
            <input className="border-2 border-gray-300 rounded mt-1 mb-3  pr-2 pl-2 pt-1 pb-1 w-full" type={props.type}/>
        </>
    );
}
export default Input;