import {combineReducers} from 'redux';
import giftReducer from './giftReducer';
import petReducer from './petReducer';
import cartReducer from './cartReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import HistoryReducer from './historyReducer';
// định nghĩa các reducer khác ...

const rootReducer = combineReducers({
  giftReducer,
  petReducer,
  cartReducer,
  storeReducer,
  productReducer,
  HistoryReducer,
  // nếu có reducer khác thì add thêm ở đây
});

export default rootReducer;
