import React from 'react';

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