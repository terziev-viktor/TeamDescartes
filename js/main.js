'use strict';

function main() {
    // Starts the game. The function is called when #start-button is clicked.
    var engine = app.engine.load();
    if(!engine.gameIsRunning) {
        engine.gameIsRunning = true;
        engine.run();
    }
}

document.getElementById('start-button').addEventListener('click', main);




