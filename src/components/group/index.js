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
          key={member.Id}
          englishName={member.English_Name}
          japaneseName={member.Japanese_Name}
          accounts={member.Accounts}
          avatar={member.Avatar}
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
