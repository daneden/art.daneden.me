import React, { Component } from 'react'
import Frame from './Frame'
import DefinitionList from './DefinitionList'

import pieces from './pieces'
import definitions from './definitions'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Drawing With Numbers</h1>
          <p>Generative art from <a href="https://daneden.me">Daniel Eden</a></p>
        </div>
        <div className="mb3">
          <p>
            This site serves as a gallery for my favorite select pieces of generative art.
            These pieces have been generated using Processing, p5.js, or OpenFrameworks and
            are each accompanied by a description of the underlying logic that generated
            the results.
          </p>
          <p>
            For more information about my foray into generative art, you can read a {" "}
            <a href="https://daneden.me/2016/11/02/drawing-with-numbers/">blog post</a>
            {" "}I published.
          </p>
        </div>
        {pieces.map(piece => (
          <Frame
            image={piece.image}
            description={piece.description}
          />
        ))}
        <DefinitionList definitions={definitions} />
      </div>
    )
  }
}

export default App
