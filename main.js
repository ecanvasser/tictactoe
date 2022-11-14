const Gameboard = (() => {
    
    var gameboard = [];
    const board = document.querySelector('.gameboard');
    
    const _createBoard = (() => {
        for (i = 0; i < 9; i++) {
            let tile = board.appendChild(document.createElement('a'));
            tile.setAttribute('class', 'tile');
            tile.setAttribute('id', i)
        }
    })();

})();

const PlayerFactory = (sym) => {
    
    const symbol = sym;

    const makeMove = (() => {
        let tiles = document.querySelectorAll('.tile');
        for (i = 0; i < tiles.length; i++) {
            tiles[i].addEventListener('click', function() {
                this.innerHTML = symbol
            })
        }
    })();

};

const Gameflow = (() => {

    const moveValid = () => {};
    const winortie = () => {};

})();