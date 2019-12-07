// JavaScript

var i = 0;
var products = ['Choo Choo Chocolate', 'Icy Mint', 'Cake Batter', 'Bubblegum'];
var hasBubbleGum = [false, false, false, true];

while (i < hasBubbleGum.length) {
  if (hasBubbleGum[i]) {
    console.log(products[i] + ' contains bubble gum');
  }
  i = i + 1;
}