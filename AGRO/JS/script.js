var moi = document.getElementById('moi');
var méchant = document.getElementById('méchant');
var terrain = document.getElementById('terrain');
var body = document.getElementById('body');
var épée = document.getElementById('épée');
// var g = document.getElementById('gauche');
// var dt = document.getElementById('droite');
// var b = document.getElementById('bas');
// var h = document.getElementById('haut');
var agro = document.getElementById('agro');
var moi_x = 0;
var moi_y = 0;
var épéed = 0;
var épéeb = 0;
var méchant_x = 250;
var méchant_y = 250;
var attack = false;


//ATTACK
window.setInterval(function() {
    if (attack) {
      if (méchant_x < moi_x) {
        if (méchant_x !== 100 || méchant_y !== 150) {
          var computed5 = window.getComputedStyle(méchant).left; // position réelle
          computed5 = computed5.replace('px', '');
  
          if (computed5 == "0" || computed5 == méchant_x) {
            méchant_x += 50;
            méchant.style.left = méchant_x + "px";
            méchant.style.backgroundImage = "url('images/h5d.png')";
          }
        }
      } else if (méchant_x > moi_x) {
        if (!(méchant_y < 550 && méchant_y > 0) || !(méchant_x == 350)) {
          if (méchant_x !== 500 || méchant_y !== 350) {
  
  
            var computed5 = window.getComputedStyle(méchant).left; // position réelle
            computed5 = computed5.replace('px', '');
  
  
            if (computed5 == "0" || computed5 == méchant_x) {
              méchant_x -= 50;
              méchant.style.left = méchant_x + "px";
              méchant.style.backgroundImage = "url('images/h5g.png')";
            }
          }
        }
      }
  
      window.setTimeout(dep_y_méchant, 500)
  
      function dep_y_méchant() {
        if (méchant_y < moi_y) {
          if (!(méchant_x < 350 && méchant_x >= 0) || !(méchant_y == 0)) {
  
            if (méchant_x !== 450 || méchant_y !== 300) {
  
  
              var computed5_2 = window.getComputedStyle(méchant).top; // position réelle
              computed5_2 = computed5_2.replace('px', '');
  
  
              if (computed5_2 == "0" || computed5_2 == méchant_y) {
                méchant_y += 50;
                méchant.style.top = méchant_y + "px";
                méchant.style.backgroundImage = "url('images/h5b.png')";
              }
            }
          }
        } else if (méchant_y > moi_y) {
          if (!(méchant_x < 350 && méchant_x >= 0) || !(méchant_y == 550)) {
  
            if (méchant_x !== 450 || méchant_y !== 400) {
              var computed5_2 = window.getComputedStyle(méchant).top; // position réelle
              computed5_2 = computed5_2.replace('px', '');
              if (computed5_2 == "0" || computed5_2 == méchant_y) {
                méchant_y -= 50;
                méchant.style.top = méchant_y + "px";
                méchant.style.backgroundImage = "url('images/h5h.png')";
              }
            }
          }
        }
  
      }
    }
    if (méchant_x == (moi_x -50)  && méchant_y == moi_y) {
    
        window.setTimeout(game_over, 500)
        function game_over() {
          body.innerHTML = "<h1> GAME OVER </h1>";
          body.style.textAlign = "center";
          body.style.backgroundColor = "rgb(137, 139, 136)";
        }
    }
    else if (méchant_y == (moi_y -50)  && méchant_x == moi_x) {

        window.setTimeout(game_over, 500)
        function game_over() {
          body.innerHTML = "<h1> GAME OVER </h1>";
          body.style.textAlign = "center";
          body.style.backgroundColor = "rgb(137, 139, 136)";
        }
    }
    else if (méchant_y == (moi_y +50)  && méchant_x == moi_x) {
        window.setTimeout(game_over, 500)
        function game_over() {
          body.innerHTML = "<h1> GAME OVER </h1>";
          body.style.textAlign = "center";
          body.style.backgroundColor = "rgb(137, 139, 136)";
        }
    }
    else if (méchant_x == (moi_x +50)  && méchant_y == moi_y) {
        window.setTimeout(game_over, 500)
        function game_over() {
          body.innerHTML = "<h1> GAME OVER </h1>";
          body.style.textAlign = "center";
          body.style.backgroundColor = "rgb(137, 139, 136)";
        }
    }

  }, 1000);




// Agro

window.setInterval(function() {
    if( moi_x >= 150 && moi_x <= 350 && moi_y >= 150 && moi_y <= 350 ) {
        agro.style.backgroundColor = "red"
        attack= true;

    }
       

    

  },500)

// DÉPLACEMENTb

window.onkeypress = function(event) {
    if (event.key == "ArrowLeft" && moi_x > 0) {
          var computed = window.getComputedStyle(moi).left; // position réelle
          computed = computed.replace('px', '');
          if (computed == "0" || computed == moi_x) {
            moi_x -= 50;
            moi.style.left = moi_x + "px";
            moi.style.backgroundImage = "url('images/h4g.png')";
          }
    }
    if (event.key == "ArrowRight" && moi_x < 550) {
          var computed = window.getComputedStyle(moi).left; // position réelle
          computed = computed.replace('px', '');
          if (computed == "0" || computed == moi_x) {
            moi_x += 50;
            moi.style.left = moi_x + "px";
            moi.style.backgroundImage = "url('images/h4d.png')";
          }
      
    }
    if (event.key == "ArrowDown" && moi_y < 550) { 
          var computed = window.getComputedStyle(moi).top; // position réelle
          computed = computed.replace('px', '');
          if (computed == "0" || computed == moi_y) {
            moi_y += 50;
            moi.style.top = moi_y + "px";
            moi.style.backgroundImage = "url('images/h4b.png')";
          }
    }
    if (event.key == "ArrowUp" && moi_y > 0) {
            var computed = window.getComputedStyle(moi).top; // position réelle
            computed = computed.replace('px', '');
            if (computed == "0" || computed == moi_y) {
              moi_y -= 50;
              moi.style.top = moi_y + "px";
              moi.style.backgroundImage = "url('images/h4h.png')";
            }
      
    }
  }
  