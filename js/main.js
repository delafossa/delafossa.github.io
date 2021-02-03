// === menuItem ===

const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

// --- menuItem toggle ---

menuBtn.addEventListener('click', () => {
  
  menuBtn.classList.toggle('open');
  mainMenu.classList.toggle('open');

})



function enableSubmitBlack() {
  document.getElementById("submit-black").disabled = false;
  }

  function enableSubmitWhite() {
    document.getElementById("submit-white").disabled = false;
    }









