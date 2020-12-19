import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTransition, config } from "react-spring";
import useMedia from "../../Hooks/useMedia";
// import useResizeObserver from "../../Hooks/useResizeObserver";
import useResizeObserver from "use-resize-observer";
import * as S from "./style";
import PropTypes from "prop-types";
// import data from '../../TestData/data';

const MasonryGrid = ({ data }) => {
	const location = useLocation();
	const numColumns = useMedia(
		["(min-width: 1100px)", "(min-width: 768px)"],
		[4, 2],
		2
	);

	const { ref, width = 1, }  = useResizeObserver();
	const columnWidth = width / numColumns;

	const colHeights = new Array(numColumns).fill(0);
	// console.log(data);

	//initialize all items with correct height width and position, etc.
	const gridItems = data.map((item) => {
		const colIndex = colHeights.indexOf(Math.min(...colHeights));
		const xy = [columnWidth * colIndex, colHeights[colIndex]];
		// console.log(item.images[0].url);
		const image = item.images[0];
		const height = 400;
		colHeights[colIndex] += height;

		return {
			...item,
			xy,
			width: columnWidth,
			height: height,
			url: image.thumbnail,
			id: item.id,
		};
	});

	const galleryTransition = useTransition(gridItems, item => item.id, {
		config: { ...config.default },
		from: {
			// height: 0,
			transform: `translate3d(0px, 0px, 0px)`,
			opacity: 0,
		},
		enter: (item) => ({
			height: item.height,
			width: item.width,
			transform: `translate3d(${item.xy[0]}px, ${item.xy[1]}px, 0px)`,
			opacity: 1,
		}),
		update: (item) => ({
			height: item.height,
			width: item.width,
			transform: `translate3d(${item.xy[0]}px, ${item.xy[1]}px, 0px)`,
			opacity: 1,
		}),
		leave: {
			transform: `translate3d(0px, 0px, 0px)`,
			opacity: 0,
		},
	});

	return (
		<S.Wrapper
			ref={ref}
			style={{ height: `${400 * (8/numColumns)}px` }}
		>
			<S.Gallery>
				{galleryTransition.map(({ item, props, key }) => (
					<S.ImageWrapper key={key} style={props}>
						<Link key={`?product=true&productId=${item.id}`}
							to={{
								pathname: location.url,
								search: `?product=true&productId=${item.id}`,
							}}
						>
							<S.Image key={`url(${item.url})`} src={item.url} />
						</Link>
					</S.ImageWrapper>
				))}
			</S.Gallery>
		</S.Wrapper>
	);
};

MasonryGrid.propTypes = {
	data: PropTypes.array
}

export default MasonryGrid;
