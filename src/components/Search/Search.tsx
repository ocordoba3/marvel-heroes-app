import React from 'react';
import { useDispatch } from 'react-redux';
import { getDataByHeroe } from '../../helpers/get-data';
import { Input } from './styles';

export const Search = () => {

    const dispatch = useDispatch();

    const handleSearch = (event: any, word: string) => {
        if(word.length > 2 && event.key === 'Enter') {
            dispatch(getDataByHeroe(word));
        }
    }
    return (
        <Input type='text' placeholder='Write something and press Enter' onKeyPress={(e: any) => handleSearch(e, e.target.value)} />
    )
}
