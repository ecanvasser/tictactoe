const Gameboard = (() => {
    
    var gameboard = [];

    const renderX = () => {};
    const renderO = () => {};

})();

const PlayerFactory = () => {

    const makeMove = () => {};
    
};

const Gameflow = (() => {

    const createBoard = () => {
        const board = document.querySelector('.gameboard');
        for (i = 0; i < 9; i++) {
            let tile = board.appendChild(document.createElement('div'));
            tile.setAttribute('class', 'tile');
            tile.setAttribute('id', i)
        }
    };

    createBoard();

    const moveValid = () => {};
    const winortie = () => {};
    
    return {
        createBoard
    }
})();