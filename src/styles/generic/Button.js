import styled from "styled-components";

export const Button = styled.button`
	/* background-color: #3f4153; */
	background-color: black;
	border-radius: 3px;

	border: ${(props) => (props.big ? "1.5px solid" : "1px solid")};
	border-color: rgba(255, 231, 231, 0.1);
	background: radial-gradient(
		circle,
		rgba(30, 30, 30, 1) 0%,
		rgba(0, 0, 0, 0.5) 100%
	);

	box-sizing: border-box;

	width: ${(props) => (props.width ? props.width : "165px")};
	height: ${(props) => (props.height ? props.height : "40px")};

	font-size: ${(props) => (props.big ? "1.25em" : "0.97em")};
	letter-spacing: ${(props) => (props.big ? "0.27em" : "0.19em")};

	transition: all 0.5s ease-out;

	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 1);
	}
`;

export const TextButton = styled.button`
	background-color: rgba(0, 0, 0, 0);
	color: ${(props) => (props.dark ? "black" : "white")};
	/* color: white; */
	border: none;
	box-sizing: border-box;
	width: ${(props) => (props.width ? props.width : "165px")};
	height: ${(props) => (props.height ? props.height : "30px")};

	text-decoration: ${(props) => (props.active ? "underline" : "none")};

	transition-property: color;
	transition-duration: 0.25s;

	/* &::selection {
        border: none;
        outline: none;
    } */

	&:focus {
		border: none;
		outline: none;
	}

	&:hover {
		cursor: pointer;
		color: ${(props) =>
			props.dark ? "rgba(0, 0, 0, 0.7)" : "rgba(256,256,256,0.7)"};
		/* color: rgba(256,256,256,0.7); */
	}
`;
