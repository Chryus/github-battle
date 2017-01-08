import React from 'react'

export default React.createClass({
  changeURL() {
    window.location.replace(this.props.href)
  },

  render() {
    return (
      <span 
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={this.changeURL}>
        {this.props.children}
      </span>
    );
  }
})