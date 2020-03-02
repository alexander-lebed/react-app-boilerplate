import React from 'react';

interface Props {
    title: string,
    label: string
}

const Item = ({title, label}: Props) => {
    return (
        <div className="Item">
            <div><i className='fas fa-film' /> {title}</div>
            <div>{label}</div>
        </div>
    );
};

export default Item;