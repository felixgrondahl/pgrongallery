import styled from "styled-components";
import { TextButton } from "../../styles/generic/Button";
import { BaseContainer } from "../../styles/generic/Containers";
import { animated } from "react-spring";
// import RArrow from "../../assets/icons/arrow.svg";

export const Wrapper = styled(BaseContainer)`
	/* padding: 2.3em; */
	position: relative;
	width: 100%;
	height: 90vh;
	white-space: pre-line;
	margin-top: 60px;
	background-color: white;
	padding: 0px 2.3em;

	.dropdown {
		z-index: 10;
		position: absolute;

		@media (min-width: 769px) {
			display: none;
		}
	}

	@media (max-width: 768px) {
		padding: 0px;
		height: 150vh;
		overflow: hidden;
	}
`;

export const Column = styled.div`
	width: 350px;
	width: auto;
	height: 100%;
	box-sizing: border-box;
	display: inline-block;

	@media (max-width: 768px) {
		display: none;
	}

	.left {
		float: left;
	}

	.inner {
		width: calc(100%);
		height: calc(100% - 70px);
		box-sizing: border-box;
		margin-top: 50px;
		margin-bottom: 20px;
		border-left: 1px solid rgba(0, 0, 0, 0.3);
	}
`;

export const Grid = styled(animated.div)`
	margin-top: 60px;
	top: 0;
	bottom: 0;
	right: 0;
	left: 350px;
	display: grid;
	grid-template-columns: ${props => props.columns > 1 ? "repeat(2, 1fr)" : "auto"};
	/* grid-template-columns: repeat(2, 1fr); */
	grid-template-rows: 50px auto;

	grid-column-gap: 20px;
	padding-bottom: 20px;

	overflow-y: auto;
	overflow-x: hidden;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		padding-left: 5px;
		box-sizing: border-box;
	}

	.column-title {
		grid-row: 1/2;
		grid-column: 1/2;
		@media (max-width: 768px) {
			margin-top: 20px;
		}
	}

	.border {
		border-left: 1px solid rgba(0, 0, 0, 0.3);
	}

	.project-text {
		grid-row: 2/3;
		grid-column: 1/2;
		width: 100%;

		@media (max-width: 768px) {
			width: auto;
		}
	}

	.images {
		/* grid-row: 2/3;
		grid-column: 2/3; */
		grid-row: 2/3;
		grid-column: ${props => props.columns > 1 ? "2/3" : "1/2"};
		/* grid-template-columns: ${props => props.columns > 1 ? "repeat(2, 1fr)" : "auto"}; */
	}
`;

export const ImageGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	padding: 5px;
	justify-items: center;
	justify-content: center;
	overflow-y: auto;
	overflow-x: hidden;

	@media (max-width: 768px) {
		margin-top: 20px;
	}

	img:first-child {
		width: 100%;
	}

	img {
		max-width: 400px;
		max-height: 400px;
		padding: 10px;
		width: 50%;
		box-sizing: border-box;
		object-fit: contain;
	}
`;

export const Image = styled.img`
	border: 1px solid rgba(0, 0, 0, 0);
	transition-property: all;
	transition-duration: 0.5s;

	&:hover {
		cursor: pointer;
		border: 1px solid rgba(0, 0, 0, 0.3);
	}
`;

export const ProjectButton = styled(TextButton)`
	display: block;
	text-align: left;
	width: 100%;
	text-transform: uppercase;
	height: 50px;
	font-size: 1.1em;
	font-weight: 300;
`;

export const ProjectTitle = styled.div`
	h3 {
		text-transform: uppercase;
		font-size: 1.3em;
		margin: 0;
		margin-top: auto;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.dropdown {
		display: none;
		@media (max-width: 768px) {
			display: block;
		}
	}
`;
