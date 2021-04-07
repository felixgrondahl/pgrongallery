import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
	margin: auto;
	margin-top: 150px;
	padding: 50px 50px;
	background-color: white;

	@media ${device.tablet} {
		padding: 5px;
		margin-top: 110px;
	}
`;
