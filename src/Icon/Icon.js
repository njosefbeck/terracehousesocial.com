import React from 'react';
import './Icon.css';

const Icon = (props) => {
  return (
    <li className="Icon">
      <a href={props.url} target="_blank" rel="noreferrer" title={props.type}>
        <i className={`fa fa-lg fa-${props.icon}`} aria-hidden="true"></i><span>{props.type}</span>
      </a>
    </li>
  );
};

export default Icon;