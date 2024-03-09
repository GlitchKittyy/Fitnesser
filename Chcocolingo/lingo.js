var input = document.getElementById('guess'); 
var button = document.getElementById('button');
var guess;

var changeClass = function (cng, old, newClass) {
  cng.className = cng.className.replace(old, newClass);
}

var gameloop = function () {
  var rand = quicklist[Math.floor(Math.random() * quicklist.length)].toUpperCase();
  var hasDuplicates = (/([a-zA-Z]).*?\1/).test(rand);

  var pressn = 1;

  var getAllIndexes = function (arr, val) {
    var indexes = [], i;
    for (i = 0; i < arr.length; i++)
      if (arr[i] === val)
        indexes.push(i);
    return indexes;
  }

  document.getElementById("row1").firstElementChild.innerHTML = rand[0];

  
  input.addEventListener('input', function () {
    this.value = this.value.slice(0, 5);
  });

  input.onkeypress = function (event) {
    if (event.key == "Enter" || event.keyCode == 13) {
      event.preventDefault();
      guess = input.value.toUpperCase();

      var current = "row" + pressn;
      var childDivs = document.getElementById(current).getElementsByTagName('div');
      var c = 0; 
      
      if (guess.length !== 5) {
        document.getElementById('smallMsg').innerHTML = "Letter moet 5 letters hebben!";
        if (pressn === 5) {
          document.getElementById('smallMsg').innerHTML = "Groen = juiste letter, Geel = verkeerde plaats, Rood = foutieve letter"; 
          end("Helaas! Je hebt verloren!", "Juiste woord: " + rand);
        }
        pressn++;
        document.getElementById(current).firstElementChild.innerHTML = rand[0];
        return;
      }

      for (var i = 0; i < childDivs.length; i++) {
        childDivs[i].innerHTML = guess[i];
        
        if (guess[i] == rand[i]) {
          changeClass(childDivs[i], 'default', 'correct');
          c++;
        } else {
          
          if (rand.indexOf(guess[i]) != -1) {
            if (hasDuplicates === false && childDivs[i].className != "square correct") {
              changeClass(childDivs[i], 'default', 'wrongplace');
            } else if (hasDuplicates === true) {
              var ind = getAllIndexes(rand, guess[i]);
              if (ind.length > 1) {
                for (var j = 0; j < ind.length; j++) {
                  if (childDivs[ind[j]].className != "square correct" && childDivs[i].className != "square wrongplace") {
                    changeClass(childDivs[i], 'default', 'wrongplace');
                  }
                } 
              } else if (childDivs[ind[0]].className != "square correct") {
                changeClass(childDivs[i], 'default', 'wrongplace');
              }
            } 
          } else {
            
            changeClass(childDivs[i], 'default', 'incorrect');
          }
        }
      } 

      if (c === 5) { 
        end("Gefeliciteerd!", "Groen = Goede letter, Goed Geplaatst");
      } 
      else if (pressn === 5) { 
        end("Helaas! Je hebt verloren!", "Juiste woord: " + rand,);
      } 

      pressn++; 
      input.value = ""; 
    }
  }
}

var end = function (msg, smallmsg) {
  document.getElementById('msgBox').innerHTML = msg;
  document.getElementById('smallMsg').innerHTML = smallmsg;
  changeClass(button, "invisible", "visible");
  document.getElementById('guess').readOnly = true;
}

var playagain = function () {
  document.getElementById('msgBox').innerHTML = "Raad het Woord!"; 
  document.getElementById('smallMsg').innerHTML = "Groen = juiste letter, Geel = verkeerde plaats, Rood = foutieve letter"; 
  document.getElementById('guess').readOnly = false;
  changeClass(button, "visible", "invisible");

  for (var i = 1; i < 6; i++) {
    var resets = document.getElementById('row' + i).getElementsByTagName('div');
    for (var j = 0; j < 5; j++) {
      resets[j].innerHTML = "";
      if (resets[j].className == "square correct" || resets[j].className == "square wrongplace" || resets[j].className == "square incorrect") {
        changeClass(resets[j], "correct", "default");
        changeClass(resets[j], "wrongplace", "default");
        changeClass(resets[j], "incorrect", "default");
      }
    }
  }

  gameloop();
};

var quicklist = ['lingo','choco','stoel','molen','toets','dicht','wacht','smaak'];

gameloop();
