import React from "react";
import { IconNames } from "./types";
import temperature from "../../../assets/icons/cold_freezing_low_temperature_termometer_icon.png";
import moonCloud from "../../../assets/icons/2682846_cloud_cloudy_forecast_moon_night_icon.png";
import moon from "../../../assets/icons/2682847_eclipse_forecast_moon_night_space_icon.png";
import sun from "../../../assets/icons/2682848_day_forecast_sun_sunny_weather_icon.png";
import sunCloud from "../../../assets/icons/2682849_cloud_cloudy_day_forecast_sun_icon.png";

type IconProps = {
  name: IconNames;
};

export default function Icon({ name }: IconProps) {
  const iconPath = () => {
    switch (name) {
      case "temperature":
        return temperature;
      case "moon-cloud":
        return moonCloud;
      case "moon":
        return moon;
      case "sun":
        return sun;
      case "sun-cloud":
        return sunCloud;

      default:
        return sun;
    }
  };
  return <img src={iconPath()} alt="Icon temperature" width="100%" />;
}
