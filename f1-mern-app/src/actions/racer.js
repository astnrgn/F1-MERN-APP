import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";

export function createNewRacer(name, birthplace, team, rank, image) {
  return {
    type: CREATE_RACER,
    payload: {
      name,
      birthplace,
      team,
      rank,
      image
    }
  };
}

export const deleteRacer = id => ({ type: DELETE_RACER, payload: id });

export const updateRacer = (id, updatedRacer) => ({
  type: UPDATE_RACER,
  payload: {
    id,
    updatedRacer
  }
});
