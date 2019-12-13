import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icon'
import './icons.css'

const Icons = ({ accounts }) => {
  if (!accounts.length) {
    return (
      <span className='no-icons'>
        None found! <span role="img" aria-label="Sad emoji">😭</span>
      </span>
    )
  }

  const icons = accounts.map(account => (
    <Icon
      key={account.url}
      type={account.type}
      url={account.url}
    />
  ))

  return (
    <ul>{icons}</ul>
  )
}

Icons.propTypes = {
  accounts: PropTypes.array,
}

export default Icons