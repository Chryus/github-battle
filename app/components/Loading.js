import React from 'react'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "Loading"
    };
  }

  render() {
    return (
      <div className="container">
        <p className="content">{this.state.text}</p>
      </div>
    );
  }
} 

export default Loading;