document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    let botao = document.getElementById("btn");
    let botaoOkModal = document.getElementById("btnOK");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    botao.addEventListener('click', btnRecomecar);
    botaoOkModal.addEventListener('click', btnCloseModal);

});

function btnCloseModal() {
    document.getElementById('modal').style.display = "none";
    btnRecomecar();
}

function btnRecomecar() {
    iniciaVariaveis();
    squares = document.querySelectorAll(".square");
    squares.forEach((square) => {

        let position = square.id;
        let symbol = board[position];

        if (symbol == '') {
            square.innerHTML = `<div class=''></div>`;
        }
    });
}

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        showLineWin();

    }

    updateSquare(position);
}

function showLineWin() {
    let linkImg = "";

    //Posição da posição da imagem
    switch (positionWin[3]) {

        case "d1": {
            linkImg = "./img/icons/linhaDiagonal1.png";

            break;
        }

        case "d2": {
            linkImg = "./img/icons/linhaDiagonal2.png";
            break;
        }

        case "v": {
            linkImg = "./img/icons/linhaVertical.png";
            break;
        }

        case "h": {
            linkImg = "./img/icons/linhaHorizontal.png";
            break;
        }

    }

    setTimeout(() => {
        for (let posWin of positionWin) {

            let square = document.getElementById(posWin.toString());
            img = document.createElement('img');
            img.setAttribute("src", linkImg);
            img.setAttribute("width", "100px");
            img.setAttribute("height", "100px");
            square.appendChild(img);
        }
    }, 30);

    setTimeout(() => {
         mostraTelaVitoria(positionWin[0]);
    }, 100); 
}

function mostraTelaVitoria(posWin) {
    document.getElementById('modal').style.display = "block";
    addEmojiWinner(posWin);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];

    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`;
    }
}

function addEmojiWinner(posWin) {
    let win = document.getElementById("winner");
    let symbol = board[posWin];
    if (symbol == 'o') {
        win.innerHTML = `<img class="circulo" src="./img/icons/circle.png" alt="">`;
    } else if (symbol == 'x') {
        win.innerHTML = `<img class="xis" src="./img/icons/xis.png" alt="">`;
    }
}