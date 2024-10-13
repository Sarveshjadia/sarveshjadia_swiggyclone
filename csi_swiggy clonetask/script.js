// ye maine mock data banaya restraurent
const restaurants = [
    { id: 1, name: 'Burger King', cuisine: 'Fast Food', rating: 4.2, deliveryTime: '30 min' },
    { id: 2, name: 'Pizza Hut', cuisine: 'Italian', rating: 4.0, deliveryTime: '40 min' },
    { id: 3, name: 'Subway', cuisine: 'Sandwiches', rating: 3.8, deliveryTime: '25 min' },
    { id: 4, name: 'Taco Bell', cuisine: 'Mexican', rating: 3.9, deliveryTime: '35 min' },
    { id: 5, name: 'CCD', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },
    { id: 6, name: 'CSD', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },
    { id: 7, name: 'NBC', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },
    { id: 8, name: 'KFC', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },
    { id: 9, name: 'MCF', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },
    { id: 10, name: 'VRDN', cuisine: 'Fast Food', rating: 4.1, deliveryTime: '30 min' },

    
];
//variable ko intialize kra 
const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const logo = document.getElementById('logo');

function showHomePage() {
    mainContent.innerHTML = `
        <h2>Popular Restaurants</h2>
        <div class="restaurant-list">
            ${restaurants.map(restaurant => `
                <div class="restaurant-card" data-id="${restaurant.id}">
                    <h2>${restaurant.name}</h2>
                    <p>${restaurant.cuisine}</p>
                    <span class="rating">★ ${restaurant.rating}</span>
                    <p>${restaurant.deliveryTime}</p>
                </div>
            `).join('')}
        </div>
    `;

    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
        card.addEventListener('click', () => {
            const restaurantId = parseInt(card.getAttribute('data-id'));
            showRestaurantPage(restaurantId);
        });
    });
}

function showRestaurantPage(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) {
        mainContent.innerHTML = '<p>Restaurant not found</p>';
        return;
    }

    mainContent.innerHTML = `
        <div class="restaurant-page">
            <button class="back-button">← Back to Home</button>
            <h2>${restaurant.name}</h2>
            <p>${restaurant.cuisine}</p>
            <p>Rating: ${restaurant.rating}</p>
            <p>Delivery Time: ${restaurant.deliveryTime}</p>
            <!-- Add more details and menu items here -->
        </div>
    `;

    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', showHomePage);
}

function searchRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm)
    );

    mainContent.innerHTML = `
        <h2>Search Results</h2>
        <div class="restaurant-list">
            ${filteredRestaurants.map(restaurant => `
                <div class="restaurant-card" data-id="${restaurant.id}">
                    <h2>${restaurant.name}</h2>
                    <p>${restaurant.cuisine}</p>
                    <span class="rating">★ ${restaurant.rating}</span>
                    <p>${restaurant.deliveryTime}</p>
                </div>
            `).join('')}
        </div>
    `;

    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
        card.addEventListener('click', () => {
            const restaurantId = parseInt(card.getAttribute('data-id'));
            showRestaurantPage(restaurantId);
        });
    });
}

// eventlistner ka use kra 
logo.addEventListener('click', showHomePage);
searchButton.addEventListener('click', searchRestaurants);
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchRestaurants();
    }
});

//intially page ko call kra
showHomePage();