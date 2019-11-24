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
      <p>Below you'll find social media accounts for the panel and cast from Terrace House&trade;. Have an update to the list? Feel free to <a href="https://twitter.com/terracesocial" target="_blank" rel="noopener noreferrer">reach out via Twitter</a> or at <a href="mailto:hello@terracehousesocial.com">hello@terracehousesocial.com</a>. Please note: we are in no way affiliated with the show!</p>

      <h2>Updates</h2>
      <p className="update">9/27/18 - Updated Guy Sato's Instagram profile link. Thanks to Kris for the update!</p>
      <p className="update">9/29/19 - Added new cast for Tokyo season (2019 - 2020). BIG THANKS to <a href="https://juicersx.us/" rel="noopener noreferrer" target="_blank">juicersx</a> for making this update possible!</p>
      <p className="update">11/24/19 - Updated Avian's instagram. Updated Cheri's instagram thanks to Jana. Removed Wez's social media. Added Closing Door cast thanks to Reddit user <a href="https://www.reddit.com/user/reddumpling/" target="_blank" rel="noopener noreferrer">reddumpling</a>.</p>
      
      <p className="update" style={{ textAlign: 'center' }}>If you're interested in supporting this project, consider <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/njosefbeck">buying me a tea!</a></p>
    </header>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <p>Made with {<FontAwesomeIcon icon={faHeart} />} by <a href="https://njosefbeck.com" rel="noopener noreferrer" target="_blank">njosefbeck</a>. <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/njosefbeck">Buy me a tea!</a><br/>All images and information copyright to their respective owners.</p>
    </footer>
  );
};


export default App;
