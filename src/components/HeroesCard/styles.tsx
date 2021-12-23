import styled from 'styled-components';
import { DARKBLUE_COLOR, YELLOW_COLOR, RED_COLOR } from '../../consts';
import { fadeIn } from '../../styles/animations';

export const Card = styled.section`
    border-radius: 1.5rem;
    box-sizing: border-box;
    height: auto;
    margin: 3% 0;
    position: relative;
    width: 100%;
    ${fadeIn({})}

    .card__img-container {
        background-color: #784747;
        border-radius:  1.5rem 1.5rem 0 0;
        display: flex;
        justify-content: center;
        padding: 2rem;
        box-sizing: border-box;
    }

    .card__text-container {
        background-color: ${YELLOW_COLOR};
        border-radius: 0 0 1.5rem 1.5rem;
        color: ${DARKBLUE_COLOR};
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
        font-size: 1.6rem;
        opacity: .8;
    }

    .card__comic-price {
        align-self: end;
        background-color: ${RED_COLOR};
        border-radius: 1.5rem;
        color: #ffffff;
        font-size: 1.4rem;
        font-weight: bolder;
        padding: .7rem 1.5rem;
        position: absolute;
        top: .5rem;
    }

     @media screen and (min-width: 575px) {
        width: 46%;
        margin: 4% 2% 0 2%;
    }
    @media screen and (min-width: 991px) {
        width: 29%;    
    }
    @media screen and (min-width: 1200px) {
        width: 21%;    
    }
`