import styled from "styled-components";
import { animated } from "react-spring";

export const FullWindow = styled(animated.div)`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(20, 20, 20, 0.75);
`;
