// === MAIN MENU / HAMBURGER ===

const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

// --- Add/Remove class "open" ---

menuBtn.addEventListener('click', () => {
  
  menuBtn.classList.toggle('open');
  mainMenu.classList.toggle('open');

})



// === SUBMIT BUTTONS ACTIVATION ===

function enableSubmitBlack() {
  document.getElementById("submit_black").disabled = false;
  }

function enableSubmitWhite() {
  document.getElementById("submit_white").disabled = false;
  }



// === THE LEADER ON TOP ===

// --- Add/Remove class "leader" ---


const cardBlack = document.querySelector('.card-black');
const cardWhite = document.querySelector('.card-white');

let cardBlackScore = parseInt(document.getElementById('card-score-black').value);
let cardWhiteScore = parseInt($('#card-score-white').val(), 10);

if (isNaN(cardBlackScore)==true) cardBlackScore=0;
if (isNaN(cardWhiteScore)==true) cardWhiteScore=0;


if(cardBlackScore > cardWhiteScore) {
  cardBlack.classList.add('leader');
}
else{
  cardBlack.classList.remove('leader');
}
if(cardWhiteScore > cardBlackScore){
  cardWhite.classList.add('leader');
}
else{
  cardWhite.classList.remove('leader');
}



console.log(cardBlackScore)




