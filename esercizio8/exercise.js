function multiplyByTwo(value) {
  return function inner(number) {
    return value * number;
  };
}

console.log(multiplyByTwo(4)(2));
