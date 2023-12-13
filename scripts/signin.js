// Access elements by ID
var passwordInput = document.getElementById("password");
var passwordToggle = document.getElementById("password-toggle");

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

// Addा् event listener to invoke the function when the span is clicked
passwordToggle.addEventListener("click", togglePasswordVisibility);

// firebase and authentication data

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

// Sign-in form submit event listener
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        document.getElementById("signin-successful-overlay").style.display =
          "block";
        // Perform any additional actions or redirection here

        // Redirect to homepage after 1 seconds
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        // Display the error message to the user
        alert(errorMessage);
      });
  });
