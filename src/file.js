document.getElementById("turn").innerHTML = "Player 1 Turn";
var count = 1;
function fill(control){
    console.log(count);
    if(count<=9){
        if(count%2==0){
            document.getElementById(control.id).innerHTML = "X".fontcolor("yellow");
            document.getElementById("turn").innerHTML = "Player 1 Turn";
        }
        else{
            document.getElementById(control.id).innerHTML = "O";
            document.getElementById("turn").innerHTML = "Player 2 Turn";
        }
        count++;
        if(checkWin()){
            document.getElementById("main").style.opacity = "0.1";
            document.getElementById("turn").innerHTML = "We Have A winner!";
    }   
}
}

function getData(d){
    return document.getElementById(d).innerHTML;
}
function checkCondition(d1, d2, d3){
    if(getData(d1)!="" && getData(d2)!="" && getData(d3)!="" && getData(d1) == getData(d2) && getData(d2) == getData(d3)){
        return true;
    }
}
function checkWin(){
    if(checkCondition('d1', 'd2', 'd3')|| checkCondition('d1', 'd4', 'd7') || checkCondition('d3', 'd6', 'd9') || checkCondition('d4', 'd5', 'd6') || checkCondition('d1', 'd5', 'd9') || checkCondition('d3', 'd5', 'd7') || checkCondition('d7','d8','d9') || checkCondition('d2', 'd5', 'd8')){
        return true;
    }
}