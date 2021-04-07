import styled from "styled-components";

export const Panel = styled.div`
	width: 50vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	padding: 1.5rem;
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-120%)")};

	position: fixed;
	top: 0;
	left: 0;
	background-color: white;
	text-transform: uppercase;

	transition: transform 0.3s ease-in-out;
    
    box-shadow: 5px 0px 6px rgba(0, 0, 0, 0.4);

	font-size: 1.2em;
	font-weight: 300;
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
	height: 50px;
	line-height: 50px;
    padding: 1rem 0px;
`;
