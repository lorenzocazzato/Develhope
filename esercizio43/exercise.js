const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveData(user) {
  let json = JSON.stringify(user);
  return localStorage.setItem("user", json);
}

saveData(user);
