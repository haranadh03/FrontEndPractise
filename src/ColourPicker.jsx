import { useState } from "react";

function ColourPicker(){
        const [colour,setColour]=useState('#af7171');

        function onClick(event){
            setColour(event.target.value);
        }
    return(
        <>
            <div className="color-picker-container">
                <h1>Colour Picker</h1>
                <div className="color-display" style={{backgroundColor:colour}}>
                    <p>selected Color:{colour}</p>
                </div>
                <label>select a color</label>
                <input type="color" value={colour} onChange={onClick} className="colorI"/>
            </div>
        </>
    );
}
export default ColourPicker