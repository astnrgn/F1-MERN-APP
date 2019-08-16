import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";
import axios from "axios";
const searchUrl = "https://f1-mern-app-api.herokuapp.com";

// const racers = [
//   {
//     name: "Lewis Hamilton",
//     birthplace: "Tewin, Great Britain",
//     team: "Mercedes",
//     rank: 1,
//     image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.1.jpg"
//   },
//   {
//     name: "Valtteri Bottas",
//     birthplace: "Nastola, Finland",
//     team: "Mercedes",
//     rank: 2,
//     image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.7.jpg"
//   },
//   {
//     name: "Max Emilian Verstappen",
//     birthplace: "Hasselt, Belgium",
//     team: "Red Bull",
//     rank: 3,
//     image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.9.jpg"
//   },
//   {
//     name: "Sebastian Vettel",
//     birthplace: "Heppenheim, Germany",
//     team: "Ferrari",
//     rank: 4,
//     image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.2.jpg"
//   },
//   {
//     name: "Charles Leclerc",
//     birthplace: "Monte Carlo, Monaco",
//     team: "Ferrari",
//     rank: 5,
//     image:
//       "https://pbs.twimg.com/profile_images/1130769030112002048/IiNFtiZ-_400x400.jpg"
//   },
//   {
//     name: "Pierre Gasly",
//     birthplace: "Rouen, France",
//     team: "Toro Rosso",
//     rank: 6,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSalBdaw9BDFzHn439PFEGrM3oDU2bzTkywprt1UfT_c3dfpdOP"
//   }
// ];

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
