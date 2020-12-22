import styled from "styled-components";
import { TextContainer } from "../../styles/generic/Containers";

export const Wrapper = styled(TextContainer)`
	width: 100%;
	white-space: pre-line;
	margin-top: 60px;

	p {
		@media (max-width: 768px) {
			padding: 0.5em 0 0.5em 1em;
		}
	}
`;
