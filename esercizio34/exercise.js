function printAsyncName(callback, name) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      console.log(name);
    }, 1000);
  }, 1000);
}
function hello() {
  console.log("Hello");
}

printAsyncName(hello, "Lorenzo");
