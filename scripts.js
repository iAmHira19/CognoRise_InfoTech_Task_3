document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const searchInput = document.getElementById('searchInput').value;
            const locationSelect = document.getElementById('locationSelect').value;
            if (searchInput || locationSelect) {
                // Fetch and display search results (mocked for now)
                const resultsSection = document.getElementById('results');
                resultsSection.innerHTML = `
                    <div class="result-item">
                        <h3>${locationSelect.charAt(0).toUpperCase() + locationSelect.slice(1)}</h3>
                        <p>Price: $123</p>
                        <img src="images/${locationSelect}.jpg" alt="${locationSelect.charAt(0).toUpperCase() + locationSelect.slice(1)}" class="location-img">
                        <button onclick="book()">Book Now</button>
                    </div>
                `;
            }
        });
    }

    window.book = function() {
        alert('Booking functionality is not yet implemented.');
    };
});
