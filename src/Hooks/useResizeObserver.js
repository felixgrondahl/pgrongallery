import { useRef, useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = () => {
	const ref = useRef();
	const [bounds, setBounds] = useState({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
	});

	const [ro] = useState(
		() => new ResizeObserver(([entries]) => setBounds(entries.contentRect))
	);

	useEffect(() => {
		ro.observe(ref.current);
	}, [ro]);

	return [ref, bounds];
};

export default useResizeObserver;
