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
    transition: all .3s ease-out;
    border: 1px solid rgba(0, 0, 0, 0.05);

    @media(max-width: 768px) {
        object-fit: cover;
    }

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;