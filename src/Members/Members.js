import React, { Component } from 'react';
import './Members.css';

import Member from '../Member/Member';

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

export default Members;