import React from "react";
import '../style-sheets/Button.css'

const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };
  
  function Button(props) {
    return (
      <button
        className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
        onClick={() => props.clickManager(props.children)}>
        {props.children}
      </button>
    );
  }
  
export default Button;

export { isOperator };