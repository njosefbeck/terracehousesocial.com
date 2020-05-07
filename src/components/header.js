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
        05/07/20 - Added cast for new international Netflix season of Tokyo 2019–2020. Thanks to Discotech X & other contributors for making this update possible!
      </p>

      <p className="update">
        05/06/20 - Updated Cheri & Wesley's Instagram. Thanks to those who submitted the corrections!
      </p>

      <p className="update">
        02/02/20 - Updated Lauren Tsai, Guy Sato, & Cheri Lavoie's instagram. Thanks to <a href="https://twitter.com/britstrawberry" target="_blank" rel="noopener noreferrer">@britstrawberry</a>!
      </p>

      <p className="update">
        01/12/20 - Updated Ruka Nishinoiri's Instagram. Thanks stevo2011!
      </p>
    </header>
  )
}

export default Header
