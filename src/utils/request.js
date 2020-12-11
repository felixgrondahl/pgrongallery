import { readFromCache, writeToCache } from './cache';
import { request } from "graphql-request";

const getFreshData = async (url, query, cacheResponse = false) => {
    const data = await request(url, query);
    cacheResponse && writeToCache(url, data);
    return data;
}

const cacheFreshData = async (url, query) => {
    const data = await request(url, query);
    // errors && console.log(errors);
    writeToCache(url, data);
    // return data;
}

const getCachedData = (url) => {
    return readFromCache(url);
}

const getCachedItem = (url, id) => {
    const products = readFromCache(url);
    // console.log(products.find(p => {console.log(`product id = ${p.id} looking for: ${id}`); return (p.id === id)}));
    return products ? products.data.products.find(p => p.id === id) : null;
}

export { getFreshData, getCachedData, getCachedItem, cacheFreshData };