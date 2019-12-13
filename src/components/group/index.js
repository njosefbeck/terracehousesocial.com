import React from "react"
import PropTypes from "prop-types"
import "./group.css"
import Member from "../member"

const Group = ({ year, title, members }) => (
  <div className="group">
    <span>{year}</span>
    <h2>{title}</h2>
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {members.map(member => (
        <Member
          key={member.terraceHouseId}
          englishName={member.englishName}
          japaneseName={member.japaneseName}
          accounts={member.accounts}
          avatar={member.avatar}
        />
      ))}
    </ul>
  </div>
)

Group.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
}

export default Group
