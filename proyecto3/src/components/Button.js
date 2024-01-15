import React from "react";
import '../style-sheets/Button.css'

// This function takes in a prop called 'children' and returns a div element with a className based on the value of the 'children' prop.
function Button(props) {

    // This function checks if the value of the 'children' prop is not a number, and if it is not equal to '.' or '='
    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    // Return a div element with a className based on the value of the 'children' prop
    return (
        <div 
        className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        >
        {props.children}
        </div>
    )
}

// Export the Button function so it can be used in other components
export default Button;