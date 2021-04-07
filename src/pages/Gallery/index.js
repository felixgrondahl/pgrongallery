import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as S from "./style";
import { MainColumn } from "../../styles/generic/Containers";
import { ImageGallery } from "../../components/ImageGallery";
import { GetCachedProductData } from "../../utils/products";
import PaginationNav from "../../components/PaginationNav";
import PropTypes from "prop-types";
import { ChangePage } from "./ChangePage";
import { DisplayedProducts } from "./DisplayedProducts";
import { FilterProducts, filters } from "./FilterProducts";
import { SortProducts, sortTypes } from "./SortProducts";
import { FilterPanel } from "../../components/Filter/FilterPanel";
import { Helmet } from "react-helmet";

const maxPerPage = 12;

const Gallery = ({ cached }) => {
	const [productData, setProductData] = useState(null);
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		if (cached) {
			const cachedProductData = SortProducts(sortTypes.NEWDESCENDING, GetCachedProductData().data.products); //Making sure to initial sort on load

			cachedProductData &&
				setProductData({
					all: cachedProductData,
					active: cachedProductData,
					displayed: DisplayedProducts(cachedProductData, 1, maxPerPage),
					sortBy: sortTypes.NEWDESCENDING,
					filterBy: filters[0],
					currentPage: 1,
				});
		}
	}, [cached]);

	const updateFilter = (filter) => {
		const filteredProducts = FilterProducts(filter, productData.all);
		setProductData({
			...productData,
			active: filteredProducts,
			displayed: DisplayedProducts(filteredProducts, 1, maxPerPage),
			filterBy: filter,
			currentPage: 1,
		});
	};

	const updatePage = (dir) => {
		const newPage = ChangePage(dir, productData.currentPage);
		if (newPage !== productData.currentPage) {
			setProductData({
				...productData,
				displayed: DisplayedProducts(productData.active, newPage, maxPerPage),
				currentPage: newPage,
			});
		}
	};

	return (
		<>
			<Helmet>
				<title>Peter Grondahl | Gallery</title>
				<meta
					name="description"
					content="Browse beautiful art by Peter Gröndahl in the gallery."
				/>
				<link rel="canonical" href="https://pgron.com/Gallery" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://pgron.com/Gallery" />
				<meta property="og:title" content="Peter Grondahl | Gallery" />
				<meta property="og:description" content="Peter Grondahl Gallery." />
			</Helmet>
			{productData && (
				<MainColumn>
					<S.Wrapper>
						{/* Filter And Sort buttons */}
						<FilterPanel
							filters={filters}
							currentFilter={productData.filterBy}
							onFilter={(filter) => updateFilter(filter)}
						/>
						<ImageGallery
							imageData={productData.displayed.map((item) => ({
								image: item.images[0].thumbnail,
								id: item.id,
								height: 400,
								onClick: () =>
									history.push({
										pathname: location.pathname,
										search: `?product=true&productId=${item.id}`,
									}),
							}))}
						/>

						<PaginationNav
							totalProducts={productData.active.length}
							currentPage={productData.currentPage}
							maxPerPage={maxPerPage}
							onNext={() => updatePage(1)}
							onPrev={() => updatePage(-1)}
						/>
					</S.Wrapper>
				</MainColumn>
			)}
		</>
	);
};

Gallery.propTypes = {
	cached: PropTypes.bool,
};

export default Gallery;
