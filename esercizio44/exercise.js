const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveData(data) {
  const json = JSON.stringify(data);
  return localStorage.setItem("user", json);
}

function retrieveData() {
  const jsonUser = localStorage.getItem("user");
  const user = JSON.parse(jsonUser);
  return user;
}

saveData(user);
const saved = retrieveData();
console.log(saved);
