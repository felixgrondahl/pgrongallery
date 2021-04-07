import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled.div`
	position: absolute;
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: row;
	justify-content: middle;
	flex-wrap: nowrap;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media ${device.laptopL} {
		width: 95%;
		height: 95%;
	}

	@media ${device.tablet} {
		flex-direction: column;
	}
`;

export const GalleryWrapper = styled.div`
	height: 100%;
	width: 65%;
	background-color: black;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	gap: 10px;
	overflow: auto;

	scrollbar-width: thin;
	scrollbar-color: #cacaca #0a0a0a;

	&::-webkit-scrollbar {
		width: 12px; /* width of the entire scrollbar */
	}

	&::-webkit-scrollbar-track {
		background: #0a0a0a; /* color of the tracking area */
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #cacaca; /* color of the scroll thumb */
		border-radius: 20px; /* roundness of the scroll thumb */
		border: 3px solid #0a0a0a; /* creates padding around scroll thumb */
	}

	@media ${device.tablet} {
		width: 100%;
	}
`;

export const TextWrapper = styled.div`
	height: 100%;
	width: 35%;
	background-color: #2e2e2e;
	color: white;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	gap: 40px;

	h1 {
		width: 100%;
		font-size: 1.1em;
		letter-spacing: 0.8em;

		@media ${device.laptopL} {
			width: 100%;
			letter-spacing: 0.4em;
			font-size: 1em;
		}

		@media ${device.laptopL} {
			width: 100%;
			letter-spacing: 0.1em;
			font-size: 1em;
		}

		@media ${device.mobileS} {
			width: 100%;
			letter-spacing: 0em;
			font-size: 0.9em;
		}
	}

	@media ${device.tablet} {
		width: 100%;
	}
`;

export const Description = styled.div`
	width: 100%;

	p {
		text-align: center;
		letter-spacing: 0.2em;
		font-size: 1.1em;

		@media ${device.tablet} {
			font-size: 1em;
			letter-spacing: 0.15em;
		}
	}
`;

export const Dimensions = styled.div`
	width: 100%;
	p {
		text-align: center;
		letter-spacing: 0.2em;
		font-size: 1.1em;

		@media ${device.tablet} {
			font-size: 1em;
			letter-spacing: 0.15em;
		}

		span {
			display: block;
			font-size: 0.8em;
			letter-spacing: 0.3em;
			margin-top: 5px;
		}
	}
`;

export const GalleryImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;

export const GalleryImage = styled.img`
	max-width: 97%;
	max-height: 97%;
	object-fit: contain;
`;
