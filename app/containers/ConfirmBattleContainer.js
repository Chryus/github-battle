import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true,
      playerInfo: [] 
    };
  }

  componentDidMount() {
    let query = this.props.location.query;
    //fetch user info from github and update state
  }

  render() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}/>
    );
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ConfirmBattleContainer;