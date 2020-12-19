import { useState, useEffect } from "react";

const useMedia = (queries, values, defaultValue) => {
	const mediaQueryList = queries.map((q) => window.matchMedia(q));

	const getMatch = () => {
		return (
			values[mediaQueryList.findIndex((mql) => mql.matches)] || defaultValue
		);
	};

	const [value, setValue] = useState(getMatch);

	useEffect(() => {
		const handler = () => setValue(getMatch);
		mediaQueryList.forEach((mql) => mql.addListener(handler));

		return () => mediaQueryList.forEach((mql) => mql.removeListener(handler));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return value;
};

export default useMedia;
