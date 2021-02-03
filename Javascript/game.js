function Game(){
    getstate = function(){
        let gamestateref = database.ref('gameStatae')
        gamestateref.on('value',function getval(data){
            gamestate = data.val()
        })
    }
    updatestate = function(state){
        database.ref('/').update({
            gameState:state
        })
    }
}