function togglePassword(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

function chackPass() {
  const passInput = document.getElementById("pass");
  const pass2Input = document.getElementById("pass2");
  const span=document.getElementById("chackpass");
  if(passInput!==pass2Input)
  {
      span.innerText="Password Mismatch";
      span.style.color="red";
  }
}
