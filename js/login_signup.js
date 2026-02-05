function togglePassword() {
  const passInput = document.getElementById("pass");
  const pass2Input = document.getElementById("pass2");
  const icon = document.getElementById("toggleIcon");
  if (passInput.type === "password") {
    passInput.type = "text";
    pass2Input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passInput.type = "password";
    pass2Input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}
