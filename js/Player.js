class Player {
  constructor() {
    this.index = null
    this.name = null
    this.positionX = 0
    this.positionY = 0
  }
  //This is how to read the player count from a database.
  getPlayerCount() {

    var playerCountref = database.ref("playercount")
    playerCountref.on("value", (data) => {
      playerCount = data.val()
    })

  }

  //Write the player count into the database.

  updateCount(count) {
    database.ref("/").update({
      playercount: count
    })
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index

    if(this.index == 1 ){
      this.positionX = width/2-100
    }

    else{
      this.positionX = width/2+100
    }

    database.ref(playerIndex).set({
      name:this.name, 
      positionX: this.positionX, 
      positionY: this.positionY
    })
  }

  getPlayerInfo(){
    
  }
}
