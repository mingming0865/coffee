import {getOrder, getCate} from '../service/Api';
import {instance} from '../service/Api';
const initState = {
  products: [],
  productDetail: null,
};
const url = '/v2';
export const getProduct = params => async dispatch => {
  const result = await instance.get(`${url}/menu`, params);
  console.tron.log('result', result);
  dispatch({type: 'GET_DATA', product: result?.data?.data});
};
export const getProductDetailApi = id => async dispatch => {
  const result = await getOrder(id);
  dispatch({type: 'GET_DETAIL', productDetail: result?.data});
};
export default function productReducer(state = initState, action) {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        products: action.product,
      };
    case 'GET_DETAIL':
      return {
        ...state,
        productDetail: action.productDetail,
      };
    default:
      return state;
  }
}
