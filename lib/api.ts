import axios from "axios";

export const coincap = () => {

  return axios.create({
    baseURL: "https://api.coincap.io/v2",
  });
};
export const cryptopanic = () => {

  return axios.create({
    baseURL: "http://api.mediastack.com/v1/news?access_key=378e898b68e3d840b672790e308a8a8a&countries=us,gb",
  });
};
