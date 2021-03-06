import React from 'react'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.originalText = "Loading";
    this.state = {
      text: "Loading",
      speed: 300
    };
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      console.log(HERE)
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        console.log("HERE")
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.state.speed)
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