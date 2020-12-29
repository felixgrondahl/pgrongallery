import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CartButton = styled(FontAwesomeIcon)`
	cursor: pointer;
	transition-duration: 0.2s;
	transition-property: transform;
	font-size: 1.6em;

	@media (max-width: 768px) {
            font-size: 1.3em;
        }
`;
