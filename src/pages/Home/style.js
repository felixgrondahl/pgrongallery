import styled from "styled-components";
import BottomImage from "../../assets/images/Home/HomeHeaderBkg.png";
import AboutImg from "../../assets/images/ElRey_Worksmall.jpg";
import { device } from "../../styles/breakpoints";

export const Header = styled.header`
	margin-top: ${(props) => props.theme.navbarHeight};
	width: 100%;
	height: 1149px;
	position: relative;
	background-color: white;

	background: linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${BottomImage}), white;

	background-repeat: no-repeat;
	background-size: cover;
	background-position: right top;

	overflow: hidden;
	clip-path: ellipse(100% 55% at 60% 20%);

	@media ${device.tablet} {
		height: 700px;
		clip-path: ellipse(200% 55% at 60% 0%);
		margin-top: ${(props) => props.theme.navbarHeightMobile};
	}

	h1 {
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);

		@media ${device.tablet} {
			top: 20%;
		}
	}
`;

export const AboutContainer = styled.div`
	width: 70%;
	height: 620px;
	position: relative;
	top: -400px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;

	@media ${device.tablet} {
		display: none;
	}

	@media ${device.laptopL} {
		width: 80%;
	}

	@media ${device.laptop} {
		width: 95%;
	}
`;

export const TextContainer = styled.div`
	height: auto;
	width: 60%;
	background-color: white;
	padding: 40px;
	box-shadow: -6px 11px 16px 4px rgba(0, 0, 0, 0.31);
	p {
		font-weight: 300;
		white-space: pre-line;
	}
`;

export const ImageContainer = styled.div`
	background-image: url(${AboutImg});
	background-repeat: no-repeat;
	background-size: cover;
	width: 40%;
	height: 100%;
	box-shadow: 0px 3px 5px 3px rgba(0, 0, 0, 0.2);
`;

export const PreviewWrapper = styled.div`
	position: relative;
	top: ${(props) => props.top};
	cursor: pointer;
	width: 1024px;
	margin: auto;

	@media ${device.tablet} {
		width: 100%;
		top: ${(props) => `calc(${props.top} + 100px)`};
	}

	h1 {
		position: absolute;
		top: 150px;
		left: 50%;
		transform: translate(-50%, -50%);

		transition: background-color 0.5s, color 0.5s;
		will-change: background-color, color;
	}

	div {
		transition: opacity 0.5s;
		will-change: opacity;
	}

	&:hover {
		h1 {
			background-color: white;
			color: black;
		}

		div {
			opacity: 0.9;
		}
	}
`;

export const GalleryPreview = styled.div`
	display: grid;
	margin: auto;

	grid-template-columns: 1fr 1fr;

	width: 1024px;
	height: 360px;
	box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);

	@media ${device.tablet} {
		width: 100%;
	}
`;

export const GridCell = styled.div`
	background-image: ${(props) => `url(${props.gridImage})`};
	background-repeat: no-repeat;
	background-size: cover;
`;

export const CommissionPreview = styled.div`
	display: grid;
	margin: auto;

	grid-template-columns: 1fr 1fr;

	width: 1024px;
	height: 360px;
	box-shadow: 5px 8px 4px rgba(0, 0, 0, 0.25);

	@media ${device.tablet} {
		width: 100%;
	}
`;
