//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondscounter.jsx";
    

function counterFormat(number) {
    const counterString = number.toString().padStart(6, "0"); // Convierte el número a una cadena de longitud 6 con ceros a la izquierda
    return counterString  
}

setInterval(everySecond, 1000);
let counter = 0;
    
function everySecond() {
    counter++;
    if(counter == "999999" ) contador = 0 //Resetea el contador al llegar al máximo
    ReactDOM.render(
        <SecondsCounter seconds={counterFormat(counter)} />,
        document.querySelector("#app")
    );
}


//render your react application
// setInterval(everySecond, 1000);
// let unitsCounter = 0
// let dozensCounter = 0
// function everySecond() {
//     unitsCounter === 9 ? unitsCounter = 0 : unitsCounter ++
//     if(unitsCounter === 0) dozensCounter ++
//     ReactDOM.render(<SecondsCounter 
//         units = {unitsCounter} 
//         dozens = {dozensCounter}
//         />, document.querySelector("#app"));
// }