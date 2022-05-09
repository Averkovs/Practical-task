class Person {
    constructor(date, name, hasJob, age) {
      this.date = date;
      this.name = name;
      this.hasJob = hasJob;
      this.age = age;
    }
}

// 3 unique class objects.

const person1 = new Person();
person1.name = "Aleksandrs";

const person2 = new Person();
person2.name = "Vladlens";

const person3 = new Person();
person3.name = "Igors";

let date = "";
let hasJob = Math.random() < 0.5;
let age = "";

// Function that update's class property.

export function dateGenerator() { 
    let currentDate =  new Date().toISOString().split('T')[0];
    date = Object.assign(currentDate);
   return date;
};

 //  Method that has "non basic" Math function.

 export function ageGenerator(min, max) {
  var getAge = Math.floor(Math.random() * (max - min + 1) + min)
  age = Object.assign(getAge);
  return age;
};
  
// Function that reads class property.

export function checkIfHasJob() {
 return hasJob;
};

// Function that prints out information.

export function printOutInfo() {
  let first = JSON.stringify(person1.name);
  let second = JSON.stringify(person2.name);
  let third = JSON.stringify(person3.name);
  return [first, second, third];
}
// Function that returns random boolean values.
export function setGoUp() {
  let randomBool = checkIfHasJob();
  
  if (hasJob) {
    return randomBool = Math.random() < 0.5;
  } else {
    return randomBool = Math.random() < 0.5;
  }
};
