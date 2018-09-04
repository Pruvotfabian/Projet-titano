var moi = document.getElementById('moi');
var terrain = document.getElementById('terrain');
var body = document.getElementById('body');
var lavad = document.getElementById('lavad');
var lavag = document.getElementById('lavag');
var moi_x = 0;
var moi_y = 0;
dég = false;



// LAC DE LAVE ET BRULURE
window.setInterval(function() {
    
    if( moi_x >= 0 && moi_x <= 200 && moi_y >= 150 && moi_y <= 300 ) {
        moi.style.backgroundColor = " blue"
        console.log('-1');
        dég= true;
        window.setTimeout(brule, 1000)
        function brule() {
          console.log('-1');
          moi.style.backgroundColor = "blue"
          window.setTimeout(stop, 2000)
          function stop() {
            moi.style.backgroundColor = "rgb(0, 0, 0, 0)"
          }
        }
    }},500)
    window.setInterval(function() {
    if( moi_x >= 300 && moi_x <= 550 && moi_y >= 150 && moi_y <= 300 ) {
      moi.style.backgroundColor = " blue"
      console.log('-1');
      dég= true;
      window.setTimeout(brule, 2000)
      function brule() {
        console.log('-1');
        moi.style.backgroundColor = "blue"
          window.setTimeout(stop, 3000)
          function stop() {
            moi.style.backgroundColor = "rgb(0, 0, 0, 0)"
          }
        }
    }},500)
  
  

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
  