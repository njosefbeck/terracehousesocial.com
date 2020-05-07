function massageCast(cast, avatars) {
  return cast.map(member => {
    const Avatar = avatars.find(avatar => avatar.name === member.data.Image_Filename)
    return {
      ...member.data,
      ...member.fields,
      Avatar
    }
  })
}

const client = {
  getAllPanel(cast) {
    return cast.filter(member => member.Type === "Panel")
  },

  getAllCast(cast) {
    return cast.filter(member => member.Type === "Cast")
  },

  getMemberById(cast, id) {
    return cast.find(member => member.Id === id)
  },

  getMemberByEnglishName(cast, name) {
    return cast.find(member => member.English_Name === name)
  },

  getUniqueSeasons(cast) {
    const seasons = {}
    for (const member of cast) {
      if (member.Season_Name) {
        if (!seasons[member.Season_Name]) {
          seasons[member.Season_Name] = member.Season_Year
        }
      }
    }
    return seasons
  },

  getAllSeasons(cast) {
    const seasonsMap = this.getUniqueSeasons(cast)
    const seasons = []
    for (const season in seasonsMap) {
      seasons.push({
        year: seasonsMap[season],
        title: season,
        members: this.getMembersBySeasonName(cast, season),
      })
    }
    return seasons
  },

  getMembersBySeasonName(cast, seasonName) {
    return cast
      .filter(member => member.Type === "Cast")
      .filter(cast => cast.Season_Name === seasonName)
  },

  searchMembersByEnglishName(cast, avatars, searchTerm) {
    const term = searchTerm
      .toUpperCase()
      .trim()
      .split(" ")
      .join("")

    const filtered = cast.filter(member => {
      const name = member.data.English_Name
        .toUpperCase()
        .split(" ")
        .join("")

      return name.includes(term)
    })
    return massageCast(filtered, avatars)
  },

  buildGroups(cast, avatars) {
    const castWithAvatars = massageCast(cast, avatars)
    // Build panel object
    const panel = { title: "Panel", members: this.getAllPanel(castWithAvatars) }

    // Build array of seasons objects
    const seasons = this.getAllSeasons(castWithAvatars)

    // Sort by year, with most recent year coming first
    seasons.sort((a, b) => {
      if (a.year > b.year) {
        return -1
      }
      if (a.year < b.year) {
        return 1
      }
      return 0
    })

    return [panel, ...seasons]
  },
}

export default client
