var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballpositionref = database.ref('ball/position')
    ballpositionref.on('value',readposition,se)
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

function changePosition(x,y){
        database.ref('ball/position').set({
        'xpos':position.xpos+x,
        'ypos':position.ypos+y
    });
}
function readposition(data){
    position = data.val();
    ball.x = position.xpos
    ball.y = position.ypos
}
 function se(){
     console.log('error in connecting to the database')
 }