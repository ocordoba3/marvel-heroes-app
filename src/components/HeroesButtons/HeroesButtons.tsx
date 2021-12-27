import React from 'react'
import { useNavigate } from 'react-router-dom'
import { heroes } from '../../consts'
import { ButtonsContainer, HeroeButton } from './styles'

export const HeroesButtons = () => {
    const navigate = useNavigate();

    const handleHeroeSearch = (heroe: string) => {
        navigate(`?name=${heroe}`);
    }

    return (
        <ButtonsContainer>
            {
                heroes.map((heroe) => (
                    <HeroeButton
                        primary={heroe.primary}
                        secondary={heroe.secondary}
                        key={heroe.id}
                        onClick={() => handleHeroeSearch(heroe.id)}
                    >
                        {heroe.name}
                    </HeroeButton>
                ))
            }
        </ButtonsContainer>
    )
}
