import styled from 'styled-components';
import { BLACK_COLOR, BLUE_COLOR, WHITE_COLOR } from '../../consts';

export const Card = styled.section`
    border: .1rem solid ${WHITE_COLOR};
    box-sizing: border-box;
    height: auto;
    margin: 3%;
    width: 100%;

    .card__img-container {
        background-color: ${BLUE_COLOR};
        display: flex;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
    }

    .card__text-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    .card__comic-name {
        min-width: 100%;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .card__comic-creator {
        font-size: 1.2rem;
        opacity: .5;
    }

    .card__comic-price {
        align-self: end;
        background-color: ${WHITE_COLOR};
        color: ${BLACK_COLOR};
        font-size: 1.2rem;
        padding: .7rem 1.5rem;
    }

     @media screen and (min-width: 575px) {
        width: 46%;
        margin: 2%; 
    }
    @media screen and (min-width: 991px) {
        width: 29%;    
    }
    @media screen and (min-width: 1200px) {
        width: 21%;    
    }
`