import styled from "styled-components";
import { fadeIn } from "../../styles/generic/animation/fadeIn";
import { device } from "../../styles/breakpoints";

export const Title = styled.h1`
	letter-spacing: 1em;
	text-align: center;
	width: 680px;
	height: 72px;
	line-height: 72px;
	position: relative;
	color: white;
	background-color: #2e2e2e;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

	animation-name: ${fadeIn};
	animation-duration: 2s;

	text-transform: uppercase;

	@media ${device.tablet} {
		letter-spacing: 0.5em;
		font-size: 1em;
	}

	@media ${device.mobileM} {
		letter-spacing: 0.4em;
		font-size: 1em;
	}
`;
