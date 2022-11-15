const PlayerFactory = (sym) => {
    
    const symbol = sym;

    const makeMove = (tile) => {
        tile.innerHTML = symbol;
        Gameboard.gameboard.splice(tile.id, 1, symbol);
    };

    return {
        symbol,
        makeMove
    }

};

const Gameboard = (() => {
    
    let gameboard = [];

    return {
        gameboard
    }

})();

const Gameflow = (() => {

    const Player1 = PlayerFactory('X');
    const Player2 = PlayerFactory('O');
    const displayBar = document.querySelector('.status');

    const _createBoard = () => {
        const board = document.querySelector('.gameboard');
        for (i = 0; i < 9; i++) {
            Gameboard.gameboard.push('')
            let tile = board.appendChild(document.createElement('a'));
            tile.setAttribute('class', 'tile');
            tile.setAttribute('id', i)
            tile.addEventListener('click', function() {
                _mainflow(Player1, Player2, tile);
            })
        }
    };

    const _mainflow = (p1, p2, item) => {
        if (displayBar.innerHTML == `Player 1's move` && item.innerHTML == '') {
            p1.makeMove(item);
            displayBar.innerHTML = `Player 2's move`;
        } else if (displayBar.innerHTML == `Player 2's move` && item.innerHTML == '') {
            p2.makeMove(item);
            displayBar.innerHTML = `Player 1's move`;
        }
    };

    const gameStart = (() => {
        var startButton = document.querySelector('.start');
        startButton.addEventListener('click', function() {
            (displayBar.innerHTML == 'Time to duel!') ?
            displayBar.innerHTML = `Player 1's move` :
            false
        });
        _createBoard();
    })();

    const gameReset = (() => {
        var restartButton = document.querySelector('.restart');
        var tiles = document.querySelectorAll('.tile');
        restartButton.addEventListener('click', function() {
            tiles.forEach(element => element.innerHTML = '');
            displayBar.innerHTML = `Player 1's move`;
            for (let i = 0; i < Gameboard.gameboard.length; i++) {
                Gameboard.gameboard[i] = '';
            }
        })
    })();

})();