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
            "1836": {
                label_position: "1837",
                label_year: "1839",
                title: "First Opium War, 1839-1842",
                content: `
                    <p>Conflicts over increasing British opium imports into China sparked the First Opium War.  China was defeated and signed the Treaty of Nanking, an unequal treaty that ceded Hong Kong to Britain.</p>
                    <img src="images/Prewar_S1_01.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Signing of the Treaty of Nanking in 1842. </p>
                    <p style="font-size: small; font-style: italic;">Source: Mineta, Fūkō.  Kaigai Shinwa, 5. Edo, 1849.  Courtesy of University of British Columbia Library, Rare Books and Special Collections. </p>
                `,
                locations: [{ lng: 104.1954, lat: 35.8617 }],
                connection: []
            },
            "1846": {
                label_position: "1847",
                label_year: "1850",
                title: "Taiping Rebellion, 1850-1864",
                content: `
                    <p>Large-scale grassroots uprising against the Qing government led by self-proclaimed prophet Hong Xiuquan.  The 14-year civil war caused 20 million deaths and further weakened the Qing government. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1853": {
                label_position: "1854",
                label_year: "1856",
                title: "Second Opium War, 1856-1860",
                content: `
                    <p>France joined Britain and defeated Qing China in the Second Opium War.  China was forced to sign unequal treaties with Britain, France, and later Russia and the United States that required China to make large reparation payments and cede more territory. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1874": {
                label_position: "1874",
                label_year: "1884",
                title: "Sino-French War, 1884-1885",
                content: `
                    <p>French military aggression in Vietnam, a tributary state of China, prompted war with Qing China.  As a result of the war, China ceded the protectorate of Vietnam to France. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1884": {
                label_position: "1884",
                label_year: "1894",
                title: "First Sino-Japanese War, 1894-1895",
                content: `
                    <p>In the late 19th century, Japan sought to shift Korea's longtime dependence from China to Japan.  When Korea requested China's aid in suppressing a peasant rebellion in 1894, Japan intervened by battling with Chinese troops in Korea. </p>
                    <p>The War ended with the Treaty of Shimonoseki, which ceded Taiwan and the adjoining Pescadores (Penghu Islands) as well as the Liaodong Peninsula of Manchuria to Japan.  China also recognised Korea as an independent state. </p>
                    <img src="images/Prewar_S1_05b.jpg" alt="First Sino-Japanese War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Attacking Pyongyang, Our Soldiers Conquer the Enemy Fortress, by Mizuno Toshikata, 1894. </p>
                    <p style="font-size: small; font-style: italic;">Source: Harvard Art Museums/Arthur M. Sackler Museum, Gift of Mrs. Henry G. Vaughan </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: ["Japan", "Korea"]
            },
            "1890": {
                label_position: "1890",
                label_year: "1900",
                title: "Boxer Rebellion and Eight-Nation Alliance, 1900",
                content: `
                    <p>The Boxer Militia started an uprising against foreigners and Christians in northern China.  Boxer troops were later supported by Empress Cixi and imperial Chinese forces. </p>
                    <p>A military coalition of seven western imperial powers and Japan was formed to combat the Boxer Militia.  The Qing government's defeat in battle resulted in uncontrollable looting and plundering in the capital city by coalition troops and locals.  The Qing government also paid a large indemnity to the coalition. </p>
                    <img src="images/Prewar_S1_11.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Foreign troops in Beijing following the Boxer Rebellion. </p>
                    <p style="font-size: small; font-style: italic;">Source: U.S. National Archives and Records Administration. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1894": {
                label_position: "1894",
                label_year: "1904",
                title: "Annexation of Korea, 1904-1910",
                content: `
                    <p style="font-weight: bold;">1904-1905, Russo-Japanese War</p>
                    <p>Japan defeated Russia and affirmed its presence in Korea and Northeast China under the 1905 Treaty of Portsmouth. </p>
                    <p style="font-weight: bold;">1905, Japan-Korea Treaty</p>
                    <p>Korea became a protectorate of Japan. </p>
                    <p style="font-weight: bold;">1907, Japan-Korea Treaty </p>
                    <p>This treaty authorized Japan to appoint high-ranking government officials in Korea. </p>
                    <p style="font-weight: bold;">1910, Japan annexed Korea </p>
                    <p>Under the Japan-Korea Annexation Treaty, sovereignty of Korea was ceded to Japan.  Japan began its official rule of Korea on August 29, 1910. </p>
                    <img src="images/Prewar_S1_06.jpg" alt="Annexation of Korea Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">The Japan-Korea Annexation Treaty was signed in 1910 by Korean Prime Minister Yi Wan-yong. </p>
                    <p style="font-size: small; font-style: italic;">Source: Yi, T. J. Korea History Told to Tokyo University Students: Question of the Validity of Colonial Rule in Korea. Tokyo: Akashi Shoten, 2005. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: ["Japan", "Korea"]
            },
            "1902": {
                label_position: "1901",
                label_year: "1911",
                title: "Xinhai Revolution, 1911",
                content: `
                    <p>The Xinhai Revolution led by Sun Yat-sen ended the monarchy in China and established the Republic of China.  The new Republic quickly fell into political turmoil and local warlordism. </p>
                    <img src="images/Prewar_S1_07.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">The Wuchang Uprising, turning point of the Xinhai Revolution, on October 10, 1911. </p>
                    <p style="font-size: small; font-style: italic;">Source: "100th Anniversary of the 1911 Revolution - Photographic Exhibition," Consulate General of the People's Republic of China, 2011. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1914": {
                label_position: "1913",
                label_year: "1919",
                title: "May 4th Movement, 1919",
                content: `
                    <p>Students led a nationwide movement against the loss of the Shantung Peninsula to Japan and called for a boycott of Japanese products.  The movement inspired many intellectual and civilian groups to call for changes and reforms in China. </p>
                    <img src="images/Prewar_S1_09.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Chinese protestors marched against the Treaty of Versailles. </p>
                    <p style="font-size: small; font-style: italic;">Source: “The 100th anniversary of the May 4th Movement exhibition,” Hong Kong Central Library, 2019. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1921": {
                label_position: "1920",
                label_year: "1925",
                title: "May 30th Movement, 1925",
                content: `
                    <p>A major anti-Japanese and anti-imperialist movement began among students and workers in Shanghai and spread throughout China. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            },
            "1925": {
                label_position: "1924",
                label_year: "1927",
                title: "First Chinese Civil War, 1927-1937",
                content: `
                    <p>Continued civil unrest and corruption heightened conflict between the Nationalist Party (KMT) and the Communist Party of China.  Japanese invasion led to a tenuous reunification of China against a common enemy. </p>
                `,
                locations: [{ lng: 121.5654, lat: 25.0330 }],
                connection: []
            }
        },
        Japan: {
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Arrival of United States Warship at Tokyo Bay, 1853",
                content: `
                    <img src="images/Arrival_of_United_States_Warship.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">First landing of Americans in Japan, under Commodore Perry at Gore-Hama July 14, 1853, by Wilhelm Heine, c. 1855. </p>
                    <p style="font-size: small; font-style: italic;">Source: Library of Congress, Prints & Photographs Division. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            // More Japanese events can be added here
            "1854": {
                label_position: "1838",
                label_year: "1838",
                title: "Treaty of Kanagawa, 1854",
                content: `
                    <p>This treaty forced Japan to open ports to American ships.  It ended more than 200 years of Japanese isolationism, known as Sakoku, and contributed to the end of the feudal Shogun era. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },

            "1868": {
                label_position: "1838",
                label_year: "1838",
                title: "Meiji Restoration, 1868",
                content: `
                    <p>Based on western models, Japan pursued major political, military, economic, and social reforms with Emperor Meiji as the head of state. The Meiji Constitution of 1889 made Japan Asia's first constitutional monarchy. </p>
                    <img src="images/Prewar_S1_03.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">View of the Issuance of the State Constitution in the State Chamber of the New Imperial Palace, by Adachi Ginkō, 1889. </p>
                    <p style="font-size: small; font-style: italic;">Source: The Metropolitan Museum of Art, New York, Gift of Lincoln Kirstein, 1959. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1874": {
                label_position: "1838",
                label_year: "1838",
                title: "Attack on Taiwan, 1874",
                content: `
                    <p>A group of Ryukyu fishermen was killed by indigenous Taiwanese in 1871. In 1874, Japan used the killing as a pretext to send an expedition to Taiwan, then part of Fukien (Fujian) province of China. The attack ended when Qing China agreed to pay an indemnity. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1876": {
                label_position: "1838",
                label_year: "1838",
                title: "Annexation of Ryukyu Islands, 1875-1879",
                content: `
                    <p>Japan took control of the Kuril and Bonin Islands and annexed the Ryukyu Islands (colonized as the Okinawa Prefecture of Japan). </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1875": {
                label_position: "1838",
                label_year: "1838",
                title: "Ganghwa Island Incident and the Treaty of Ganghwa, 1875-1876",
                content: `
                    <p>Confrontations between Japanese gunboats and Korean forces off of Seoul concluded with the Treaty of Ganghwa.  The agreement opened three Korean ports to Japanese trade and ended the Joseon Dynasty's tributary dependence on Qing China. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1894": {
                label_position: "1838",
                label_year: "1838",
                title: "First Sino-Japanese War, 1894-1895",
                content: `
                    <p>In the late 19th century, Japan sought to shift Korea's longtime dependence from China to Japan.  When Korea requested China's aid in suppressing a peasant rebellion in 1894, Japan intervened by battling with Chinese troops in Korea. </p>
                    <p>The War ended with the Treaty of Shimonoseki, which ceded Taiwan and the adjoining Pescadores (Penghu Islands) as well as the Liaodong Peninsula of Manchuria to Japan.  China also recognised Korea as an independent state. </p>
                    <img src="images/Prewar_S1_05.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Attacking Pyongyang, Our Soldiers Conquer the Enemy Fortress, by Mizuno Toshikata, 1894. </p>
                    <p style="font-size: small; font-style: italic;">Source: Harvard Art Museums/Arthur M. Sackler Museum, Gift of Mrs. Henry G. Vaughan </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1894": {
                label_position: "1838",
                label_year: "1838",
                title: "First Sino-Japanese War, 1894-1895",
                content: `
                    <p>In the late 19th century, Japan sought to shift Korea's longtime dependence from China to Japan.  When Korea requested China's aid in suppressing a peasant rebellion in 1894, Japan intervened by battling with Chinese troops in Korea. </p>
                    <p>The War ended with the Treaty of Shimonoseki, which ceded Taiwan and the adjoining Pescadores (Penghu Islands) as well as the Liaodong Peninsula of Manchuria to Japan.  China also recognised Korea as an independent state. </p>
                    <img src="images/Prewar_S1_05.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Attacking Pyongyang, Our Soldiers Conquer the Enemy Fortress, by Mizuno Toshikata, 1894. </p>
                    <p style="font-size: small; font-style: italic;">Source: Harvard Art Museums/Arthur M. Sackler Museum, Gift of Mrs. Henry G. Vaughan </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1895": {
                label_position: "1838",
                label_year: "1838",
                title: "Lüshun Massacre, 1894",
                content: `
                    <p>The Japanese military seized Lüshunkou in Liaoning Province of China (Port Arthur) and massacred an estimated 20,000 Chinese soldiers and civilians. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1896": {
                label_position: "1838",
                label_year: "1838",
                title: "Assassination of Empress Myeongseong (Queen Min), 1895",
                content: `
                    <p>The assassination, plotted by a group that included Japan's minister to Korea, fueled intense anti-Japanese sentiment in Korea. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1902": {
                label_position: "1838",
                label_year: "1838",
                title: "Anglo-Japanese Alliance, 1902-1923",
                content: `
                    <p>The Alliance aimed to safeguard Britain’s and Japan’s respective interests and to check the influence of Russia in East Asia.  The Alliance showed Japan’s rising status as an imperialist power. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1906": {
                label_position: "1838",
                label_year: "1838",
                title: "South Manchurian Railway Company, 1906",
                content: `
                    <p>Japan established a South Manchurian Railway Company that exercised an increasing degree of control over Northeast China’s economy, politics, and culture. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1896": {
                label_position: "1838",
                label_year: "1838",
                title: "Assassination of Empress Myeongseong (Queen Min), 1895",
                content: `
                    <p>The assassination, plotted by a group that included Japan's minister to Korea, fueled intense anti-Japanese sentiment in Korea. </p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            }
        },
        Korea: {
            "1894": {
                label_position: "1838",
                label_year: "1838",
                title: "First Sino-Japanese War, 1894-1895",
                content: `
                    <p>The First Sino-Japanese War had significant impact on Korea.</p>
                    <img src="images/Korea_Event1.jpg" alt="Sino-Japanese War Image" style="width: 100%; height: auto;">
                    <p>More details about the war...</p>
                    <p>Additional information and context about the war...</p>
                `,
                locations: [{ lng: 126.9778, lat: 37.5665 }],
                connection: ["Japan", "Korea"]
            },
            // More Korean events can be added here
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            },
            
            "1853": {
                label_position: "1838",
                label_year: "1838",
                title: "Commodore Perry's Arrival, 1853-1854",
                content: `
                    <p>Commodore Perry's arrival in Japan led to the opening of Japan to the West.</p>
                    <img src="images/Japan_Event1.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p>More details about Perry's arrival...</p>
                    <p>Additional information and context about Perry's arrival...</p>
                `,
                locations: [{ lng: 139.6917, lat: 35.6895 }],
                connection: ["Japan", "Korea"]
            }
        }
    };

    const timelineLabels = {
        China: [1836, 1846, 1853, 1874, 1884, 1894, 1902, 1914, 1921, 1925],
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
    
        // Clear any previous blinking effects
        clearBlinking();
    
        // Update the active button
        document.querySelectorAll('.timeline-buttons .btn').forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`${region.toLowerCase()}-btn`).classList.add('active');
    
        // Update labels and content after region switch
        updateLabels(region);
        updateContent(timelineSlider.value);
    }
    
    

    function updateLabels(region) {
        const labels = timelineLabels[region];
        const labelsContainer = document.querySelector('.timeline-labels-container');
        labelsContainer.innerHTML = ''; // Clear existing labels

        labels.forEach(year => {
            const event = events[region][year];
            const labelYear = event.label_year;
            const labelPosition = event.label_position;
            const span = document.createElement('span');
            span.textContent = labelYear;
            span.classList.add('label');
            span.dataset.country = region; // Add country classification

            // Calculate the left position
            const leftPosition = ((labelPosition - minYear) / (maxYear - minYear)) * 100;
            span.style.left = `calc(${leftPosition}%)`;
            span.style.position = 'absolute';
            span.style.transform = 'translateX(-50%)';

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

        clearBlinking();  // Clear previous blink effects

        if (event) {
            contentArea.innerHTML = `<h2>${event.title}</h2>${event.content}`;
            updateMap(event.locations);

            // Check for connections and make connected country buttons blink
            if (event.connection && event.connection.length > 0) {
                event.connection.forEach(connCountry => {
                    if (connCountry !== selectedRegion) {
                        blinkCountryButton(connCountry);
                    }
                });
            }
        } else {
            contentArea.innerHTML = `<h2>No Event</h2><p>No significant events recorded for this year.</p>`;
            updateMap([]);
        }
    }


    function clearBlinking() {
        document.querySelectorAll('.timeline-buttons .btn').forEach(button => {
            button.classList.remove('blink');
        });
    }
    
    
    function blinkCountryButton(country) {
        const buttonId = `${country.toLowerCase()}-btn`;
        const button = document.getElementById(buttonId);
        if (button) {
            button.classList.add('blink');
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

