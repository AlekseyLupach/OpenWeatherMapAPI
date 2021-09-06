<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import { supportedLanguages } from "../../config/i18n";
import i18next from "../../services/i18n";
=======
/* eslint-disable jsx-a11y/no-onchange */
import React from "react";
import PropTypes from "prop-types";
import { Translation } from "react-i18next";
import { supportedLanguages } from "../../config/i18n";
import { languageCodeOnly } from "../../services/i18n";
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639

class LanguageSwitcher extends React.Component {
  render() {
    const { onChange, onClickLanguage } = this.props;

    return (
<<<<<<< HEAD
      <div className="select-container">
        <select
          className="select"
          type="button"
          id="dropdown-basic"
          value={i18next.language}
          onChange={(e) => onChange(e.target.value)}
          onClick={onClickLanguage}
        >
          {supportedLanguages.map((lang) => (
            <option
              className="select-item"
              key={lang.code}
              value={lang.code}
              id={lang.code}
            >
              {lang.name}
            </option>
          ))}
        </select>
      </div>
=======
      <Translation>
        {(t, { i18n }) => (
          <div className="select-container">
            <select
              className="select"
              type="button"
              id="dropdown-basic"
              value={languageCodeOnly(i18n.language)}
              onChange={(e) => onChange(e.target.value)}
              onClick={onClickLanguage}
            >
              {supportedLanguages.map((lang) => (
                <option
                  className="select-item"
                  key={lang.code}
                  value={lang.code}
                  id={lang.code}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </Translation>
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
    );
  }
}

LanguageSwitcher.propTypes = {
  onChange: PropTypes.func,
  onClickLanguage: PropTypes.func,
};
export default LanguageSwitcher;
