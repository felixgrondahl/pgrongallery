import styled from "styled-components";
import { Button } from "../../styles/generic/Button";

export const InputWrapper = styled.div`
	width: 50%;
	text-align: left;
	margin: 5px 0;
	margin: auto;
	#hint {
		font-size: 0.9em;
		color: rgba(30, 30, 30, 1);
		margin-top: -3px;
		/* margin-bottom: 4px; */
		/* font-style: oblique; */
	}

	.react-tel-input input{
		width: 100%;
	}

	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const NameArea = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const SendButton = styled(Button)`
	width: 50%;
	margin-top: 1.5em;
`;

export const ReqSentWrapper = styled.div`
	width: 95%;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
`;
