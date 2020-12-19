import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled.div`
    display: "flex";
`;

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

export const Image = styled.img`
    width: 100%;
	height: 100%;
	box-sizing: border-box;
	align-self: center;

	object-fit: contain;
	/* background-color: rgba(42, 40, 52, 0.2); */
	/* background-color: rgba; */
	/* border: 1px solid rgba(17, 17, 21, 0.5); */
	/* background-color: #121418; */

    /* width: 100%;
    height: 100%; */
    /* border-radius: 2px; */
    /* box-sizing: border-box; */
    /* background-size: fit; */
    /* background-position: center; */
    /* background-repeat: no-repeat; */
    transition: all .3s ease-out;
    /* border: 2px solid rgba(256, 256, 256, 0); */
    border: 1px solid rgba(0, 0, 0, 0);

    &:hover {
        /* transform: scale(1.005); */
        /* border: 2px solid rgba(256, 256, 256, 1); */
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;