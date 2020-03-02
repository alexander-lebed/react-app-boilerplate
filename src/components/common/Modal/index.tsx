import React from 'react';

export interface Props {
    className?: string,
    isOpen: boolean,
    onClose: (event?: React.MouseEvent) => void,
    children: React.ReactNode
}

const Modal = (props: Props) => {
    if (!props.isOpen) {
        return null;
    }
    return (
        <div className="Modal-outer">
            <div className="Modal-overlay" onClick={props.onClose} />
            <div className={`Modal ${props.className || ''}`}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;