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
signInIcon.addEventListener('click', () => {
    // Redirect the user to the sign-in page
    window.location.href = "signin.html";
});

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
    // Select the search location button on the services page
    const searchLocationBtn = document.querySelector('.services-page .search-location-btn');

    // Add a click event listener to the search location button
    searchLocationBtn.addEventListener('click', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Redirect the user to the maps page
        window.location.href = "maps.html";
    });

    // Select the search location button in the volunteer section
    const searchLocationBtnVolunteer = document.querySelector('.find-volunteer-form #searchLocationBtnVolunteer');

    // Add a click event listener to the search location button in the volunteer section
    searchLocationBtnVolunteer.addEventListener('click', (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();

        // Redirect the user to the maps page
        window.location.href = "maps.html";
    });

    // Select the health tracking form and add submit event listener
    const healthTrackingForm = document.querySelector('.health-tracking-form');
    healthTrackingForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));

    // Select the sign-in form and add submit event listener
    const signInForm = document.querySelector('.sign-in-form');
    signInForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));

    // Select the log-in form and add submit event listener
    const logInForm = document.querySelector('.login-form');
    logInForm.addEventListener('submit', (e) => handleFormSubmit(e, "confirmation.html"));
});

document.querySelector('.health-tracking-form').addEventListener('submit', (e) => {
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
    window.location.href = "confirmation.html";
});


// Function to handle form submission
function handleFormSubmit(e, redirectUrl) {
    // ... existing code ...

    // Create weight chart
    createWeightChart();

    // Create blood pressure chart
    createBloodPressureChart();

    // Create blood sugar chart
    createBloodSugarChart();

    // Redirect the user to the confirmation page
    window.location.href = redirectUrl;
}

// Function to create weight chart
function createWeightChart() {
    const weightData = JSON.parse(localStorage.getItem("weightData")) || [];

    const weightCtx = document.getElementById("weightChart").getContext("2d");
    const weightChart = new Chart(weightCtx, {
        type: "line",
        data: {
            labels: weightData.map((data) => data.date),
            datasets: [
                {
                    label: "Weight",
                    data: weightData.map((data) => data.weight),
                    borderColor: "rgba(75, 192, 192, 1)",
                    fill: false,
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

    localStorage.setItem("weightChart", JSON.stringify(weightChart));
}

// Function to create blood pressure chart
function createBloodPressureChart() {
    const bloodPressureData = JSON.parse(localStorage.getItem("bloodPressureData")) || [];

    const bloodPressureCtx = document.getElementById("bloodPressureChart").getContext("2d");
    const bloodPressureChart = new Chart(bloodPressureCtx, {
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

    localStorage.setItem("bloodPressureChart", JSON.stringify(bloodPressureChart));
}

// Function to create blood sugar chart
function createBloodSugarChart() {
    const bloodSugarData = JSON.parse(localStorage.getItem("bloodSugarData")) || [];

    const bloodSugarCtx = document.getElementById("bloodSugarChart").getContext("2d");
    const bloodSugarChart = new Chart(bloodSugarCtx, {
        type: "line",
        data: {
            labels: bloodSugarData.map((data) => data.date),
            datasets: [
                {
                    label: "Blood Sugar",
                    data: bloodSugarData.map((data) => data.bloodSugar),
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

    localStorage.setItem("bloodSugarChart", JSON.stringify(bloodSugarChart));

}

    function updateWeightChart(weight) {
    const weightData = JSON.parse(localStorage.getItem("weightData")) || [];
    weightData.push({
        date: new Date().toLocaleDateString(),
        weight: weight
    });
    localStorage.setItem("weightData", JSON.stringify(weightData));

    const weightChart = JSON.parse(localStorage.getItem("weightChart"));
    weightChart.data.labels = weightData.map((data) => data.date);
    weightChart.data.datasets[0].data = weightData.map((data) => data.weight);
    weightChart.update();
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

    const bloodPressureChart = JSON.parse(localStorage.getItem("bloodPressureChart"));
    bloodPressureChart.data.labels = bloodPressureData.map((data) => data.date);
    bloodPressureChart.data.datasets[0].data = bloodPressureData.map((data) => data.systolic);
    bloodPressureChart.data.datasets[1].data = bloodPressureData.map((data) => data.diastolic);
    bloodPressureChart.update();
}

// Function to update blood sugar chart
function updateBloodSugarChart(bloodSugar) {
    const bloodSugarData = JSON.parse(localStorage.getItem("bloodSugarData")) || [];
    bloodSugarData.push({
        date: new Date().toLocaleDateString(),
        bloodSugar: bloodSugar
    });
    localStorage.setItem("bloodSugarData", JSON.stringify(bloodSugarData));

    const bloodSugarChart = JSON.parse(localStorage.getItem("bloodSugarChart"));
    bloodSugarChart.data.labels = bloodSugarData.map((data) => data.date);
    bloodSugarChart.data.datasets[0].data = bloodSugarData.map((data) => data.bloodSugar);
    bloodSugarChart.update();
}

// Add event listener to weight input field
const weightInput = document.getElementById("weight");
weightInput.addEventListener("change", () => {
    updateWeightChart(weightInput.value);
});

// Add event listener to blood pressure input fields
const systolicInput = document.getElementById("blood-pressure-systolic");
const diastolicInput = document.getElementById("blood-pressure-diastolic");
systolicInput.addEventListener("change", () => {
    updateBloodPressureChart(systolicInput.value, diastolicInput.value);
});
diastolicInput.addEventListener("change", () => {
    updateBloodPressureChart(systolicInput.value, diastolicInput.value);
});

// Add event listener to blood sugar input field
const bloodSugarInput = document.getElementById("blood-sugar");
bloodSugarInput.addEventListener("change", () => {
    updateBloodSugarChart(bloodSugarInput.value);
});