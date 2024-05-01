function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confm-password").value;
  console.log(password, confirmPassword);

  let message = document.querySelector(".message");

  if (password.length != 0) {
    if (password == confirmPassword) {
      message.textContent = "Passwords Match";
      message.style.color = "#3ae374";
    } else {
      message.textContent = "*Passwords do not match";
      message.style.color = "#ff4d4d";
    }
  }
}
