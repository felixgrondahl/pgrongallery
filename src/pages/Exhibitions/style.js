import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	white-space: pre-line;
	margin-top: 150px;
	background-color: white;
	padding: 30px 50px;
	box-shadow: -6px 11px 16px 4px rgba(0, 0, 0, 0.31);

	@media ${device.tablet} {
		width: 95%;
		margin-top: 110px;
		padding: 30px 5px;
	}
`;

export const TextWrapper = styled.div`
	margin-top: 20px;
	p {
		border-left: 1px solid rgba(0, 0, 0, 0.3);
		line-height: 1.5em;
		padding-left: 50px;
		font-weight: 300;

		@media ${device.tablet} {
			padding: 0.5em 0 0.5em 0.5em;
			letter-spacing: 0.05em;
			line-height: 1.3em;
		}
	}
`;
