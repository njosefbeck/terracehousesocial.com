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
  const cast = data.allAirtable.nodes
  const avatars = data.allFile.nodes
  const defaultGroups = client.buildGroups(cast, avatars)
  const [groups, setGroups] = useState(defaultGroups)

  const isSearchResults = groups[0].title === "Search Results"

  return (
    <App>
      <SEO title="Terrace House Social" />
      <Header />
      <Search
        cast={cast}
        defaultGroups={defaultGroups}
        setGroups={setGroups}
        avatars={avatars}
      />
      {groups.length > 0 &&
        groups.map(group => (
          <Group
            key={group.title}
            title={group.title}
            year={group.year}
            members={group.members}
          />
      ))}
      {isSearchResults && groups[0].members.length === 0 && (
        <p style={{ marginTop: "-35px", marginBottom: "40px" }}>
          Nothing found! Try a different name.
        </p>
      )}
      <Footer />
    </App>
  )

  /*
  const isSearchResults = groups[0].title === "Search Results"

  return (
    <App>
      <SEO title="Terrace House Social" />
      <Header />
      <Search cast={cast} defaultGroups={defaultGroups} setGroups={setGroups} />
      {groups.length > 0 &&
        groups.map(group => (
          <Group
            key={group.title}
            title={group.title}
            year={group.year}
            members={group.members}
          />
        ))}
      {isSearchResults && groups[0].members.length === 0 && (
        <p style={{ marginTop: "-35px", marginBottom: "40px" }}>
          Nothing found! Try a different name.
        </p>
      )}
      <Footer />
    </App>
  )
  */
}

export const query = graphql`
  query IndexQuery {
    allAirtable {
      nodes {
        data {
          Id
          English_Name
          Japanese_Name
          Image_Filename
          Season_Name
          Season_Year
          Type
        }
        fields {
          Accounts {
            type
            url
          }
        }
      }
    }
    allFile(filter: { extension: { ne: "png" } }) {
      nodes {
        name
        childImageSharp {
          fixed(width: 72, height: 72, quality: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
`

export default IndexPage
