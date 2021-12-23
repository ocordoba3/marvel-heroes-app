import React from 'react'
import { useDispatch } from 'react-redux'
import { heroes } from '../../consts'
import { getDataByHeroe } from '../../helpers/get-data'
import { ButtonsContainer, HeroeButton } from './styles'

export const HeroesButtons = () => {
    const dispatch = useDispatch();

    const handleHeroeSearch = (heroe: string) => {
        dispatch(getDataByHeroe(heroe));
    }
    
    return (
        <ButtonsContainer>
           {
               heroes.map((heroe) => (
                   <HeroeButton 
                        primary={heroe.primary} 
                        secondary={heroe.secondary} 
                        key={heroe.id} 
                        onClick={() => handleHeroeSearch(heroe.name)}
                    >
                        {heroe.name}
                    </HeroeButton>
               ))
           } 
        </ButtonsContainer>
    )
}
