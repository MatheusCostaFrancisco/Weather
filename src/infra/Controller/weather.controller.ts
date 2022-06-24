import api from "../../config/base";

//http://api.weatherapi.com/v1/current.json?key=7a0e1cc52ff54940804134120220906&q=London&aqi=no

export const WeatherController = {
  getCurrentByCity: async (city = "London") => {
    const token = process.env.REACT_APP_TOKEN;

    const { data: res } = await api.get(
      `current.json?key=${token}&q=${city}&aqi=no`
    );

    return res;
  },
};
