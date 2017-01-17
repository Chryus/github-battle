import React from 'react'

const PropTypes = React.PropTypes

function UserDetailsWrapper(props) {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.user}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  user: PropTypes.string.isRequired
}

export default UserDetailsWrapper;
