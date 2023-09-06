import React from 'react';

const SubTitle = (props) => {
    return (
        <h5 className={props.className}>
            {props.text}{props.children}
        </h5>
    );
}

export default SubTitle;
