import styled from 'styled-components';
import { BLACK_COLOR, LIGHT_GREEN_COLOR, WHITE_COLOR } from '../../consts';

export const Input = styled.input`
    background: url('./assets/search.png') no-repeat scroll 1rem 1.3rem;
    background-size: 2rem;
    background-color: ${BLACK_COLOR};
    border: .1rem solid ${WHITE_COLOR};
    border-radius: 0;
    color: ${LIGHT_GREEN_COLOR};
    font-size: 1.5rem;
    margin: 0 auto;
    padding: 1.6rem 1.6rem 1.6rem 4rem;
    width: 100%;

    @media screen and (min-width: 575px) {
        width: 80%;
    }
`