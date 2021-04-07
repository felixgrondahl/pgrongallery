import React, { useState, useEffect } from "react";
import * as S from "./style.js";
import PropTypes from "prop-types";
import SidePanel from "../SidePanel";
import { ReactComponent as MobMenu } from "../../assets/icons/mobile-menu.svg";

const Nav = () => {
	const [openSidePanel, setOpenSidePanel] = useState(false);

	const [yScroll, setYScroll] = useState(0);

	const UpdateScroll = () => {
		setYScroll(window.pageYOffset);
	};

	useEffect(() => {
		const watchScroll = () => {
			window.addEventListener("scroll", UpdateScroll);
		};
		watchScroll();
		return () => {
			window.removeEventListener("scroll", UpdateScroll);
		};
	});

	return (
		<div>
			<S.Navbar scrolled={yScroll >= 80 ? true : false}>
				<S.NavbarContent>
					<NavItem path="/">Home</NavItem>
					<NavItem path="/Gallery">Gallery</NavItem>
					<NavItem path="/Commissions">Commissions</NavItem>
					<NavItem path="/Exhibitions">Exhibitions</NavItem>
				</S.NavbarContent>
				<S.NavGradient scrolled={yScroll >= 80 ? true : false} />
			</S.Navbar>

			<S.MobileNavbar scrolled={yScroll >= 40 ? true : false}>
				<S.NavGradient scrolled={yScroll >= 40 ? true : false} />
				<S.ButtonWrapper>
					<S.SidePanelButton
						className={`${openSidePanel ? "buttonOpen" : "buttonClosed"}`}
						onClick={() => setOpenSidePanel((val) => !val)}
					>
						<MobMenu />
					</S.SidePanelButton>
				</S.ButtonWrapper>
			</S.MobileNavbar>

			<SidePanel open={openSidePanel} onClose={() => setOpenSidePanel(false)}>
				<NavItem onClick={() => setOpenSidePanel(false)} path="/">
					Home
				</NavItem>
				<NavItem onClick={() => setOpenSidePanel(false)} path="/Gallery">
					Gallery
				</NavItem>
				<NavItem onClick={() => setOpenSidePanel(false)} path="/Commissions">
					Commissions
				</NavItem>
				<NavItem onClick={() => setOpenSidePanel(false)} path="/Exhibitions">
					Exhibitions
				</NavItem>
			</SidePanel>
		</div>
	);
};

const NavItem = ({ path, children, onClick }) => {
	return (
		<S.NavbarItem>
			<S.StyledLink onClick={() => onClick && onClick()} to={path}>
				{children}
			</S.StyledLink>
		</S.NavbarItem>
	);
};

NavItem.propTypes = {
	path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Nav;
