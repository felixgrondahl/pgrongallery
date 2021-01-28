import styled from "styled-components";
import { Button } from "../../styles/generic/Button";
import { MainModal, FloatingPanel } from "../../styles/generic/Containers";

export const ProductWindow = styled(MainModal)`
	padding: 2em;
	position: relative;
	display: grid;
	grid-template-rows: 60% 40%;
	height: 100%;

	@media (max-width: 768px) {
		padding: 1em;
		grid-template-rows: 55% 45%;
	}
`;

export const ImageGrid = styled(FloatingPanel)`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	padding: 5px;
	justify-items: center;
	justify-content: center;
	vertical-align: center;
	overflow-y: auto;
	overflow-x: hidden;

	/* @media (max-width: 768px) {
		margin-top: 20px;
	} */
	@media (max-width: 768px) {
		padding: 5px;
	}

	div {
		display: flex;
		align-items: center;
	}

	img:first-child {
		/* width: 100%; */
	}

	img {
		max-width: 500px;
		max-height: 500px;
		padding: 10px;
		/* width: 50%; */
		box-sizing: border-box;
		object-fit: contain;
		vertical-align: middle;

		@media (max-width: 768px) {
			max-width: 200px;
			max-height: ${(props) => `calc(500px/${props.numImages})`};
		}
	}
`;

// export const ImageGrid = styled(FloatingPanel)`
// 	display: grid;
// 	width: 200px;
// 	height: 200px;
// 	grid-template-columns: repeat(2, 1fr);
// 	grid-template-rows: repeat(2, 1fr);
// 	justify-items: center;
// 	/* position: relative;
// 	display: grid; */
// 	/* position: relative;
// 	grid-template-columns: ${(props) =>
// 		props.numImages === 1 ? "1fr" : "0.5fr 0.5fr"};
// 	gap: 15px;
// 	padding: 15px;
// 	height: 100%;
// 	justify-items: center;
// 	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); */

// 	@media (max-width: 768px) {
// 		padding: 5px;
// 	}

// 	img {
// 		width: 100%;
// 		height: 100%;
// 		/* height: 100%; */
// 		/* width: 100%; */
// 		object-fit: contain;
// 	}

// 	div {
// 		width: 100%;
// 		height: 100%;
// 		/* height: 100%; */
// 	}
// 	/*
// 	.main {
// 		grid-row-start: 1;
// 		grid-row-end: span
// 			${(props) => (props.numImages - 1 > 0 ? props.numImages - 1 : 1)};
// 	} */
// `;

export const ProductImage = styled.img`
	border: 1px solid rgba(0, 0, 0, 0);
	transition-property: all;
	transition-duration: 0.5s;

	&:hover {
		cursor: pointer;
		border: 1px solid rgba(0, 0, 0, 0.3);
	}
`;

export const InfoWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	text-align: center;
	box-sizing: border-box;

	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;

	div {
		margin: 5px;
	}

	.description {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.info {
		margin-top: 5px;
	}

	p {
		white-space: pre-line;
	}

	@media (max-width: 768px) {
		padding-top: 10px;
		width: 100%;
		p {
			font-size: 0.95em;
			color: rgba(0, 0, 0, 0.8);
		}
	}
`;

export const AddToCart = styled(Button)`
	min-width: 25%;
	height: 40px;
	margin-top: 10px;

	@media (max-width: 768px) {
		height: 35px;
		min-width: 80%;
	}
`;

export const ProductTitle = styled.h2`
	/* font-weight: 400; */
`;
