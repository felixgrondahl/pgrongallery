import React from "react";
import { Close } from "./style";

const CloseButton = ({ onClick, dark }) => {
	return <Close dark={dark} onClick={() => onClick()}>&times;</Close>;
};

export default CloseButton;
