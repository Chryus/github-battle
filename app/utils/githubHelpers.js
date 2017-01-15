import axios from 'axios'

const id = "MY_CLIENT_ID";
const sec = "MY_SECRET_ID";
const params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + params);
}

module.exports = ({
  getPlayersInfo: function(players) {
    return axios.all(players.map( (username) => {
      return getUserInfo(username)
    }))
    .then((info) => {
      return info.map((user) => {
        return user.data
      })
    }).catch((err) => {
      console.warn('Error in getPlayersInfo ', err)
    })
  }
})