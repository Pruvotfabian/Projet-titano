var moi = document.getElementById('moi');
var terrain = document.getElementById('terrain');
var body = document.getElementById('body');
var porte = document.getElementById('porte');
var bout = document.getElementById('boutton');
var moi_x = 0;
var moi_y = 0;
var porte_x = 0;
var porte_y = 200;
fermer = true;


porte.style.left = porte_x + "px";
porte.style.top = porte_y + "px";
moi.style.left = moi_x + "px";
moi.style.top = moi_y + "px";

//PORTE


window.setInterval(function() {
    if (fermer) {
      porte.style.backgroundColor = "brown"
      if(  moi_y >= 200 && moi_y <= 350 && moi_x <= 50  ) {
        moi_x += 150
        moi.style.left = moi_x + "px";
      }        
    }
},500)

window.setInterval(function() {
  if ( fermer == false ) {
    porte.style.backgroundColor = "grey"
    if(  moi_y >= 200 && moi_y <= 350 && moi_x <= 50  ) {
 
    }        
  }
},500)



// BOUTTON

window.setInterval(function() {
  if (moi_y >= 250 && moi_y <= 250 && moi_x >= 250 && moi_x <= 250 ){
    fermer = false;
  }

},500)




// DÉPLACEMENT

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

  