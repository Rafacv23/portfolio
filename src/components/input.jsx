import React from 'react';

const Input = (props) => {
    return (
        <input required={props.required} className={props.className} placeholder={props.placeholder} type={props.type} onChange={props.onChange} value={props.value}>
            
        </input>
    );
}

export default Input;
