import axios from 'axios';
import { addData, setLoading } from '../reducers/comics/comicSlice';
import { ComicResponse } from '../types';

const url_base = process.env.REACT_APP_API_URL;
const ts = process.env.REACT_APP_TS_KEY;
const api_key = process.env.REACT_APP_PUBLIC_KEY;
const hash_key = process.env.REACT_APP_HASH_KEY;

export const getData = (heroe?: string) => async (dispatch: Function) => {
    const offSet = Math.round(Math.random() * (20 - 0) + 0);
    const url = `${url_base}comics?ts=${ts}&apikey=${api_key}&hash=${hash_key}&offset=${offSet}${heroe ? `&titleStartsWith=${heroe}` : ''}`;
    try {
        dispatch(setLoading(true));
        const response = await axios.get(url);
        const data = response.data.data.results;
        const commics = data.map( (item: ComicResponse) => ({
            id: item.id,
            title: item.title,
            creators: item?.creators?.items,
            price: item?.prices[0]?.price,
            thumbnail: {
                path: item?.thumbnail?.path,
                extension: item?.thumbnail?.extension
            }
        }));
        dispatch(addData(commics));
        dispatch(setLoading(false));
    } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
    }
}