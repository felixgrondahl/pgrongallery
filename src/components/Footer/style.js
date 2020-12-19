import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: white;
    height: 100px;
    widtH: 50%;
    margin: auto;

    p {
        color: rgba(256, 256, 256, 0.8);
        margin-top: 10px;
    }
`;

export const MailLink = styled.a`
    color: white;
    will-change: color;

    transition-property: color;
    transition-duration: 0.25s;

    &:hover {
        color: rgba(256, 256, 256, 0.8);
    }
`;