// Select the getStartedButton element
const getStartedButton = document.querySelector(".getStartedButton");

// Ensure the element exists before adding event listener
if (getStartedButton) {
    // Add a click event listener to the getStartedButton
    getStartedButton.addEventListener("click", () => {
        // Redirect the user to the services page
        window.location.href = "services.html";
    });
} else {
    console.error("getStartedButton element not found");
}

const homeButton = document.querySelector(".homeButton");

// Ensure the element exists before adding event listener
if (homeButton) {
    // Add a click event listener to the trackButton
    homeButton.addEventListener("click", () => {
        // Redirect the user to the track page
        window.location.href = "index.html";
    });
} else {
    console.error("homeButton element not found");
}

// Select all the links in the navbar
const navLinks = document.querySelectorAll("nav a");

// Add a click event listener to each link
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // Prevent the default link behavior
        e.preventDefault();

        // Get the href attribute value of the link
        const href = link.getAttribute("href");

        // Redirect the user to the corresponding page
        window.location.href = href;
    });
});

// Select the sign-in icon
const signInIcon = document.querySelector('.sign-in-icon img');

// Add a click event listener to the sign-in icon
if (signInIcon) {
    signInIcon.addEventListener('click', () => {
        // Redirect the user to the sign-in page
        window.location.href = "signin.html";
    });
} else {
    console.error("signInIcon element not found");
}

// Function to handle form submission
function handleFormSubmit(e, redirectUrl) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the form data
    const formData = new FormData(e.target);

    // Convert the form data to an object
    const formObject = {};
    for (const [key, value] of formData.entries()) {
        formObject[key] = value;
    }

    // Log the form data to the console
    console.log(formObject);

    // Redirect the user to the confirmation page
    window.location.href = redirectUrl;
}

// Add DOMContentLoaded event listener to run the function when the document content is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the getStartedButton element
    const getStartedButton = document.querySelector(".getStartedButton");

    // Ensure the element exists before adding event listener
    if (getStartedButton) {
        // Add a click event listener to the getStartedButton
        getStartedButton.addEventListener("click", () => {
            // Redirect the user to the services page
            window.location.href = "services.html";
        });
    } else {
        console.error("getStartedButton element not found");
    }

    const homeButton = document.querySelector(".homeButton");

    // Ensure the element exists before adding event listener
    if (homeButton) {
        // Add a click event listener to the trackButton
        homeButton.addEventListener("click", () => {
            // Redirect the user to the track page
            window.location.href = "index.html";
        });
    } else {
        console.error("homeButton element not found");
    }

    // Select all the links in the navbar
    const navLinks = document.querySelectorAll("nav a");

    // Add a click event listener to each link
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            // Prevent the default link behavior
            e.preventDefault();

            // Get the href attribute value of the link
            const href = link.getAttribute("href");

            // Redirect the user to the corresponding page
            window.location.href = href;
        });
    });

    // Select the sign-in icon
    const signInIcon = document.querySelector('.sign-in-icon img');

    // Add a click event listener to the sign-in icon
    if (signInIcon) {
        signInIcon.addEventListener('click', () => {
            // Redirect the user to the sign-in page
            window.location.href = "signin.html";
        });
    } else {
        console.error("signInIcon element not found");
    }

    // Function to handle form submission
    function handleFormSubmit(e, redirectUrl) {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Get the form data
        const formData = new FormData(e.target);

        // Convert the form data to an object
        const formObject = {};
        for (const [key, value] of formData.entries()) {
            formObject[key] = value;
        }

        // Log the form data to the console
        console.log(formObject);

        // Redirect the user to the confirmation page
        window.location.href = redirectUrl;
    }

    // Select the search location button on the services page
    const searchLocationBtn = document.querySelector('.services-page .search-location-btn');

    // Add a click event listener to the search location button
    if (searchLocationBtn) {
        searchLocationBtn.addEventListener('click', (e) => {
            // Prevent the default form submission behavior
            e.preventDefault();

            // Redirect the user to the maps page
            window.location.href = "maps.html";
        });
    }

    // Select the search location button in the volunteer section
    const searchLocationBtnVolunteer = document.querySelector('.find-volunteer-form #searchLocationBtnVolunteer');

    // Add a click event listener to the search location button in the volunteer section
    if (searchLocationBtnVolunteer) {
        searchLocationBtnVolunteer.addEventListener('click', (e) => {
            // Prevent the default form submission behavior
            e.preventDefault();

            // Redirect the user to the maps page
            window.location.href = "maps.html";
        });
    }

    // Select the health tracking form and add submit event listener
    const healthTrackingForm = document.querySelector('.health-tracking-form');
    if (healthTrackingForm) {
        healthTrackingForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));
    }

    // Select the sign-in form and add submit event listener
    const signInForm = document.querySelector('.sign-in-form');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));
    }

    // Select the log-in form and add submit event listener
    const logInForm = document.querySelector('.login-form');
    if (logInForm) {
        logInForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));
    }

    // Define chart functions before they are called
    function createWeightChart() {
        const weightData = JSON.parse(localStorage.getItem("weightData")) || [];
        const weightCtx = document.getElementById("weightChart").getContext("2d");
        new Chart(weightCtx, {
            type: "line",
            data: {
                labels: weightData.map((data) => data.date),
                datasets: [{
                    label: "Weight",
                    data: weightData.map((data) => data.weight),
                    borderColor: "rgba(75, 192, 192, 1)",
                    fill: false,
                }],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "day",
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    function createBloodPressureChart() {
        const bloodPressureData = JSON.parse(localStorage.getItem("bloodPressureData")) || [];
        const bloodPressureCtx = document.getElementById("bloodPressureChart").getContext("2d");
        new Chart(bloodPressureCtx, {
            type: "bar",
            data: {
                labels: bloodPressureData.map((data) => data.date),
                datasets: [
                    {
                        label: "Systolic",
                        data: bloodPressureData.map((data) => data.systolic),
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgba(255, 99, 132, 1)",
                        borderWidth: 1,
                    },
                    {
                        label: "Diastolic",
                        data: bloodPressureData.map((data) => data.diastolic),
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "day",
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    function createBloodSugarChart() {
        const bloodSugarData = JSON.parse(localStorage.getItem("bloodSugarData")) || [];
        const bloodSugarCtx = document.getElementById("bloodSugarChart").getContext("2d");
        new Chart(bloodSugarCtx, {
            type: "line",
            data: {
                labels: bloodSugarData.map((data) => data.date),
                datasets: [{
                    label: "Blood Sugar",
                    data: bloodSugarData.map((data) => data.bloodSugar),
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1,
                }],
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: "time",
                        time: {
                            unit: "day",
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Create initial charts
    createWeightChart();
    createBloodPressureChart();
    createBloodSugarChart();

    // Function to update weight chart
    function updateWeightChart(weight) {
        const weightData = JSON.parse(localStorage.getItem("weightData")) || [];
        weightData.push({
            date: new Date().toLocaleDateString(),
            weight: weight
        });
        localStorage.setItem("weightData", JSON.stringify(weightData));

        createWeightChart();
    }

    // Function to update blood pressure chart
    function updateBloodPressureChart(systolic, diastolic) {
        const bloodPressureData = JSON.parse(localStorage.getItem("bloodPressureData")) || [];
        bloodPressureData.push({
            date: new Date().toLocaleDateString(),
            systolic: systolic,
            diastolic: diastolic
        });
        localStorage.setItem("bloodPressureData", JSON.stringify(bloodPressureData));

        createBloodPressureChart();
    }

    // Function to update blood sugar chart
    function updateBloodSugarChart(bloodSugar) {
        const bloodSugarData = JSON.parse(localStorage.getItem("bloodSugarData")) || [];
        bloodSugarData.push({
            date: new Date().toLocaleDateString(),
            bloodSugar: bloodSugar
        });
        localStorage.setItem("bloodSugarData", JSON.stringify(bloodSugarData));

        createBloodSugarChart();
    }

    if (healthTrackingForm) {
        healthTrackingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const weight = document.getElementById('weightInput').value;
            const systolic = document.getElementById('systolicInput').value;
            const diastolic = document.getElementById('diastolicInput').value;
            const bloodSugar = document.getElementById('bloodSugarInput').value;

            // Update charts with new data
            if (weight) updateWeightChart(weight);
            if (systolic && diastolic) updateBloodPressureChart(systolic, diastolic);
            if (bloodSugar) updateBloodSugarChart(bloodSugar);

            // Clear the form
            healthTrackingForm.reset();
        });
    }
});
