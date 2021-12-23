import styled from 'styled-components';
import { YELLOW_COLOR } from '../../consts';

export const Input = styled.input`
    background: url('./assets/search.png') no-repeat scroll 1rem 1.3rem;
    background-size: 2rem;
    border: .1rem solid ${YELLOW_COLOR};
    border-radius: 2rem;
    color: ${YELLOW_COLOR};
    font-size: 1.5rem;
    margin: 0 auto;
    padding: 1.6rem 1.6rem 1.6rem 4rem;
    width: 100%;

    @media screen and (min-width: 575px) {
        width: 80%;
    }
`