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
`;

export const Column = styled.div`
	position: relative;
	box-sizing: border-box;
	margin: 0px 20px;
	padding: 20px;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

	&.total {
		/* min-height: 50%; */
		width: 600px;
		margin-left: 0px;
	}

	&.productList {
		width: 100%;
		overflow-y: auto;
	}
`;

export const Product = styled.div`
	position: relative;
	display: grid;
	height: 150px;
	grid-template-columns: 20% 65% 15%;
	padding: 1em;
	box-sizing: border-box;

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
	}

	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
	position: absolute;
	width: auto;
	height: auto;
	bottom: 0;
	padding: 0;
	margin-bottom: 1em;
	opacity: 0.6;
	font-size: 0.9em;

	transition-property: color;
	transition-duration: .25s;

	&:hover {
		color: rgba(0, 0, 0, 0.8);
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
`;

export const List = styled.ul`
	list-style-type: none;
	padding: 0px;

	li {
		padding: 5px 0px;
	}
`;

export const CheckoutButton = styled(Button)`
	width: 100%;
	margin-bottom: 50px;
	margin-top: 50px;
`;

export const Price = styled.p`
	text-align: center;
	/* margin-left: "auto"; */
	font-size: 1.1em;
	letter-spacing: 0.3em;
	font-weight: 400;
	padding: 10px 10px;
	/* border: 1px solid rgba(17, 17, 21, 0.5);*/
	/* background-color: black; */
	/* color: white; */
	border-radius: 3px;
	/* box-shadow: 0px 0px 10px rgba(15, 15, 24, 0.8); */
`;
