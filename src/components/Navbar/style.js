import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.nav`
	color: white;
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	height: ${(props) => props.theme.navbarHeight};
	padding: 0 1rem;
	background: linear-gradient(
		180deg,
		rgba(0, 0, 0, 0.6) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	display: flex;
	justify-content: space-evenly;
	font-size: 1.2em;
	text-transform: uppercase;
	user-select: none;
	/* z-index: 5; */
`;

export const NavbarContent = styled.ul`
	display: flex;
	list-style: none;
	margin: 0px;
	padding: 0px;
	height: 100%;
	margin-left: ${(props) => (props.pushed ? "auto" : "0px")};
`;

export const NavbarItem = styled.li`
	display: flex;
	align-items: center;
	justify-items: center;
	margin: 0px 20px;

	transition-property: color;
	transition-duration: .25s;

	&:hover {
		color: rgba(256,256,256,0.7);
	}
`;

export const StyledLink = styled(Link)`
	text-decoration: none;

	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;

// export const CartButton = styled(FontAwesomeIcon)`
// 	cursor: pointer;
// 	transition-duration: 0.2s;
// 	transition-property: transform;

// 	&:hover {
// 		transform: scale(1.03);
// 	}

// 	&:active {
// 		transform: scale(0.97);
// 	}
// `;
