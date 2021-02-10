function Game() {

  this.getState = function () {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
      console.log(gameState)
    })
  }
  this.update = function (state) {
    database.ref('/').update({
      gameState: state
    });
  }
  this.start = function () {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  this.play = function () {
    form.hide()
    text('The game has started', 120, 100)
    Player.getPlayerInfo()
    if (all_players === 'undefined') {
      var pos = 130
      for (let i in all_players) {
        if (i === 'Player' + player.index) {
          fill('red')
        }
        else {
          fill(0)
        }
        text(all_players[i].name + ': ' + all_players[i].distance, 120, pos)
        pos += 20
      }

    }
    if(keyDown(UP_ARROW)&&player.index>0)
    {
      player.distance += 50
      player.update()
    }
  }
}