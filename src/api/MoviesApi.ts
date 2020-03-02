import axios from 'axios';
import {MOVIES_API_URL} from '../constants';
import {ListItem} from "../types";

export const MoviesApi = {
    getBySection: async (section): Promise<Array<ListItem>> => {
        const response = await axios.get(`${MOVIES_API_URL}?section=${section}`);
        return response.data.data.contents.data;
    },
};