export const DisplayedProducts = (products, pageNum, maxPerPage) => {

	let displayed = [...products];
	pageNum < 1 && (pageNum = 1);   //clamp the pageNum to 1

	//Before we set what products are displayed check what pagination we are at.
	if (displayed.length > maxPerPage) {
		let startIndex = maxPerPage * (pageNum - 1);
		return displayed.splice(startIndex, maxPerPage);
	}

	return displayed;
};