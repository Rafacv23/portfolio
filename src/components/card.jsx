import React from 'react';

const Card = (props) => {
    return (
        <div id={props.id} className={props.className}>
            {props.children}
        </div>
    );
}

export default Card;
