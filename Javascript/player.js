function Player(){
    update = function(name){
        var playerIndex = 'Player'+playercount 
        database.ref(playerIndex).set({
            name:name
        })
    }
    getCount = function(){
        let playercountref = database.ref('player_count')
        playercountref.on('value',function data(data){
            playercount = data.val()
        })
    }
    updatecount = function(count){
        database.ref('/').update({
            player_count:count
        })
    }
     
}