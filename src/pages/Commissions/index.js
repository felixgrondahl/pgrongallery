import React, { useEffect, useState } from "react";
import { MainColumn } from "../../styles/generic/Containers";
import { Wrapper } from "./style";
import { GetCachedProductData } from "../../utils/products";
import LightboxGallery from "../../components/Lightbox";
import { FilterPanel } from "../../components/Filter/FilterPanel";
import { ImageGallery } from "../../components/ImageGallery";
import { Helmet } from "react-helmet";

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

	const ProjectsFilters = () => {
		return projectData.all.map((element) => {
			return element.title;
		});
	};

	const updateFilter = (filter) => {
		setProjectData({
			...projectData,
			active: projectData.all.filter((ele) => ele.title === filter)[0],
		});
	};

	return (
		<>
			<Helmet>
				<title>Peter Grondahl | Commissions</title>
				<meta
					name="description"
					content="Peter Gröndahl has created art for many large projects such as Puro Hotel, Nynäshamn Utsikten, and many more."
				/>
				<link rel="canonical" href="https://pgron.com/Commissions" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://pgron.com/Commissions" />
				<meta property="og:title" content="Peter Grondahl | Commissions" />
				<meta property="og:description" content="Peter Grondahl Commissions." />
			</Helmet>
			{projectData.all.length > 1 && (
				<MainColumn>
					<Wrapper>
						<FilterPanel
							filters={ProjectsFilters()}
							currentFilter={projectData.active.title}
							onFilter={(filter) => updateFilter(filter)}
						/>
						<ImageGallery
							imageData={projectData.active.images.map((item, index) => ({
								image: item.thumbnail,
								id: item.url,
								height: 400,
								onClick: () => setShowImage({ show: true, imageIndex: index }),
							}))}
						/>
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
