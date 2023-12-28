function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  if (username === "admin" && password === "admin") {
    window.location.href = "welcome.html";
  } else {
    errorMessage.innerHTML = "Incorrect username or password";
  }
}
