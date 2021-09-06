/* eslint-disable array-callback-return */
import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import { withTranslation } from "react-i18next";
=======
import { Translation } from "react-i18next";
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
import SunriseSunset from "../SunriseSunset";
import ForecastWeatherIcon from "../ForecastWeatherIcon";
import ParametrsForecastWeather from "../ParametersForecastWeather";
import {
  pressureValue,
  humidityValue,
  speedValue,
<<<<<<< HEAD
  typeDateRU,
  pressureValueRU,
  speedValueRU,
=======
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
} from "../../../constants";

class WeatherMainInfo extends React.Component {
  render() {
<<<<<<< HEAD
    const { weather, pathToIcon, t } = this.props;

    return (
      <div className="info-block-content">
        <div className="info-block-content-wrapper-left">
          <ForecastWeatherIcon
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
            temp={Math.round(weather.main.temp)}
          />
          <div className="info-block-additional info-block-additional-second">
            <ParametrsForecastWeather
              description={
                `${t("typeDate")}` === typeDateRU
                  ? weather.main.pressure + pressureValueRU
                  : weather.main.pressure + pressureValue
              }
              src="/images/Pressure.svg"
            />
            <ParametrsForecastWeather
              description={weather.main.humidity + humidityValue}
              src="/images/Humidity.svg"
            />
            <ParametrsForecastWeather
              description={
                `${t("typeDate")}` === typeDateRU
                  ? weather.wind.speed + speedValueRU
                  : weather.wind.speed + speedValue
              }
              src="/images/Wind.svg"
            />
            <div className="info-block-additional-item">
              <SunriseSunset
                src="/images/Sunrise.svg"
                value={new Date(
                  weather.sys.sunrise * 1000,
                ).toLocaleTimeString()}
              />
              <SunriseSunset
                src="/images/Sunset.svg"
                value={new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
=======
    const { weather, pathToIcon } = this.props;

    return (
      <Translation>
        {() => (
          <div className="info-block-content">
            <div className="info-block-content-wrapper-left">
              <ForecastWeatherIcon
                pathToIcon={pathToIcon}
                description={weather.weather[0].description}
                temp={Math.round(weather.main.temp)}
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
              />
              <div className="info-block-additional info-block-additional-second">
                <ParametrsForecastWeather
                  description={weather.main.pressure + pressureValue}
                  src="/images/Pressure.svg"
                />
                <ParametrsForecastWeather
                  description={weather.main.humidity + humidityValue}
                  src="/images/Humidity.svg"
                />
                <ParametrsForecastWeather
                  description={weather.wind.speed + speedValue}
                  src="/images/Wind.svg"
                />
                <div className="info-block-additional-item">
                  <SunriseSunset
                    src="/images/Sunrise.svg"
                    value={new Date(
                      weather.sys.sunrise * 1000,
                    ).toLocaleTimeString()}
                  />
                  <SunriseSunset
                    src="/images/Sunset.svg"
                    value={new Date(
                      weather.sys.sunset * 1000,
                    ).toLocaleTimeString()}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Translation>
    );
  }
}

WeatherMainInfo.propTypes = {
  weather: PropTypes.object,
  pathToIcon: PropTypes.string,
  t: PropTypes.func,
};

export default withTranslation()(WeatherMainInfo);
