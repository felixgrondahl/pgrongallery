import styled from 'styled-components';
import { animated } from 'react-spring';
import { device } from '../../styles/breakpoints';

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

    @media ${device.tablet} {
        padding: 0px;
    }
`;

export const Image = styled.img`
    width: 100%;
	height: 100%;
	box-sizing: border-box;
	align-self: center;

	object-fit: contain;
    transition: all .3s ease-out;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media(max-width: 768px) {
        object-fit: cover;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;