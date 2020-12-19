import styled from 'styled-components';
import { FreeFloating, Header } from '../../styles/generic/Containers';
// import HeaderBackground from '../../assets/images/Home/HomeHeaderBkg.png';
// import HeaderBackgroundOutline from '../../assets/images/Home/HomeHeaderBkg-outline.png';
// import BottomImage from '../../assets/images/Home/closedeyes-cut-new.png';


export const HomeHeader = styled(Header)`

    /* margin-bottom: 30px; */
    position: relative;
    /* background: linear-gradient(60deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 33%, rgba(255,249,249,0) 66%, rgba(0,0,0,0.7) 100%); */
`;

export const TextContainer = styled(FreeFloating)`
    /* margin: 60px; */
    /* background-color: #262626; */
    /* margin-top: 25px; */
    /* margin-bottom: 30px; */
    /* margin-left: ${props => props.pushed ? "200px" : "-100px"}; */
    width: 100%;
    margin-left: ${props => props.left ? "-20%" : "20%"};
    padding: 30px;
    /* width: 100%; */
    /* position: relative; */

    @media(max-width: 768px) {
		width: 100%;
        margin: 20px 0px;
	}
    
    p {
        border-left: 1px solid rgba(50, 50, 50, 0.5);
        padding: 5px;
    }
`;

export const OverlayImg = styled.img`

    object-fit: contain;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    
    /* position: relative; */
    /* position: relative;


    /* background-repeat: no-repeat; */
    /* background-size: auto 100%; */
    /* background-position: center; */
    /* background-position-x: 45%; */

`;