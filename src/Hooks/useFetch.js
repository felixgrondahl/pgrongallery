import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    // return (data.find(ele => (ele.id === id))) || data[0];    //if we don't find the element return object 0 <- change this
    const cache = useRef({});
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    // const [productImg, setProductImg] = useState();

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //       const { products } = await request(
    //         "https://api-eu-central-1.graphcms.com/v2/ckheo6d19dlkq01zd5jgmfg1a/master",
    //         `
    //             {
    //                 products {
    //                     id
    //                     title
    //                     slug
    //                 }
    //             }
    //             `
    //       );
    
    //       setProducts(products);
    //     };
    
    //     fetchProducts();
    //   }, []);

    useEffect(() => {
        if(!url) return;

        const getData = async() => {
            setLoading(true);

            if(cache.current[url]) {
                console.log('already fetched, returning cached');
                const data = cache.current[url];
                setData(data);
                setLoading(false);
            } else {
                const fetchedData = await fetch(url);
                const data = await fetchedData.json();
                cache.current[url] = data;
                setData(data);
                setLoading(false);
            }

        };

        getData();
    }, []);

    return {data, loading};
}

// export default useFetch;

