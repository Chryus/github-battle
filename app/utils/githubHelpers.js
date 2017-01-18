import axios from 'axios'

const id = "MY_CLIENT_ID";
const sec = "MY_SECRET_ID";
const params = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + params);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}

function getPlayersData(player) {
  return getRepos(player.login)
   .then(getTotalStars)
   .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
   })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}


module.exports = ({
  getPlayersInfo: function(players) {
    return axios.all(players.map((username) => {
      return getUserInfo(username);
    }))
    .then((res) => {
      return res.map((user) => {
        return user.data;
      })
    }).catch((err) => {
      console.warn('Error in getPlayersInfo ', err);
    })
  },

  battle: function(players) {
    const playerOne = getPlayersData(players[0]);
    const playerTwo = getPlayersData(players[1]);

    return axios.all([playerOne, playerTwo])
      .then(calculateScores)
      .catch((err) => {
        console.warn("Error in getPlayersInfo: ", err);
      })
  }
})