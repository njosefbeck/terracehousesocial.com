import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faSnapchat,
  faYoutube,
  faTumblr,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faPencilAlt, faFileAlt } from "@fortawesome/free-solid-svg-icons"
import "./icon.css"

function buildIcon(type) {
  let icon = null

  switch (type) {
    case "instagram":
      icon = faInstagram
      break
    case "twitter":
      icon = faTwitter
      break
    case "snapchat":
      icon = faSnapchat
      break
    case "youTube":
      icon = faYoutube
      break
    case "tumblr":
      icon = faTumblr
      break
    case "facebook":
      icon = faFacebook
      break
    case "blog":
      icon = faPencilAlt
      break
    case "website":
      icon = faFileAlt
      break
    default:
      icon = faPencilAlt
  }

  return <FontAwesomeIcon icon={icon} size="lg" />
}

const Icon = ({ url, type }) => (
  <li className="icon">
    <a href={url} target="_blank" rel="noopener noreferrer" title={type}>
      {buildIcon(type)}
      <span>{type}</span>
    </a>
  </li>
)

Icon.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Icon
