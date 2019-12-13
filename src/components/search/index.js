import React, { useState } from "react"
import "./search.css"
import client from "../../client"

const Search = ({ cast, defaultGroups, setGroups }) => {
  const [term, setTerm] = useState("")

  function doSearch(term) {
    if (!term.length) {
      setGroups(defaultGroups)
      return
    }

    const groups = [
      {
        title: "Search Results",
        members: client.searchMembersByEnglishName(cast, term),
      },
    ]

    setGroups(groups)
  }

  function handleChange(evt) {
    setTerm(evt.target.value)
    doSearch(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    doSearch(term)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label>
        <span>Search:</span>
        <input
          value={term}
          onChange={handleChange}
          placeholder="Type an English name to find them in the list below"
        />
      </label>
    </form>
  )
}

export default Search
