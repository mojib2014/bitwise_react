import { add } from './add.js';
import getMovies from './index.js';

// Variables
// var name = 'John';

let age = 21;
age = 'Hello World!';
const score = 50;
// score = 60;

for (let i = 0; i < 10; i++) {
  //   console.log('i inside ', i);
}

// console.log('i outside ', i);
// console.log(substract(5, 3));

function substract(num1, num2) {
  return num1 - num2;
}

// ES6 Ecmascript 2015
const division = (num1, num2) => num1 / num2;

export default division;

const result = division(10, 2);

// console.log('divistion', result);

// Strings: sequence of characters single qoutes double qoutes
const greetings = 'Hello there!';
// console.log(name + ' ' + greetings);
// Templage literals
// console.log(`${greetings} ${add(2, 3)}`);

// console.log('getMovies: ', getMovies());

// class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk = (name) => {
    if (name.length === 0) throw new Error('Name cannot be empty!');
    console.log('Walking');
    return this.name;
  };
}

class Mamal extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  eat() {
    console.log('eating');
  }
}

const john = new Animal('John', 32);
john.name = '';
console.log(john);
const ricky = new Animal('Ricky', 31);
console.log(john.name);
console.log(ricky.age);

const dog = new Mamal('fido', 3);

console.log('dog: ', dog.walk('afdadsf'));

// Destructring
const names = ['John', 'Ricky', 'Demetrio', 'Mason'];
console.log('names[-3]', names[names.length - 1]);
const [joh, , demetrio] = names;
console.log('destructure value is: ', demetrio);

const { walk, name } = ricky;
console.log(walk);

// Promise
function fetchData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1');
}

fetchData();

console.log('==================================');

function addition(num1, num2) {
  console.log(num1 + num2);
}

function callApi() {
  setTimeout(() => {
    console.log('calling api ');
  }, 0);
}

callApi();
addition(2, 3);

// The this keyword
/**
 * 1. Object: refer to that object
 * 2. Regular function: global (window, global)
 */

const video = {
  title: 'Avangers',
  id: 1,
  paly: function () {
    console.log('playing...', this);
  },
};

function audio() {
  console.log('audio is playing...');
}

audio();

video.paly();

const promise = new Promise((resolve, reject) => {
  let a = 2 + 3;
  if (a === 4) {
    return new Promise((resolve, reject) => {
      resolve('adfadf');
    });
  } else {
    reject('Something failed');
  }
});

promise
  .then((message) => console.log(message))
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

// async await

async function getData() {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const getRandomUser = async () => {
  try {
    const result = await fetch(
      'https://jsonplaceholder.typicode.com/users/10000'
    );
    const response = await result.json();
    console.log(response);
  } catch (err) {
    console.log('our error; ', err);
  }
};

getRandomUser();

// Arrays
const numbers = [1, 2, 3, 4];
function even(number) {
  return number % 2 === 0;
}

const filtered = numbers.filter((number) => number % 2 === 0);
console.log('filtered array: ', filtered);

const doubled = numbers.map((number) => number * 2);
console.log('doubled: ', doubled);

const getMoviesByName = async (movieName) => {
  const result = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=9aea0f73`
  );
  const movie = await result.json();
  console.log(movie);
};

getMoviesByName('spiderman');
getMoviesByName('wolverine');
