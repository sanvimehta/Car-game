class Game {
  constructor() { }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getPlayerCount()

    car1 = createSprite(width/2-50, height-100)
    car1.addImage(car_1img)

    car2 = createSprite(width/2, height-100)
    car2.addImage(car_2img)
    cars = [car1, car2]
  }

  getgameState() {
    var gameStateref = database.ref("gamestate")
    gameStateref.on("value", (data) => {
      gameState = data.val()
    })
  }

  updateState(state){
    database.ref("/").update({
      gamestate: state
    })
  }

  handleElements(){
    form.hide()
  }

  play(){
    this.handleElements()

  }

}
