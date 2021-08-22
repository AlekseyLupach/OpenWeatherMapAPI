import React, { Component } from 'react'
import Dropdowns from './Dropdown'
import { Button, Dropdown } from 'react-bootstrap';
import AsyncSelect from 'react-select/async'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  loadOptions= async(inputText, callback) => {
      const response = await fetch(`http://localhost:3001/cities?q=${inputText}&_limit=5`);
      const json = await response.json();
      
      callback(json.map(i => ({label: i.name, value: i.id, country: i.country})))
  }

  handleClick(city) {
    const { onSelect } = this.props

    onSelect(city)
  }
  
  render(){
    const {  
      onClick,
      selectedCity,
      favorites, 
      inputText
    } = this.props
    let self = this
    this.state.value = inputText
    let favoritesList = favorites.map(function (city) {
      return (
        <li key={city.id}>
          <Dropdown.Item onClick={() => self.handleClick(city)}>
              {city.name}
          </Dropdown.Item>
        </li>
      );
    });

    const inputProps = {
      placeholder: 'Search for...',
      value: inputText,
      onChange: (e) => onChange(e.target.value),
      className: 'form-control'
    }

  return (
    <div className="search input-group">
      <Dropdowns favoritesList={favoritesList} selectedCity={selectedCity}  />
      <input
        className="typeahead form-control"
        type="text"
        placeholder="Search for..."
        id="city"
      />
      <AsyncSelect
        inputProps={inputProps}
        value={this.inputText}
        onChange={(e) => this.setState({ value: e.target.value })}
        onSelect={(value) => this.setState({ value })}
        placeholder={'Search for...'}
        loadOptions={this.loadOptions}
      />
      <Button variant="outline-secondary" onClick={() => onClick()}>
        {'Search'}
      </Button>
    </div>
  );
  }
}