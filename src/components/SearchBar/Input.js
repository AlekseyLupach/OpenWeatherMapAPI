import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return <input
      className="typeahead form-control"
      type="text"
      placeholder="Search for..."
      id="city" />
  }
}