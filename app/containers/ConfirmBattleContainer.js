import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleInitiateBattle = this.handleInitiateBattle.bind(this)
    this.state = { 
      isLoading: true,
      playerInfo: [] 
    };
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  }

  componentDidMount() {
    let query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then( (players) => {
      this.setState({
        isLoading: false,
        playerInfo: [players[0], players[1]]
      })
    })
  }

  render() {
    return (
      <ConfirmBattle 
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;