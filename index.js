// console.log("location", window.location)  

// Obter os parâmetros da URL
  const params = new URLSearchParams(window.location.search);
  const username = params.get("name");

  if (username) {
    document.querySelector("#username").textContent = username;
  }