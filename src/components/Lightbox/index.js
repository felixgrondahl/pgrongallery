import React, { useState, useEffect, useRef } from "react";
import PortalModal from "../Modal/PortalModal";
import { LightboxWindow, LightboxImg } from "./style";
import { useTransition } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import CloseButton from "../CloseButton";

const LightboxGallery = ({ images, closeCallback, startIndex }) => {
	const isOpen = useRef(true);
	const currentImageIndex = useRef(startIndex); //index wont work correctly if I dont use Ref
	const [IndexState, setIndexState] = useState(startIndex);
	// console.log(currentImageIndex);
	// let imageIndex = 0;

	const gotoPrevious = () => {
		if (currentImageIndex.current > 0) {
			currentImageIndex.current -= 1;
			setIndexState(currentImageIndex.current);
		}
	};

	const gotoNext = () => {
		if (currentImageIndex.current + 1 < images.length) {
			currentImageIndex.current += 1;
			setIndexState(currentImageIndex.current);
		}
	};

	useEffect(() => {
		const handleKey = (event) => {
			if (isOpen.current) {
				if (event.key === "Escape") {
					closeCallback();
				} else if (event.key === "ArrowRight") {
					gotoNext();
					// console.log(currentImageIndex.current);
				} else if (event.key === "ArrowLeft") {
					gotoPrevious();
					// console.log(currentImageIndex.current);
				}
			}
		};
		document.addEventListener("keyup", handleKey);

		return () => {
			isOpen.current = false;
			document.removeEventListener("keyup", handleKey);
		};
	}, []);

	const transition = useTransition(images[IndexState].url, (item) => item, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
		// (isOpen &&
		<PortalModal modalId="modal_lightbox" onClick={() => closeCallback()}>
			<LightboxWindow onClick={(event) => event.stopPropagation()}>
				{IndexState > 0 && (
					<FontAwesomeIcon
						className="arrowLeft arrow"
						icon={faCaretLeft}
						size="4x"
						color="white"
						onClick={(event) => {
							event.stopPropagation();
							gotoPrevious();
						}}
					/>
				)}
				{/* <FontAwesomeIcon className="arrowLeft arrow" icon={faCaretLeft} size="4x" color="white" onClick={(event) => {event.stopPropagation(); gotoPrevious();}}/> */}
				{IndexState < images.length - 1 && (
					<FontAwesomeIcon
						className="arrowRight arrow"
						icon={faCaretRight}
						size="4x"
						color="white"
						onClick={(event) => {
							event.stopPropagation();
							gotoNext();
						}}
				/>)}
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

export default LightboxGallery;
