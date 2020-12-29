import styled from "styled-components";
import { animated } from "react-spring";

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
