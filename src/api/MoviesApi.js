import axios from 'axios';
import {MOVIES_API_URL} from '../constants';

export const MoviesApi = {
    getBySection: (section) => axios.get(`${MOVIES_API_URL}?section=${section}`),
};