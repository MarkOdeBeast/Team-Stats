const team = {
    _players: [ 
  {firstName: 'Cristiano', lastName: 'Ronaldo', age: 35},
  {firstName: 'Cristiano', lastName: 'Ronaldo', age: 35},
  {firstName: 'Cristiano', lastName: 'Ronaldo', age: 35}
      ],
    _games: [
   {opponent: 'Liverpool', teampoints: 3, opponentPoints: 1},
   {opponent: 'Liverpool', teampoints: 3,opponentPoints: 1},
   {opponent: 'Liverpool', teampoints: 3, opponentPoints: 1}
      ],
      get players() {
        return this._players;
      },
      get games() {
        return this._games;
      },
      addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints,  newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  team.addGame('Titans',100, 98);
  console.log(team.games);