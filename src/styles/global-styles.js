import { createGlobalStyle } from "styled-components";

/*
    #262626
    #A68446
*/

const GlobalStyle = createGlobalStyle`

    /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap'); */
    /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap'); */

    * {
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    body {
        color: #262626;
        /* background-color: rgba(); */
        /* height: 100vh; */
        height: 100%;
        position: relative;
        /* width: 100vw; */
        /* font-family: Corbel, 'Helvetica', sans-serif; */
    }
    /* html,
    body {
        
    } */

    main {   
        /* display: flex; */
        /* align-items: center; */
        /* width: 55vw; */
        /* margin: auto; */
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }

    h1 {
        /* color: #F2EDA7; */
        letter-spacing: 0.582em;
        font-size: 2.6em;
        font-weight: 300;
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
        /* color: #c78d43; */
		letter-spacing: 0.2em;
        font-weight: 300;
        
        @media (max-width: 768px) {
            font-size: 1em;
        }
    }

    p {
        letter-spacing: 0.19em;
        font-size: 1em;
        /* text-shadow: 1px 1px #000000; */
        margin: 0px;
        white-space: pre-wrap;
        
        @media (max-width: 768px) {
            letter-spacing: 0.09em;
        }
    }

    button {
        color: #f9f4f1;
        /* font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif; */
        letter-spacing: 0.19em;
        font-size: 0.97em;
        /* text-shadow: 1px 1px #000000; */
        margin: 0px;

        @media (max-width: 768px) {
            font-size: 1em;
            letter-spacing: 0.1em;
        }
    }

    select {
        color: #f9f4f1;
        /* font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif; */
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
        /* text-shadow: 1px 1px #000000; */
    }

    label {
        
        /* color: #c78d43; */
        font-size: 1.05em;
		letter-spacing: 0.2em;
        font-weight: 400;
        
        @media (max-width: 768px) {
            font-size: 1em;
        }
    
    }

    canvas {
        /* position: fixed; */
        /* height: 100vh;
        width: 100vw; */
    }

    @keyframes FadeIn{
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

export default GlobalStyle;
