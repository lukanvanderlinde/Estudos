// JavaScript

function bark(name, weight) {
  if (weight > 20) {
    console.log(`${name} says WOOF WOOF`);
  } else {
    console.log(`${name} says woof woof`);
  }
};

bark('juno', 20);
bark('scottie', -1);
bark('dino', 0, 0);
bark('fido', "20");
bark('lady', 10);
bark('bruno', 21);