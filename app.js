// Select the navigation bar and the navigation items 
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');

// Add a click event listener to each navigation item 
navItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        // Remove the 'active' class from all navigation items 
        event.preventDefault();
        navItems.forEach((item) => item.classList.remove('active'));

        // Add the 'active' class to the clicked navigation item 
        item.classList.add('active');

        // Close the mobile navigation menu if it is open 
        if (nav.classList.contains('mobile-nav')) {
            nav.classList.remove('mobile-nav');
        }
    });
});

$(document).ready(function() {
    $('#getStartedButton').on('click', function() {
        window.location.href = 'register.html';
    });
});

// Add a click event listener to the navigation toggle button 
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
    // Toggle the 'mobile-nav' class on the navigation bar 
    nav.classList.toggle('mobile-nav');
});

// Select the "Get started" button 
const getStartedButton = document.getElementById('getStartedButton');

// Add a click event listener to the button 
getStartedButton.addEventListener('click', () => {
    // Navigate to the services page 
    window.location.href = 'services.html';
});

