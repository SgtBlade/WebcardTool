import React from 'react';
import style from './button.module.css'

const Button = ({ action, text, styleoverride }) => {
    return (
        <p style={styleoverride} className={style.button} onClick={action}>{text}</p>
    );
};

export default Button;