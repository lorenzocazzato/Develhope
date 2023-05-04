function repeatHello(callback) {
  const i = setInterval(callback, 1000);
  setTimeout(function () {
    clearInterval(i);
  }, 5000);
}

const hello = () => {
  console.log("Hello");
};

repeatHello(hello);
