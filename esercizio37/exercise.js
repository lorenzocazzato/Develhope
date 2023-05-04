const checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      resolve("Greater than 10");
    } else {
      reject("Less than 10");
    }
  });
};
checkNumber(15)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
