import React from 'react';
import './style.scss';

export const TextBox = (props) => {
    const {label} = props;
    return (
        <div className="input-box"> 
            <label>{label}</label>
            <input type="text" {...props} />
        </div>
    );
};

 export const TextArea= (props) => {
    const {label} = props;
    return (
        <div className="input-area"> 
            <label>{label}</label>
            <textarea name="textarea" rows="2" {...props} />
        </div>
    );
};