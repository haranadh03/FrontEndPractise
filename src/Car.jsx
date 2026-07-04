import { useState } from "react";
function Cars(){
    const [car, setCar]=useState({year: 2024,
                                    make: "ford", 
                                    model:"mustang"});
    function onclick(event){
          setCar(c => ({...c, year:event.target.value}))      
    }
    function onhandlemake(event){
        setCar(c => ({...c , make: event.target.value}))
    }
    function onhandlemodel(event){
        setCar(c => ({...c , model: event.target.value}))
    }
    return(<>
            <input type="number" value={car.year} onChange={onclick}/><br />
            <input type="text" value={car.make} onChange={onhandlemake}/><br />
            <input type="text" value={car.model} onChange={onhandlemodel}/><br />
            <p>your favourate car is {car.make} {car.model} {car.year}</p>
    </>)    

}
export default Cars

