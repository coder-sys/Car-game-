class Form{
    constructor(){
        
    }
    display = function(){
        let title = createElement('h2')
        title.html('Car racing game')
        title.position(130,0)
        let inp = createInput('Enter your name')
        inp.position(130,160)
        let button = createButton('Play')
        let greeting = createElement('h3')
        button.position(250,200)
        button.mousePressed(function nameless(){
            inp.hide()
            button.hide()
            let name = inp.value()
            greeting.html('Hello '+name)
            greeting.position(130,160)
        })
    }
}
