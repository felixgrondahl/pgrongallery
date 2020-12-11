import { createGlobalStyle } from 'styled-components';


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
        height: 100vh;
        width: 100%;
        /* font-family: Corbel, 'Helvetica', sans-serif; */
    }

    main {   
        width: 55vw;
        margin: auto;
    }
    
    a {
        color: inherit;
    }

    h1 {
        /* color: #F2EDA7; */
        letter-spacing: 0.582em;
        font-size: 3em;
        font-weight: 400;
    }

    h2 {
        letter-spacing: 0.3em;
        font-size: 2.9em;
        font-weight: 300;
        margin: 0px;
    }

    h3 {
        /* color: #c78d43; */
		letter-spacing: 0.2em;
        font-weight: 300;
    }

    p {
        letter-spacing: 0.19em;
        font-size: 0.97em;
        /* text-shadow: 1px 1px #000000; */
        margin: 0px;
        white-space: pre-wrap;
    }

    button {
        color: #f9f4f1;
        /* font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif; */
        letter-spacing: 0.19em;
        font-size: 0.97em;
        /* text-shadow: 1px 1px #000000; */
        margin: 0px;
    }

    select {
        color: #f9f4f1;
        /* font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif; */
        letter-spacing: 0.19em;
        font-size: 0.97em;
        text-shadow: 1px 1px #000000;
        margin: 0px;
    }

    input {
        letter-spacing: 0.19em;
        font-size: 0.97em;
        /* text-shadow: 1px 1px #000000; */
    }

    label {
        letter-spacing: 0.19em;
        font-size: 0.97em;
        text-shadow: 1px 1px #000000;
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