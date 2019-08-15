import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";

const DEFAULT_STATE = {
  orders: []
};

export default function orderReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_RACER:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    case UPDATE_RACER:
      return {
        ...state,
        orders: state.orders.map((order, index) => {
          if (index !== action.payload.id) {
            return order;
          }
          return {
            ...order,
            ...action.payload.updatedOrder
          };
        })
      };
    case DELETE_RACER:
      return {
        ...state,
        orders: state.orders.filter((order, id) => {
          return id !== action.payload;
        })
      };
    default:
      return state;
  }
}
