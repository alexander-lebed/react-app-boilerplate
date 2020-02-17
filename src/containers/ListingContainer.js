// @flow
import React, { useState, useEffect } from 'react';
import { MoviesApi } from '../api'
import Listing from '../components/Listing';
import type {ListItem} from '../types';

const ListingContainer = () => {
    const [list, setList] = useState<Array<ListItem>>([]);

    // todo: make custom hook with Context
    useEffect(() => {
        async function getList() {
            const response = await MoviesApi.getBySection('estrenos-imprescindibles-en-taquilla');
            setList(response.data.data.contents.data)
        }
        getList();
    }, []);

    return (
        <Listing list={list} />
    );
};

export default ListingContainer;