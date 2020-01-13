import React from "react"

const Header = () => {
  return (
    <header>
      <h1>Terrace House Social</h1>
      <p>
        Below you'll find social media accounts for the panel and cast from
        Terrace House&trade;. Have an update to the list? Feel free to{" "}
        <a
          href="https://twitter.com/terracesocial"
          target="_blank"
          rel="noopener noreferrer"
        >
          reach out via Twitter
        </a>{" "}
        or at{" "}
        <a href="mailto:hello@terracehousesocial.com">
          hello@terracehousesocial.com
        </a>
        . Please note: we are in no way affiliated with the show!
      </p>

      <h2>Updates</h2>

      <p className="update">
        01/12/20 - Updated Ruka Nishinoiri's Instagram. Thanks stevo2011!
      </p>

      <p className="update">
        01/11/20 - Added Tokyo (2019 - 2020) Netflix Season Part 2 cast.
      </p>

      <p className="update">
        12/29/19 - Removed Tetsuya Iwanaga's Instagram as the one listed was his
        brother's. Added his Twitter. Thanks Ridha for the update!
      </p>

      <p className="update">
        12/15/19 - Updated Shono Hayama's Instagram thanks to{" "}
        <a
          href="https://twitter.com/mstcambot"
          target="_blank"
          rel="noopener noreferrer"
        >
          @mstcambot
        </a>
        .
      </p>

      <p className="update">
        12/14/19 - Updated Yuuki Byrnes' Instagram & Twitter thanks to{" "}
        <a
          href="http://byreesedeluca.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reese De Luca
        </a>
        .
      </p>

      <p className="update" style={{ textAlign: "center" }}>
        If you're interested in supporting this project, consider{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/njosefbeck"
        >
          buying me a tea!
        </a>
      </p>
    </header>
  )
}

export default Header
