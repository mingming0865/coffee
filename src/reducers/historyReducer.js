const initialState = {
  productsHistory: [],
  gifts: [],
};

export default function HistoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_HISTORY':
      console.log(action);
      return {
        productsHistory: [
          ...state.productsHistory,
          [
            action.data,
            action?.price,
            action?.date,
            action?.address,
            action?.user,
          ],
        ],
      };
    default:
      return state;

    case 'REMOVE_AL':
      return {
        ...state,
        productsHistory: [],
      };
  }
}
