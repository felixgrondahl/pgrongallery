import { useState, useEffect } from "react";

const useMedia = (queries, values, defaultValue) => {
  const mediaQueryList = queries.map((q) => window.matchMedia(q));
  // console.log(mediaQueryList)

  const getMatch = () => {
    return (
      values[mediaQueryList.findIndex((mql) => mql.matches)] || defaultValue
    );
  };

  const [value, setValue] = useState(getMatch);
  // console.log(value);

  useEffect(() => {
    const handler = () => setValue(getMatch);
    mediaQueryList.forEach((mql) => mql.addListener(handler));

    return () => mediaQueryList.forEach((mql) => mql.removeListener(handler));
  }, []);

  return value;
};

export default useMedia;
