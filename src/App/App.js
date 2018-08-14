import React, { Component } from 'react';
import './App.css';
import client from '../Data/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
      <p className="update">8/14/18 - BIG UPDATE! Added and removed social media accounts for previous season cast members, added Opening New Doors cast members, and added Shono Hayama as a commentator. BIG THANKS to <a href="https://juicersx.us/" rel="noopener noreferrer" target="_blank">juicersx</a> for making this update possible!</p>
    </header>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>Made with {<FontAwesomeIcon icon={faHeart} />} by <a href="https://njosefbeck.com" rel="noopener noreferrer" target="_blank">njosefbeck</a>.<br/>All images and information copyright to their respective owners.</p>
    </footer>
  );
};


export default App;
