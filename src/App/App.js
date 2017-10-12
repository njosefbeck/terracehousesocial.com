import React, { Component } from 'react';
import './App.css';
import client from '../Data/client';

import Search from '../Search/Search';
import Group from '../Group/Group';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: client.buildState()
    }
  }

  handleSearchChange = (value) => {
    if (!value.length) {

      this.setState({
        groups: client.buildState()
      });

      return;
    }

    const newState = {
      groups: [{
        title: "Search Results",
        members: client.searchMembersByName(value)
      }]
    };

    this.setState(newState);
  }

  render() {
    const groups = this.state.groups.map(group => {
      return (
        <Group
          key={group.title}
          title={group.title}
          year={group.year}
          members={group.members}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <Search handleSearchChange={this.handleSearchChange} />
        {groups}
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header>
      <h1>Terrace House Social</h1>
      <p>Click on a Terrace House commentator or cast member below to see their social media and other online profiles. Have an update to the list? Feel free to reach out. Please note: we are in no way affiliated with the show!</p>
    </header>
  );
};


export default App;
