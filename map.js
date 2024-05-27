// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Set initial view to avoid map rendering issues

// Add tile layer (you can use any tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Request user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}

// Display user's location on the map
function showPosition(position) {
    const userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    // Display the user's location on the map
    const marker = L.marker([userLocation.latitude, userLocation.longitude]).addTo(map);
    map.setView([userLocation.latitude, userLocation.longitude], 16);

    // Wait for the map to finish rendering before showing confirmation
    setTimeout(() => {
        // Ask for confirmation after displaying the location
        const confirmed = window.confirm("Your location will be shared with us. Do you want to continue?");
        if (confirmed) {
            // Send the coordinates to the backend server using a POST request
            fetch('/api/location', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userLocation)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to save location to the server');
                }
                console.log('Location saved successfully');
                // Redirect back to the services page after successful submission
                window.location.href = "services.html";
            })
            .catch(error => {
                console.error('Error saving location:', error);
                // Redirect back to the services page if there's an error
                window.location.href = "services.html";
            });
        } else {
            // If not confirmed, do nothing or provide feedback
            console.log('Location sharing cancelled.');
        }
    }, 500); // Adjust timeout as needed to ensure map is rendered
}

// Handle geolocation errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            console.error("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            console.error("An unknown error occurred.");
            break;
    }
}

// Call the function to get user's location when the page loads
getLocation();
