import styled from "styled-components";
import { TextButton } from "../../styles/generic/Button";

export const Close = styled(TextButton)`
	/* cursor: pointer; */
	display: inline-flex;
	align-items: center;

	position: absolute;
	top: 0px;
	right: 0px;
	width: 40px;
	height: 30px;

	font-weight: 300;
	text-decoration: none;
	font-size: 3em;
	user-select: none;
	/* text-align: center; */
`;
