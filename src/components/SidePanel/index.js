import React, { useEffect, useRef } from "react";
import { Panel, PanelButton } from "./style";
import PropTypes from "prop-types";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const SidePanel = ({ children, open, onClose }) => {
	const panelRef = useRef();

	useEffect(() => {
		if (open) disableBodyScroll(panelRef);
		else enableBodyScroll(panelRef);
	});

	return (
		<>
        {open && <Background onClick={onClose}/>}
			<Panel ref={panelRef} open={open}>
				{children.map((element, index) => {
					return (
						<PanelButton key={`panelButton${index}`}>{element}</PanelButton>
					);
				})}
			</Panel>
        
        </>
	);
};

const Background = ({onClick}) => {
    return (<div onClick={() => onClick()} style={{position: "fixed", width: "100vw", height: "100vh"}}>
    </div>);
}

SidePanel.propTypes = {
	children: PropTypes.node,
	open: PropTypes.bool,
	onClose: PropTypes.func,
};

Background.propTypes = {
    onClick: PropTypes.func
}

export default SidePanel;
