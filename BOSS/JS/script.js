var moi = document.getElementById('moi');
var boss = document.getElementById('boss');
var terrain = document.getElementById('terrain');
var body = document.getElementById('body');
var agro = document.getElementById('agro');
var paterne1 = document.getElementById('paterne1');
var paterne2 = document.getElementById('paterne2');
var paterne3 = document.getElementById('paterne3');
var paterne4 = document.getElementById('paterne4');
var bombe = document.getElementById('bombe');
var poison = document.getElementById('poison');

var moi_x = 0;
var moi_y = 250;

var boss_x = 150;
var boss_y = 150;

var poison_x = 0;
var poison_y = 250;

var bombe_x = 0;
var bombe_y = 400;

var paterne1_x = 0;
var paterne1_y = 250;

var paterne2_x = 275;
var paterne2_y = 250;

var paterne3_x = 250;
var paterne3_y = 275;

var paterne4_x = 250;
var paterne4_y = 0;

var bossPV = 10

attack = true;
pat1 = false;
pat2 = false;
pat3 = false;
pat4 = false;
boum = false;
pois = true;
poisstop = false;
phase1 = false;
phase2 = false;
phase3 = false;


moi.style.left = moi_x + "px"
moi.style.top = moi_y + "px"
boss.style.left = boss_x + "px";
boss.style.top = boss_y + "px";
poison.style.left = poison_x + "px";
poison.style.top = poison_y + "px";
bombe.style.left = bombe_x + "px";
bombe.style.top = bombe_y + "px";
paterne1.style.left = paterne1_x + "px";
paterne1.style.top = paterne1_y + "px";
paterne2.style.left = paterne2_x + "px";
paterne2.style.top = paterne2_y + "px";
paterne3.style.left = paterne3_x + "px";
paterne3.style.top = paterne3_y + "px";
paterne4.style.left = paterne4_x + "px";
paterne4.style.top = paterne4_y + "px";



//poison
if (pois){ 
    if (moi_x >= poison_x && moi_y >= poison_y && moi_x <= (poison_x + 100) && moi_y <=( poison_y + 100) ){ 
    console.log('-1');
    poison.style.backgroundColor = "green";
    window.setTimeout(a,300)
    function a(){
      console.log('-1');
    }
    window.setTimeout(b,600)
    function b(){
      console.log('-1');
    }
    window.setTimeout(c,900)
    function c(){
      console.log('-1');
    }
    window.setTimeout(d,1200)
    function d(){
      console.log('-1');
    }
    window.setTimeout(e,1500)
    function e(){
      console.log('-1');
    }
  }
    else { 
      window.setTimeout(a, 2000)
      function a() {
        poison.style.backgroundColor = "rgb(0, 0, 0, 0)";
        pois = false;  
      }
  }
}
  



//BOUM

if (boum){ 
  window.setInterval(function() {
    if (moi_x >= bombe_x && moi_y >= bombe_y && moi_x <= (bombe_x + 50) && moi_y <=( bombe_y + 50) ){ 
      bombe.style.backgroundColor = "yellow"
      window.setTimeout(a, 1000)
    }
    else {
      boum = false;
      bombe.style.backgroundColor = "orange"
      window.setTimeout (b, 2000)
      function b() {
        bombe.style.backgroundColor = "red"
       }
    }
      function a() {
      if (moi_x >= bombe_x && moi_y >= bombe_y && moi_x <= (bombe_x + 50) && moi_y <=( bombe_y + 50) ){ 
      bombe.style.backgroundColor = "orange"
      window.setTimeout (b, 2000)
      }
      else {
        boum = false;
        window.setTimeout (c, 2000)
        function c() {
          bombe.style.backgroundColor = "red"
         }
      }
      function b() {
      if (moi_x >= bombe_x && moi_y >= bombe_y && moi_x <= (bombe_x + 50) && moi_y <=( bombe_y + 50) ){ 
      bombe.style.backgroundColor = "red"
      console.log('-3');
      boum = false
      }
      else {
        boum = false;
        bombe.style.backgroundColor = "rgb (0, 0, 0, 0)"
         }
      }
      }
},1000)
}



//PATERNE 1
if (pat1){
  window.setTimeout(a, 300)
  function a() {
    paterne1.style.backgroundColor = "red";
  }
  window.setTimeout(b, 600)
  function b() {
    paterne1.style.backgroundColor = "grey";
  }
  window.setTimeout(c, 1000)
  function c() {
    if (moi_x >= paterne1_x && moi_y >= paterne1_y && moi_x <= (paterne1_x + 250) && moi_y <=( paterne1_y + 0) ){ 
    paterne1.style.backgroundColor = "red";
    console.log('-3'); 
    } 
    else {
      console.log('slt');
      
    } 
  }
}

//PATERNE 2
if (pat2){ 
  window.setTimeout(a, 300)
  function a() {
    paterne2.style.backgroundColor = "red";
  }
  window.setTimeout(b, 600)
  function b() {
    paterne2.style.backgroundColor = "grey";
  }
  window.setTimeout(c, 1000)
  function c() {
  if (moi_x >= paterne2_x && moi_y >= paterne2_y && moi_x <= (paterne2_x + 300) && moi_y <=( paterne2_y + 0) ){ 
  paterne2.style.backgroundColor = "red";
  console.log('-3');
  }
else {
  console.log('slt');
  
} 
  }
}

//PATERNE 3
if (pat3){ 
  window.setTimeout(a, 300)
  function a() {
    paterne3.style.backgroundColor = "red";
  }
  window.setTimeout(b, 600)
  function b() {
    paterne3.style.backgroundColor = "grey";
  }
  window.setTimeout(c, 1000)
  function c() {
  if (moi_x >= paterne3_x && moi_y >= paterne3_y && moi_x <= (paterne3_x + 0) && moi_y <=( paterne3_y + 300) ){ 
  paterne3.style.backgroundColor = "red";
  console.log('-3');
} 
else {
  console.log('slt');
  
} 
  }
}

//PATERNE 4
if (pat4){ 
  window.setTimeout(a, 300)
  function a() {
    paterne4.style.backgroundColor = "red";
  }
  window.setTimeout(b, 600)
  function b() {
    paterne4.style.backgroundColor = "grey";
  }
  window.setTimeout(c, 1000)
  function c() {
  if (moi_x >= paterne4_x && moi_y >= paterne4_y && moi_x <= (paterne4_x + 0) && moi_y <=( paterne4_y + 200) ){ 
  paterne4.style.backgroundColor = "red";
  console.log('-3');
} 
else {
  console.log('slt');
  
} 
  }
}

// PHASE 1
if (phase1){
  //PATERNE
  window.setInterval(function() {
  if (moi_x >= 150 && moi_x <= 350 && moi_y >= 150 && moi_y <= 350 ){
    console.log('test');
    part1 = true;
    //PATERNE 1
if (pat1){
  window.setTimeout(a, 300)
  function a() {
    paterne1.style.backgroundColor = "red";
  }
  window.setTimeout(b, 600)
  function b() {
    paterne1.style.backgroundColor = "grey";
  }
  window.setTimeout(c, 1000)
  function c() {
    if (moi_x >= paterne1_x && moi_y >= paterne1_y && moi_x <= (paterne1_x + 250) && moi_y <=( paterne1_y + 0) ){ 
    paterne1.style.backgroundColor = "red";
    console.log('-3'); 
    } 
    else {
      console.log('slt');
      
    } 
  }
}


  }
},500)
  if (bossPV >= 6 ){
    phase1 = false;
    phase2 = true;
  }
}


//PHASE 2
//Double PATERNE
//POISON
if (phase2){

}
if (bossPV >= 4 ){
  phase1 = false;
  phase2 = false;
  phase3 = true;
}

//PHASE3
//QUADRUPLE PATERNE
//BOMBE
//POISON
if (phase3){

}
if (bossPV >= 0){
  phase1 = false;
  phase2 = false;
  phase3 = false;
}



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
  