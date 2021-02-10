class Form{
    constructor(){
    this.title = createElement('h2')
    this.title.position(130,0)
    this.inp = createInput('')
    this.button = createButton('Play')
    this.greeting = createElement('h3')
    }
    display = function(){
        let y = 160
        this.title.html('Car racing game')
        this.inp.position(130,y)
        this.button.position(250,200)
        this.button.mousePressed(function nameless(){
            playerCount+=1
            console.log(playerCount)
            this.inp.hide()
            this.button.hide()
            player.update()
            player.name = this.inp.value()
            player.index = playerCount
            player.updateCount(playerCount)
            this.greeting.html('hello '+player.name)
            this.greeting.position(130,160)
        })
    
    }
    hide=function(){
        this.greeting.hide()
        this.button.hide()
        this.inp.hide()
    }
}