import React, { Component } from 'react';
import './Member.css';

import Icons from '../Icons/Icons';

class Member extends Component {
  render() {
    return (
      <li className="Member">
        <div className="member-image-container">
          <img className="member-image" src={this.props.image} alt={this.props.name} />
        </div>
        <div className="member-information-container">
          <h3 className="member-name-english">{this.props.name.english}</h3>
          <span className="member-name-japanese">{this.props.name.japanese}</span>
          <Icons accounts={this.props.accounts} />
        </div>
      </li>
    );
  }
}

export default Member;