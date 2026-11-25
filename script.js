// Task 1: Prevent Form Submission

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = document.getElementById("name");

  let nameValueResult = nameValue.value.trim();

  if (nameValueResult === "") {
    alert("Please enter the name");
  } else {
    alert("Form Submitted SuccsessFully");
  }
});

// Task 2: Required Field Validation

const Form = document.getElementById("Form");
const inputName_2 = document.getElementById("inputName_2");

Form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nameResult = inputName_2.value.trim();

  if (nameResult === "") {
    alert("Name is Required");
  } else {
    alert("Show Accsess Alert   ");
  }
});

// Task 3: Email Validation
const emailForm_3 = document.getElementById("emailForm_3");
const email = document.getElementById("email");

emailForm_3.addEventListener("submit", function (event) {
  event.preventDefault();
  let emailResult = email.value.trim();

  if (emailResult === "" || !emailResult.includes("@")) {
    alert("Please enter the value of '@'");
  } else {
    alert("Show success message");
  }
});

// Task 4: Password Length Check
const passwordChecked = document.getElementById("passwordChecked");
const passwordInput = document.getElementById("passwordInput");

passwordChecked.addEventListener("submit", function (event) {
  event.preventDefault();

  let passwordInputResult = passwordInput.value.trim();

  if (passwordInputResult.length < 6) {
    alert("Password must be at least 6 characters");
  }
});

// Task 5: Show Error Message in DOM
const form5 = document.getElementById("Form_5");
const userName = document.getElementById("userName");
const errorMsg = document.getElementById("errorMsg");

form5.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userName.value.trim() === "") {
    errorMsg.textContent = "UserName Required";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "Form Submitted Successfully!";
    errorMsg.style.color = "green";
  }
});

userName.addEventListener("input", function () {
  if (userName.value.trim() !== "") {
    errorMsg.textContent = "";
  }
});
// Task 6: Reset Form
const reset = document.getElementById("reset");
const input = document.querySelector(".input");
const resetBtn = document.querySelector(".resetBtn");

resetBtn.addEventListener("click", function () {
  let inputResult = input.value.trim();
  inputResult.textContent = "";
});
