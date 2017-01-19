import React from 'react'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.originalText = "Loading";
    this.state = {
      text: "Loading"
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, 300)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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