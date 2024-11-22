import {getProduct} from '../service/Api';

const initialState = {
  products: [],
  cart: [],
};
// []

export const getProductList = () => async dispatch => {
  try {
    const response = await getProduct();
    // console.tron.log('data', response?.data?.data);
    dispatch({type: 'GET_DATA', data: response?.data?.data});
  } catch (error) {
    console.error(error);
  }
};

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state,
        products: action?.data,
      };

    case 'ADD_TO_CART':
      console.log('action', action.data); // => { type: "ADD_TO_CART", data: data }
      // kiem tra sp da co trong gio hang hay chua
      const isIndExisted = state.cart?.findIndex(
        e => e?._id === action.data?._id,
      ); // nếu có sp thì trả ra index của phần tử đó, còn không thì trả ra -1
      if (isIndExisted !== -1) {
        console.log(state.cart[isIndExisted]);
        state.cart[isIndExisted].quantity =
          state.cart[isIndExisted].quantity + 1;
        console.log('state.cart', state.cart);
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        // chua co trong gio hang
        return {
          cart: [...state.cart, action.data],
        };
      }

    case 'REMOVE_ITEM':
      console.log(action);
      return {
        ...state,
        cart: state.cart.filter(e => e._id !== action.data._id),
      };

    case 'INCREASE_QUANTITY':
      const isIndExistedIncreaseQuantity = state.cart?.findIndex(
        e => e?._id === action.data?._id,
      ); // tim index cua item đấy trong mảng cart
      state.cart[isIndExistedIncreaseQuantity].quantity =
        state.cart[isIndExistedIncreaseQuantity].quantity + 1;
      return {
        ...state,
        cart: [...state.cart],
      };
    case 'REDUCE_QUANTITY':
      const isIndExistedReduceQuantity = state.cart?.findIndex(
        e => e?._id === action.data?._id,
      );
      state.cart[isIndExistedReduceQuantity].quantity =
        state.cart[isIndExistedReduceQuantity].quantity - 1;
      return {
        ...state,
        cart: [...state.cart],
      };

    case 'REMOVE_ALL':
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
