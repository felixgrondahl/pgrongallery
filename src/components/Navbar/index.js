import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import CartButton from "../CartButton";
import * as S from "./style.js";

const Nav = (props) => {
	const location = useLocation();

	return (
		<S.Navbar>
			{/* Left side */}
			<S.NavbarContent>
				<NavItem path="/">Home</NavItem>
				<NavItem path="/Gallery">Gallery</NavItem>
				<NavItem path="/About">About</NavItem>
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

const NavItem = (props) => {
	return (
		<S.NavbarItem>
			<S.StyledLink to={props.path}>{props.children}</S.StyledLink>
		</S.NavbarItem>
	);
};

export default Nav;
