import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="text-center">Github Battle!</h1>
        {this.props.children}
      </div>
    ) 
  }
});