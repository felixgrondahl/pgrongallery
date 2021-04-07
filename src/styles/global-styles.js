import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        font-family: Roboto, sans-serif;
        font-weight: 200;
    }
    body {
        color: #262626;
        background-color: #2E2E2E;
        height: 100%;
        position: relative;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        letter-spacing: 0.582em;
        font-size: 1.5em;
        width: 100%;

        @media (max-width: 768px) {
            font-size: 1em;
        }
    }

    h2 {
        letter-spacing: 0.3em;
        font-size: 2.7em;
        font-weight: 300;
        margin: 0px;

        @media (max-width: 768px) {
            font-size: 1em;
        }
    }

    h3 {
		letter-spacing: 0.2em;
        font-weight: 300;
        
        @media (max-width: 768px) {
            font-size: 1em;
        }
    }

    p {
        letter-spacing: 0.13em;
        font-size: 1em;
        margin: 0px;
        
        @media (max-width: 768px) {
            letter-spacing: 0.09em;
        }
    }

    button {
        background-color: rgba(0, 0, 0, 0);
        letter-spacing: 0.19em;
        font-size: 0.97em;
        margin: 0px;
        border: none;
        will-change: opacity;
        transition: opacity 0.2s ease-in-out;

        @media (max-width: 768px) {
            font-size: 1em;
            letter-spacing: 0.1em;
        }
    }

    select {
        color: #f9f4f1;
        letter-spacing: 0.19em;
        font-size: 0.97em;
        text-shadow: 1px 1px #000000;
        margin: 0px;

        @media (max-width: 768px) {
            font-size: 1em;
            letter-spacing: 0.1em;
        }
    }

    input {
        letter-spacing: 0.19em;
        font-size: 0.97em;
    }

    label {
        font-size: 1.05em;
		letter-spacing: 0.2em;
        font-weight: 400;
        
        @media (max-width: 768px) {
            font-size: 1em;
        }
    
    }
`;

export default GlobalStyle;
