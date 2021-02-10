class Player {
    constructor(){
      this.name = null
      this.distance=0
      this.index=0
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
        console.log(playerCount)
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "Players/Player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.dantance
      });
    }
    static getPlayerInfo = function(){
      playerinforef = database.ref('Players')
      playerinforef.on('value',function (data){
        all_players=data.val()
      })
    }
  }