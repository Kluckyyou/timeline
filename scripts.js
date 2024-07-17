mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5sdWNreXlvdSIsImEiOiJjbGsxbmtwdDAwN3BwM2hwYjc1cmM2eGI1In0.x6M_1C9KEot_ce8PtdRrpg';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kevinluckyyou/clxp2bt9a031b01qkf0xv9ie1',
        center: [121.4737, 31.2304], // Set the initial center coordinates [longitude, latitude]
        zoom: 3,
        maxZoom: 4,
        minZoom: 3
    });

    const events = {
        1900: {
            title: "Event in Shanghai, 1900",
            content: "This is a random event that took place in Shanghai in 1900.",
            locations: [{ lng: 121.4737, lat: 31.2304 }]
        },
        1920: {
            title: "Events in Beijing and Nanjing, 1920",
            content: "These are random events that took place in Beijing and Nanjing in 1920.",
            locations: [
                { lng: 116.4074, lat: 39.9042 }, // Beijing
                { lng: 118.7969, lat: 32.0603 }  // Nanjing
            ]
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
        const event = events[year];
        if (event) {
            articleSection.innerHTML = `<h2>${event.title}</h2><p>${event.content}</p>`;
            updateMap(event.locations);
        }
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

