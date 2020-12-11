import styled from 'styled-components';
import { animated } from 'react-spring';
 
export const LightboxWindow = styled.div`
    width: 97%;
    height: 97%;
    /* display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center; */
    /* background-color: white; */
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    /* justify-content: space-between; */

    .arrow {
        cursor: pointer;
        /* opacity: 1; */
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 999;
    }

    .arrowRight  {
        right: 0;
        /* float: right; */
        /* margin-right: 5%; */
        /* right: 10%; */
        /* margin-right: 10%;     */ 
    }

    .arrowLeft  {
        left: 0;
        /* float: left; */
        /* margin-left: 1fr;     */
    }
`;

export const LightboxImg = styled(animated.img)`
    /* padding: 10%; */
    width: 95%;
    height: 95%;
    /* padding: 20px; */
    object-fit: contain;
    background-color: #09090a;
    box-shadow: 0px 0px 40px -10px #000000;
    position: absolute;

    /* top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); */
`;