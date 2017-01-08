import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Hello from Main!</h1>
        {this.props.children}
      </div>
    ) 
  }
});