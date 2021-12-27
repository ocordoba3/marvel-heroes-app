import React, { KeyboardEvent } from 'react';
import { Input } from './styles';
import { useNavigate } from "react-router-dom";

export const Search = () => {

    const navigate = useNavigate();
    const handleSearch = ({ key }: KeyboardEvent, word: string) => {
        if (word.length > 2 && key === 'Enter') {
            navigate(`?name=${word}`);
        }
    }
    return (
        <Input 
            type='text' 
            placeholder='Write something and press Enter' 
            onKeyPress={(e: any) => handleSearch(e, e.target.value)} 
        />
    )
}
