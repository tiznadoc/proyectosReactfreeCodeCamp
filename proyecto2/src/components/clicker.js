import React from 'react';
import '../stylesheets/clicker.css'

function clicker({ text, clickButton, manageClick }) {
    return  (
        <button
            className={ clickButton ? 'click-button' : 'reboot-button' }
            onClick={manageClick}>
            {text}
        </button>
    )
}

export default clicker;