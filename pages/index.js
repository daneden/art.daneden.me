import Head from "next/head"
import React from "react"
import DefinitionList from "../components/DefinitionList"
import Frame from "../components/Frame"
import definitions from "../data/definitions"
import pieces from "../data/pieces"

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_dte" />
        <meta property="og:title" content="Drawing With Numbers" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://art.daneden.me/images/export-498.5307.png"
        />
        <meta
          property="og:description"
          content="Generative Art from Daniel Eden"
        />

        <title>Drawing With Numbers: Generative art from Daniel Eden</title>
      </Head>
      <main>
        <div>
          <h1>Drawing With Numbers</h1>
          <p>
            Generative art from <a href="https://daneden.me">Daniel Eden</a>
          </p>
        </div>
        <div className="mb3">
          <p>
            This site serves as a gallery for my favorite select pieces of
            generative art. These pieces have been generated using Processing,
            p5.js, or OpenFrameworks and are each accompanied by a description
            of the underlying logic that generated the results.
          </p>
          <p>
            For more information about my foray into generative art, you can
            read a{" "}
            <a href="https://daneden.me/2016/11/02/drawing-with-numbers/">
              blog post
            </a>{" "}
            I published.
          </p>
        </div>
        {pieces.map((piece) => (
          <Frame
            key={piece.image}
            image={piece.image}
            description={piece.description}
          />
        ))}
        <DefinitionList definitions={definitions} />
      </main>
    </>
  )
}
