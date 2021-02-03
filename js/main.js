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
  document.getElementById("submit-black").disabled = false;
  }

function enableSubmitWhite() {
  document.getElementById("submit-white").disabled = false;
  }

// === THE LEADER ON TOP ===

// --- Add/Remove class "leader" ---

function leaderClass(){
  var cardBlackScore = parseInt($('#card-score-black').val(), 10);
  var cardWhiteScore = parseInt($('#card-score-white').val(), 10);
  if(cardBlackScore > cardWhiteScore){
    $('.card-black').addClass("leader");
  }else{
    $('.card-black').removeClass("leader");
  }
  if(cardWhiteScore > cardBlackScore){
    $('.card-white').addClass("leader");
  }else{
    $('.card-white').removeClass("leader");
  }
} 





