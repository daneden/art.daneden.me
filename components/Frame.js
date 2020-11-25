import React, { Component } from "react"
import Image from "next/image"

export default class Frame extends Component {
  render() {
    return (
      <div className="frame mb3">
        <figure className="frame__image mb1">
          <Image
            layout="responsive"
            width={800}
            height={800}
            src={`/images/${this.props.image}`}
          />
        </figure>
        <p className="frame__description">{this.props.description}</p>
      </div>
    )
  }
}
