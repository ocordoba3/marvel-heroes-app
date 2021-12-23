import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    .heroes__empty-content {
        align-items: center;
        display: flex;
        height: 50vh;
        justify-content: center;
        width: 100%;

        p {
            text-align: center;
        }
    }
`