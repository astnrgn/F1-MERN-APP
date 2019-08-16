import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";
import axios from "axios";
const searchUrl = "https://f1-mern-app-api.herokuapp.com";

let racers = [];

var DEFAULT_STATE = {
  racers
};

async function getData() {
  try {
    let res = await axios({
      url: searchUrl,
      method: "get",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status === 200) {
      console.log(res.status);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getData().then(res => {
  let racers2 = res.map(list => {
    let x = {
      name: list.name,
      birthplace: list.birthplace,
      team: list.team,
      rank: list.rank,
      image: list.image
    };
    return x;
  });
  for (let i = 0; i < racers2.length; i++) {
    racers.push(racers2[i]);
  }
});

export default function racerReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_RACER:
      return {
        ...state,
        racers: [...state.racers, action.payload]
      };
    case UPDATE_RACER:
      return {
        ...state,
        racers: state.racers.map((racer, index) => {
          if (index !== action.payload.id) {
            return racer;
          }
          return {
            ...racer,
            ...action.payload.updatedRacer
          };
        })
      };
    case DELETE_RACER:
      return {
        ...state,
        racers: state.racers.filter((racer, id) => {
          return id !== action.payload;
        })
      };
    default:
      return state;
  }
}
