import React from 'react'

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p>LOADING...</p> 
    : <div>COMFIRM BATTLE: {puke(props)}</div>
}

ConfirmBattle.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playerInfo: React.PropTypes.array.isRequired
}

export default ConfirmBattle;