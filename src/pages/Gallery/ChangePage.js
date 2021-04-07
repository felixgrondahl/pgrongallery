

export const ChangePage = (dir, currentPage) => {
	const page = currentPage > 0 ? currentPage + dir : currentPage; //clamp
	window.scrollTo(0, 0);
	
    return page;
};
