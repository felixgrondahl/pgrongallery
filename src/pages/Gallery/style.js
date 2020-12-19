import styled from "styled-components";
import { Header } from "../../styles/generic/Containers";
import HeaderBackground from "../../assets/images/Gallery/wings.png";
import { BaseContainer } from "../../styles/generic/Containers";

// export const Header = styled(MainHeaderContainer)`
//     /* display: block; */
//     /* height: ${props => props.height ? `calc(${props.height} - ${props.theme.navbarHeight})` : `calc(100vh - ${props.theme.navbarHeight})`}; */
//     /* calc(65vh - 60px) */
//     /* width: 100%; */
//     /* text-align: center;

//     background: linear-gradient(60deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 33%, rgba(255,249,249,0) 66%, rgba(0,0,0,0.5) 100%);
//     background-color: #525464; */
// /*
//     h1 {
//         position: relative;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50% ,-50%);
//     } */
// `;

// export const GalleryBackground = styled.div`
//     background-color: #131417;
//     padding-top: 20px;
// `;

export const GalleryHeader = styled(Header)`
	background-image: url(${HeaderBackground});
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	/* .FilterButtons {
        position: absolute;
        bottom: 0px;
        margin-bottom: 10px;
        width: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
    } */
`;

export const MainWrapper = styled(BaseContainer)`
	padding: 40px 0px;
	margin-top: 60px;
	background-color: white;
	/* background: linear-gradient(180deg, rgba(0,0,0,1)  0%, rgba(255,255,255,1) 100%); */
`;

export const GalleryItemWrapper = styled.div`
	display: grid;
	justify-content: center;
	gap: 30px;
	grid-template-columns: repeat(3, 1fr);
	/* grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); */
`;

export const GalleryButtons = styled.div`
	/* margin-bottom: 20px */
	display: inline-block;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	padding-bottom: 40px;
`;

// export const GalleryItemWindow = styled(MainModal)`
//     /* width: 100%;
//     height: 100%; */
//     display: grid;
//     justify-content: center;
//     grid-template-columns: 50% 50%;
//     /* background-color: #191a1f; */
//     /* width: 1100px;
//     height: 850px;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%); */
// `;
