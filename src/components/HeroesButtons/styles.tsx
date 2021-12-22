import styled from "styled-components";
import { BLUE_COLOR, LIGHT_GREEN_COLOR, RUSSIAN_GREEN_COLOR } from "../../consts";

export const ButtonsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    width: 100%;

    @media screen and (min-width: 575px) {
        padding: 1.6rem;  
    }

    button {
        background-color: ${BLUE_COLOR};
        box-sizing: border-box;
        border: none;
        border-radius: 0;
        color: ${LIGHT_GREEN_COLOR};
        cursor: pointer;
        font-size: 1.8rem;
        margin: 1rem;
        padding: .7rem 2rem;

        @media screen and (min-width: 575px) {
            margin: 0 auto; 
            padding: 1.5rem 4rem;   
        }
        /* @media screen and (min-width: 767px) {
            margin: 3rem 14rem;    
        } */

        :hover {
            background-color: ${RUSSIAN_GREEN_COLOR};
        }
    }
`