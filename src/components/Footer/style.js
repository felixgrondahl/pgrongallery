import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	bottom: 0;
	left: 0;
	right: 0;
	text-align: center;
	color: white;
	height: 100px;
	width: 50%;
	margin: auto;

	p {
		color: rgba(256, 256, 256, 0.8);
	}
`;

export const MailLink = styled.a`
	width: 40px;
	margin: 0 auto;

	svg {
		fill: white;
		width: 40px;
		height: 40px;

		transition: transform 0.2s;

		&:hover {
			transform: scale(1.1);
		}
	}
`;