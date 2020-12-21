import styled from 'styled-components';

export const SelectDropdown = styled.select`
    border: none;
    color: black;
    /* background-color: white; */
    text-shadow: none;
    appearance: none;

    transition: all .3s ease-out;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: white;

    &:hover {
        cursor: pointer;
    }

	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.2);
		outline: none;
	}
`;