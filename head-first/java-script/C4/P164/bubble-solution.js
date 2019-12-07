// JavaScript

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

var highScore = PrintAndGetHighScore(scores);
var highestScores = GetBestResults(scores, highScore);

function GetBestResults(scores, highScore) {
  var bestSolutions = [];
  
  for(var i = 0; i < scores.length; i++) {
    if(scores[i] == highScore) {
      bestSolutions.push(i);
    }
  }
  return bestSolutions;
}

function HighestPhrase(highestScores) {
  var highestPhrase = '';

  for(var i = 0; i < highestScores.length; i++) {
    highestPhrase = highestPhrase + `#${highestScores[i]} `;
  }

  return highestPhrase;
}

function PrintAndGetHighScore(scores) {
  var score = 0;

  for(var i = 0; i < scores.length; i++) {
    console.log(`Bubble solution #${i} score: ${scores[i]}`);

    if(scores[i] > score) {
      score = scores[i];
    }
  }

  return score;
}

function GetMostCostEffectiveSolution(score, costs, highScore) {
  var cost = 100;
  var index = 0;
  
  for (let i = 0; i < scores.length; i++) {
    if (score[i] == highScore) {
      if (cost > costs[i]) {
        index = i;
        cost = costs[i];
      }
    }
  }

  return index;
}

console.log(`\nBubbles tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);
console.log(`Solutions with highest socore: ${HighestPhrase(highestScores)}`);
console.log(`Bubble solution #${GetMostCostEffectiveSolution(scores, costs, highScore)} is the most cost effective\n`);