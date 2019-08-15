import { CREATE_RACER, UPDATE_RACER, DELETE_RACER } from "../constants/racer";

const racers = [
  {
    name: "Lewis Hamilton",
    birthplace: "Tewin, Great Britain",
    team: "Mercedes",
    rank: 1,
    image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.1.jpg"
  },
  {
    name: "Valtteri Bottas",
    birthplace: "Nastola, Finland",
    team: "Mercedes",
    rank: 2,
    image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.7.jpg"
  },
  {
    name: "Max Emilian Verstappen",
    birthplace: "Hasselt, Belgium",
    team: "Red Bull",
    rank: 3,
    image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.9.jpg"
  },
  {
    name: "Sebastian Vettel",
    birthplace: "Heppenheim, Germany",
    team: "Ferrari",
    rank: 4,
    image: "http://en.espnf1.com/PICTURES/CMS/31000/31075.2.jpg"
  },
  {
    name: "Charles Leclerc",
    birthplace: "Monte Carlo, Monaco",
    team: "Ferrari",
    rank: 5,
    image:
      "https://pbs.twimg.com/profile_images/1130769030112002048/IiNFtiZ-_400x400.jpg"
  },
  {
    name: "Pierre Gasly",
    birthplace: "Rouen, France",
    team: "Toro Rosso",
    rank: 6,
    image:
      "https://www.formula1.com/content/fom-website/en/drivers/pierre-gasly/_jcr_content/image.img.1024.medium.jpg/1554818858495.jpg"
  }
];

const DEFAULT_STATE = {
  racers
};

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
            ...action.payload.updatedOrder
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
