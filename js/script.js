var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();



// clipart js

function copyInput() {
  var copyText = document.getElementById("copyInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
 
}


// add remove fileld

$(document).ready(function(){
    var maxField = 10; //Input fields increment limitation
    var addButton = $('.c-invite-add'); //Add button selector
    var wrapper = $('.c-invite-wr ul'); //Input field wrapper
    var fieldHTML = '<li><div class="c-invite-control"><div class="form-input-section c-input-icon"> <input type="text" class="inputText" placeholder="Gryphon" required=""> <span class="floating-label">Participant name</span></div></div><div class="c-invite-control"><div class="form-input-section c-input-icon"> <input type="text" class="inputText" placeholder="gryphon@wonderland.com" required=""> <span class="floating-label">Participant email</span></div></div> <a href="javascript:void(0)" class="c-remove-btn">x</a></li>'; //New input field html 
    var x = 1; //Initial field counter is 1
    
    //Once add button is clicked
    $(addButton).click(function(){
        //Check maximum number of input fields
        if(x < maxField){ 
            x++; //Increment field counter
            $(wrapper).append(fieldHTML); //Add field html
        }
    });
    
    //Once remove button is clicked
    $(wrapper).on('click', '.c-remove-btn', function(e){
        e.preventDefault();
        $(this).parentsUntil('.go-form').remove(); //Remove field html
        x--; //Decrement field counter
    });
    $(".c-url-input a").click(function(){
      $(this).toggleClass("active")
    });  
});
















jQuery('.c-date-picker').datetimepicker({
 i18n:{
  de:{
   months:[
    'Januar','Februar','März','April',
    'Mai','Juni','Juli','August',
    'September','Oktober','November','Dezember',
   ],
   dayOfWeek:[
    "So.", "Mo", "Di", "Mi", 
    "Do", "Fr", "Sa.",
   ]
  }
 },

 timepicker:false,
 format:'d.m.Y',
  minDate:'-1970/01/2',
  maxDate:'+2030/01/2',
});

jQuery('.c-time-picker').datetimepicker({
  datepicker:false,
  format:'H:i'
});

Detectizr.detect({detectScreen:false});




$(document).ready(function(){
  $("#bb-nav-last").click(function(){
    $(this).parents(".body-wrapper").addClass("hide-message");
  });
   $("#bb-nav-first").click(function(){
     $(this).parents(".body-wrapper").removeClass("hide-message");
  });
});