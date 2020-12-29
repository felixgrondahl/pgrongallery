import React, { useState, useEffect, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as S from "./style";
import { MainColumn } from "../../styles/generic/Containers";
import { FilterButtons } from "../../components/FilterButtons";
import SelectDropdown from "../../components/SelectDropdown/index";
import MasonryGallery from "../../components/MasonryGrid";
import {
	GetCachedProductData,
	sortTypes,
	filters,
	SortProducts,
	FilterProducts,
} from "../../utils/products";
import PaginationNav from "../../components/PaginationNav";
import PropTypes from "prop-types";

const maxPerPage = 8;

const Gallery = ({ cached }) => {
	const [productData, setProductData] = useState(null);
	const [sortBy, setSortBy] = useState(sortTypes.NEWDESCENDING);
	const [filterBy, setFilterBy] = useState(filters[0]);
	const [currentPage, setCurrentPage] = useState(1);
	const history = useHistory();
	const location = useLocation();

	const GetDisplayedProducts = useCallback((products, pageNum) => {
		let displayed = [...products];
		pageNum < 1 && (pageNum = 1);
		//Before we set what products are displayed check what pagination we are at.
		if (displayed.length > maxPerPage) {
			let startIndex = maxPerPage * (pageNum - 1);
			return displayed.splice(startIndex, maxPerPage);
		}

		return displayed;
	}, []);

	useEffect(() => {
		if (cached) {
			const cachedProductData = GetCachedProductData();
			cachedProductData &&
				setProductData({
					all: cachedProductData.data.products,
					active: cachedProductData.data.products,
					displayed: GetDisplayedProducts(cachedProductData.data.products),
				});
		}
	}, [GetDisplayedProducts, cached]);

	const Filter = useCallback(
		(filter) => {
			setFilterBy(filter);
			setCurrentPage(1);
			const activeProducts = SortProducts(
				sortBy,
				FilterProducts(filter, productData.all)
			);
			setProductData({
				...productData,
				active: activeProducts,
				displayed: GetDisplayedProducts(activeProducts, 1),
			});
		},
		[GetDisplayedProducts, productData, sortBy]
	);

	const Sort = useCallback(
		(sort) => {
			setSortBy(sort);
			setCurrentPage(1);
			const activeProducts = SortProducts(
				sort,
				FilterProducts(filterBy, productData.all)
			);
			return setProductData({
				...productData,
				active: activeProducts,
				displayed: GetDisplayedProducts(activeProducts, 1),
			});
		},
		[GetDisplayedProducts, filterBy, productData]
	);

	const ChangePage = (dir) => {
		const page = currentPage > 0 ? currentPage + dir : currentPage;
		window.scrollTo(0, 0);
		setProductData({
			...productData,
			active: productData.active,
			displayed: GetDisplayedProducts(productData.active, page),
		});
		setCurrentPage(page);
	};

	return (
		<>
			{productData && (
				<MainColumn>
					<S.MainWrapper>
						<S.GalleryButtons>
							<FilterButtons
								filters={filters}
								currentFilter={filterBy}
								OnFilter={Filter}
							/>
							<p style={{ display: "inline-block" }}>SORT BY: </p>
							<SelectDropdown
								options={sortTypes}
								onChange={(val) => Sort(val)}
							/>
						</S.GalleryButtons>
						<div style={{ marginBottom: "10px" }}>
							<MasonryGallery
								data={productData.displayed.map((item) => ({
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
						</div>

						<PaginationNav
							totalProducts={productData.active.length}
							currentPage={currentPage}
							maxPerPage={maxPerPage}
							onNext={() => ChangePage(1)}
							onPrev={() => ChangePage(-1)}
						/>
					</S.MainWrapper>
				</MainColumn>
			)}
		</>
	);
};

Gallery.propTypes = {
	cached: PropTypes.bool,
};

export default Gallery;
