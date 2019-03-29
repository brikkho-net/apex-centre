import React from 'react';
import './Button.scss'

const Button = (props) => (
        <button onClick={props.onClick ? props.onClick : null} className={`main-button ${props.classes}`}>
            {props.children}
        </button>

)

export default Button;