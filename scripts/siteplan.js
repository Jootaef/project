document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const cars = [
        {
            carName: "Chevrolet Dmax",
            brand: "Chevrolet",
            year: 2021,
            price: 25000,
            unitsSold: 15000,
            imageUrl: "images/car-dmax.PNG",
            category: "new"
        },
        {
            carName: "Chevrolet Aveo Active",
            brand: "Chevrolet",
            year: 2010,
            price: 6000,
            unitsSold: 50000,
            imageUrl: "images/car-aveo-active.PNG",
            category: "old"
        },
        {
            carName: "Suzuki Vitara Sz",
            brand: "Suzuki",
            year: 2014,
            price: 9000,
            unitsSold: 70000,
            imageUrl: "images/car-suzuki.PNG",
            category: "new"
        },
        {
            carName: "Toyota Hilux 4x4",
            brand: "Toyota",
            year: 2022,
            price: 30000,
            unitsSold: 60000,
            imageUrl: "images/car-hilux.PNG",
            category: "new"
        },
        {
            carName: "Ford EcoSport",
            brand: "Ford",
            year: 2014,
            price: 11000,
            unitsSold: 40000,
            imageUrl: "images/car-ecosport.PNG",
            category: "new"
        },
        {
            carName: "Kia Rio",
            brand: "Kia",
            year: 2017,
            price: 9000,
            unitsSold: 45000,
            imageUrl: "images/car-rio.PNG",
            category: "new"
        },
        {
            carName: "Kia Sportage",
            brand: "Kia",
            year: 2016,
            price: 20000,
            unitsSold: 55000,
            imageUrl: "images/car-sportage.PNG",
            category: "new"
        },
        {
            carName: "Chevrolet Sail",
            brand: "Chevrolet",
            year: 2013,
            price: 7000,
            unitsSold: 80000,
            imageUrl: "images/car-sail.PNG",
            category: "old"
        },
        {
            carName: "Jac T8 4x4",
            brand: "JAC",
            year: 2021,
            price: 20000,
            unitsSold: 48000,
            imageUrl: "images/car-T8.PNG",
            category: "new"
        },
        {
            carName: "Great Wall Wingle 7 4x4",
            brand: "Great Wall",
            year: 2021,
            price: 20000,
            unitsSold: 56000,
            imageUrl: "images/car-wingle7.PNG",
            category: "new"
        }
    ];

    // Render all cars initially
    renderCars(cars);

    // Event listeners for navigation links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.id;
            filterCars(filter);
            // Close the hamburger menu if it is active
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    function renderCars(carsToRender) {
        const carsList = document.querySelector('.cars-list');
        carsList.innerHTML = ''; // Clear existing cars

        carsToRender.forEach(car => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.innerHTML = `
                <img src="${car.imageUrl}" alt="${car.carName}">
                <h2>${car.carName}</h2>
                <p><strong>Marca:</strong> ${car.brand}</p>
                <p><strong>Año:</strong> ${car.year}</p>
                <p><strong>Precio:</strong> $${car.price}</p>
                <p><strong>Unidades Vendidas:</strong> ${car.unitsSold}</p>
            `;
            carsList.appendChild(carCard);
        });
    }

    function filterCars(category) {
        let filteredCars;
        switch (category) {
            case 'all':
                filteredCars = cars; // Show all cars
                break;
            case 'old':
                filteredCars = cars.filter(car => car.year < 2013); // Filter old cars
                break;
            case 'new':
                filteredCars = cars.filter(car => car.year >= 2018); // Filter new cars
                break;
            case 'expensive':
                filteredCars = cars.filter(car => car.price > 15000); // Filter expensive cars
                break;
            case 'cheap':
                filteredCars = cars.filter(car => car.price <= 9000); // Filter cheap cars
                break;
            case 'bestselling':
                filteredCars = cars.filter(car => car.unitsSold > 60000); // Filter bestselling cars
                break;
            default:
                filteredCars = cars; // Fallback to all cars
                break;
        }
        renderCars(filteredCars);
    }
});

// Select the hamburger icon and the navigation menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// Function to handle menu toggle
function toggleMenu() {
    nav.classList.toggle('active');
}

// Function to initialize event listeners based on screen width
function initHamburgerMenu() {
    if (window.innerWidth <= 600) { // Check if the viewport width is 600px or less
        hamburger.style.display = 'block'; // Show the hamburger menu
        hamburger.addEventListener('click', toggleMenu); // Add event listener for click
    } else {
        hamburger.style.display = 'none'; // Hide the hamburger menu
        nav.classList.remove('active'); // Ensure nav is closed
        hamburger.removeEventListener('click', toggleMenu); // Remove event listener for click
    }
}

// Initial check on page load
initHamburgerMenu();

// Check on window resize
window.addEventListener('resize', initHamburgerMenu);
