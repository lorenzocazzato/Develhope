const promise1 = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const number = Math.random();
      resolve(number);
    } else {
      reject("Not logged in");
    }
  });
};

const promise2 = (inputNumber) => {
  return new Promise((resolve, reject) => {
    if (inputNumber > 0.5) {
      const person = { name: "John", age: 24 };
      resolve(person);
    } else {
      reject("Number is less than or equal to 0.5");
    }
  });
};

promise1(true)
  .then((randomNumber) => {
    console.log(`The random number is: ${randomNumber}`);
    return promise2(randomNumber);
  })
  .then((person) => {
    console.log(person);
  })
  .catch((error) => {
    console.error(error);
  });
