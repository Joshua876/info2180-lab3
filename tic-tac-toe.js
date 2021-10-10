var board;
var game_state = [];
var stage = 1;
var new_game;

window.onload = function () {
    board=document.getElementById("board");
    for (let i = 0; i < 9; i++) {
        board.children.item(i).classList.add("square");
        board.children.item(i).addEventListener("click",function(){



            if (stage==1){
                if (this.innerHTML==""){
                    this.innerHTML="X";
                    this.classList.add("X");
                    game_state[i]="X";
                    stage=2;
                }
            } else if(this.innerHTML==""){
                    this.innerHTML="O";
                    this.classList.add("O");
                    game_state[i]="O";
                    stage=1;
                }
            
            winstatus();
        });
        board.children.item(i).addEventListener("mouseover",function(){
            this.classList.add("hover");
        });
        board.children.item(i).addEventListener("mouseout",function(){
            this.classList.remove("hover");
        });
    }

    function winstatus() {
        if(game_state[0] == game_state[1] && game_state[0] == game_state[2] && game_state[0]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[0]+" is the Winner!";}
            
        if(game_state[3] == game_state[4] && game_state[3] == game_state[5] && game_state[3]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[3]+" is the Winner!";}
        
        if(game_state[6] == game_state[7] && game_state[6] == game_state[8] && game_state[6]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[6]+" is the Winner!";}
        
        if(game_state[0] == game_state[4] && game_state[0] == game_state[8] && game_state[0]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[0]+" is the Winner!";}
            
        if(game_state[2] == game_state[4] && game_state[2] == game_state[6] && game_state[2]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[2]+" is the Winner!";}
                
        if(game_state[0] == game_state[3] && game_state[0] == game_state[6] && game_state[0]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[0]+" is the Winner!";}
        
        if(game_state[1] == game_state[4] && game_state[1] == game_state[7] && game_state[1]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[1]+" is the Winner!";}
        
        if(game_state[2] == game_state[5] && game_state[2] == game_state[8] && game_state[2]){
            document.getElementById("status").classList.add("you-won");
            document.getElementById("status").textContent = "Congratulations! "+game_state[2]+" is the Winner!";}            
    }

    new_game = document.querySelector("button");
    new_game.onclick = function(element){
    window.location.reload();}

}


