document.querySelector("#paymentForm").addEventListener("submit", carddata);

function carddata(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const pincodeInput = document.getElementById("zip");
  const cardNumInput = document.getElementById("cardNum");
  const monthInput = document.getElementById("expMon"); 
  const cvvInput = document.getElementById("cvv");
  const errorContainer = document.getElementById("errorContainer");
  errorContainer.innerHTML = "";

  const email = emailInput.value;
  const pincode=pincodeInput.value;
  const cardNum = cardNumInput.value.replace(/\s/g, ""); // Remove whitespace from card number
  const month=parseInt(monthInput.value);
  const cvv = cvvInput.value;

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const cardNumPattern = /^\d{16}$/;
  const cvvPattern = /^\d{3}$/;

  if (!emailPattern.test(email)) {
    showError(
      "Please enter a valid Gmail address like example@gmail.com",
      emailInput
    );
    return;
  }
  if (pincode.length !== 6) {
    showError("Please enter a valid 6-digit pincode.", pincodeInput);
    return;
  }

  if (!cardNumPattern.test(cardNum)) {
    showError("Please enter a valid 16-digit card number.", cardNumInput);
    return;
  }
  if (month < 1 || month > 12) {
    showError("Please enter a valid month between 1 to 12.", monthInput);
    return;
  }
  if (!cvvPattern.test(cvv)) {
    showError("Please enter a valid 3-digit CVV.", cvvInput);
    return;
  }
  showLoadingOverlay();

  setTimeout(() => {
    hideLoadingOverlay();
    generateOTP(); // Generate a new OTP
    showOtpOverlay();
    setTimeout(() => {
      hideMessageOverlay();
    }, 2000);
  }, 2000);
}

function showLoadingOverlay() {
  const messageOverlay = document.getElementById("messageOverlay");
  messageOverlay.style.display = "flex";
}

function hideLoadingOverlay() {
  const messageOverlay = document.getElementById("messageOverlay");
  messageOverlay.style.display = "none";
}

function showOtpOverlay() {
  const otpOverlay = document.getElementById("otpOverlay");
  const generatedOTP = localStorage.getItem("generatedOTP");
 // const otpDisplay = document.getElementById("otpDisplay");
 alert("Your OTP is: " + generatedOTP); // Display an alert with the generated OTP
 // otpDisplay.textContent = generatedOTP; // Display the generated OTP on the screen

  otpOverlay.style.display = "flex";
}

function hideOtpOverlay() {
  const otpOverlay = document.getElementById("otpOverlay");
  otpOverlay.style.display = "none";
}

function hideMessageOverlay() {
  const messageOverlay = document.getElementById("messageOverlay");
  messageOverlay.style.display = "none";
}


function showError(errorMessage, inputElement) {
  const errorContainer = document.getElementById("errorContainer");
  const errorElement = document.createElement("p");
  errorElement.className = "error-message";
  errorElement.textContent = errorMessage;
  errorContainer.appendChild(errorElement);
  inputElement.classList.add("error");
}

const price = localStorage.getItem("cart_Value") || 0;
document.getElementById("price").textContent = `₹ ${price}`;

function formatCardNumber(e) {
  const input = e.target;
  const trimmedInput = input.value.replace(/\s+/g, ""); // Remove existing whitespaces
  const formattedInput = trimmedInput.replace(/(.{4})/g, "$1 "); // Add space after every 4 characters
  input.value = formattedInput;

  if (formattedInput.length > 19) {
    input.value = formattedInput.slice(0, 19); // Limit to 16 digits
  }
}

function formatCVV(e) {
  const input = e.target;
  const formattedInput = input.value.slice(0, 3); // Limit to 3 digits
  input.value = formattedInput;
}

const cardNumInput = document.getElementById("cardNum");
cardNumInput.addEventListener("input", formatCardNumber);

const cvvInput = document.getElementById("cvv");
cvvInput.addEventListener("input", formatCVV);

function home() {
  location.href = "../index.html";
}


const verifyButton = document.getElementById("verifyButton");
verifyButton.addEventListener("click", validateOTP);

function validateOTP() {
 const otpInput = document.getElementById("otpInput");
 const otp = otpInput.value;
 const errorContainer = document.getElementById("otpError");

 // Clear previous error message
 errorContainer.textContent = "";

 // Perform the OTP validation logic here
 // Replace the if condition with your actual OTP validation logic
 if (otp === localStorage.getItem("generatedOTP")) {
 //if (otp === "123456") {
   // OTP is valid
   // Display success message or perform necessary actions
   console.log("OTP is valid");

   hideOtpOverlay(); // Hide the OTP overlay

   showOverlayMessage("OTP Verified Successfully"); // Show the OTP verification overlay

   setTimeout(() => {
     hideOverlayMessage(); // Hide the OTP verification overlay
     showThankYouScreen("ABC123"); // Pass the actual order ID
   }, 2000);
 } else {
   // OTP is invalid
   // Display error message or perform necessary actions
   const errorMessage = "Invalid OTP";
   console.log(errorMessage);
   errorContainer.textContent = errorMessage;
 }
}

function generateOTP() {
  const generatedOTP = Math.floor(10000 + Math.random() * 90000); // Generate a random 5-digit OTP
  localStorage.setItem("generatedOTP", generatedOTP); // Store the OTP in local storage
}

function showOverlayMessage(message) {
 const otpVerifiedOverlay = document.getElementById("otpVerifiedOverlay");
 const otpVerifiedOverlayMessage = document.getElementById(
   "otpVerifiedOverlay-message"
 );

 otpVerifiedOverlayMessage.textContent = message;
 otpVerifiedOverlay.style.display = "flex";
}

function hideOverlayMessage() {
 const otpVerifiedOverlay = document.getElementById("otpVerifiedOverlay");
 otpVerifiedOverlay.style.display = "none";
}

function showThankYouScreen(orderId) {
 const thankYouScreen = document.getElementById("thankYouScreen");
 thankYouScreen.style.display = "flex";

 const orderIdElement = document.getElementById("orderId");
 orderIdElement.textContent = orderId;

 const homeButton = document.getElementById("homeButton");
 homeButton.style.display = "block";


 const countdownElement = document.getElementById("countdown");

 let countdown = 5; // Starting countdown value

 // Update the countdown every second
 const countdownInterval = setInterval(() => {
   countdown--;
   countdownElement.textContent = countdown;

   if (countdown <= 0) {
     // Redirect to home page when countdown reaches 0
     clearInterval(countdownInterval);
     location.href = "../index.html";
   }
 }, 1000);
 
 // Auto-redirect to home page after 5 seconds
 setTimeout(() => {
   location.href = "../index.html";
 }, 5000);
}

function hideThankYouScreen() {
 const thankYouScreen = document.getElementById("thankYouScreen");
 thankYouScreen.style.display = "none";
}
