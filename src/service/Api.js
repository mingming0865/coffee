import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  timeout: 1000,
});
// https://api.thecoffeehouse.com/api/v5/stores/all-pickup
export const getProduct = params => instance.get('/v2/menu', params);
export const getNewsfeed = params => instance.get('/v5/news/newsfeed', params);
export const getCate = params => instance.get('/v2/category/web', params);
export const getAllStore = params => instance.get('/get_all_store', params);
export const login = params => instance.post('verify_mobile', params);
