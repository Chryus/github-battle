import React from 'react'
const PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Results(props) {
  return (
    <div>{puke(props)}</div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

export default Results;