var bg = document.getElementById('container'); 
var value = 0; 
var space_bar = 32; 
var right_arrow = 39;
var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight/2;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;


var MOVE_BY = -10; 
var DELAY_BY = 200;

function reset() {
    document.getElementById('paddle1').style.backgroundColor = 'red';
    document.getElementById('paddle2').style.backgroundColor = 'blue';
}

function youLose(player) {
    switch(player) {
        case 'left':
            document.getElementById('paddle1').style.backgroundColor = 'black';
            setTimeout(function() {
                //your code to be executed after 0.2 of a second
                reset();
              }, DELAY_BY);
            break;

        case 'right':
            document.getElementById('paddle2').style.backgroundColor = 'black';
            setTimeout(function() {
                //your code to be executed after 0.2 of a second
                reset();
              }, DELAY_BY);
            break;
        default:
            break;
    }
}

class Ball {
    constructor() {}

    startBall () {
        topPositionOfBall = 510;
        leftPositionOfBall = 820;

        if(Math.random() < 0.5) { // ball to the right
            var side = 1;
        } else {
            var side = -1; // ball to the left
        }

        // angle of the ball
        leftSpeedOfBall = side * (Math.random() * 0.7 + 2.6);
        topSpeedOfBall = (Math.random() * 0.2 + 2);
    }
}


window.onload = function(){ 
    ball1 = new Ball();
  

    ball1.startBall();

   
  
    window.onkeydown= function(e){ 
        if(e.keyCode === space_bar){ 
            alert("Game Paused")
        }; 
        /** Player 1 */
        // W - Pressed
        if (e.keyCode === 87 || e.which == 87) {
            speedOfPaddle1 = MOVE_BY; // - 
        };

        // S - Pressed
        if (e.keyCode === 83 || e.which == 83) {
            speedOfPaddle1 = MOVE_BY*-1; // +
        };

        /** Player 2 */
        // UP - Pressed
        if (e.keyCode === 38 || e.which == 38) {
            speedOfPaddle2 = MOVE_BY; // - 
        };

        // Down - Pressedsw
        if (e.keyCode === 40 || e.which == 40) {
            speedOfPaddle2 = MOVE_BY*-1; // +
        };

    }; 

    window.onkeyup = function(e) { 
   
        /** Player 1 */
        // W - Pressed
        if (e.keyCode === 87 || e.which == 87) {
            speedOfPaddle1 = 0; // - 
        };

        // S - Pressed
        if (e.keyCode === 83 || e.which == 83) {
            speedOfPaddle1 = 0; // +
        };

        /** Player 2 */
        // UP - Pressed
        if (e.keyCode === 38 || e.which == 38) {
            speedOfPaddle2 = 0; // - 
        };

        // Down - Pressedsw
        if (e.keyCode === 40 || e.which == 40) {
            speedOfPaddle2 = 0; // +
        };

    }; 

    window.setInterval((function show() {

        // update the position of the ball
        positionOfPaddle1 += speedOfPaddle1;
        positionOfPaddle2 += speedOfPaddle2;

        topPositionOfBall += topSpeedOfBall; 
        leftPositionOfBall += leftSpeedOfBall;

        /** Contain paddles within window limits */
        // Keep paddle within top boundaries
        if(positionOfPaddle1 <= 1) {
            positionOfPaddle1 = 1;
        }

        if(positionOfPaddle2 <= 1) {
            positionOfPaddle2 = 1;
        }

        // paddle from leaving bottom of window
        if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
            positionOfPaddle1 = window.innerHeight - paddleHeight;
        }

        if (positionOfPaddle2 >= window.innerHeight - paddleHeight) {
            positionOfPaddle2 = window.innerHeight - paddleHeight;
        }

        if (topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius) {
            topSpeedOfBall = -1 * topSpeedOfBall;
        }

        // player left
        if (leftPositionOfBall <= paddleWidth) {
            if(topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight){
                leftSpeedOfBall = -leftSpeedOfBall;      
            } else {
                score2 += 1; // if ball goes past player left. point goes to player right
                youLose('left');
                ball1.startBall();
               
               
            }
        }
    
        // player right
        if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
            if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
                leftSpeedOfBall = -leftSpeedOfBall;      
            } else {
                score1 += 1; // if ball goes past player right. point goes to player left
                youLose('right');
                ball1.startBall();
                
            }
        }

 
  


        document.getElementById('paddle1').style.top = positionOfPaddle1 + 'px';
        document.getElementById('paddle2').style.top = positionOfPaddle2 + 'px';

        document.getElementById('ball').style.top = topPositionOfBall + 'px';
        document.getElementById('ball').style.left = leftPositionOfBall + 'px';

        document.getElementById('player_1_score').innerHTML = score1.toString();
        document.getElementById('player_2_score').innerHTML = score2.toString();

        
    }));
};