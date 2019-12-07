// JavaScript

var highScore = 0;
var highestScores = [];
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

for(var i = 0; i < scores.length; i++) {
  console.log(`Bubble solution #${i} score: ${scores[i]}`);

  if(scores[i] > highScore) {
    highScore = scores[i];
  }
}

for(var i = 0; i < scores.length; i++) {
  if(scores[i] == highScore) {
    highestScores[highestScores.length] = i;
  }
}

function HighestPhrase() {
  var highestPhrase = '';

  for(var i = 0; i < highestScores.length; i++) {
    highestPhrase = highestPhrase + `#${highestScores[i]} `;
  }

  return highestPhrase;
}

console.log(`\nBubbles tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);
console.log(`Solutions with highest socore: ${HighestPhrase()}\n`);