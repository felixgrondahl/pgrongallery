import styled from "styled-components";
// import { TextButton } from "../../styles/generic/Button";

export const Wrapper = styled.button`
	/* display: inline-flex; */
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: middle;
	top: 10px;
	right: 10px;
	width: 40px;
	height: 40px;

	cursor: pointer;
	
	svg {
		width: 35px;
		height: 35px;
		fill: ${(props) => (props.dark ? "rgba(0, 0, 0, 0.6);" : "rgba(255, 255, 255, 0.6)")};
	}

	@media (max-width: 768px) {
		top: 10px;
	}
`;
