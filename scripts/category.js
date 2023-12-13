// Redirection after a delay
function redirectToPage(url) {
  // Showing overlay with GIF
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.innerHTML = '<img src="./Images/Loading gif.gif" alt="Loading...">';
  document.body.appendChild(overlay);

  setTimeout(function () {
    window.location.href = url;
  }, 2000); // Delay in milliseconds (2 seconds)
}
