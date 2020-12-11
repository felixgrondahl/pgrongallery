import React, { useState, useEffect } from "react";
import * as S from "./style";
import { BaseContainer } from "../../styles/generic/Containers";
import { TextButton } from "../../styles/generic/Button";
import SelectDropdown from "../../components/SelectDropdown/index";
import MasonryGallery from "../../components/MasonryGrid";
import {
	GetCachedProductData,
	sortTypes,
	filters,
	SortProducts,
	FilterProducts,
} from "../../utils/products";
// import { noAuto } from "@fortawesome/fontawesome-svg-core";
import PaginationNav from "../../components/PaginationNav";

const maxPerPage = 8;

const Gallery = (props) => {
	const [productData, setProductData] = useState(null);
	const [sortBy, setSortBy] = useState(sortTypes.NEWDESCENDING);
	const [filterBy, setFilterBy] = useState(filters[0]);
	const [currentPage, setCurrentPage] = useState(1);

	console.log(productData);
	useEffect(() => {
		if (props.cached) {
			// console.log(props.cached);
			const cachedProductData = GetCachedProductData();
			// console.log(cachedProductData);
			cachedProductData &&
				setProductData({
					all: cachedProductData.data.products,
					active: cachedProductData.data.products,
					displayed: GetDisplayedProducts(cachedProductData.data.products),
				});
		}
	}, [props.cached]);

	const GetDisplayedProducts = (products, pageNum) => {
		let displayed = [...products];
		pageNum < 1 && (pageNum = 1);
		//Before we set what products are displayed check what pagination we are at.
		if (displayed.length > maxPerPage) {
			let startIndex = maxPerPage * (pageNum - 1);
			return displayed.splice(startIndex, maxPerPage);
		}

		return displayed;
	};

	const Filter = (filter) => {
		setFilterBy(filter);
		setCurrentPage(1);
		const activeProducts = SortProducts(
			sortBy,
			FilterProducts(filter, productData.all)
		);
		setProductData({
			all: productData.all,
			active: activeProducts,
			displayed: GetDisplayedProducts(activeProducts, 1),
		});
	};

	const Sort = (sort) => {
		// SortProducts(sort, FilterProducts(filterBy, productData.all));
		setSortBy(sort);
		setCurrentPage(1);
		const activeProducts = SortProducts(
			sort,
			FilterProducts(filterBy, productData.all)
		);
		return setProductData({
			all: productData.all,
			active: activeProducts,
			displayed: GetDisplayedProducts(activeProducts, 1),
		});
	};

	const ChangePage = (dir) => {
		const page = currentPage > 0 ? currentPage + dir : currentPage;
		setProductData({
			all: productData.all,
			active: productData.active,
			displayed: GetDisplayedProducts(productData.active, page),
		});
		setCurrentPage(page);
	};

	//Go through all filters create JSX for each button
	const FilterButtons = () => {
		return (
			<div style={{ marginBottom: "15px" }}>
				{filters.map((filter) => {
					return (
						<TextButton
							key={filter}
							active={filter === filterBy}
							onClick={() => Filter(filter)}
						>
							{filter.toUpperCase()}
						</TextButton>
					);
				})}
			</div>
		);
	};

	return (
		<div style={{paddingBottom: "30px"}}>
			
			<main>
				{!productData ? (
					"Loading..."
				) : (
					<React.Fragment>
						<S.GalleryHeader height={"65vh"} style={{ position: "relative" }}>
							<h1>GALLERY</h1>
						</S.GalleryHeader>

						<BaseContainer style={{ padding: "20px 0px" }}>
							<S.GalleryButtons>
								<FilterButtons />
								<p style={{ display: "inline-block", color: "white" }}>
									SORT BY:{" "}
								</p>
								<SelectDropdown
									options={sortTypes}
									onChange={(val) => Sort(val)}
								/>
							</S.GalleryButtons>
							{console.log(productData.displayed)}
							<div style={{marginBottom: "10px"}}>
								<MasonryGallery data={productData.displayed} />
							</div>
							
							<PaginationNav
								totalProducts={productData.active.length}
								currentPage={currentPage}
								maxPerPage={maxPerPage}
								onNext={() => ChangePage(1)}
								onPrev={() => ChangePage(-1)}
							/>
						</BaseContainer>
					</React.Fragment>
				)}
			</main>
		</div>
	);
};

export default Gallery;
