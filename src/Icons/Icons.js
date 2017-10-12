import React from 'react';
import './Icons.css';

import Icon from '../Icon/Icon';

const Icons = (props) => {
  if (props.accounts.length > 0) {
    const accounts = props.accounts.map(account => {
      return <Icon 
        key={account.url}
        type={account.type}
        icon={account.icon}
        url={account.url} 
      />
    });

    return (
      <ul className="icons">
        {accounts}
      </ul>
    );
  } else {
    return (
      <p>This person has no social media accounts! <span role="img" aria-label="Sad emoji">😭</span></p>
    );
  }
};

export default Icons;