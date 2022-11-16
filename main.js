const PlayerFactory = (sym, name) => {
    
    const winText = sym + sym + sym;

    const makeMove = (tile) => {
        tile.innerHTML = sym;
        Gameboard.gameboard.splice(tile.id, 1, sym);
    };

    const winortie = () => {

        const board = Gameboard.gameboard;
        
        let row1 = board.slice(0, 3).toString().replaceAll(',', '');
        let row2 = board.slice(3, 6).toString().replaceAll(',', '');
        let row3 = board.slice(6, 9).toString().replaceAll(',', '');

        let col1 = board[0]+board[3]+board[6];
        let col2 = board[1]+board[4]+board[7];
        let col3 = board[2]+board[5]+board[8];

        let diag1 = board[0]+board[4]+board[8];
        let diag2 = board[2]+board[4]+board[6];

        if (row1 == winText || row2 == winText || row3 == winText) {
            Gameflow.displayBar.innerHTML = `${name} wins!`
        } else if (col1 == winText || col2 == winText || col3 == winText) {
            Gameflow.displayBar.innerHTML = `${name} wins!`
        } else if (diag1 == winText || diag2 == winText) {
            Gameflow.displayBar.innerHTML = `${name} wins!`
        } else if (!board.includes('')) {
            Gameflow.displayBar.innerHTML = `It's a tie!    `
        }

    }

    return {
        makeMove,
        winortie
    }

};

const Gameboard = (() => {
    
    let gameboard = [];

    return {
        gameboard
    }

})();

const Gameflow = (() => {

    let Player1 = PlayerFactory('X', 'Player 1');
    let Player2 = PlayerFactory('O', 'Player 2');
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
            p1.winortie();
            (displayBar.innerHTML == `Player 1's move`) ? displayBar.innerHTML = `Player 2's move` : false;
        } else if (displayBar.innerHTML == `Player 2's move` && item.innerHTML == '') {
            p2.makeMove(item);
            p2.winortie();
            (displayBar.innerHTML == `Player 2's move`) ? displayBar.innerHTML = `Player 1's move` : false;
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

    return {
        displayBar
    }

})();