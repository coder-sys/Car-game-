var ball;
var database
var playercount =0
var gamestate = 0 
var position
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var ballpointref = database.ref('ball/position')
    ballpointref.on('value',readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
changePosition = function(x,y){
database.ref('ball/position').set({
    'xpos':ball.x+=x,
    'ypos':ball.y+=y
})
}
readposition = function(data){
    position = data.val()
    ball.x = position.xpos
    ball.y = position.ypos
}

