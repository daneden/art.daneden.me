import React, { Component } from 'react'

export default class DefinitionList extends Component {

  createMarkup(string) {
    return {
      __html: string
    }
  }

  render() {
    return (
      <dl className="deflist">
        {this.props.definitions.map(def => (
          <span className="deflist__wrapper mb1">
            <dt
              className="deflist__term mr1"
              dangerouslySetInnerHTML={this.createMarkup(def.term)}
            />
            <dd
              className="deflist__def"
              dangerouslySetInnerHTML={this.createMarkup(def.definition)}
            />
          </span>
        ))}
      </dl>
    )
  }
}
