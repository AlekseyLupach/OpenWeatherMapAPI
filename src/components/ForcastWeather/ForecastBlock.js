import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import ForecastForToday from "./ForecastForToday";
import ForecastWeatherIcon from "./ForecastWeatherIcon";
import ParametrsForecastWeather from "./ParametersForecastWeather";
import {
  typeDateRU,
  periodsDayRu,
  periodsDay,
  degreesIcon,
  forecastOptions,
  pressureValue,
  pressureValueRU,
  speedValueRU,
  humidityValue,
  speedValue,
} from "../../constants";

class ForecastBlock extends Component {
  render() {
    const { weather, t } = this.props;
    const pathToIcon = `/images/${weather.weather[0].main}.svg`;

    return (
      <div className="info-block">
        <div className="forecast-header">
          {new Date(weather.dt * 1000).toLocaleString(
            `${t("typeDate")}`,
            forecastOptions,
          )}
        </div>
        <div className="forecast-block-content-wrapper-left">
          <ForecastWeatherIcon
            pathToIcon={pathToIcon}
            description={weather.weather[0].description}
          />
          <div className="info-block-additional info-block-additional-second">
            <ParametrsForecastWeather
              description={
                `${t("typeDate")}` === typeDateRU
                  ? weather.pressure + pressureValueRU
                  : weather.pressure + pressureValue
              }
              src="/images/Pressure.svg"
            />
            <ParametrsForecastWeather
              description={weather.humidity + humidityValue}
              src="/images/Humidity.svg"
            />
            <ParametrsForecastWeather
              description={
                `${t("typeDate")}` === typeDateRU
                  ? weather.speed + speedValueRU
                  : weather.speed + speedValue
              }
              src="/images/Wind.svg"
            />
          </div>
        </div>
        <div className="forecast-block-content-wrapper-right">
          <ForecastForToday
            value={Math.round(weather.temp.night) + degreesIcon}
            time={
              `${t("typeDate")}` === typeDateRU
                ? periodsDayRu.night
                : periodsDay.night
            }
          />
          <ForecastForToday
            value={Math.round(weather.temp.morn) + degreesIcon}
            time={
              `${t("typeDate")}` === typeDateRU
                ? periodsDayRu.morning
                : periodsDay.morning
            }
          />
          <ForecastForToday
            value={Math.round(weather.temp.day) + degreesIcon}
            time={
              `${t("typeDate")}` === typeDateRU
                ? periodsDayRu.day
                : periodsDay.day
            }
          />
          <ForecastForToday
            value={Math.round(weather.temp.eve) + degreesIcon}
            time={
              `${t("typeDate")}` === typeDateRU
                ? periodsDayRu.evening
                : periodsDay.evening
            }
          />
        </div>
      </div>
    );
  }
}

ForecastBlock.propTypes = {
  weather: PropTypes.object,
  t: PropTypes.func,
};

export default withTranslation()(ForecastBlock);
