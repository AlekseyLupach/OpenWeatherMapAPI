import React from "react";
import { Translation } from "react-i18next";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

class Dropdowns extends React.Component {
  render() {
    const { selectedCity, favoritesList, t } = this.props;
    return (
      <Translation>
        {(t) => (
          <Dropdown
            id="dropdown-basic-button"
            className="drop-down input-group-btn"
          >
            <Dropdown.Toggle
              className="drop-down_toggle"
              variant="outline-secondary"
              id="dropdown-basic"
            >
              {selectedCity ? `${selectedCity.name} ` : " "}
            </Dropdown.Toggle>

<<<<<<< HEAD
        <Dropdown.Menu className="drop-down_menu">
          {favoritesList}
          <Dropdown.Divider />
          <span>
            <img
              src={`${process.env.PUBLIC_URL}images/Favorites-Add.svg`}
              alt="drop-down-icon"
            />
            {t("DropdownText")}
          </span>
        </Dropdown.Menu>
      </Dropdown>
=======
            <Dropdown.Menu className="drop-down_menu">
              {favoritesList}
              <Dropdown.Divider />
              <span>
                <img
                  src={`${process.env.PUBLIC_URL}images/Favorites-Add.svg`}
                  alt="drop-down-icon"
                />
                {t("DropdownText")}
              </span>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Translation>
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
    );
  }
}

Dropdowns.propTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array,
  t: PropTypes.func,
};

export default withTranslation()(Dropdowns);
