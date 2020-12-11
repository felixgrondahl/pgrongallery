import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 1px solid rgba(50, 50, 50, 0.3);
    /* border: 1px solid #c78d43; */
    border-radius: 3px;
    padding: 2px 6px;
    /* background-color: rgba(17, 17, 21, 1); */
`;

export const QuantityNumber = styled.p`
    text-align: center;
    user-select: none; 
    font-family: Helvetica, Arial, sans-serif;
`;

export const QuantityButton = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition-duration: 0.2s;
    transition-property: transform;
    color: #525464;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.97);
    }
`;