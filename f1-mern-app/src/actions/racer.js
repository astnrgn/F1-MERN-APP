import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";

export function createNewRacer(productName, quantity) {
  return {
    type: CREATE_RACER,
    payload: {
      productName,
      quantity,
      status: "pending"
    }
  };
}

export const deleteRacer = id => ({ type: DELETE_RACER, payload: id });

export const updateRacer = (id, updatedOrder) => ({
  type: UPDATE_RACER,
  payload: {
    id,
    updatedOrder
  }
});
