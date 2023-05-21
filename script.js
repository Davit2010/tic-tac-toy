let Xwins = document.querySelector('.x-wins')
let xLogic = 0
let Owins = document.querySelector('.o-wins')
let oLogic = 0
let restartBtn = document.querySelector('#restart-btn')
let popap = document.querySelector('.popap')
let text = document.querySelector('.text')
let blocks = document.querySelectorAll(".blocks")
let gamer = "x";
let player_x = "";
let player_O = "";
let clearBtn = document.querySelector('.clear-localstor')


for (let i = 0; i < blocks.length; i++) {
  blocks[i].addEventListener("click", () => {
    console.log(player_O.length);
    if (blocks[i].textContent === "") {

      if (gamer === "x") {
        blocks[i].textContent = "x";
        gamer = "0";
        player_x += i + 1;
        logic(player_x, 'x')
      }
      else {
        blocks[i].textContent = "O";
        gamer = "x";
        player_O += i + 1;
        logic(player_O, '0')
      }
    }
  })
}


function logic(player, gamer) {

  (player.match("1") && player.match("2") && player.match("3") !== null) ? call(gamer) : isFull();

  (player.match("4") && player.match("5") && player.match("6") !== null) ? call(gamer) : false;

  (player.match("7") && player.match("8") && player.match("9") !== null) ? call(gamer) : false;

  (player.match("1") && player.match("4") && player.match("7") !== null) ? call(gamer) : false;

  (player.match("2") && player.match("5") && player.match("8") !== null) ? call(gamer) : false;

  (player.match("3") && player.match("6") && player.match("9") !== null) ? call(gamer) : false;

  (player.match("1") && player.match("5") && player.match("9") !== null) ? call(gamer) : false;

  (player.match("3") && player.match("5") && player.match("7") !== null) ? call(gamer) : false;

}

function call(gamer) {
  popap.style.cssText = 'display:flex'
  text.innerText = `${gamer} win`
  if (text.innerHTML == 'x win') {
    xWinsLogic()
    console.log(xLogic);
  }
  if (text.innerHTML == '0 win') {
    oWinnsLogic()
  }
  return
}

function isFull() {
  if (player_x.length == 5 || player_O.length == 5) {
    popap.style.cssText = 'display:flex'
    text.innerText = 'Draw'
  }
}

function restart() {
  restartBtn.addEventListener('click', () => {
    window.location.reload()
  })
}
restart()

function xWinsLogic() {
  xLogic++
  Xwins.innerHTML = xLogic
  localStorage.setItem('xWins', xLogic)
}
function oWinnsLogic() {
  oLogic++
  Owins.innerHTML = oLogic
  localStorage.setItem('oWins', oLogic)
}
function xSaveWins() {
  if (localStorage.getItem('xWins')) {
    xLogic = localStorage.getItem('xWins')
    Xwins.innerHTML = xLogic
  }
}

xSaveWins()

function oSaveWins() {
  if (localStorage.getItem('oWins')) {
    oLogic = localStorage.getItem('oWins')
    Owins.innerHTML = oLogic
  }
}

oSaveWins()

clearBtn.addEventListener('click', () => {
  localStorage.clear()
  Xwins.innerHTML = 0
  Owins.innerHTML = 0
  oLogic = 0
  xLogic = 0
})
//fixed version