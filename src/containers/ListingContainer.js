// @flow
import React from 'react';
import Listing from '../components/Listing';
import useList from '../hooks/useList';

const ListingContainer = () => {
    const list = useList();
    return (
        <Listing list={list} />
    );
};

export default ListingContainer;