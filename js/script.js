function rollDice(){
  var dice1=document.getElementById("dice1");
  var dice2=document.getElementById("dice1");

  var d1= math.floor(math.random() * 6) + 1;
  var d2= math.floor(math.random() * 6) + 1;
  var diceTotal = d1 + d2;

  dice1.innerHTML = d1;
  dice2.innerHTML = d2;
}
