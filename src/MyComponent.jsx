import { useState } from "react"

function MyComponent(){
    const [com, setCom]=useState("");
    const [number,setNumber]=useState(0);
    function handlename(event) {
        setCom(event.target.value);
    }
    function handlenumber(event){
        setNumber(event.target.value);
    }
    return(
        <>
        <input value={com} onChange={handlename} type="text" placeholder="EnterName"/>
        <p>Name: {com}</p>
        <input value={number} onChange={handlenumber} type="number"/>
        <p>number: {number}</p>
    </>
    );
}
export default MyComponent