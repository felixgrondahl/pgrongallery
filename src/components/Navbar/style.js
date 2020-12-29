import styled from "styled-components";
import { Link } from "react-router-dom";
import { TextButton } from "../../styles/generic/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.nav`
	color: white;
	width: 100%;
	position: fixed;
	box-sizing: border-box;
	height: ${(props) => props.theme.navbarHeight};
	padding: 0 1rem;
	background: linear-gradient(
		180deg,
		rgba(20, 20, 20, 0.6) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	display: flex;
	justify-content: space-evenly;
	font-size: 1.2em;
	text-transform: uppercase;
	user-select: none;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const MobileNavbar = styled(Navbar)`
	@media (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		font-size: 1em;
		padding: 0 0.5rem;
		align-items: center;
	}
	@media (min-width: 769px) {
		display: none;
	}
`;

export const SidePanelButton = styled(TextButton)`
	width: auto;
	height: auto;
	transform: scale(1.7);
	margin: 0px 10px;
`;

export const NavbarContent = styled.div`
	display: flex;
	margin: 0px;
	padding: 0px;
	height: 100%;
	margin-left: ${(props) => (props.pushed ? "auto" : "0px")};
`;

export const NavbarItem = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	margin: 0px 40px;
	letter-spacing: 0.1em;

	transition-property: color;
	transition-duration: 0.25s;

	&:hover {
		color: rgba(256, 256, 256, 0.7);
	}

	@media (max-width: 768px) {
		margin: 0px 10px;
	}
	@media (max-width: 320px) {
		font-size: 0.9em;
		letter-spacing: 0.05em;
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