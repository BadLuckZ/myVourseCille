// Utility Function
function showSuccess(error_input, input) {
  error_input.innerHTML = "";
  error_input.style.display = "none";
  input.classList.remove("error");
  input.classList.add("success");
}

function showError(error_input, input, msg) {
  error_input.innerHTML = msg;
  error_input.style.display = "block";
  input.classList.add("error");
  input.classList.remove("success");
}

// Register Form
const register_form = document.getElementById("myVourseCille-registration");
const register_email = document.getElementById("register-email");
const register_username = document.getElementById("register-username");
const register_password = document.getElementById("register-password");
const register_checkpassword = document.getElementById(
  "register-checkpassword"
);

const register_email_error = document.getElementById(
  "register-email-error-message"
);
const register_username_error = document.getElementById(
  "register-username-error-message"
);
const register_password_error = document.getElementById(
  "register-password-error-message"
);
const register_confirmpassword_error = document.getElementById(
  "register-confirmpassword-error-message"
);

register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = register_email.value;

  const username = register_username.value;

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;
  const password = register_password.value;

  const checkpassword = register_checkpassword.value;

  // Email Validation
  if (emailPattern.test(email)) {
    showSuccess(register_email_error, register_email);
  } else {
    showError(register_email_error, register_email, "Invalid Email");
  }

  // Password Validation
  if (!hasUppercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 uppercase letter"
    );
  } else if (!hasLowercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 lowercase letter"
    );
  } else if (!hasNumber.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 number"
    );
  } else if (password.length < 8) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 8 characters"
    );
  } else {
    showSuccess(register_password_error, register_password);
  }
});
