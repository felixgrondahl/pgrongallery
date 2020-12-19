import styled from "styled-components";
import { animated } from "react-spring";

export const AnimatedRoutes = styled(animated.div)`
	/* display: flex; */
	position: absolute;
	will-change: transform, opacity;
	width: 100%;
	/* height: 100%; */
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	padding-bottom: 100px;
`;

export const MainWrapper = styled.div`
	min-height: 100vh; /* will cover the 100% of viewport */
	//overflow: hidden;
	display: block;
	position: relative;
	padding-bottom: 100px; /* height of your footer */
`;
