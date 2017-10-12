import json from './db';

const client = {
  getAllCommentators() {
    return json.members.filter(member => member.type === 'commentator');
  },

  getAllCast() {
    return json.members.filter(member => member.type === 'cast');
  },

  getMemberById(id) {
    return json.members.find(member => member.id === id);
  },

  getMemberByName(name) {
    return json.members.find(member => member.name === name);
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

  searchMembersByName(searchTerm) {
    const term = searchTerm
      .toUpperCase()
      .trim()
      .split(' ')
      .join('');

    return json.members.filter(member => {
      const name = member.name
        .toUpperCase()
        .split(' ')
        .join('');

      return name.includes(term);
    });

  },

  buildState() {

    // Build collaborators object
    const collaborators = {
      title: "Collaborators",
      members: this.getAllCommentators()
    };

    // Build array of seasons objects
    const seasons = this.getAllSeasons().map(season => {
      return {
        title: season.name,
        year: season.year,
        members: this.getMembersBySeasonName(season.name)
      }
    });

    return [collaborators, ...seasons];

  }
};

export default client;