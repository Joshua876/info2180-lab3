var board;
window.onload = function () {
    board=document.getElementById("board");
    for (let i = 0; i < 9; i++) {
        board.children.item(i).classList.add("square");

}
}
