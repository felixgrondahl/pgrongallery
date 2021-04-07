export const filters = [
	"all",
	"sculptures",
	"paintings",
	"drawings",
	"mixedmedia",
];

export const FilterProducts = (filterBy, products) => {
    //Get all the products with the correct filter type
	let filtered = [...products];
	if (filterBy !== filters[0]) {
		filtered = filtered.filter((product) => product.type.includes(filterBy));
	}

    return filtered;
};