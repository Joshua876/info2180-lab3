var board;
var game_state = [];
var stage = 1;
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
            } else {
                if (this.innerHTML==""){
                    this.innerHTML="O";
                    this.classList.add("O");
                    game_state[i]="O"
                    stage=1;
                }
            }
        });
    }
}
