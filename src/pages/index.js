import React, { useState } from "react"
import { graphql } from "gatsby"
import client from "../client"
import SEO from "../components/seo"
import App from "../components/app"
import Header from "../components/header"
import Footer from "../components/footer"
import Group from "../components/group"
import Search from "../components/search"

const IndexPage = ({ data }) => {
  const cast = data.allTerraceHouseCast.nodes
  const avatars = data.allFile.nodes
  const defaultGroups = client.buildGroups(cast, avatars)
  const [ groups, setGroups ] = useState(defaultGroups)

  const isSearchResults = groups[0].title === 'Search Results'

  return (
    <App>
      <SEO title="Terrace House Social" />
      <Header />
      <Search
        cast={cast}
        defaultGroups={defaultGroups}
        setGroups={setGroups}
      />
      {groups.length > 0 && groups.map(group => (
        <Group
          key={group.title}
          title={group.title}
          year={group.year}
          members={group.members}
        />
      ))}
      {isSearchResults && groups[0].members.length === 0 && (
        <p style={{ marginTop: '-35px', marginBottom: '40px'}}>Nothing found! Try a different name.</p>
      )}
      <Footer />
    </App>
  )
}

export const query = graphql`
query IndexQuery {
  allTerraceHouseCast(filter: {englishName: {ne: null}}) {
    nodes {
      terraceHouseId
      type
      seasonName
      seasonYear
      japaneseName
      englishName
      accounts {
        type
        url
      }
      imageFilename
    }
    totalCount
  }
  allFile(filter: {extension: {ne: "png"}}) {
    nodes {
      name
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
}
`

export default IndexPage
