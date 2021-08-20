import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'react-bootstrap';

export default class Dropdowns extends React.Component {
  render() {
    const { selectedCity, favoritesList } = this.props
    return (
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          {selectedCity ? selectedCity.name + ' ' : ' '}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{minWidth: '160px'}}>
          {favoritesList}
          <Dropdown.Divider />
          <span style={{fontSize: '0.9rem', paddingLeft: '20px', paddingRight: '20px', maxWidth: '100%'}}>
              <img src="/img/Favorites-Add.svg" />
              Add city to favorites by clicking icon by near
          </span>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

Dropdown.propsTypes = {
  selectedCity: PropTypes.object,
  favoritesList: PropTypes.array
}