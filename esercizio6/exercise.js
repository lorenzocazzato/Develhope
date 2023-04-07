function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}

let closure = printName();
console.log(closure());
