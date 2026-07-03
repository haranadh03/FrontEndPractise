import { useState } from "react"

function Updater(){
    const [count,setCount]=useState(0)
    function handleclick(){
        setCount(count => count+1);
        setCount(count => count+1);
        setCount(count => count+1);
    }
    function handleReset(){
        setCount(0);
    }
    function handleDecrement(){
        if(count>0)
        setCount(count-1);
    }
    return(
        <>
            <p>{count}</p>
            <div className="lalal">
            <button onClick={handleclick}>ClickMe</button>
            <button onClick={handleReset}>Click to set 0</button>
            <button onClick={handleDecrement}>Click for Decrement</button>
            </div>
        </>
    )
}
export default Updater