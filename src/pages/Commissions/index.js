import React, { useCallback, useEffect, useState } from "react";
import { MainColumn } from "../../styles/generic/Containers";
import {
	Wrapper,
	Grid,
	ProjectButton,
	ProjectTitle,
	ImageGrid,
	Image,
	Column,
} from "./style";
import { useTransition, animated } from "react-spring";
import { GetCachedProductData } from "../../utils/products";
import DropdownPanel from "../../components/DropdownPanel";
import LightboxGallery from "../../components/Lightbox";

// eslint-disable-next-line react/prop-types
const Commisions = ({ cached }) => {
	const [projectData, setProjectData] = useState({
		all: [],
		active: [],
	});
	const [showImage, setShowImage] = useState({ show: false, imageIndex: 0 });

	useEffect(() => {
		if (cached) {
			const cachedData = GetCachedProductData();
			cachedData &&
				setProjectData({
					all: cachedData.data.commissions,
					active: cachedData.data.commissions[0],
				});
		}
	}, [cached]);

	const projectTransition = useTransition(
		projectData.active,
		(item) => item.id,
		{
			from: { position: "absolute", opacity: 0 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
		}
	);

	const dropDownCallback = useCallback((event) => {
		setProjectData({
			...projectData,
			active: projectData.all[event.index],
		});
	});

	const ProjectButtons = () => {
		return (
			<>
				{projectData.all.map((element, index) => (
					<ProjectButton
						dark
						key={`projectButton ${element.id}`}
						onClick={() =>
							setProjectData({
								...projectData,
								active: projectData.all[index],
							})
						}
					>
						{index > 0 ? "\u2630" : ""}
						{element.title}
					</ProjectButton>
				))}
			</>
		);
	};

	return (
		<>
			{projectData.all.length > 1 && (
				<MainColumn>
					<Wrapper>
						<Column className="left border">
							<div className="inner">
								<ProjectButtons />
							</div>
						</Column>
						<div className="dropdown">
							<DropdownPanel onChange={dropDownCallback}>
								{projectData.all.map((element) => {
									return element.title;
								})}
							</DropdownPanel>
						</div>
						{projectTransition.map(({ item, props, key }) => (
							<Grid columns={item.projectDescription ? 2 : 1} style={{ ...props }} key={key}>
								<ProjectTitle className="column-title">
									<h3>{item.title}</h3>
								</ProjectTitle>
								<animated.div
									style={{ paddingTop: "20px", paddingLeft: "20px" }}
									className="project-text border"
								>
									<p>{item.projectDescription}</p>
								</animated.div>

								<ImageGrid
									columns={item.images.length > 2 ? 2 : 1}
									className="images"
								>
									{item.images.map((element, index) => {
										return (
											<Image
												key={`thumbnail${item.title}${element.url}`}
												src={element.thumbnail}
												onClick={() =>
													setShowImage({ show: true, imageIndex: index })
												}
											/>
										);
									})}
								</ImageGrid>
							</Grid>
						))}
					</Wrapper>
					{showImage.show && (
						<LightboxGallery
							images={projectData.active.images}
							startIndex={showImage.imageIndex}
							isOpen={showImage.show}
							closeCallback={() => setShowImage({ show: false, imageIndex: 0 })}
						/>
					)}
				</MainColumn>
			)}
		</>
	);
};

export default Commisions;
