import styled from "styled-components";
import { Button, TextButton } from "../../styles/generic/Button";
import { FloatingPanel } from "../../styles/generic/Containers";

export const CartWindow = styled(FloatingPanel)`
	height: 97%;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-sizing: border-box;
	/* box-shadow: 0px 0px 20px #000000; */

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	position: relative;
	box-sizing: border-box;
	margin: 0px 20px;
	padding: 20px;
	/* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); */

	@media (max-width: 768px) {
		padding: 5px;
		/* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.09); */
	}

	&.total {
		/* min-height: 50%; */
		width: 35%;
		margin-left: 0px;
		border-left: 1px solid rgba(0, 0, 0, 0.3);
		@media (max-width: 768px) {
			width: 100%;
			margin: 0;
		}
	}

	&.productList {
		width: 65%;
		overflow-y: auto;
		overflow-x: hidden;

		@media (max-width: 768px) {
			width: 100%;
			/* height: 100%; */
			margin: 0;
			overflow-y: scroll;
			overflow-x: hidden;
			-webkit-overflow-scrolling: touch;
		}
	}
`;

export const Title = styled.h2`
	text-align: center;
	font-size: 2em;
	width: 100%;

	@media (max-width: 768px) {
		width: 100%;
		text-align: center;
		font-size: 1.2em;
		padding: 3px 0px;
	}
`;

export const Product = styled.div`
	position: relative;
	display: grid;
	height: 30%;
	grid-template-columns: 20% 55% 25%;
	padding: 0.8em;
	box-sizing: border-box;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	/* border-radius: 3px; */
	/* background: radial-gradient(
		circle,
		rgba(42, 40, 52, 1) 0%,
		rgba(17, 17, 21, 1) 90%
	); */
	/* box-shadow: 0px 0px 7px rgba(17, 17, 21, 0.5); */
	/* border-bottom: 1px solid black; */

	.info {
		padding: 0 1em;
		@media (max-width: 768px) {
			padding: 0 0.5em;

			p {
				font-size: 0.9em;
				color: rgba(0, 0, 0, 0.7);
			}
		}
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media (max-width: 768px) {
		padding: 0.1em;
	}
`;

export const ProductImg = styled.img`
	/* width: 10%; */
	width: 100%;
	height: 110%;
	box-sizing: border-box;
	align-self: center;

	object-fit: contain;
	/* background-color: rgba(42, 40, 52, 0.2); */
	background-color: black;
	/* border: 1px solid rgba(17, 17, 21, 0.5); */
	/* background-color: #121418; */
`;

export const ProductButton = styled(TextButton)`
	color: black;
	/* position: absolute; */
	width: auto;
	height: auto;
	/* bottom: 0;
	right: 0; */
	padding: 0;
	/* margin-bottom: 1em; */
	opacity: 0.6;
	font-size: 0.9em;

	transition-property: color;
	transition-duration: 0.25s;

	&:hover {
		color: rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 768px) {
		font-size: 0.9em;
		margin-top: 5px;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
`;

export const List = styled.ul`
	list-style-type: none;
	padding: 0px;

	@media (max-width: 768px) {
		margin: 0px;
	}

	li {
		padding: 5px 0px;
		@media (max-width: 768px) {
			padding: 2px;
		}
	}

	/* @media (max-width: 768px) {
			display: block;
		} */
`;

export const CheckoutButton = styled(Button)`
	width: 100%;
	margin-bottom: 50px;
	margin-top: 50px;

	@media (max-width: 768px) {
		margin: 10px 0px;
	}
`;

export const Price = styled.p`
	text-align: center;
	/* margin-left: "auto"; */
	font-size: 1.1em;
	letter-spacing: 0.3em;
	font-weight: 400;
	/* padding: 10px 10px; */
	/* border: 1px solid rgba(17, 17, 21, 0.5);*/
	/* background-color: black; */
	/* color: white; */
	border-radius: 3px;
	/* box-shadow: 0px 0px 10px rgba(15, 15, 24, 0.8); */

	@media (max-width: 768px) {
		font-size: 1em;
	}
`;
