/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { withTranslation } from "react-i18next";
=======
import { Translation } from "react-i18next";
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Button, Dropdown } from 'react-bootstrap';
import Dropdowns from './Dropdown';
import searchMatches from '../../utils/searchMatches';
import LanguageSwitcher from './LanguageSwitcher';
<<<<<<< HEAD
=======
import i18next from '../../services/i18n';
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(city) {
    const { onSelect } = this.props;

    onSelect(city);
  }

  renderSuggestion(suggestion) {
    return (
      <div className="input-list_item">
        {suggestion.name}
        {' '}
        {suggestion.country}
      </div>
    );
  }

  renderSuggestionUl({ containerProps, children }) {
    return (
      <div {...containerProps} className="input-list">
        {children}
      </div>
    );
  }

  render() {
    const {
      onClick,
      cities,
      onSelect,
      onClickLanguage,
      selectedCity,
      favorites,
      onChange,
      onLanguageChange,
      inputValue,
      t,
    } = this.props;

    const favoritesList = favorites.map((city) => (
      <li key={city.id}>
        <Dropdown.Item onClick={() => this.handleClick(city)}>
          {city.name}
        </Dropdown.Item>
      </li>
    ));

    const inputProps = {
<<<<<<< HEAD
      placeholder: t("placeholder"),
=======
      placeholder: i18next.language === 'en' ? "Enter the city" : "Введите город",
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
      value: inputValue,
      onChange: (e) => onChange(e.target.value),
      className: 'input',
    };

    return (
<<<<<<< HEAD
      <div className="search input-group">
        <Dropdowns
          favoritesList={favoritesList}
          selectedCity={selectedCity}
        />
        <Autosuggest
          suggestions={searchMatches(this.state.suggestions, inputValue, 3)}
          onSuggestionsFetchRequested={() => this.setState({ suggestions: cities.slice() })}
          onSuggestionsClearRequested={() => this.setState({ suggestions: [] })}
          getSuggestionValue={(suggestions) => suggestions.name}
          onSuggestionSelected={(_, { suggestion }) => onSelect(suggestion)}
          renderSuggestion={this.renderSuggestion}
          renderSuggestionsContainer={this.renderSuggestionUl}
          inputProps={inputProps}
        />
        <Button variant="outline-secondary" onClick={onClick}>
          {t("Search")}
        </Button>
        <LanguageSwitcher
          onClickLanguage={onClickLanguage}
          onChange={onLanguageChange}
        />
      </div>
=======
      <Translation>
        {(t) => (
          <div className="search input-group">
            <Dropdowns
              favoritesList={favoritesList}
              selectedCity={selectedCity}
            />
            <Autosuggest
              suggestions={searchMatches(this.state.suggestions, inputValue, 3)}
              onSuggestionsFetchRequested={() => this.setState({ suggestions: cities.slice() })}
              onSuggestionsClearRequested={() => this.setState({ suggestions: [] })}
              getSuggestionValue={(suggestions) => suggestions.name}
              onSuggestionSelected={(_, { suggestion }) => onSelect(suggestion)}
              renderSuggestion={this.renderSuggestion}
              renderSuggestionsContainer={this.renderSuggestionUl}
              inputProps={inputProps}
            />
            <Button className="asd" variant="outline-secondary" onClick={onClick}>
              {t("Search")}
            </Button>
            <LanguageSwitcher
              onClickLanguage={onClickLanguage}
              onChange={onLanguageChange}
            />
          </div>
        )}
      </Translation>
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
    );
  }
}

SearchBar.propTypes = {
  cities: PropTypes.array,
  favorites: PropTypes.array,
  inputValue: PropTypes.string,
  selectedCity: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onLanguageChange: PropTypes.func,
  onClickLanguage: PropTypes.func,
<<<<<<< HEAD
  t: PropTypes.func,
=======
>>>>>>> f967c21cfea217b87acd131b289e6d056520a639
};
export default withTranslation()(SearchBar);
