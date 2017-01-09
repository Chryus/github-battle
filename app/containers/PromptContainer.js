import React from 'react'
import styles from '../styles'

class PromptContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.onUpdateUser = this.onUpdateUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const path = `pathtogithubapi/${this.state.username}`
  }

  render () {
    return (
       <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder="Github Username"
                type="text"
                onChange={this.onUpdateUser} 
                value={this.state.username} />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit"
                onSubmit={this.handleSubmit}>
                  Continue
              </button>
            </div>
          </form>
        </div>
       </div>
    );
  }
}

export default PromptContainer; 