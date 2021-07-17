class Game{
    constructor(){}
    getState(){
        var gameref=database.ref("gameState")
        gameref.on("value",function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref=await database.ref("playerCount").once("value")
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            
            form=new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(30)
        text("GAME START",120,100)
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
        var displayP=130
        for(var plr in allPlayers){
            if(plr=="player"+player.index)
            fill ("red")
            else 
            fill ("black")
            displayP+=20
            textSize(15)
            text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayP)

        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.distance+=50
        player.update()
    }
    }
}