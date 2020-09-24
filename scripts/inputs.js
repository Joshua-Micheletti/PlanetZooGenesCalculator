doneTypingInterval = 2000

var change = false;
$(".inputs").keyup(function () {

  if (this.value.length < 2) {
    change = true;
  }

  if (this.value.length > 2) {
    change = false;
  }

  if (this.value.length == 2 && change) {
    $(".inputs").eq( $(".inputs").index(this) + 1).focus();
    change = false;
  }
});


// FATHER FERTILITY INPUT

var timerGene1Ff;               //timer identifier
var gene1Ff = $("body").find("#gene1Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene1Ff', function () {
  clearTimeout(timerGene1Ff);
  timerGene1Ff = setTimeout(saveGene1Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene1Ff', function () {
  clearTimeout(timerGene1Ff);
});

//user is "finished typing," do something
function saveGene1Ff () {
  fatherGenesf[0] = $('#gene1Ff').val();

  for (var i = 0; i < fatherGenesf[0].length; i++) {
    fatherGenesf[0] = fatherGenesf[0].replace(fatherGenesf[0][i], fatherGenesf[0].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene2Ff;               //timer identifier
var gene2Ff = $("body").find("#gene2Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene2Ff', function () {
  clearTimeout(timerGene2Ff);
  timerGene2Ff = setTimeout(saveGene2Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene2Ff', function () {
  clearTimeout(timerGene2Ff);
});

//user is "finished typing," do something
function saveGene2Ff () {
  fatherGenesf[1] = $('#gene2Ff').val();

  for (var i = 0; i < fatherGenesf[1].length; i++) {
    fatherGenesf[1] = fatherGenesf[1].replace(fatherGenesf[1][i], fatherGenesf[1].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene3Ff;               //timer identifier
var gene3Ff = $("body").find("#gene3Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene3Ff', function () {
  clearTimeout(timerGene3Ff);
  timerGene3Ff = setTimeout(saveGene3Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene3Ff', function () {
  clearTimeout(timerGene3Ff);
});

//user is "finished typing," do something
function saveGene3Ff () {
  fatherGenesf[2] = $('#gene3Ff').val();

  for (var i = 0; i < fatherGenesf[2].length; i++) {
    fatherGenesf[2] = fatherGenesf[2].replace(fatherGenesf[2][i], fatherGenesf[2].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene4Ff;               //timer identifier
var gene4Ff = $("body").find("#gene4Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene4Ff', function () {
  clearTimeout(timerGene4Ff);
  timerGene4Ff = setTimeout(saveGene4Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene4Ff', function () {
  clearTimeout(timerGene4Ff);
});

//user is "finished typing," do something
function saveGene4Ff () {
  fatherGenesf[3] = $('#gene4Ff').val();

  for (var i = 0; i < fatherGenesf[3].length; i++) {
    fatherGenesf[3] = fatherGenesf[3].replace(fatherGenesf[3][i], fatherGenesf[3].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene5Ff;               //timer identifier
var gene5Ff = $("body").find("#gene5Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene5Ff', function () {
  clearTimeout(timerGene5Ff);
  timerGene5Ff = setTimeout(saveGene5Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene5Ff', function () {
  clearTimeout(timerGene5Ff);
});

//user is "finished typing," do something
function saveGene5Ff () {
  fatherGenesf[4] = $('#gene5Ff').val();

  for (var i = 0; i < fatherGenesf[4].length; i++) {
    fatherGenesf[4] = fatherGenesf[4].replace(fatherGenesf[4][i], fatherGenesf[4].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene6Ff;               //timer identifier
var gene6Ff = $("body").find("#gene6Ff");

// on keyup, start the countdown
$('body').on('keyup', '#gene6Ff', function () {
  clearTimeout(timerGene6Ff);
  timerGene6Ff = setTimeout(saveGene6Ff(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene6Ff', function () {
  clearTimeout(timerGene6Ff);
});

//user is "finished typing," do something
function saveGene6Ff () {
  fatherGenesf[5] = $('#gene6Ff').val();

  for (var i = 0; i < fatherGenesf[5].length; i++) {
    fatherGenesf[5] = fatherGenesf[5].replace(fatherGenesf[5][i], fatherGenesf[5].charAt(i).toUpperCase());
  }

  checkReadyf();
}


// FATHER IMMUNITY INPUT

var timerGene1Fi;               //timer identiiier
var gene1Fi = $("body").find("#gene1Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene1Fi', function () {
  clearTimeout(timerGene1Fi);
  timerGene1Fi = setTimeout(saveGene1Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene1Fi', function () {
  clearTimeout(timerGene1Fi);
});

//user is "finished typing," do something
function saveGene1Fi () {
  fatherGenesi[0] = $('#gene1Fi').val();

  for (var i = 0; i < fatherGenesi[0].length; i++) {
    fatherGenesi[0] = fatherGenesi[0].replace(fatherGenesi[0][i], fatherGenesi[0].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene2Fi;               //timer identiiier
var gene2Fi = $("body").find("#gene2Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene2Fi', function () {
  clearTimeout(timerGene2Fi);
  timerGene2Fi = setTimeout(saveGene2Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene2Fi', function () {
  clearTimeout(timerGene2Fi);
});

//user is "finished typing," do something
function saveGene2Fi () {
  fatherGenesi[1] = $('#gene2Fi').val();

  for (var i = 0; i < fatherGenesi[1].length; i++) {
    fatherGenesi[1] = fatherGenesi[1].replace(fatherGenesi[1][i], fatherGenesi[1].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene3Fi;               //timer identiiier
var gene3Fi = $("body").find("#gene3Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene3Fi', function () {
  clearTimeout(timerGene3Fi);
  timerGene3Fi = setTimeout(saveGene3Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene3Fi', function () {
  clearTimeout(timerGene3Fi);
});

//user is "iinished typing," do something
function saveGene3Fi () {
  fatherGenesi[2] = $('#gene3Fi').val();

  for (var i = 0; i < fatherGenesi[2].length; i++) {
    fatherGenesi[2] = fatherGenesi[2].replace(fatherGenesi[2][i], fatherGenesi[2].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene4Fi;               //timer identiiier
var gene4Fi = $("body").find("#gene4Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene4Fi', function () {
  clearTimeout(timerGene4Fi);
  timerGene4Fi = setTimeout(saveGene4Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene4Fi', function () {
  clearTimeout(timerGene4Fi);
});

//user is "finished typing," do something
function saveGene4Fi () {
  fatherGenesi[3] = $('#gene4Fi').val();

  for (var i = 0; i < fatherGenesi[3].length; i++) {
    fatherGenesi[3] = fatherGenesi[3].replace(fatherGenesi[3][i], fatherGenesi[3].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene5Fi;               //timer identiiier
var gene5Fi = $("body").find("#gene5Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene5Fi', function () {
  clearTimeout(timerGene5Fi);
  timerGene5Fi = setTimeout(saveGene5Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene5Fi', function () {
  clearTimeout(timerGene5Fi);
});

//user is "iinished typing," do something
function saveGene5Fi () {
  fatherGenesi[4] = $('#gene5Fi').val();

  for (var i = 0; i < fatherGenesi[4].length; i++) {
    fatherGenesi[4] = fatherGenesi[4].replace(fatherGenesi[4][i], fatherGenesi[4].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene6Fi;               //timer identiiier
var gene6Fi = $("body").find("#gene6Fi");

// on keyup, start the countdown
$('body').on('keyup', '#gene6Fi', function () {
  clearTimeout(timerGene6Fi);
  timerGene6Fi = setTimeout(saveGene6Fi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene6Fi', function () {
  clearTimeout(timerGene6Fi);
});

//user is "finished typing," do something
function saveGene6Fi () {
  fatherGenesi[5] = $('#gene6Fi').val();

  for (var i = 0; i < fatherGenesi[5].length; i++) {
    fatherGenesi[5] = fatherGenesi[5].replace(fatherGenesi[5][i], fatherGenesi[5].charAt(i).toUpperCase());
  }

  checkReadyi();
}



// MOTHER FERTILITY INPUT

var timerGene1Mf;               //timer identifier
var gene1Mf = $("body").find("#gene1Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene1Mf', function () {
  clearTimeout(timerGene1Mf);
  timerGene1Mf = setTimeout(saveGene1Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene1Mf', function () {
  clearTimeout(timerGene1Mf);
});

//user is "finished typing," do something
function saveGene1Mf () {
  motherGenesf[0] = $('#gene1Mf').val();

  for (var i = 0; i < motherGenesf[0].length; i++) {
    motherGenesf[0] = motherGenesf[0].replace(motherGenesf[0][i], motherGenesf[0].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene2Mf;               //timer identifier
var gene2Mf = $("body").find("#gene2Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene2Mf', function () {
  clearTimeout(timerGene2Mf);
  timerGene2Mf = setTimeout(saveGene2Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene2Mf', function () {
  clearTimeout(timerGene2Mf);
});

//user is "finished typing," do something
function saveGene2Mf () {
  motherGenesf[1] = $('#gene2Mf').val();

  for (var i = 0; i < motherGenesf[1].length; i++) {
    motherGenesf[1] = motherGenesf[1].replace(motherGenesf[1][i], motherGenesf[1].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene3Mf;               //timer identifier
var gene3Mf = $("body").find("#gene3Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene3Mf', function () {
  clearTimeout(timerGene3Mf);
  timerGene3Mf = setTimeout(saveGene3Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene3Mf', function () {
  clearTimeout(timerGene3Mf);
});

//user is "finished typing," do something
function saveGene3Mf () {
  motherGenesf[2] = $('#gene3Mf').val();

  for (var i = 0; i < motherGenesf[2].length; i++) {
    motherGenesf[2] = motherGenesf[2].replace(motherGenesf[2][i], motherGenesf[2].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene4Mf;               //timer identifier
var gene4Mf = $("body").find("#gene4Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene4Mf', function () {
  clearTimeout(timerGene4Mf);
  timerGene4Mf = setTimeout(saveGene4Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene4Mf', function () {
  clearTimeout(timerGene4Mf);
});

//user is "finished typing," do something
function saveGene4Mf () {
  motherGenesf[3] = $('#gene4Mf').val();

  for (var i = 0; i < motherGenesf[3].length; i++) {
    motherGenesf[3] = motherGenesf[3].replace(motherGenesf[3][i], motherGenesf[3].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene5Mf;               //timer identifier
var gene5Mf = $("body").find("#gene5Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene5Mf', function () {
  clearTimeout(timerGene5Mf);
  timerGene5Mf = setTimeout(saveGene5Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene5Mf', function () {
  clearTimeout(timerGene5Mf);
});

//user is "finished typing," do something
function saveGene5Mf () {
  motherGenesf[4] = $('#gene5Mf').val();

  for (var i = 0; i < motherGenesf[4].length; i++) {
    motherGenesf[4] = motherGenesf[4].replace(motherGenesf[4][i], motherGenesf[4].charAt(i).toUpperCase());
  }

  checkReadyf();
}


var timerGene6Mf;               //timer identifier
var gene6Mf = $("body").find("#gene6Mf");

// on keyup, start the countdown
$('body').on('keyup', '#gene6Mf', function () {
  clearTimeout(timerGene6Mf);
  timerGene6Mf = setTimeout(saveGene6Mf(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene6Mf', function () {
  clearTimeout(timerGene6Mf);
});

//user is "finished typing," do something
function saveGene6Mf () {
  motherGenesf[5] = $('#gene6Mf').val();

  for (var i = 0; i < motherGenesf[5].length; i++) {
    motherGenesf[5] = motherGenesf[5].replace(motherGenesf[5][i], motherGenesf[5].charAt(i).toUpperCase());
  }

  checkReadyf();
}


// MOTHER IMMUNITY INPUT

var timerGene1Mi;               //timer identiiier
var gene1Mi = $("body").find("#gene1Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene1Mi', function () {
  clearTimeout(timerGene1Mi);
  timerGene1Mi = setTimeout(saveGene1Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene1Mi', function () {
  clearTimeout(timerGene1Mi);
});

//user is "finished typing," do something
function saveGene1Mi () {
  motherGenesi[0] = $('#gene1Mi').val();

  for (var i = 0; i < motherGenesi[0].length; i++) {
    motherGenesi[0] = motherGenesi[0].replace(motherGenesi[0][i], motherGenesi[0].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene2Mi;               //timer identiiier
var gene2Mi = $("body").find("#gene2Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene2Mi', function () {
  clearTimeout(timerGene2Mi);
  timerGene2Mi = setTimeout(saveGene2Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene2Mi', function () {
  clearTimeout(timerGene2Mi);
});

//user is "finished typing," do something
function saveGene2Mi () {
  motherGenesi[1] = $('#gene2Mi').val();

  for (var i = 0; i < motherGenesi[1].length; i++) {
    motherGenesi[1] = motherGenesi[1].replace(motherGenesi[1][i], motherGenesi[1].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene3Mi;               //timer identiiier
var gene3Mi = $("body").find("#gene3Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene3Mi', function () {
  clearTimeout(timerGene3Mi);
  timerGene3Mi = setTimeout(saveGene3Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene3Mi', function () {
  clearTimeout(timerGene3Mi);
});

//user is "iinished typing," do something
function saveGene3Mi () {
  motherGenesi[2] = $('#gene3Mi').val();

  for (var i = 0; i < motherGenesi[2].length; i++) {
    motherGenesi[2] = motherGenesi[2].replace(motherGenesi[2][i], motherGenesi[2].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene4Mi;               //timer identiiier
var gene4Mi = $("body").find("#gene4Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene4Mi', function () {
  clearTimeout(timerGene4Mi);
  timerGene4Mi = setTimeout(saveGene4Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene4Mi', function () {
  clearTimeout(timerGene4Mi);
});

//user is "finished typing," do something
function saveGene4Mi () {
  motherGenesi[3] = $('#gene4Mi').val();

  for (var i = 0; i < motherGenesi[3].length; i++) {
    motherGenesi[3] = motherGenesi[3].replace(motherGenesi[3][i], motherGenesi[3].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene5Mi;               //timer identiiier
var gene5Mi = $("body").find("#gene5Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene5Mi', function () {
  clearTimeout(timerGene5Mi);
  timerGene5Mi = setTimeout(saveGene5Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene5Mi', function () {
  clearTimeout(timerGene5Mi);
});

//user is "iinished typing," do something
function saveGene5Mi () {
  motherGenesi[4] = $('#gene5Mi').val();

  for (var i = 0; i < motherGenesi[4].length; i++) {
    motherGenesi[4] = motherGenesi[4].replace(motherGenesi[4][i], motherGenesi[4].charAt(i).toUpperCase());
  }

  checkReadyi();
}


var timerGene6Mi;               //timer identiiier
var gene6Mi = $("body").find("#gene6Mi");

// on keyup, start the countdown
$('body').on('keyup', '#gene6Mi', function () {
  clearTimeout(timerGene6Mi);
  timerGene6Mi = setTimeout(saveGene6Mi(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#gene6Mi', function () {
  clearTimeout(timerGene6Mi);
});

//user is "finished typing," do something
function saveGene6Mi () {
  motherGenesi[5] = $('#gene6Mi').val();

  for (var i = 0; i < motherGenesi[5].length; i++) {
    motherGenesi[5] = motherGenesi[5].replace(motherGenesi[5][i], motherGenesi[5].charAt(i).toUpperCase());
  }

  checkReadyi();
}


