import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const navWrapper = styled.div`
	margin: auto;
    min-width: 120px;
    max-width: 200px;
    padding: 5px 0px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 2em;

	text-align: center;
	user-select: none;
	/* background-color: rgba(40,40,40,1); */

    /* background: radial-gradient(circle, rgba(40,40,40,1) 0%, rgba(0,0,0,0) 100%); */
`;

export const buttonWrapper = styled.div`
	width: 5em;
	height: 2.5em;

	/* button {
		width: inherit;
		height: inherit;
        font-weight: bold;
	} */
`;
export const arrow = styled(FontAwesomeIcon)`
		width: inherit;
		height: inherit;
        color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition-property: color;
        transition-duration: 0.3s;

        &:hover {
            color: black;
        }
`;
