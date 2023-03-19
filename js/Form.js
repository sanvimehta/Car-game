class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display(){
    this.input.position(width/2-120, height/2)
    this.input.class("customInput")
    this.playButton.position(width/2-100, height/2+80)
    this.playButton.class("customButton")
    this.titleImg.position(width/2-400, 50)
    this.titleImg.class("gameTitle")
    this.greeting.position(width/2-300, height/2-100)
    this.greeting.class("greeting")
    this.handlemousePressed()
  }

  handlemousePressed(){
    this.playButton.mousePressed(()=>{
      this.greeting.html("Hello "+ this.input.value()+"!" +" \nWaiting for other players to join!")
      this.input.hide()
      this.playButton.hide()
      playerCount = playerCount + 1
      console.log(playerCount)
      player.updateCount(playerCount)
      player.index = playerCount
      //Add to the database
      player.addPlayer()
    })
  }
}
