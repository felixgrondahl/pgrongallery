import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../styles/breakpoints";

export const Navbar = styled.nav`
	color: white;
	width: 100%;
	position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
	box-sizing: border-box;
	margin-top: ${(props) => (props.scrolled ? "0px" : "80px")};
	z-index: 0;

	@media ${device.tablet} {
		display: none;
	}
`;

export const NavbarContent = styled.div`
	position: relative;
	width: 958px;
	margin: auto;
	display: flex;
	justify-content: space-evenly;
	font-size: 1.2em;
	text-transform: uppercase;
	user-select: none;
	height: ${(props) => props.theme.navbarHeight};
	z-index: 1;
`;

export const NavGradient = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #2e2e2e;
	opacity: ${(props) => (props.scrolled ? "1" : "0")};
	box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.4);
	transition: opacity 0.4s;
`;

export const MobileNavbar = styled.nav`
	display: none;

	@media ${device.tablet} {
		display: block;
		font-size: 1em;
		width: 100%;
		height: 70px;
		align-items: center;
		position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
		padding-top: ${(props) => (props.scrolled ? "0px" : "40px")};
	}
`;

export const ButtonWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 10px;
`;

export const SidePanelButton = styled.button`
	svg {
		fill: white;
		width: 35px;
		height: 35px;
	}

	rect {
		transition: transform 0.3s ease-in-out;
	}

	&.buttonOpen {
		svg {
			#top {
				transform: rotateZ(-45deg) translateY(12px);
			}
			#middle {
				opacity: 0;
				transition: opacity 0.2s ease-in-out;
			}
			#bot {
				transform: rotateZ(45deg) translateY(-12px);
			}
		}
	}

	&.buttonClosed {
		svg {
			#top {
				transform: rotateZ(0deg);
			}
			#middle {
				opacity: 1;
				transition: opacity 0.2s ease-in-out;
			}
			#bot {
				transform: rotateZ(0deg);
			}
		}
	}
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

	@media ${device.tablet} {
		margin: 0px 10px;
	}
	@media ${device.mobileS} {
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
