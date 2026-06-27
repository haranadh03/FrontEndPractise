import { useState } from "react"

function Usestate(){
    const [count, setCount]=useState(0)
    const [isemployed, setIsEmployed]= useState(false);
    const handle1=() => {
        console.log(count)
        setCount(count+1);
    }
    const handle2=() => {
        if(count > 0)
        setCount(count-1);
    }
    const toggle= () => {
        setIsEmployed(!isemployed);
    }
    return(
        <>  
            <h1>{count}</h1>
            <button onClick={handle1}>Click me to add</button>
            <button onClick={handle2}>Click me to delete</button><br />
            <p> is Employed: {isemployed ? "yes":"no"}</p>
            <button onClick={toggle}>Click me </button>
        </>
    );
}
export default Usestate