import React from "react";

function Button(props) {

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div 
        className={`button-container ${isOperator(props.children) ? 'operator' : null}`}
        >
        {props.children}
        </div>
    )
}

export default Button;