var passwordInput = document.getElementById("password");
var passwordToggle = document.getElementById("password-toggle");
var confirmPasswordInput = document.getElementById("confirm-password");
var confirmPasswordError = document.getElementById("password-error");

// Function to toggle password visibility
function togglePasswordVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    passwordToggle.textContent = "Show";
  }
}

// Add event listener to invoke the function when the span is clicked
passwordToggle.addEventListener("click", togglePasswordVisibility);

// Function to calculate the password strength
function calculatePasswordStrength() {
  const password = passwordInput.value;
  const passwordStrength = document.querySelector(".password-strength");
  const meter = passwordStrength.querySelector(".meter");
  const text = passwordStrength.querySelector(".text");

  // Calculate the strength score based on password length
  const score = password.length;

  // Remove existing strength classes
  passwordStrength.classList.remove(
    "password-weak",
    "password-medium",
    "password-strong"
  );

  // Add appropriate strength class based on the score
  if (score <= 4) {
    passwordStrength.classList.add("password-weak");
    text.textContent = "Weak";
    text.style.color = "red";
  } else if (score <= 8) {
    passwordStrength.classList.add("password-medium");
    text.textContent = "Medium";
    text.style.color = "orange";
  } else {
    passwordStrength.classList.add("password-strong");
    text.textContent = "Strong";
    text.style.color = "green";
  }
}

// Remove the existing event listener for the input event
passwordInput.removeEventListener("input", calculatePasswordStrength);

// Add a new event listener for the input event
passwordInput.addEventListener("input", calculatePasswordStrength);

// Event listener for confirm password input
confirmPasswordInput.addEventListener("input", function () {
  const confirmPasswordValue = confirmPasswordInput.value;
  const passwordValue = passwordInput.value;

  if (confirmPasswordValue.length > 0) {
    if (passwordValue.length === 0) {
      confirmPasswordInput.value = ""; // Clear the confirm password field
      confirmPasswordError.textContent = "Please enter the password first";
      confirmPasswordInput.classList.add("error");
    } else if (confirmPasswordValue !== passwordValue) {
      confirmPasswordError.textContent = "Passwords do not match";
      confirmPasswordInput.classList.add("error");
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordInput.classList.remove("error");
    }
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove("error");
  }
});

// Event listener for password field click
passwordInput.addEventListener("click", function () {
  confirmPasswordError.textContent = "";
  confirmPasswordInput.classList.remove("error");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// firebase library data
const firebaseConfig = {
  apiKey: "AIzaSyBWhvmUNJPn6Dp40V2cbp88fhzenmevkoE",

  authDomain: "construct-week-unit-5.firebaseapp.com",

  projectId: "construct-week-unit-5",

  storageBucket: "construct-week-unit-5.appspot.com",

  messagingSenderId: "786633313399",

  appId: "1:786633313399:web:fd8b498caa195036438a72",
};

// Initializing Firebase

const app = initializeApp(firebaseConfig);
console.log(app); // checking if our firebase is connected or not
const auth = getAuth();

// Event listener for form submission
var signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordInput.classList.add("error");
    return; // Exit the function if passwords do not match
  } else {
    confirmPasswordError.textContent = "";
    confirmPasswordInput.classList.remove("error");
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      document.getElementById("signup-successful-overlay").style.display =
        "block";
      // Perform any additional actions or redirection here

      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        window.location.href = "./signin.html";
      }, 1000);
    })
    .catch((error) => {
      
      const errorMessage = error.message;
      console.error(errorMessage);
      // Display the error message to the user
      alert(errorMessage);
    });
});
