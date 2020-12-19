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
	/* &:hover {
		transform: scale(1.03);
	}

	&:active {
		transform: scale(0.97);
	} */
`;

// export const Notif = styled.div`
// 	position: absolute;
// 	bottom: 35px;
// 	pointer-events: none;
// 	transform: translate(130%, 20%);
// 	border-radius: 50%;
// 	background-color: red;
// 	width: 1em;
// 	height: 1em;
// 	font-size: 0.65em;
// 	display: flex;
// 	align-items: center;
// 	justify-items: center;
// 	margin: 0;
// 	padding: 3px;
// 	justify-content: space-around;
// `;
