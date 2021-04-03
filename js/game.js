let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
//Os estados de vitória
let winStates = [
    [0, 1, 2, 'h'],
    [3, 4, 5, 'h'],
    [6, 7, 8, 'h'],
    [0, 3, 6, 'v'],
    [1, 4, 7, 'v'],
    [2, 5, 8, 'v'],
    [0, 4, 8, 'd1'],
    [2, 4, 6, 'd2']
]
let positionWin = ['', '', '', ''];

function iniciaVariaveis(){
    board = ['', '', '', '', '', '', '', '', ''];    
    let positionWin = ['', '', '', ''];
    playerTime = 0;
    gameOver = false;
}

function handleMove(position) {

    if (gameOver) {
        return;
    }

    //Não deixa add se caso nessa posição já tiver um symbol
    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin();

        if (!gameOver) {

            playerTime = (playerTime == 0) ? 1 : 0;

        }
    }

    return gameOver;

}

function isWin() {

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        let pos4 = seq[3];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            positionWin = [pos1, pos2, pos3, pos4];

            return true;

        }
    }

    return false;
}