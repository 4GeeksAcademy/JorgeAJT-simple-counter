import React from "react";

const Digit = (props) => {
    return (
    <div className="card p-4 mx-2 bg-dark text-white"> 
        <h1>{props.number}</h1>
    </div>

    )
}

export default Digit;