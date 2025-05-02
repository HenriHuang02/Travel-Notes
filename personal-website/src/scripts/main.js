// This file contains the JavaScript code for the personal website.
// You can add functionality such as event handling, animations, or dynamic content updates here.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Personal website loaded successfully!');

    // Example: Add a click event to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});