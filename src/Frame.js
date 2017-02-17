import React, { Component } from 'react'
import Imgix from 'react-imgix'

export default class Frame extends Component {
  render() {
    let url = `https://dtegenart.imgix.net/${this.props.image}`

    if(process.env.NODE_ENV && process.env.NODE_ENV.toUpperCase() === 'DEVELOPMENT') {
      url = `${process.env.PUBLIC_URL}/images/${this.props.image}`
    }

    return (
      <div className="frame mb3">
        <Imgix
          aggressiveLoad={true}
          className="frame__image mb1"
          customParams={{
            fm: "pjpg",
          }}
          fit={"max"}
          src={url}
        />
        <p className="frame__description">
          {this.props.description}
        </p>
      </div>
    )
  }
}
