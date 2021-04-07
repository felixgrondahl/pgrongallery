import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	width: 100%;
	max-width: 1200px;
	text-align: center;
    margin: auto;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	padding-bottom: 30px;
    margin-bottom: 20px;

	@media ${device.tablet} {
		padding-top: 20px;
		height: 300px;
		justify-content: space-between;
		flex-direction: column;
	}
`;
