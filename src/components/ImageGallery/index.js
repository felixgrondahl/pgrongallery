import React from "react";
import MasonryGrid from "../MasonryGrid";
import { Wrapper } from "./style";
import PropTypes from "prop-types";

/*imageData is an array of objects with the neccesary data per image
    image: thumbnail
    id: unique id
    height: pixel height we want the thumbnal to have
    onClick: function callback what happens when we click an image
*/
export const ImageGallery = ({ imageData }) => {

	return (
		<Wrapper>
			<MasonryGrid data={imageData} />
		</Wrapper>
	);
};

ImageGallery.propTypes = {
	imageData: PropTypes.array,
};
