import React from 'react'
import Prompt from '../components/Prompt'

class PromptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' }
    this.handleUpdateUser = this.handleUpdateUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSubmitUser(event) {
    event.preventDefault()
    this.setState({ username: '' })

    if (this.props.params.playerOne) {
      // go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.params.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  render () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    );
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object
};

export default PromptContainer; 