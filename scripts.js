mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5sdWNreXlvdSIsImEiOiJjbGsxbmtwdDAwN3BwM2hwYjc1cmM2eGI1In0.x6M_1C9KEot_ce8PtdRrpg';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kevinluckyyou/clxp2bt9a031b01qkf0xv9ie1',
        center: [104.1954, 35.8617], // Center of China
        zoom: 3,
        maxZoom: 4,
        minZoom: 3
    });

    const events = {
        "1839-1842": {
            title: "First Opium War, 1839-1842",
            content: `
                <p>The First Opium War took place across the whole of China.</p>
                <img src="images/Prewar_S1_05b.jpg">
                <p>More details about the First Opium War...</p>
                <p>Additional information and context about the First Opium War...</p>
            `,
            locations: [{ lng: 104.1954, lat: 35.8617 }]
        },
        "1850-1864": {
            title: "Taiping Rebellion, 1850-1864",
            content: `
                <p>The Taiping Rebellion took place in Taipei from 1850 to 1864.</p>
                <img src="images/Prewar_S1_05b.jpg">
                <p>More details about the Taiping Rebellion...</p>
                <p>Additional information and context about the Taiping Rebellion...</p>
            `,
            locations: [{ lng: 121.5654, lat: 25.0330 }]
        }
    };

    const articleSection = document.querySelector('.article-section');
    const timelineSlider = document.getElementById('timeline');

    let markers = [];

    timelineSlider.addEventListener('input', (event) => {
        const year = event.target.value;
        updateContent(year);
    });

    function updateContent(year) {
        for (const period in events) {
            const [startYear, endYear] = period.split('-').map(Number);
            if (year >= startYear && year <= endYear) {
                const event = events[period];
                articleSection.innerHTML = `<h2>${event.title}</h2>${event.content}`;
                updateMap(event.locations);
                return;
            }
        }
        articleSection.innerHTML = `<h2>No Event</h2><p>No significant events recorded for this year.</p>`;
        updateMap([]);
    }

    function updateMap(locations) {
        // Remove existing markers
        markers.forEach(marker => marker.remove());
        markers = [];

        // Add new markers
        locations.forEach(location => {
            const marker = new mapboxgl.Marker({ color: 'red' })
                .setLngLat([location.lng, location.lat])
                .addTo(map);
            markers.push(marker);
        });

        // Adjust the map view to fit all markers
        if (locations.length > 0) {
            const bounds = new mapboxgl.LngLatBounds();
            locations.forEach(location => {
                bounds.extend([location.lng, location.lat]);
            });
            map.fitBounds(bounds, { padding: 20 });
        }
    }

    // Initialize with the first event
    updateContent(timelineSlider.value);
});
