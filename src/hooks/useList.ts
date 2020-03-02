import { useState, useEffect } from 'react';
import { MoviesApi } from '../api';
import { ListItem } from '../types';

const useList = (): Array<ListItem> => {
    const [list, setList] = useState<Array<ListItem>>([]);

    useEffect(() => {
        (async () => {
            const data = await MoviesApi.getBySection('estrenos-imprescindibles-en-taquilla');
            setList(data);
        })();
    }, []);

    return list;
};

export default useList;