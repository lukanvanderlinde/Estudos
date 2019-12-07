const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
	
	// ships: [{}],

  ships: [
    { locations: ['', '', ''], hits: [false, false, false] },
    { locations: ['', '', ''], hits: [false, false, false] },
    { locations: ['', '', ''], hits: [false, false, false] }
  ],

  // ships: [
  //   { locations: ['10', '20', '30'], hits: [false, false, false] },
  //   { locations: ['11', '21', '31'], hits: [false, false, false] },
  //   { locations: ['12', '22', '32'], hits: [false, false, false] }
  // ],

  fire: function(guess) {
    for(var i = 0; i < this.numShips; i++) {
      const ship = this.ships[i];
      const index = ship.locations.indexOf(guess);

      if (ship.hits[index] === true) {
        controller.guesses--;
				view.displayMessage("Oops, you already hit that location!");
				return true;
			} else if(index >= 0) {
        ship.hits[index] = true;
        view.displayHit(guess);

        if(this.isSunk(ship)) {
          this.shipssSunk++;
          view.displayMessage('You sank my battleship!');
        }
        return true;
      }
    }
    view.displayMiss(guess);
    return false;
  },
  
  isSunk: function(ship) {
		for(var i = 0; i < ship.hits.length; i++)  {
			if(ship.hits[i] !== true) {
				return false;
			}
		}
		return true;
  },

  generateShipLocations: function() {
    let locations;

    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      
      this.ships[i].locations = locations;
    }
  },

  generateShip: function() {
    const direction = Math.floor(Math.random * 2);
    let row, col;

    if(direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    const newShipLocations = [];

    for(let i = 0; i < this.shipLength; i++) {
      if(direction === 1) {
        newShipLocations.push(`${row}${col + i}`);
      } else {
        newShipLocations.push(`${row + i}${col}`);
      }
    }
    return newShipLocations;
  },

  collision: function(locations) {
    for (let i = 0; i < this.numShips; i++) {
      const ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if(ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  }
};

const controller = {
  guesses: 0,

  processGuess: function(guess) {
    const location = this.parseGuess(guess);

    if(location) {
      this.guesses++;
      const hit = model.fire(location);

      if(hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships, in ${this.guesses} guesses!`);
      }
    }
  },

  parseGuess: function(guess) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if(guess === null || guess.length !== 2) {
      alert('Oops, please enter a letter and a number on the baord.');
    } else {
      const firstChar = guess.charAt(0);
      const row = alphabet.indexOf(firstChar);
      const column = guess.charAt(1);

      if(isNaN(row) || isNaN(column)) {
        alert('Oops, that isn\'t on the board.');
      } else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
        alert('Oops, that\'s off the board!');
      } else {
        return row + column;
      }
    }
    return null
  }
}


// DISPLAY DE MSG
const view = {
  displayMessage: function(msg) {
    const messageArea = document.getElementsByClassName('messageArea');
    messageArea[0].innerHTML = msg;
  },
  displayHit: function(location) {
    const cell = document.getElementById(location);

    if(cell) {
      cell.setAttribute('class', 'hit');
      this.displayMessage('HIT!');
    }
  },
  displayMiss: function(location) {
    const cell = document.getElementById(location);
    
    if(cell) {
      cell.setAttribute('class', 'miss');
    }
    this.displayMessage('You missed!');
  }
};

// TA ENVIANDO O TEXTO INPUTADO
function handleFireButton() {
  const guess = document.getElementById('guessInput');
  
  controller.processGuess(guess.value.toUpperCase());
  guess.value = '';
}

// INICIA A CARALHA
function init() {
  document.getElementById('fireButton').onclick = handleFireButton;
  model.generateShipLocations();
  console.log(model.ships);
}

// CARREGA A CARALHA
window.onload = init;
view.displayMessage("Is this thing on?");