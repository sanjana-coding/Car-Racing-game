class Player{
    constructor(){

    }

  getCount(){
      var Playercountref=database.ref("Playercount")
      Playercountref.on("value",function (data){
          Playercount=data.val()
      })
  }
  updateCount(count){
  database.ref("/").update({
      Playercount:count
  })
  }

  update(Name){
      var playerindex="Player"+Playercount
      database.ref(playerindex).set({
       Name:Name   
       })
  }


}