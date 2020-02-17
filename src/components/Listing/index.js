// @flow
import React from 'react';
import Item from './Item';
import type {ListItem} from '../../types';

type Props = {
    list: Array<ListItem>
}

const Listing = (props: Props) => {

    // todo: add Create, Update, Remove functionality

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