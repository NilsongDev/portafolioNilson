// main.js

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#contactForm').addEventListener('submit', function (event) {
        const name = document.getElementById('name').value;
        if (!name) {
            alert('Por favor, ingresa tu nombre.');
            event.preventDefault();
        }
    });
});