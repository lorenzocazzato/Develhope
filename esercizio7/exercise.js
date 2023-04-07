function printName() {
  let helloName = "Hello John";

  function inner() {
    return helloName;
  }

  return inner;
}

let closure = printName();

setTimeout(function () {
  console.log(closure());
}, 1000);
