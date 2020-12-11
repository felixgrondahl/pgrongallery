import React from "react";
import { createPortal } from "react-dom";
import * as S from "./style";
import { useSpring } from "react-spring";

const PortalModal = (props) => {
	const windowSpring = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { mass: 1, tension: 300, friction: 25 },
	});

	return createPortal(
		<S.FullWindow style={windowSpring} onClick={props.onClick}>
			{props.children}
		</S.FullWindow>,
		document.getElementById(props.modalId || "modal_root")
	);
};

export default PortalModal;
