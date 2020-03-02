import React from 'react';
import Item from './Item';
import {ListItem} from '../../types';

interface Props {
    list: Array<ListItem>
}

const Listing = (props: Props) => {
    return (
        <div>
            <h1>Listing</h1>
            {props.list.map(item => (
                <Item key={item.id} title={item.title} label={item.label} />
            ))}
        </div>
    );
};

export default Listing;