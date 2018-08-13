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
        members: client.searchMembersByEnglishName(value)
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
        <Footer />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header>
      <h1>Terrace House Social</h1>
      <p>Below you'll find social media accounts for commentators and cast from the Netflix&trade; seasons of Terrace House&trade;. Have an update to the list? Feel free to <a href="https://twitter.com/terracesocial" target="_blank" rel="noopener noreferrer">reach out via Twitter</a> or at <a href="mailto:hello@terracehousesocial.com">hello@terracehousesocial.com</a>. Please note: we are in no way affiliated with the show!</p>
      <p className="update">10/13/17 - Updated Lauren & Avian's social media accounts; added Tatsuya Uchihara's Instagram</p>
    </header>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>Made with <i className="fa fa-heart"></i> by <a href="https://njosefbeck.com" rel="noopener noreferrer" target="_blank">njosefbeck</a>.<br/>All images and information copyright to their respective owners.</p>
    </footer>
  );
};


export default App;
