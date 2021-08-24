import React, { Component } from 'react'
import {typeDate, forecastOptions} from '../../../constants'

export default class WeatherInfoHeader extends Component {

  handleClickAdd() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = [...this.props.favorites, selectedCity]

    localStorage.setItem('favorites', JSON.stringify(favorites))
    changeFavorites(favorites)
  }

  handleClickRemove() {
    const { selectedCity, changeFavorites } = this.props

    let favorites = this.props.favorites.filter(x => x.id != selectedCity.id)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    changeFavorites(favorites)
  }

  render() {
    const { weather, onClick, favorites } = this.props
   
    let isFavorite = favorites.find(x => x.id == weather.id) ? true : false

    return(
      <div className="info-block-header">
        <div className="info-block-header-left">
          <div className="info-block-header-left-place">
            <span>{weather.name}{', '} {weather.sys.country} </span>

            { !isFavorite ? <img src="/images/Favorites-Add.svg" className="icon-fav" onClick={ () => this.handleClickAdd() } />
            : <img src="/images/Favorites-Remove.svg" className="icon-fav" onClick={ () => this.handleClickRemove() } /> }

          </div>
          <div className="info-block-header-left-date">
            <span>{new Date(weather.dt * 1000).toLocaleString(typeDate, forecastOptions)} </span>
          </div>
        </div>
        <div className="info-block-header-right">
          {'Forecast: '}
          <a href="#" onClick={ e => onClick(e) } id="3">{'3 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="7">{' 7 days '}</a>
          <a href="#" onClick={ e => onClick(e) } id="14">{' 14 days'}</a>
        </div>
      </div>
    )}
}