// === MAIN MENU / HAMBURGER ===

const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu');

// --- Add/Remove class "open" ---

menuBtn.addEventListener('click', () => {
  
  menuBtn.classList.toggle('open');
  mainMenu.classList.toggle('open');

});



// === SUBMIT SCORE FORM ===

// --- Submit score buttons activation ---

$(document).ready(function() {
 

  $("#single_black").on("change", function() {
    $("#submit_black").prop("disabled", false);
  });
  
  $("#double_black").on("change", function() {
    $("#submit_black").prop("disabled", false);
  });
  
  $("#single_white").on("change", function() {
    $("#submit_white").prop("disabled", false);
  });
  
  $("#double_white").on("change", function() {
    $("#submit_white").prop("disabled", false);
  });
    
  });

// --- Calculate and append data (Player Black) ---

$(document).ready(function() {
  $('#submit_black').on("click", function() {
    
    if($('#single_black').is(':checked')) {

      $("#score_black").text(function(i, text) {
        return +text + 1 || 0
      });
    
      $("#single_point_black").text(function(i, text) {
        return +text + 1 || 0
      });
            
    }

    if($('#double_black').is(':checked')) { 
            
      $("#score_black").text(function(i, text) {
        return +text + 2 || 0
      });
    
      $("#double_point_black").text(function(i, text) {
        return +text + 1 || 0
      });
            
    }

    $("#hands_won_black").text(function(i, text) {
      return +text + 1 || 0
    });

    $("#single_black").prop("checked", false);
    $("#double_black").prop("checked", false);
    $("#submit_black").prop("disabled", true);

      return false;
  
  });
});

// --- Calculate and append data (Player Black) ---

$(document).ready(function() {
  $('#submit_white').on("click", function() {

    
    if($('#single_white').is(':checked')) {

      $("#score_white").text(function(i, text) {
        return +text + 1 || 0
      });
    
      $("#single_point_white").text(function(i, text) {
        return +text + 1 || 0
      });
            
    }

    if($('#double_white').is(':checked')) { 
            
      $("#score_white").text(function(i, text) {
        return +text + 2 || 0
      });
    
      $("#double_point_white").text(function(i, text) {
        return +text + 1 || 0
      });
            
    }

    $("#hands_won_white").text(function(i, text) {
      return +text + 1 || 0
    });

    $("#single_white").prop("checked", false);
    $("#double_white").prop("checked", false);
    $("#submit_white").prop("disabled", true);

      return false;
  
  });
});


// === AUDIO EFFECTS ===

function enableAudioCheck() {
  var soundCheck = document.getElementById("audio_check");
  soundCheck.Play();
}

function enableAudioSubmit() {
  var soundSubmit = document.getElementById("audio_submit");
  soundSubmit.Play();
}



// === THE LEADER ON TOP ===

// --- Add/Remove class "leader" ---