import React, { Component } from 'react';
import './Group.css';

import Members from '../Members/Members';

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

export default Group;