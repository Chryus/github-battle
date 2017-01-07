import React from 'react'
import ReactDOM from 'react-dom'
import Link from './modules/Link'

// Example building avatar section with ES6 class components

class ProfilePic extends React.Component {
  render () {
    return (
      <img src={this.props.imageUrl} style={{width:100, height:100}}/>
    );
  }
}

class ProfileName extends React.Component {
  render () {
    return (
      <div>{this.props.name}</div>
    );
  }
}

class ProfileLink extends React.Component {
  render () {
    return (
      <Link href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
      </Link>
    );
  }
}

class Avatar extends React.Component {
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
}

const __user_data = {
  name: 'Chris Haaaaaaaack',
  username: 'chryus',
  image: 'https://avatars0.githubusercontent.com/u/5354390?v=3&s=460'
}

ReactDOM.render(
  <Avatar user={__user_data} />,
  document.getElementById('avatar')
)
