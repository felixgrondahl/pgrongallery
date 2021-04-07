export const sortTypes = {
	NEWDESCENDING: "NEWEST ↓",
	NEWASCENDING: "NEWEST ↑",
};

export const SortProducts = (sortBy, products) => {
	let sorted = [...products];

	if (sortBy === sortTypes.NEWDESCENDING) sorted.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
	else if (sortBy === sortTypes.NEWASCENDING) sorted.sort((a, b) => Date.parse(a.publishedAt) - Date.parse(b.publishedAt));
	else if (sortBy === sortTypes.PRICEDESCENDING) sorted.sort((a, b) => Date.parse(b.price) - Date.parse(a.price));
	else if (sortBy === sortTypes.PRICEASCENDING) sorted.sort((a, b) => Date.parse(a.price) - Date.parse(b.price));

	return sorted;
};
