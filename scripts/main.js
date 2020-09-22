var motherGenesf = ["", "", "", "", "", ""];
var fatherGenesf = ["", "", "", "", "", ""];

var motherGenesi = ["", "", "", "", "", ""];
var fatherGenesi = ["", "", "", "", "", ""];

var childreni = [["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "]];

var childrenf = [["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "],
                 ["  ", "  ", "  ", "  ", "  ", "  "]];

console.log(childreni);

function calculateChance(string) {
  var value = 100;
  console.log(string);
  for (var i = 0; i < 6; i++) {
    if (string[i][0] == string[i][1]) {
      value -= 100 / 6;
    }
  }

  console.log(value);

  return(Math.round(value));
}

function checkLetters(string) {
  var correct = false;

  if ((string[0] == 'A' ||
       string[0] == 'B' ||
       string[0] == 'C' ||
       string[0] == 'D' ||
       string[0] == 'a' ||
       string[0] == 'b' ||
       string[0] == 'c' ||
       string[0] == 'd') &&
      (string[1] == 'A' ||
       string[1] == 'B' ||
       string[1] == 'C' ||
       string[1] == 'D' ||
       string[1] == 'a' ||
       string[1] == 'b' ||
       string[1] == 'c' ||
       string[1] == 'd')) {
    correct = true;
    console.log(string + " correct");
  }

  return(correct);
}

function updateChildreni() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 6; j++) {
      var element = $('#child' + (i + 1) + 'Gene' + (j + 1) + 'i');
      element.html(childreni[i][j]);

      if (childreni[i][j][0] == childreni[i][j][1]) {
        element.addClass("text-danger");
      } else {
        element.removeClass("text-danger");
      }
    }

    var perc = $("#perc" + (i + 1) + "i");
    perc.html(calculateChance(childreni[i]) + "%");

    if (calculateChance(childreni[i]) >= 82) {
      perc.removeClass("text-danger");
      perc.addClass("text-success");
    } else if (calculateChance(childreni[i]) <= 34) {
      perc.removeClass("text-success");
      perc.addClass("text-danger");
    } else {
      perc.removeClass("text-success");
      perc.removeClass("text-danger");
    }
  }
}

function updateChildrenf() {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 6; j++) {
      var element = $('#child' + (i + 1) + 'Gene' + (j + 1) + 'f');
      element.html(childrenf[i][j]);

      if (childrenf[i][j][0] == childrenf[i][j][1]) {
        element.addClass("text-danger");
      } else {
        element.removeClass("text-danger");
      }
    }

    var perc = $("#perc" + (i + 1) + "f");
    perc.html(calculateChance(childrenf[i]) + "%");

    if (calculateChance(childrenf[i]) >= 82) {
      perc.removeClass("text-danger");
      perc.addClass("text-success");
    } else if (calculateChance(childrenf[i]) <= 34) {
      perc.removeClass("text-success");
      perc.addClass("text-danger");
    } else {
      perc.removeClass("text-success");
      perc.removeClass("text-danger");
    }
  }
}

function resetChildreni() {
  childreni = [["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "]];
}

function resetChildrenf() {
  childrenf = [["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "],
               ["  ", "  ", "  ", "  ", "  ", "  "]];
}

function calculateChildreni() {
  resetChildreni();

  for (var j = 0; j < 6; j++) {
    childreni[0][j] = childreni[0][j].replace(" ", motherGenesi[j][0]);
    childreni[0][j] = childreni[0][j].replace(" ", fatherGenesi[j][0]);

    childreni[1][j] = childreni[1][j].replace(" ", motherGenesi[j][1]);
    childreni[1][j] = childreni[1][j].replace(" ", fatherGenesi[j][0]);

    childreni[2][j] = childreni[2][j].replace(" ", motherGenesi[j][0]);
    childreni[2][j] = childreni[2][j].replace(" ", fatherGenesi[j][1]);

    childreni[3][j] = childreni[3][j].replace(" ", motherGenesi[j][1]);
    childreni[3][j] = childreni[3][j].replace(" ", fatherGenesi[j][1]);
  }

  console.log(childreni);

  updateChildreni();
}

function calculateChildrenf() {
  resetChildrenf();

  for (var j = 0; j < 6; j++) {
    childrenf[0][j] = childrenf[0][j].replace(" ", motherGenesf[j][0]);
    childrenf[0][j] = childrenf[0][j].replace(" ", fatherGenesf[j][0]);

    childrenf[1][j] = childrenf[1][j].replace(" ", motherGenesf[j][1]);
    childrenf[1][j] = childrenf[1][j].replace(" ", fatherGenesf[j][0]);

    childrenf[2][j] = childrenf[2][j].replace(" ", motherGenesf[j][0]);
    childrenf[2][j] = childrenf[2][j].replace(" ", fatherGenesf[j][1]);

    childrenf[3][j] = childrenf[3][j].replace(" ", motherGenesf[j][1]);
    childrenf[3][j] = childrenf[3][j].replace(" ", fatherGenesf[j][1]);
  }

  console.log(childrenf);

  updateChildrenf();
}


function checkReadyf() {
  var correctM = true;
  var correctF = true;

  for (var i = 0; i < 6; i++) {
    if (checkLetters(motherGenesf[i]) == false) {
      correctM = false;
    }

    if (checkLetters(fatherGenesf[i]) == false) {
      correctF = false;
    }
  }

  if (correctM) {
    $('#percMf').html(calculateChance(motherGenesf) + "%");
  }

  if (correctF) {
    $('#percFf').html(calculateChance(fatherGenesf) + "%");
  }

  if (correctM && correctF) {
    calculateChildrenf()
  }

  // console.log(motherGenesi);
}

function checkReadyi() {
  var correctM = true;
  var correctF = true;

  for (var i = 0; i < 6; i++) {
    if (checkLetters(motherGenesi[i]) == false) {
      correctM = false;
    }

    if (checkLetters(fatherGenesi[i]) == false) {
      correctF = false;
    }
  }

  if (correctM) {
    $('#percMi').html(calculateChance(motherGenesi) + "%");
  }

  if (correctF) {
    $('#percFi').html(calculateChance(fatherGenesi) + "%");
  }

  if (correctM && correctF) {
    calculateChildreni()
  }

  // console.log(motherGenesi);
}

function main() {

}