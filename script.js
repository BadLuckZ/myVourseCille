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
const register_checkpassword_error = document.getElementById(
  "register-checkpassword-error-message"
);

register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = register_email.value;
  let email_error = true;

  // Email Validation
  if (emailPattern.test(email)) {
    showSuccess(register_email_error, register_email);
    email_error = false;
  } else {
    showError(register_email_error, register_email, "Invalid Email");
    email_error = true;
  }

  const username = register_username.value;
  let username_error = false;

  if (username == "") {
    showError(register_username_error, register_username, "Invalid Username");
    username_error = true;
  } else {
    showSuccess(register_username_error, register_username);
    username_error = false;
  }

  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasNumber = /\d/;
  const password = register_password.value;
  let password_error = true;

  // Password Validation
  if (!hasUppercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 uppercase letter"
    );
    password_error = true;
  } else if (!hasLowercase.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 lowercase letter"
    );
    password_error = true;
  } else if (!hasNumber.test(password)) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 1 number"
    );
    password_error = true;
  } else if (password.length < 8) {
    showError(
      register_password_error,
      register_password,
      "Password must have at least 8 characters"
    );
    password_error = true;
  } else {
    showSuccess(register_password_error, register_password);
    password_error = false;
  }

  const check_password = register_checkpassword.value;
  let check_password_error = true;

  // Confirm Password Validation
  if (check_password == "") {
    showError(
      register_checkpassword_error,
      register_checkpassword,
      "Invalid Password"
    );
    check_password_error = true;
  } else if (check_password != password) {
    showError(
      register_checkpassword_error,
      register_checkpassword,
      "Passwords do not match"
    );
    check_password_error = true;
  } else {
    showSuccess(register_checkpassword_error, register_checkpassword);
    check_password_error = false;
  }
});
