import React, { Component } from 'react';
import './Member.css';

import Icons from '../Icons/Icons';

class Member extends Component {

  getImageSrc = (imageFileName, type) => {
    let imageSrc = "";
    
    if (!imageFileName) {
      imageSrc = "https://picsum.photos/200/200?image=823";
    } else {
      imageSrc = `${process.env.PUBLIC_URL}/images/members/${imageFileName}.${type}`;
    }

    return imageSrc;
  }

  getImage = (imageFileName) => {
    const fallbackSrc = this.getImageSrc(this.props.image, 'jpg');
    const webPSrc = this.getImageSrc(this.props.image, 'webp');
    const jp2Src = this.getImageSrc(this.props.image, 'jp2');

    const ua = window.navigator.userAgent;
    const isIE = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

    if (isIE) {
      return <img className="member-image" src={fallbackSrc} alt={this.props.name.english} />
    }

    return (
      <picture>
        <source srcSet={webPSrc} type="image/webp" />
        <source srcSet={jp2Src} type="image/jp2" />
        <img className="member-image" src={fallbackSrc} alt={this.props.name.english} />
      </picture>
    );
  }

  render() {
    return (
      <li className="Member">
        <div className="member-image-container">
          {this.getImage()}
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