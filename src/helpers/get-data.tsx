import axios from 'axios';
import { addData } from '../reducers/comics/comicSlice';

const url_base = process.env.REACT_APP_API_URL;
const ts = process.env.REACT_APP_TS_KEY;
const api_key = process.env.REACT_APP_PUBLIC_KEY;
const hash_key = process.env.REACT_APP_HASH_KEY;

export const getData = () => async (dispatch: Function) => {
    const url = `${url_base}comics?ts=${ts}&apikey=${api_key}&hash=${hash_key}`;
    try {
        const response = await axios.get(url);
        const data = response.data.data.results;
        const commics = data.map( (item: any) => ({
            id: item.id,
            title: item.title,
            creators: item.creators.items,
            price: item.prices[0].price,
            thumbnail: {
                path: item.thumbnail.path,
                extension: item.thumbnail.extension
            }
        }));
        dispatch(addData(commics));
    } catch (error) {
        console.error(error);
    }
}

export const getDataByHeroe = (heroe: string) => async (dispatch: Function) => {
    const url = `${url_base}comics?ts=${ts}&apikey=${api_key}&hash=${hash_key}&titleStartsWith=${heroe}`;
    try {
        const response = await axios.get(url);
        const data = response.data.data.results;
        const commics = data.map( (item: any) => ({
            id: item.id,
            title: item.title,
            creators: item.creators.items,
            price: item.prices[0].price,
            thumbnail: {
                path: item.thumbnail.path,
                extension: item.thumbnail.extension
            }
        }));
        dispatch(addData(commics));
    } catch (error) {
        console.error(error);
    }
}