import React from 'react';

const Modal = (props) => {
    if(!props.show) {
        return null;
    }
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Modal;