const writeToCache = (key, dataToStore) => {
    const obj = { data: dataToStore, timeCached: new Date().getHours() };
	return localStorage.setItem(key, JSON.stringify(obj));
};

const readFromCache = (key) => {
	// console.log(JSON.parse(localStorage.getItem(key)));

	return localStorage.getItem(key)
		? JSON.parse(localStorage.getItem(key))
		: null;
};

export { readFromCache, writeToCache };
