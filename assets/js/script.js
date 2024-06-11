function saveName() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  if (name) {
    localStorage.setItem("userName", name);
    document.getElementById("displayName").textContent = name;
  }
}

function removeName() {
  localStorage.removeItem("userName");
  document.getElementById("displayName").textContent = "";
  const nameInput = document.getElementById("name");
  nameInput.value = "";
}
