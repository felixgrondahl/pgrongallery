import styled from "styled-components";
import { Button } from "../../styles/generic/Button";
import { MainModal, FloatingPanel } from "../../styles/generic/Containers";

export const ProductWindow = styled(MainModal)`
	padding: 2.3em;
	position: relative;
	display: grid;
	grid-template-rows: 60% 40%;

	@media (max-width: 768px) {
		padding: 1em;
		grid-template-rows: 55% 45%;
	}
`;

export const ImageGrid = styled(FloatingPanel)`
	display: grid;

	position: relative;
	grid-template-columns: ${(props) =>
		props.numImages === 1 ? "10fr" : "5fr 5fr"};
	grid-gap: 15px;
	padding: 15px;
	height: 100%;
	justify-items: center;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

	@media (max-width: 768px) {
		padding: 5px;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}

	.main {
		grid-row-start: 1;
		grid-row-end: span
			${(props) => (props.numImages - 1 > 0 ? props.numImages - 1 : 1)};
	}
`;

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
