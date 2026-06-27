function Button(){
    var count= 0;
    const handleClick =(event) =>{
        event.target.textContent="ouch!";
    }
    return (
        <button onDoubleClick={(event) => handleClick(event)}>Click me</button>
    );
}
export default Button