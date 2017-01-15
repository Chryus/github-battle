import React from 'react'

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p>LOADING...</p> 
    : <p>COMFIRM BATTLE</p>
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired
}



export default ConfirmBattle;