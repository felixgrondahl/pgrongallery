import styled from "styled-components";
import { TextButton } from "../../styles/generic/Button";

export const Close = styled(TextButton)`
	/* cursor: pointer; */
	display: inline-flex;
	align-items: center;

	position: absolute;
	top: -3px;
	right: 0px;
	width: 40px;
	height: 30px;

	font-weight: 300;
	text-decoration: none;
	font-size: 3em;
	user-select: none;
	color: ${(props) => (props.dark ? "rgba(0, 0, 0, 0.6);" : "white")};
	/* color: rgba(0, 0, 0, 0.6); */
	text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
	/* text-align: center; */

	@media (max-width: 768px) {
		top: -7px;
		right: -5px;
		color: ${(props) => (props.dark ? "rgba(0, 0, 0, 0.8);" : "white")};
		/* color: rgba(0, 0, 0, 0.8); */
	}
`;
