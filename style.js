// Function to display a message when the button is clicked
function showMessage() {
    const message = "Feel free to get in touch with me!";
    alert(message);
}

// Add an event listener to the button
const button = document.createElement("button");
button.textContent = "Contact Me";
button.addEventListener("click", showMessage);

// Append the button to the body
document.body.appendChild(button);

// Get references to elements
const image = document.getElementById("myImage");
const overlay = document.getElementById("imageOverlay");
const expandedImage = document.getElementById("expandedImage");
const closeButton = document.getElementById("closeButton");

// Add a click event listener to the image
image.addEventListener("click", function () {
    // Set the source of the expanded image
    expandedImage.src = this.src;

    // Show the overlay
    overlay.style.display = "block";
});

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
    // Hide the overlay
    overlay.style.display = "none";
});