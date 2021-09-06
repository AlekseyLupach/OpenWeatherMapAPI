/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
<<<<<<< HEAD
import { withTranslation } from "react-i18next";
=======
import { Translation } from "react-i18next";
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
import React, { Component } from "react";
import { forecastOptions } from "../../../constants";

class WeatherInfoHeader extends Component {
  handleClickAdd() {
    const { selectedCity, changeFavorites, favorites } = this.props;

    const setFavorites = [...favorites, selectedCity];

    localStorage.setItem("favorites", JSON.stringify(setFavorites));
    changeFavorites(setFavorites);
  }

  handleClickRemove() {
    const { selectedCity, changeFavorites, favorites } = this.props;

    const setFavorites = favorites.filter((x) => x.id !== selectedCity.id);
    localStorage.setItem("favorites", JSON.stringify(setFavorites));

    changeFavorites(setFavorites);
  }

  render() {
    const {
      weather, onClick, favorites, t,
    } = this.props;

    const isFavorite = !!favorites.find((x) => x.id === weather.id);

    return (
      <Translation>
        {(t) => (
          <div className="info-block-header">
            <div className="info-block-header-left">
              <div className="info-block-header-left-place">
                <span>
                  {weather.name}
                  {", "}
                  {weather.sys.country}
                </span>

                {!isFavorite ? (
                  <img
                    src="/images/Favorites-Add.svg"
                    className="icon-fav"
                    alt="fav-icon"
                    onClick={() => this.handleClickAdd()}
                  />
                ) : (
                  <img
                    src="/images/Favorites-Remove.svg"
                    className="icon-fav"
                    alt="fav-remove-icon"
                    onClick={() => this.handleClickRemove()}
                  />
                )}
              </div>
              <div className="info-block-header-left-date">
                <span>
                  {new Date(weather.dt * 1000).toLocaleString(
                    `${t("typeDate")}`,
                    forecastOptions,
                  )}
                </span>
              </div>
            </div>
            <div className="info-block-header-right">
              {t("Forecast")}
              <button type="button" onClick={onClick} id="3">
                {`3  ${t("day")} `}
              </button>
              <button type="button" onClick={onClick} id="7">
                {`7  ${t("days")} `}
              </button>
              <button type="button" onClick={onClick} id="14">
                {`14  ${t("days")} `}
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <div className="info-block-header-left-date">
            <span>
              {new Date(weather.dt * 1000).toLocaleString(
                `${t("typeDate")}`,
                forecastOptions,
              )}
            </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {t("Forecast")}
          <button type="button" onClick={onClick} id="3">
            {`3  ${t("day")} `}
          </button>
          <button type="button" onClick={onClick} id="7">
            {`7  ${t("days")} `}
          </button>
          <button type="button" onClick={onClick} id="14">
            {`14  ${t("days")} `}
          </button>
        </div>
      </div>
=======
        )}
      </Translation>
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
    );
  }
}

WeatherInfoHeader.propTypes = {
  selectedCity: PropTypes.object,
  changeFavorites: PropTypes.func,
  weather: PropTypes.object,
  onClick: PropTypes.func,
  favorites: PropTypes.array,
  t: PropTypes.func,
};

export default withTranslation()(WeatherInfoHeader);
