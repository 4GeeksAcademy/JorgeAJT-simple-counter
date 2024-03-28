import React from "react";
import Digit from "./digit";

const SecondsCounter = (props) => {
    let digit = props.seconds
    return (
    <div className="d-flex justify-content-center mt-5 p-4"> 
        <Digit number = {<i className="fa-solid fa-stopwatch"></i>}/>
        <Digit number = {digit[0]}/>
        <Digit number = {digit[0]}/>
        <Digit number = {digit[1]}/>
        <Digit number = {digit[2]}/>
        <Digit number = {digit[3]}/>
        <Digit number = {digit[4]}/>
        <Digit number = {digit[5]}/>
    </div>
    )
}

export default SecondsCounter;