// JavaScript

var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

console.log(`${location1} ${location2} ${location3}`);

var guess = 0;
var guesses = 0;

var hits = 0;
var isSunk = false;

while(isSunk == false) {
  guess = prompt('Preparar, apontar, fogo! (escolha um numero entre 0-6)', guess);
  
  if (guess => 0 && guess <= 6) {
    guesses++;

    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;
      alert('Você acertou!');
    } else {
      alert('Você errou!');
    }

    if (hits >= 3) {
      isSunk = true;
      alert('Você afundou meu navio!');
    }
  } else {
    alert('Por favor, insira um número válido!');
  }
}

alert(`Você acertou ${hits} vezes depois de ${guesses} tentativas! Sua precisão é de ${(3 / guesses) * 100}%`);