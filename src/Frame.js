import React, { Component } from 'react'

export default class Frame extends Component {
  render() {
    return (
      <div className="frame mb3">
        <img
          className="frame__image mb1"
          src={this.props.image}
          role="presentation"
        />
        <p className="frame__description">
          {this.props.description}
        </p>
      </div>
    )
  }
}
