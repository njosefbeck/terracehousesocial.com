import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import "./member.css"

import Icons from "../Icons"

const Member = ({ japaneseName, englishName, accounts, avatar }) => {
  return (
    <li className="member">
      {avatar && avatar.childImageSharp && (
        <div className="image-wrapper">
          <Img
            style={{ borderRadius: "100%", display: "block" }}
            fixed={avatar.childImageSharp.fixed}
          />
        </div>
      )}
      <div className="member-info">
        <h3 className="member-name-english">{englishName}</h3>
        <span className="member-name-japanese">{japaneseName}</span>
        <Icons accounts={accounts} />
      </div>
    </li>
  )
}

Member.propTypes = {
  japaneseName: PropTypes.string.isRequired,
  englishName: PropTypes.string.isRequired,
  accounts: PropTypes.array.isRequired,
}

export default Member
