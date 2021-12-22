import React from 'react'
import { useDispatch } from 'react-redux'
import { heroes } from '../../consts'
import { getDataByHeroe } from '../../helpers/get-data'
import { ButtonsContainer } from './styles'

export const HeroesButtons = () => {
    const dispatch = useDispatch();

    const handleHeroeSearch = (heroe: string) => {
        dispatch(getDataByHeroe(heroe));
    }
    
    return (
        <ButtonsContainer>
           {
               heroes.map((heroe) => (
                   <button key={heroe.id} onClick={() => handleHeroeSearch(heroe.name)}>{heroe.name}</button>
               ))
           } 
        </ButtonsContainer>
    )
}
