import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../helpers/get-data';
import { RootState } from '../../store/store';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { Comic } from '../../types';
import { HeroesCard } from '../HeroesCard/HeroesCard';
import { Container } from './styles';

export const HeroesContent = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const { name } = queryString.parse(location.search);
    const { comics, isLoading } = useSelector((state: RootState) => state.comics);

    useEffect(() => {     
        dispatch(getData(name?.toString()));
    }, [dispatch, name]);

    if (isLoading) {
        return (
            <Container>
                <div className='heroes__empty-content'>
                    <p>Loading...</p>
                </div>
            </Container>
        )
    }
    
    return (
        <Container>
            <h1 className='heroes-content-title'>
                Marvel's comics { name ? `about ${name}` : ''}
            </h1>
            {
                comics.length > 0 &&
                comics.map((item: Comic) => (
                    <HeroesCard key={item.id} {...item} />
                ))
            }
            {
                comics.length === 0 &&
                <div className='heroes__empty-content'>
                    <p>Sorry, we can't find results for your search.</p>
                </div>
            }
        </Container>
    )

}
