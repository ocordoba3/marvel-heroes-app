import styled from 'styled-components';
interface Colors {
    primary: string,
    secondary: string
}

export const ButtonsContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    width: 100%;

    @media screen and (min-width: 575px) {
        padding: 4% 2% 0 2%;  
    }

`

export const HeroeButton = styled.button<Colors>`

        background-color: ${(props) => props.primary};
        box-sizing: border-box;
        border: none;
        border-radius: 2rem;
        color: ${(props) => props.secondary};
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: bolder;
        margin: 1rem;
        padding: .7rem 2rem;

        @media screen and (min-width: 575px) {
            margin: 0 auto; 
            padding: 1.5rem 4rem;   
        }
        
        :hover {
            background-color: ${(props) => props.secondary};
            color: ${(props) => props.primary};
        }

`