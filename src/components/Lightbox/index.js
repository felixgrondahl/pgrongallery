import React, { useState, useEffect, useCallback } from "react";
import PortalModal from "../Modal/PortalModal";
import { LightboxWindow, ImgWrapper, Wrapper, ArrowWrapper } from "./style";
import { useSprings } from "react-spring";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-round.svg";
import CloseButton from "../CloseButton";
import PropTypes from "prop-types";
import { Clamp } from "../../utils/clamp";
import { useDrag } from "react-use-gesture";

const LightboxGallery = ({ images, closeCallback, startIndex = 0 }) => {
	const [imageIndex, setImageIndex] = useState(startIndex);
	const [imageSprings, set] = useSprings(images.length, (i) => ({
		x: (i - imageIndex) * window.innerWidth,
		display: "block",
	}));

	const updateSprings = useCallback(
		(movement, currentIndex) => {
			set((i) => {
				if (i < currentIndex - 1 || i > currentIndex + 1) {
					return { display: "none" };
				}
				const x = (i - currentIndex) * window.innerWidth + movement;
				return { x, display: "block" };
			});
		},
		[set]
	);

	//since there are multiple ways we can update the ImageIndex we need to update it together with the springs
	const updateImageIndex = useCallback(
		(dir) => {
			const newIndex = Clamp(imageIndex + dir, 0, images.length - 1);
			updateSprings(0, newIndex);
			setImageIndex(newIndex);
		},
		[imageIndex, images.length, updateSprings]
	);

	useEffect(() => {
		const handleKey = (event) => {
			if (event.key === "Escape") {
				closeCallback();
			} else if (event.key === "ArrowRight") {
				updateImageIndex(1);
			} else if (event.key === "ArrowLeft") {
				updateImageIndex(-1);
			}
		};
		document.addEventListener("keyup", handleKey);

		return () => {
			document.removeEventListener("keyup", handleKey);
		};
	}, [closeCallback, images.length, updateImageIndex]);

	//Gesture init
	const bind = useDrag((state) => {
		if (state.active && state.distance > window.innerWidth / 3) {
			state.cancel(updateImageIndex(state.direction[0] > 0 ? -1 : 1));
		}
		updateSprings(state.active ? state.movement[0] : 0, imageIndex);
	});

	return (
		<PortalModal modalId="modal_lightbox" onClick={() => closeCallback()}>
			<LightboxWindow onClick={(event) => event.stopPropagation()}>
				{imageSprings.map(({ x, display }, i) => (
					<Wrapper
						{...bind()}
						key={images[i].url}
						style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0px, 0px)`), display: display }}
					>
						<ImgWrapper style={{ backgroundImage: `url(${images[i].url})` }} />
					</Wrapper>
				))}
				{imageIndex > 0 && (
					<ArrowWrapper onClick={() => updateImageIndex(-1)} right={false}>
						<Arrow />
					</ArrowWrapper>
				)}
				{imageIndex < images.length - 1 && (
					<ArrowWrapper onClick={() => updateImageIndex(1)} right={true}>
						<Arrow />
					</ArrowWrapper>
				)}
				<CloseButton dark={false} onClick={() => closeCallback()} />
			</LightboxWindow>
		</PortalModal>
	);
};

LightboxGallery.propTypes = {
	images: PropTypes.array.isRequired,
	closeCallback: PropTypes.func.isRequired,
	startIndex: PropTypes.number,
};

export default LightboxGallery;
