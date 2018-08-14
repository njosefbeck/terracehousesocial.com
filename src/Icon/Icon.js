import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faSnapchat,
  faYoutube,
  faTumblr,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Icon.css';

const Icon = (props) => {

  function buildIcon(iconName) {
    let icon = null;

    switch(iconName) {
      case 'instagram':
        icon = faInstagram;
        break;
      case 'twitter':
        icon = faTwitter;
        break;
      case 'snapchat':
        icon = faSnapchat;
        break;
      case 'youtube':
        icon = faYoutube;
        break;
      case 'tumblr':
        icon = faTumblr;
        break;
      case 'facebook':
        icon = faFacebook;
        break;
      case 'pencil':
        icon = faPencilAlt;
        break;
      case 'file-text':
        icon = faFileAlt;
        break;
      default:
        icon = faPencilAlt;
    }

    return <FontAwesomeIcon icon={icon} size="lg" />
  }

  return (
    <li className="Icon">
      <a href={props.url} target="_blank" rel="noopener noreferrer" title={props.type}>
        {buildIcon(props.icon)}<span>{props.type}</span>
      </a>
    </li>
  );
};

export default Icon;