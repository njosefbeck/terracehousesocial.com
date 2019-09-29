import json from './db';

const client = {
  getAllPanel() {
    return json.members.filter(member => member.type === 'panel');
  },

  getAllCast() {
    return json.members.filter(member => member.type === 'cast');
  },

  getMemberById(id) {
    return json.members.find(member => member.id === id);
  },

  getMemberByEnglishName(name) {
    return json.members.find(member => member.name.english === name);
  },

  getAllSeasons() {
    const cast = this.getAllCast();
    const seasonsAsStrings = new Set(cast.map(member => JSON.stringify(member.season)));
    return Array.from(seasonsAsStrings).map(seasonString => JSON.parse(seasonString));
  },

  getMembersBySeasonName(seasonName) {
    return json.members
      .filter(member => member.type === 'cast')
      .filter(cast => cast.season.name === seasonName);
  },

  searchMembersByEnglishName(searchTerm) {
    const term = searchTerm
      .toUpperCase()
      .trim()
      .split(' ')
      .join('');

    return json.members.filter(member => {
      const name = member.name.english
        .toUpperCase()
        .split(' ')
        .join('');

      return name.includes(term);
    });

  },

  buildState() {

    // Build panel object
    const panel = {
      title: "Panel",
      members: this.getAllPanel()
    };

    // Build array of seasons objects
    const seasons = this.getAllSeasons().map(season => {
      return {
        title: season.name,
        year: season.year,
        members: this.getMembersBySeasonName(season.name)
      }
    });

    // Sort by year, with most recent year coming first
    seasons.sort((a, b) => {
      if (a.year > b.year) {
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      return 0;
    });

    return [panel, ...seasons];

  }
};

export default client;