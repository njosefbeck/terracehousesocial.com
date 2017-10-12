import React, { Component } from 'react';
import './Member.css';

import Icons from '../Icons/Icons';

class Member extends Component {

  getImage = (imageFileName) => {
    let image = "";
    
    if (!imageFileName) {
      image = "https://picsum.photos/200/200?image=823";
    } else {
      image = `${process.env.PUBLIC_URL}/images/members/${imageFileName}`;
    }

    return image;
  }

  render() {
    return (
      <li className="Member">
        <div className="member-image-container">
          <img className="member-image" src={this.getImage(this.props.image)} alt={this.props.name} />
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