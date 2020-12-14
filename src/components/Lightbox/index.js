import React, { useState, useEffect, useRef } from "react";
import PortalModal from "../Modal/PortalModal";
import { LightboxWindow, LightboxImg } from "./style";
import { useTransition } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "../CloseButton";
import PropTypes from "prop-types";
import { Clamp } from "../../utils/clamp";

const LightboxGallery = ({ images, closeCallback, startIndex = 0 }) => {
	const isOpen = useRef(true);
	// const imageIndex = useRef(startIndex); //index wont work correctly if I dont use Ref
	const [imageIndex, setImageIndex] = useState(startIndex);

	useEffect(() => {
		const handleKey = (event) => {
			if (isOpen.current) {
				if (event.key === "Escape") {
					closeCallback();
				} else if (event.key === "ArrowRight") {
					setImageIndex(i => Clamp(i + 1, 0, images.length - 1));
				} else if (event.key === "ArrowLeft") {
					setImageIndex(i => Clamp(i - 1, 0, images.length - 1));
				}
			}
		};
		document.addEventListener("keyup", handleKey);

		return () => {
			isOpen.current = false;
			document.removeEventListener("keyup", handleKey);
		};
	}, [closeCallback, images.length]); 

	const transition = useTransition(images[imageIndex].url, (item) => item, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
		// (isOpen &&
		<PortalModal modalId="modal_lightbox" onClick={() => closeCallback()}>
			<LightboxWindow onClick={(event) => event.stopPropagation()}>
				{imageIndex > 0 && (
					<FontAwesomeIcon
						className="arrowLeft arrow"
						icon={faCaretLeft}
						size="4x"
						color="white"
						onClick={(event) => {
							event.stopPropagation();
							setImageIndex(i => Clamp(i - 1, 0, images.length - 1));
						}}
					/>
				)}
				{/* <FontAwesomeIcon className="arrowLeft arrow" icon={faCaretLeft} size="4x" color="white" onClick={(event) => {event.stopPropagation(); gotoPrevious();}}/> */}
				{imageIndex < images.length - 1 && (
					<FontAwesomeIcon
						className="arrowRight arrow"
						icon={faCaretRight}
						size="4x"
						color="white"
						onClick={(event) => {
							event.stopPropagation();
							setImageIndex(i => Clamp(i + 1, 0, images.length - 1));
						}}
					/>
				)}
				{transition.map(({ item, props, key }) => (
					<LightboxImg
						style={{ ...props }}
						src={item}
						key={key}
						onClick={(event) => event.stopPropagation()}
					/>
				))}

				<CloseButton dark={false} onClick={() => closeCallback()} />
			</LightboxWindow>
		</PortalModal>
	);
};

LightboxGallery.propTypes = {
	images: PropTypes.array.isRequired,
	closeCallback: PropTypes.func.isRequired,
	startIndex: PropTypes.number
}

export default LightboxGallery;
