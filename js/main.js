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









