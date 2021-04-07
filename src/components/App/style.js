import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "../../styles/breakpoints";

export const AnimatedRoutes = styled(animated.div)`
	position: absolute;
	will-change: transform, opacity;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
	overflow-x: hidden;
`;

export const MainWrapper = styled.div`
	min-height: 100vh;
	display: block;
	position: relative;
	padding-bottom: 100px; /* height of your footer */
`;

export const Pgron = styled.div`
	position: absolute;
	color: white;
	font-size: 2.25em;
	font-weight: 400;
	height: 60px;
	line-height: 60px;
	margin-left: 25px;
	letter-spacing: 0.3em;

	@media ${device.tablet} {
		font-size: 1.25em;
		margin-left: 15px;
		height: 40px;
		line-height: 40px;
	}
`;