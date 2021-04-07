import styled from "styled-components";

export const navWrapper = styled.div`
	margin: auto;
	min-width: 120px;
	max-width: 200px;
	padding: 5px 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 2em;

	text-align: center;
	user-select: none;
	border-radius: 5px;
`;

export const PageNumber = styled.div`
	p {
		color: black;
		font-weight: 600;
		line-height: 2em;
		font-size: 1.2em;
	}
`;

export const buttonWrapper = styled.div`
	width: 5em;
	height: 1.8em;

	svg {
		fill: black;
		cursor: pointer;
		width: inherit;
		height: inherit;
		transform: ${props => props.left ? "rotateZ(0deg)" : "rotateZ(180deg)"};
		opacity: 0.8;
		transition: opacity 0.1s ease-in-out;

		&:hover {		
			opacity: 1;
		}
	}
`;
