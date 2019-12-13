const client = {
  getAllPanel(cast) {
    return cast.filter(member => member.type === "Panel")
  },

  getAllCast(cast) {
    return cast.filter(member => member.type === "Cast")
  },

  getMemberById(cast, id) {
    return cast.find(member => member.id === id)
  },

  getMemberByEnglishName(cast, name) {
    return cast.find(member => member.englishName === name)
  },

  getUniqueSeasons(cast) {
    const seasons = {}
    for (const member of cast) {
      if (member.seasonName) {
        if (!seasons[member.seasonName]) {
          seasons[member.seasonName] = member.seasonYear
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
      .filter(member => member.type === "Cast")
      .filter(cast => cast.seasonName === seasonName)
  },

  searchMembersByEnglishName(cast, searchTerm) {
    const term = searchTerm
      .toUpperCase()
      .trim()
      .split(" ")
      .join("")

    return cast.filter(member => {
      const name = member.englishName
        .toUpperCase()
        .split(" ")
        .join("")

      return name.includes(term)
    })
  },

  buildGroups(cast, avatars) {
    const castWithAvatars = cast.map(member => {
      member.avatar = avatars.find(
        avatar => avatar.name === member.imageFilename
      )
      return member
    })
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
