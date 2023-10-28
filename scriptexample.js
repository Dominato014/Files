// This is your-script.js

// Wait for the document to fully load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Create a new heading element and add some text
    var heading = document.createElement("h1");
    heading.textContent = "Hello from your-script.js!";

    // Append the heading to the document's body
    document.body.appendChild(heading);
});
