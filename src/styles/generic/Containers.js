import styled from "styled-components";

export const BaseContainer = styled.div`
	display: block;
	width: 100%;

	background-color: #0d0d0d;
	/* background-color: rgba(50, 50, 50); */
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.7);
`;

export const Header = styled(BaseContainer)`
	text-align: center;
	/* background: linear-gradient(60deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 33%, rgba(255,249,249,0) 66%, rgba(0,0,0,0.5) 100%); */
	background-color: white;

	margin-top: ${(props) => props.theme.navbarHeight};
	height: ${(props) =>
		props.height
			? `calc(${props.height} - ${props.theme.navbarHeight})`
			: `calc(100vh - ${props.theme.navbarHeight})`};
	position: relative;

	h1 {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: black;
	}

	&:after {
		pointer-events: none;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background: linear-gradient(
			60deg,
			rgba(0, 0, 0, 0.4) 0%,
			rgba(255, 255, 255, 0) 33%,
			rgba(255, 249, 249, 0) 66%,
			rgba(0, 0, 0, 0.4) 100%
		);

		background-blend-mode: add;
	}
`;

export const FloatingBase = styled.div`
	background-color: white;
	box-shadow: 0px 0px 40px -10px #000000;
	/* box-shadow: -4px 5px ${(props) => props.theme.boxShadowColor}; */
`;

export const MainModal = styled(FloatingBase)`
	width: 80%;
	height: 95%;
	box-sizing: border-box;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.close {
		/* cursor: pointer; */
		color: black;
		position: absolute;
		top: -20px;
		right: 0px;
		font-weight: 300;
		text-decoration: none;
		font-size: 3em;
		user-select: none;

		width: 40px;
		height: 40px;
		text-align: center;

		transition-property: color;
		transition-duration: 0.25s;

		&:hover {
			cursor: pointer;
			color: rgba(0, 0, 0, 0.7);
		}
	}
`;

export const FreeFloating = styled(FloatingBase)`
	position: relative;
	display: inline-block;
	box-sizing: border-box;

	margin: 60px;
	padding: 30px;
`;

export const FloatingPanel = styled(FloatingBase)`
	/* background-color: #131418; */
	/* background-color: white; */
	padding: 5px;
	box-sizing: border-box;
	width: 120%;
	margin-left: -10%;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
`;

export const GradientField = styled.div`
	background: linear-gradient(270deg, #23242a 0%, rgba(0, 0, 0, 0) 100%);
	display: inline-block;
	border-radius: 8px;
	padding: 20px;
	box-sizing: border-box;
`;

// export const Backdrop = styled.div`
//     width: 100vw;
//     height: 100vh;
// `;

export const CenteredForm = styled.div`
	width: 45%;
	position: relative;
	top: 47%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	/* box-sizing: border-box; */
`;