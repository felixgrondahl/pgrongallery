// import { useEffect, useState } from "react";
import { getCachedData, cacheFreshData } from "./request";

export const url =
	"https://api-eu-central-1.graphcms.com/v2/ckheo6d19dlkq01zd5jgmfg1a/master";

export const sortTypes = {
	NEWDESCENDING: "NEWEST ↓",
	NEWASCENDING: "NEWEST ↑",
	PRICEDESCENDING: "PRICE ↓",
	PRICEASCENDING: "PRICE ↑",
};

export const filters = [
	"all",
	"sculptures",
	"paintings",
	"drawings",
	"mixedmedia",
];

export const SortProducts = (sortType, products) => {
	let sorted = [...products];

	if (sortType === sortTypes.NEWDESCENDING)
		sorted.sort(
			(a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
		);
	else if (sortType === sortTypes.NEWASCENDING)
		sorted.sort(
			(a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt)
		);
	else if (sortType === sortTypes.PRICEDESCENDING)
		sorted.sort((a, b) => Date.parse(b.price) - Date.parse(a.price));
	else if (sortType === sortTypes.PRICEASCENDING)
		sorted.sort((a, b) => Date.parse(a.price) - Date.parse(b.price));

	return sorted;
};

export const FilterProducts = (filter, products) => {
	let filtered = [...products];

	if (filter !== filters[0]) {
		filtered = filtered.filter((product) => product.type.includes(filter));
	}
	console.log(filtered);
	// filtered = SortProducts(sortBy, filtered);
	return filtered;
};

export const GetCachedProductData = () => {
	const cachedProducts = getCachedData(url);
	// console.log(cachedProducts);
	return cachedProducts ? cachedProducts : null;
};

export const CacheData = async () => {
	const data = GetCachedProductData();
	if (data) {
		//Check hours passed since last cache, note we dont need the full date for this.
		const timePassed = Math.abs(data.timeCached - new Date().getHours()); //data.dateCached.
		if (timePassed > 1) {
			//if cached data is more than 1 hour old, get fresh data to cach.
			await CacheFreshProductData();
		}
	} else {
		//If we have no cached data just get fresh data
		await CacheFreshProductData();
	}
};

export const CacheFreshProductData = async () => {
	// console.log("Caching Fresh Data!");
	const query = `
            {
                products {
					publishedAt
					id
					price
					title
					description
					type
					images {
						url
						thumbnail: url(transformation: {image: {resize: {height: 400, width: 400, fit: clip}}})
						height
						width
					}
					productWidth
					productHeight
					productDepth
					sold
				}
            }
        `;

	await cacheFreshData(url, query, true).catch((error) => {
		// console.log(error);
		alert("There seems like something went wrong, please refresh and try again...");
		localStorage.removeItem(url);
	});

	// console.log(products);

	// return products.products;
};

export const AddProductToCart = (productData) => {
	//First get curret cart items from localstorage
	const currentCart = localStorage.getItem("cart");
	// productData.quantity = 1;

	//Do we have any current cart items?
	if (currentCart) {
		//If true: add productData to current cart items and update localstorage with new products.
		//cart is and array of objects
		const cart = JSON.parse(currentCart);
		// console.log("We already have a cart: " + cart);
		//Do we already have this product in our cart? if true: add +1 to quantity of said product.
		const existingProductIndex = cart.findIndex((p) => p.id === productData.id);
		if (existingProductIndex > -1) {
			// console.log(`${productData.title} already exists in your cart`);
		} else {
			console.log(
				`Product: ${productData.title} does not exist in your cart, adding it...`
			);
			cart.push(productData);
		}

		// console.log(`Setting new cart: ${cart}`);
		localStorage.setItem("cart", JSON.stringify(cart));
	} else {
		// console.log(
		// 	`You don't have a cart item in you localStorage yet, adding it...`
		// );
		localStorage.setItem("cart", JSON.stringify([productData]));
	}

	// localStorage.setItem(key, JSON.stringify(obj));
	//If false: create new localstorage item and add the productData to it.
};

export const RemoveItemFromCart = (productId) => {
	const currentCart = localStorage.getItem("cart");
	const cart = JSON.parse(currentCart);
	const existingProductIndex = cart.findIndex((p) => p.id === productId);
	cart.splice(existingProductIndex, 1);

	localStorage.setItem("cart", JSON.stringify(cart));
};
