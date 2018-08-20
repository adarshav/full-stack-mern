function marsRover(a, b, c, d) {
var moves = d.split('');
//console.log(moves);
let xAxis = a;
let yAxis = b;
let currentDirection = c;

    function rotateLeft() {
        if(currentDirection === 'N') {
            currentDirection = 'W';
        } else if(currentDirection === 'W') {
            currentDirection = 'S';
        } else if(currentDirection === 'S') {
            currentDirection = 'E';
        } else if(currentDirection === 'E') {
            currentDirection = 'N'
        }
    }

    function rotateRight() {
        if(currentDirection === 'N') {
            currentDirection = 'E';
        } else if(currentDirection === 'E') {
            currentDirection = 'S';
        } else if(currentDirection === 'S') {
            currentDirection = 'W';
        } else if(currentDirection === 'W') {
            currentDirection = 'N';
        }
    }
    function moving() {
        if(currentDirection === 'N') {
            yAxis++;
        } else if(currentDirection === 'S') {
            yAxis--;
        } else if(currentDirection === 'E') {
            xAxis++;
        } else if(currentDirection === 'W') {
            xAxis--;
        }
    }
    moves.forEach(function(move) {
        if(move === 'L') {
            rotateLeft();
        } else if(move === 'R') {
            rotateRight();
        } else if(move === 'M') {
            moving();
        }
    });
    return `${xAxis} ${yAxis} ${currentDirection}`;
}
console.log(marsRover(1, 2, 'N', 'LMLMLMLMM'));
console.log(marsRover(3, 3, 'E', 'MMRMMRMRRM'));
