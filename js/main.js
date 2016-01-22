'use strict';
function main() {
    // Starts the game. The function is called when #start-button is clicked.
    var engine = app.engine.load();
    document.getElementById('start-button').style.visibility = 'hidden';
    if(!engine.gameIsRunning) {
        engine.gameIsRunning = true;
        console.log('main.js -> game is running');
        engine.run();
    }
}

document.getElementById('start-button').addEventListener('click', main);




