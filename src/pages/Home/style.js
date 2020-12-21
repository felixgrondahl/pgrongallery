import styled from "styled-components";
import {
	BaseContainer,
	FreeFloating,
	Header,
} from "../../styles/generic/Containers";
import BottomImage from "../../assets/images/Home/HomeHeaderBkg.png";

export const HomeHeader = styled(Header)`
	position: relative;
`;

export const AboutContainer = styled(BaseContainer)`
	position: relative;
	margin-top: 30px;

    background-image: url(${BottomImage});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right center;

    @media (max-width: 768px) {
        background-image: none;
    }
`;

export const TextContainer = styled(FreeFloating)`
	padding: 30px;
	width: 70%;
	margin-left: -20px;
	white-space: pre-line;

	@media (max-width: 768px) {
		width: 100%;
		margin: 20px 0px;
        padding: 5px;
		transform: translateX(0);
	}

	p {
		border-left: 1px solid rgba(50, 50, 50, 0.5);
		padding: 5px 5px 5px 5em;
		letter-spacing: 0.12em;

        @media (max-width: 768px) {
		padding: 1em 0 3em 1em;
	}
	}
`;
