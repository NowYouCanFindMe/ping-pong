var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

var MOVE_BY = -10; 

document.addEventListener('keydown', function(e){
    /** Player 1 */
    // W - Pressed
    if (e.keycode == 87 || e.which == 87) {
        speedOfPaddle1 = MOVE_BY; // - 
    }

    // S - Pressed
    if (e.keycode == 83 || e.which == 83) {
        speedOfPaddle1 = abs(MOVE_BY); // +
    }

    /** Player 2 */
    // UP - Pressed
    if (e.keycode == 38 || e.which == 38) {
        speedOfPaddle2 = MOVE_BY; // - 
    }

    // Down - Pressedsw
    if (e.keycode == 40 || e.which == 40) {
        speedOfPaddle2 = abs(MOVE_BY); // +
    }

})

window.setInterval((function show() {

    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;

    document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px'
    document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px'
}));

// //