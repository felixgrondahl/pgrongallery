import styled from "styled-components";
import { animated } from "react-spring";
import { device } from "../../styles/breakpoints";

export const LightboxWindow = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: fixed;
	z-index: 2;
`;

export const ArrowWrapper = styled.button`
	position: absolute;
	right: ${(props) => (props.right ? "20px" : "initial")};
	left: ${(props) => (props.right ? "initial" : "20px")};

	top: 50%;
	transform: translateY(-50%);

	transform: ${(props) => (props.right ? "rotateZ(0deg)" : "rotateZ(180deg)")};

	background-color: rgba(0, 0, 0, 0);
	border: none;
	display: flex;
	align-items: center;
	opacity: 0.5;
	cursor: pointer;

	transition: opacity 0.2s;

	@media ${device.tablet} {
		opacity: 0.7;
		right: ${(props) => (props.right ? "10px" : "initial")};
		left: ${(props) => (props.right ? "initial" : "10px")};
	}

	&:hover {
		opacity: 1;
	}

	svg {
		fill: white;
		width: 30px;
		height: 30px;
	}
`;

export const Wrapper = styled(animated.div)`
	position: absolute;
	width: 100%;
	height: 100%;
	will-change: transform;
`;

export const ImgWrapper = styled(animated.div)`
	touch-action: none;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	width: 100%;
	height: 100%;
	will-change: transform;
	display: block;
`;
