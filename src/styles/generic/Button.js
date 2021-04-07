import styled from "styled-components";

export const Button = styled.button`
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
	border: none;
	box-sizing: border-box;
	text-decoration: ${(props) => (props.active ? "underline" : "none")};
	transition-property: color;
	height: 50px;

    transition: color .3s ease-out;
    border: 1px solid rgba(0, 0, 0, 0);

	font-weight: 300;

	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.2);
		outline: none;
	}

	&:hover {
		cursor: pointer;
		color: ${(props) =>
			props.dark ? "rgba(0, 0, 0, 0.7)" : "rgba(256,256,256,0.7)"};
	}
`;
