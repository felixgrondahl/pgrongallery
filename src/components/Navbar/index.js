import React from "react";
import { useLocation } from "react-router-dom";
import CartButton from "../CartButton";
import * as S from "./style.js";
import PropTypes from "prop-types";

const Nav = () => {
	const location = useLocation();

	return (
		<S.Navbar>
			{/* Left side */}
			<S.NavbarContent>
				<NavItem path="/">Home</NavItem>
				<NavItem path="/Gallery">Gallery</NavItem>
				{/* <NavItem path="/About">About</NavItem> */}
				{/* <NavItem path="/Contact">Contact</NavItem> */}
			</S.NavbarContent>

			{/* Right side */}
			<S.NavbarContent pushed>
				<NavItem path={{ pathname: location.url, search: "?cart=true" }}>
					<CartButton />
				</NavItem>
				{/* <NavItem path={{ pathname: location.url, search: '?register=true'}}>Register</NavItem> */}
			</S.NavbarContent>
		</S.Navbar>
	);
};

const NavItem = ({path, children}) => {
	return (
		<S.NavbarItem>
			<S.StyledLink to={path}>{children}</S.StyledLink>
		</S.NavbarItem>
	);
};

NavItem.propTypes = {
	path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children: PropTypes.node
}

export default Nav;
