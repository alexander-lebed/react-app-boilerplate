// @flow
import { useState, useEffect } from 'react';
import { MoviesApi } from '../api';
import type { ListItem } from '../types';

const useList = () => {
    const [list, setList] = useState<Array<ListItem>>([]);

    useEffect(() => {
        (async () => {
            const response = await MoviesApi.getBySection('estrenos-imprescindibles-en-taquilla');
            setList(response.data.data.contents.data)
        })();
    }, []);

    return list;
};

export default useList;