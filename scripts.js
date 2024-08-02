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
            "1839": {
                title: "First Opium War, 1839-1842",
                content: `
                    <p>Conflicts over increasing British opium imports into China sparked the First Opium War.  China was defeated and signed the Treaty of Nanking, an unequal treaty that ceded Hong Kong to Britain.</p>
                    <img src="images/Prewar_S1_01.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Signing of the Treaty of Nanking in 1842. </p>
                    <p style="font-size: small; font-style: italic;">Source: Mineta, Fūkō.  Kaigai Shinwa, 5. Edo, 1849.  Courtesy of University of British Columbia Library, Rare Books and Special Collections. </p>
                `,
                locations: [{ lng: 104.1954, lat: 35.8617 }]
            },
            "1850": {
                title: "Taiping Rebellion, 1850-1864",
                content: `
                    <p>Large-scale grassroots uprising against the Qing government led by self-proclaimed prophet Hong Xiuquan.  The 14-year civil war caused 20 million deaths and further weakened the Qing government. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }]
            },
            "1856": {
                title: "Second Opium War, 1856-1860",
                content: `
                    <p>France joined Britain and defeated Qing China in the Second Opium War.  China was forced to sign unequal treaties with Britain, France, and later Russia and the United States that required China to make large reparation payments and cede more territory. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }]
            },
            "1884": {
                title: "Sino-French War, 1884-1885",
                content: `
                    <p>French military aggression in Vietnam, a tributary state of China, prompted war with Qing China.  As a result of the war, China ceded the protectorate of Vietnam to France. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }]
            },
            "1900": {
                title: "Boxer Rebellion and Eight-Nation Alliance, 1900",
                content: `
                    <p>The Boxer Militia started an uprising against foreigners and Christians in northern China.  Boxer troops were later supported by Empress Cixi and imperial Chinese forces. </p>
                    <p>A military coalition of seven western imperial powers and Japan was formed to combat the Boxer Militia.  The Qing government's defeat in battle resulted in uncontrollable looting and plundering in the capital city by coalition troops and locals.  The Qing government also paid a large indemnity to the coalition. </p>
                    <img src="images/Prewar_S1_11.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Foreign troops in Beijing following the Boxer Rebellion. </p>
                    <p style="font-size: small; font-style: italic;">Source: U.S. National Archives and Records Administration. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }]
            }
        },
        Japan: {
            "1853": {
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
            "1894": {
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

    const timelineLabels = {
        China: [1839, 1850, 1856, 1884, 1900],
        Japan: [1850, 1853, 1868, 1905, 1920],
        Korea: [1882, 1894, 1910, 1919]
    };

    const minYear = 1830;
    const maxYear = 1930;

    const contentArea = document.querySelector('.content-area');
    const timelineSlider = document.getElementById('timeline');
    let selectedRegion = 'China'; // Default selected region
    let markers = [];

    // Event listeners for the region buttons
    document.getElementById('china-btn').addEventListener('click', () => switchRegion('China'));
    document.getElementById('japan-btn').addEventListener('click', () => switchRegion('Japan'));
    document.getElementById('korea-btn').addEventListener('click', () => switchRegion('Korea'));
    // JavaScript modifications to toggle active class
    document.querySelectorAll('.timeline-buttons .btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.timeline-buttons .btn').forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
        });
    });


    function switchRegion(region) {
        selectedRegion = region;
        updateLabels(region);
        updateContent(timelineSlider.value);
    }

    function updateLabels(region) {
        const labels = timelineLabels[region];
        const labelsContainer = document.querySelector('.timeline-labels-container');
        labelsContainer.innerHTML = ''; // Clear existing labels

        labels.forEach(year => {
            const span = document.createElement('span');
            span.textContent = year;
            span.classList.add('label');
            span.dataset.country = region; // Add country classification

            // Calculate the left position
            const leftPosition = ((year - minYear) / (maxYear - minYear)) * 100;
            span.style.left = `${leftPosition}%`;
            span.style.position = 'absolute';
            span.style.justifyContent = 'center';
            span.style.transform = 'translateX(-10%)';

            labelsContainer.appendChild(span);
        });

        // Activate labels for the selected region
        activateLabels(region);
    }

    function activateLabels(region) {
        const allLabels = document.querySelectorAll('.timeline-labels-container .label');
        allLabels.forEach(label => {
            label.classList.remove('active'); // Hide all labels
            if (label.dataset.country === region) {
                label.classList.add('active'); // Show labels for the selected region
            }
        });
    }

    timelineSlider.addEventListener('input', (event) => {
        const year = event.target.value;
        updateContent(year);
    });

    function updateContent(year) {
        const regionEvents = events[selectedRegion];
        const event = regionEvents[year];

        if (event) {
            contentArea.innerHTML = `<h2>${event.title}</h2>${event.content}`;
            updateMap(event.locations);
        } else {
            contentArea.innerHTML = `<h2>No Event</h2><p>No significant events recorded for this year.</p>`;
            updateMap([]);
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

    // Initialize with the first event in the default region
    updateLabels(selectedRegion);
    updateContent(timelineSlider.value);
});

