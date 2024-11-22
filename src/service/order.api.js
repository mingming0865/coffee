import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.94:3000',
  timeout: 1000,
});
// https://api.thecoffeehouse.com/api/v5/stores/all-pickup
export const getList = params => instance.get('/voucher', params);
