// Ensure the map container element exists before initializing the map
document.addEventListener("DOMContentLoaded", () => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');

    if (mapContainer) {
        // Initialize the map only if the container exists
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Call the getLocation function when the page loads
        window.onload = getLocation;

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            const userLocation = L.latLng(position.coords.latitude, position.coords.longitude);
            const marker = L.marker(userLocation).addTo(map);
            map.setView(userLocation, 16);
        }
    } else {
        console.error("Map container element not found");
    }
});
