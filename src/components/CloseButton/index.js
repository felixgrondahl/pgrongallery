import React from "react";
import { Close } from "./style";
import PropTypes from "prop-types";

const CloseButton = ({ onClick, dark }) => {
	return <Close dark={dark} onClick={() => onClick()}>&times;</Close>;
};

CloseButton.propTypes = {
	onClick: PropTypes.func,
	dark: PropTypes.bool
}


export default CloseButton;
