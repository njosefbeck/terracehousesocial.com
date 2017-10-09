import React, { Component } from 'react';
import './App.css';
import client from '../Data/client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: client.buildState()
    }
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
        <Search />
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

class Search extends Component {
  render() {
    return (
      <form>
        Search goes here
      </form>
    );
  }
}

class Group extends Component {
  render() {
    return (
      <div className="Group">
        <span>{this.props.year}</span>
        <h2>{this.props.title}</h2>
        <Members members={this.props.members} />
      </div>
    );
  }
}

class Members extends Component {
  render() {
    const members = this.props.members.map(member => {
      return (
        <Member
          key={member.id}
          id={member.id}
          name={member.name}
          image={member.image}
          accounts={member.accounts}
        />
      );
    });
    
    return (
      <ul className="Members">
        {members}
      </ul>
    );
  }
}

class Member extends Component {
  render() {
    return (
      <li className="Member">
        I am a member.
      </li>
    );
  }
}

export default App;
