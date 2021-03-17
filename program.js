//====================================
//
//無限トイレットペーパー
//Toshihide Iizuka
//
//2021/03/17
//
//====================================

//Main
var count = 0;
function pullpaper() {
    var paper = document.getElementById("paper");
    paper.src = "./Resources/paper2.png";
    
    //Soundサウンド再生
    document.getElementById("sound").play();
    
    delayedCall(1,function(){
        releasepaper();
    });
}
        
function releasepaper() {
    var paper = document.getElementById("paper");
    count++;
    if ( count < 100 ) {
        paper.src = "./Resources/paper1.png";
    } else {
        paper.src = "./Resources/paper3.png";
        
        //だから言ったでしょ！
        var board = document.getElementById("board");
        board.innerHTML = "<p>だから言ったのにwwww</p>";
        
        //Soundサウンド再生
        document.getElementById("sound2").play();

        delayedCall(20,function(){
           count = 0;
            board.innerHTML = "";
        });
    }
}
        
function delayedCall(second, callBack){
    setTimeout(callBack, second * 1000);
}