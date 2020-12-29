import styled from "styled-components";

export const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
`;

export const MailIcon = styled.svg`
	fill: rgba(256, 256, 256, 0.6);
	will-change: color;
	width: 30px;
	height: 30px;
	margin: 0 auto;

	transition-property: fill;
	transition-duration: 0.25s;

	&:hover {
		fill: white;
	}
`;