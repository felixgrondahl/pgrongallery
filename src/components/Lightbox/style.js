import styled from "styled-components";
import { animated } from "react-spring";

export const LightboxWindow = styled.div`
	width: 97%;
	height: 97%;
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	-ms-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);

	@media (max-width: 768px) {
		width: 95%;
	}

	.arrow {
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 999;
        border-radius: 5px;
		background-color: rgba(0, 0, 0, 0.3);
        width: 0.8em;

		@media (max-width: 768px) {
			font-size: 1.5em;
            width: 1em;
		}
	}

	.arrowRight {
		right: 0px;

        @media (max-width: 768px) {
			right: 3px;
		}
	}

	.arrowLeft {
		left: 0px;
        @media (max-width: 768px) {
			right: 3px;
		}
	}
`;

export const LightboxImg = styled(animated.img)`
	width: 95%;
	height: 95%;
	object-fit: contain;
	background-color: #09090a;
	box-shadow: 0px 0px 40px -10px #000000;
	position: absolute;
`;
