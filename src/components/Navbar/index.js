import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CartButton from "../CartButton";
import * as S from "./style.js";
import PropTypes from "prop-types";
import SidePanel from "../SidePanel";

const Nav = () => {
	const location = useLocation();
	const [openSidePanel, setOpenSidePanel] = useState(false);

	return (
		<div>
			<S.Navbar>
				{/* Left side */}
				<S.NavbarContent>
					<NavItem path="/">Home</NavItem>
					<NavItem path="/Gallery">Gallery</NavItem>
					<NavItem path="/Commissions">Commissions</NavItem>
					<NavItem path="/Exhibitions">Exhibitions</NavItem>
				</S.NavbarContent>

				{/* Right side */}
				<S.NavbarContent pushed>
					<NavItem path={{ pathname: location.url, search: "?cart=true" }}>
						<CartButton />
					</NavItem>
				</S.NavbarContent>
			</S.Navbar>

			<S.MobileNavbar>
				<S.SidePanelButton onClick={() => setOpenSidePanel((val) => !val)}>
					&#x2630;
				</S.SidePanelButton>
				<NavItem path={{ pathname: location.url, search: "?cart=true" }}>
					<CartButton />
				</NavItem>
			</S.MobileNavbar>

			<SidePanel open={openSidePanel} onClose={() => setOpenSidePanel(false)}>
				<NavItem path="/">☰Home</NavItem>
				<NavItem path="/Gallery">☰Gallery</NavItem>
				<NavItem path="/Commissions">☰Commissions</NavItem>
				<NavItem path="/Exhibitions">☰Exhibitions</NavItem>
			</SidePanel>
		</div>
	);
};

const NavItem = ({ path, children }) => {
	return (
		<S.NavbarItem>
			<S.StyledLink to={path}>{children}</S.StyledLink>
		</S.NavbarItem>
	);
};

NavItem.propTypes = {
	path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children: PropTypes.node,
};

export default Nav;
