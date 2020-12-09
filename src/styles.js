import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    }

    body {
        width: 100vw;
        max-width: 100%;
        min-height: 100vh;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center
    }
`;
