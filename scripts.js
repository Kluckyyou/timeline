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
        China: {
            "1839-1842": {
                title: "First Opium War, 1839-1842",
                content: `
                    <p>The First Opium War took place across the whole of China.</p>
                    <img src="images/Prewar_S1_01.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p>More details about the First Opium War...</p>
                    <p>Additional information and context about the First Opium War...</p>
                `,
                locations: [{ lng: 104.1954, lat: 35.8617 }]
            },
            "1850-1864": {
                title: "Taiping Rebellion, 1850-1864",
                content: `
                    <p>The Taiping Rebellion took place in Taipei from 1850 to 1864.</p>
                    <img src="images/Prewar_S1_05b.jpg" alt="Taiping Rebellion Image" style="width: 100%; height: auto;">
                    <p>More details about the Taiping Rebellion...</p>
                    <p>Additional information and context about the Taiping Rebellion...</p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }]
            }
        },
        Japan: {
            "1853-1854": {
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }] // Tokyo
            },
            // More Japanese events can be added here
        },
        Korea: {
            "1894-1895": {
                title: "First Sino-Japanese War, 1894-1895",
                content: `
                    <p>The First Sino-Japanese War had significant impact on Korea.</p>
                    <img src="images/Korea_Event1.jpg" alt="Sino-Japanese War Image" style="width: 100%; height: auto;">
                    <p>More details about the war...</p>
                    <p>Additional information and context about the war...</p>
                `,
                locations: [{ lng: 126.9778, lat: 37.5665 }] // Seoul
            },
            // More Korean events can be added here
        }
    };

    const contentArea = document.querySelector('.content-area');
    const timelineSlider = document.getElementById('timeline');
    let selectedRegion = 'China'; // Default selected region
    let markers = [];

    // Event listeners for the region buttons
    document.getElementById('china-btn').addEventListener('click', () => switchRegion('China'));
    document.getElementById('japan-btn').addEventListener('click', () => switchRegion('Japan'));
    document.getElementById('korea-btn').addEventListener('click', () => switchRegion('Korea'));

    function switchRegion(region) {
        selectedRegion = region;
        updateContent(timelineSlider.value);
    }

    timelineSlider.addEventListener('input', (event) => {
        const year = event.target.value;
        updateContent(year);
    });

    function updateContent(year) {
        const regionEvents = events[selectedRegion];
        for (const period in regionEvents) {
            const [startYear, endYear] = period.split('-').map(Number);
            if (year >= startYear && year <= endYear) {
                const event = regionEvents[period];
                contentArea.innerHTML = `<h2>${event.title}</h2>${event.content}`;
                updateMap(event.locations);
                return;
            }
        }
        contentArea.innerHTML = `<h2>No Event</h2><p>No significant events recorded for this year.</p>`;
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

    // Initialize with the first event in the default region
    updateContent(timelineSlider.value);
});

