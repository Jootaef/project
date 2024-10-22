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

    renderCars(cars);

    document.querySelectorAll('nav#nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.id;
            filterCars(filter);
            toggleMenu();
        });
    });

    function renderCars(carsToRender) {
        const carsList = document.querySelector('.cars-list');
        carsList.innerHTML = ''; // Clear previous cars

        carsToRender.forEach(car => {
            const carCard = document.createElement('div');
            carCard.classList.add('car-card');
            carCard.innerHTML = `
                <img src="${car.imageUrl}" alt="${car.carName}">
                <h2>${car.carName}</h2>
                <p><strong>Brand:</strong> ${car.brand}</p>
                <p><strong>Year:</strong> ${car.year}</p>
                <p><strong>Price:</strong> $${car.price}</p>
                <p><strong>Units Sold:</strong> ${car.unitsSold}</p>
            `;
            carsList.appendChild(carCard);
        });
    }

    function filterCars(category) {
        let filteredCars;
        switch (category) {
            case 'all':
                filteredCars = cars; 
                break;
            case 'old':
                filteredCars = cars.filter(car => car.year < 2013); 
                break;
            case 'new':
                filteredCars = cars.filter(car => car.year >= 2018); 
                break;
            case 'expensive':
                filteredCars = cars.filter(car => car.price > 15000); 
                break;
            case 'cheap':
                filteredCars = cars.filter(car => car.price <= 9000); 
                break;
            case 'bestselling':
                filteredCars = cars.filter(car => car.unitsSold > 60000); 
                break;
            default:
                filteredCars = cars; 
                break;
        }
        renderCars(filteredCars);
    }

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    function toggleMenu() {
        nav.classList.toggle('active');
    }

    function initHamburgerMenu() {
        if (window.innerWidth <= 600) {
            hamburger.style.display = 'block';
            hamburger.addEventListener('click', toggleMenu);
        } else {
            hamburger.style.display = 'none';
            nav.classList.remove('active');
            hamburger.removeEventListener('click', toggleMenu);
        }
    }

    initHamburgerMenu();

    window.addEventListener('resize', initHamburgerMenu);
});
