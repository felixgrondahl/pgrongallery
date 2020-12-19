import styled from 'styled-components';

export const SelectDropdown = styled.select`
    border: none;
    color: black;
    /* background-color: white; */
    text-shadow: none;
    appearance: none;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        border: none;
        outline: none;
    }
`;