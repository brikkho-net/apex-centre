import React from 'react';
import './Button.scss'

const Button = (props) => (
        <button className='main-button'>
            {props.children}
        </button>

)

export default Button;