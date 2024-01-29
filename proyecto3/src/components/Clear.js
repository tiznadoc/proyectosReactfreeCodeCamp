import React from "react";
import "../style-sheets/Clear.css";

const Clear = (props) => (
    <div className='clear-button' onClick={props.clearManager}>
        Clear
    </div>
);

export default Clear;