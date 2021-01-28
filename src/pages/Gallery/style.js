import styled from "styled-components";
import { Header } from "../../styles/generic/Containers";
import HeaderBackground from "../../assets/images/Gallery/wings.png";
import { BaseContainer } from "../../styles/generic/Containers";

export const GalleryHeader = styled(Header)`
	background-image: url(${HeaderBackground});
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const MainWrapper = styled(BaseContainer)`
	padding: 40px 0px;
	margin-top: 60px;
	background-color: white;
`;

export const GalleryItemWrapper = styled.div`
	display: grid;
	justify-content: center;
	gap: 30px;
	grid-template-columns: repeat(3, 1fr);
`;

export const GalleryButtons = styled.div`
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	padding-bottom: 40px;
`;
