import styled from 'styled-components';
import { animated } from 'react-spring';

export const Gallery = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ImageWrapper = styled(animated.div)`
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    /* border-radius: 2px; */
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: all .3s ease-out;
    border: 1px solid rgba(256, 256, 256, 0);

    &:hover {
        transform: scale(1.005);
        border: 1px solid rgba(256, 256, 256, 1);
    }
`;