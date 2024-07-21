//left dice//
var Rnumber = Math.random();
Rnumber=Rnumber*6;
Rnumber=Math.floor(Rnumber)+1;

var randomDice= "dice" + Rnumber + ".png";
var randomImageSource= "imgs/" + randomDice ;

var image1= document.querySelectorAll("img")[0];  //to specify the first img at index 0// 
image1.setAttribute("src", randomImageSource);

//right dice//
var Rnumber2 = Math.random();
Rnumber2=Rnumber2*6;
Rnumber2=Math.floor(Rnumber2)+1;

var randomDice2= "dice" + Rnumber2 + ".png";
var randomImageSource2= "imgs/" + randomDice2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//Result//
if (Rnumber > Rnumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (Rnumber2 > Rnumber) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  
  console.log(Rnumber);
  console.log(Rnumber2);