import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer>
      <p>
        Made with {<FontAwesomeIcon icon={faHeart} />} by{" "}
        <a
          href="https://njosefbeck.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          njosefbeck
        </a>
        .{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.buymeacoffee.com/njosefbeck"
        >
          Buy me a tea!
        </a>
        <br />
        All images and information copyright to their respective owners.
      </p>
    </footer>
  )
}

export default Footer
