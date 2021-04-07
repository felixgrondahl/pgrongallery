import React from "react";
import { useTransition, config } from "react-spring";
import useMedia from "../../Hooks/useMedia";
import useResizeObserver from "use-resize-observer";
import * as S from "./style";
import PropTypes from "prop-types";

const numberOfRows = (numOfImages, numOfColumns) => {
	if(numOfImages <= 4) return (4 / numOfColumns);
	return numOfImages >= 8 ? (12 / numOfColumns) : (8 / numOfColumns);
}

//data needs: [{image, id, height, onClick()}]
const MasonryGrid = ({data}) => {
	const numColumns = useMedia(
		["(min-width: 1100px)", "(min-width: 768px)"],
		[4, 2],
		2
	);

	const { ref, width = 1 } = useResizeObserver();
	const columnWidth = width / numColumns;
	const colHeights = new Array(numColumns).fill(0);

	//initialize all items with correct height width and position, etc.
	const gridItems = data.map((item) => {
		const colIndex = colHeights.indexOf(Math.min(...colHeights));
		const xy = [columnWidth * colIndex, colHeights[colIndex]];
		colHeights[colIndex] += item.height;

		return {
			...item,
			xy,
			width: columnWidth,
			height: item.height,
			url: item.image,
			id: item.id,
		};
	});

	const galleryTransition = useTransition(gridItems, (item) => item.id, {
		config: { ...config.default },
		from: (item) => ({
			transform: `translate3d(0px, ${item.xy[1]}px, 0px)`,
			opacity: 0,
		}),
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
		<S.Wrapper ref={ref} style={{ height: `${400 * (numberOfRows(data.length, numColumns))}px` }}>
			<S.Gallery>
				{galleryTransition.map(({ item, props, key }) => (
					<S.ImageWrapper key={key} style={props}>
						<S.Image
							onClick={() => item.onClick()}
							key={`url(${item.url})`}
							src={item.url}
							alt={`${item.title} artwork thumbnail`}
						/>
					</S.ImageWrapper>
				))}
			</S.Gallery>
		</S.Wrapper>
	);
};

MasonryGrid.propTypes = {
	data: PropTypes.array,
};

export default MasonryGrid;
