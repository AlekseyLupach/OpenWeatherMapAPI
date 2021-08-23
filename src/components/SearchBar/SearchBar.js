import React, { Component } from 'react'
import Dropdowns from './Dropdown'
import { Button, Dropdown } from 'react-bootstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(city) {
    const { onClick } = this.props

    document.getElementById('city').value = city.name
    
    onClick()
  }
  
  render(){
    const {  
      onClick,
      selectedCity,
      favorites, 
    } = this.props
    let self = this

    let favoritesList = favorites.map(function (city) {
      return (
        <li key={city.id}>
          <Dropdown.Item onClick={() => self.handleClick(city)}>
              {city.name}
          </Dropdown.Item>
        </li>
      );
    });

  return (
    <div className="search input-group">
      <Dropdowns favoritesList={favoritesList} selectedCity={selectedCity}  />
      <input
        className="typeahead form-control"
        type="text"
        placeholder="Search for..."
        id="city"
      />
      <Button variant="outline-secondary" onClick={() => onClick()}>
        {'Search'}
      </Button>
    </div>
  );
  }
}