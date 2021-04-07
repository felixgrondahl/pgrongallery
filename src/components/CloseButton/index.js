import React from "react";
import { Wrapper } from "./style";
import PropTypes from "prop-types";
import { ReactComponent as CloseX } from "../../assets/icons/iconmonstr-x-mark-4.svg";

const CloseButton = ({ onClick, dark }) => {
	return (
		<Wrapper dark={dark} onClick={() => onClick()}>
			<CloseX />
		</Wrapper>
	);
};

CloseButton.propTypes = {
	onClick: PropTypes.func,
	dark: PropTypes.bool,
};

export default CloseButton;
