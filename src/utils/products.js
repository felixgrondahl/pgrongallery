import { getCachedData, cacheFreshData } from "./request";

export const url ="https://api-eu-central-1.graphcms.com/v2/ckheo6d19dlkq01zd5jgmfg1a/master";
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

				commissions {
					id
					title
					projectDescription
					images {
						url
						thumbnail: url(transformation: {image: {resize: {height: 400, width: 400, fit: clip}}})
						height
						width
					}
				}
            }
        `;

	await cacheFreshData(url, query, true).catch((error) => {
		alert(
			"There seems like something went wrong, please refresh and try again..."
		);
		localStorage.removeItem(url);
	});
};