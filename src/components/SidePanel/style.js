import styled from "styled-components";

export const Panel = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding: 1.5rem;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	text-transform: uppercase;

	transition: transform 0.3s ease-in-out;
    
    box-shadow: 5px 0px 6px rgba(0, 0, 0, 0.4);
`;

export const PanelButton = styled.div`
    
	&:focus div,
	&:hover div,
	&:visited div,
	&:link div,
	&:active div {
        color: black;
		text-decoration: none;
	}

    padding: 2rem 0px;
`;
