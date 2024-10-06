mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW5sdWNreXlvdSIsImEiOiJjbGsxbmtwdDAwN3BwM2hwYjc1cmM2eGI1In0.x6M_1C9KEot_ce8PtdRrpg';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/kevinluckyyou/cm0css24z01gp01qreuzm4fmz',
        center: [104.1954, 35.8617], // Center of China
        zoom: 3,
        maxZoom: 5,
        minZoom: 2,
        // maxBounds: [[19.169858, 71.597801], [53.556173, 146.615201]] 
    });

    const events = {
        China: {
            "1830": {
                label_position: "1830",
                label_year: "",
                title: "",
                content: `
                    <p>The histories of Japan, China, and Korea have long been intertwined. Hundreds of years of interdependence, rivalry, and imperial aggression culminated in Japan’s annexation of Korea in 1910 and Japan’s 14-year invasion of China (starting in 1931) and later Southeast Asia. </p>
                    <p>Survey these interlocking histories through the map and timeline here. Select "China," "Japan," or "Korea" at the top, then click through the dates on the timeline to see specific events. For events related to more than one country, multiple place-names will be highlighted. </p>
                    <p>As you explore, think about how imperialism (the seizing of land and resources from territories outside one's own) and colonialism (the subjugation of a region to an outside power) played a role in this history. Where do you see these forces at work today, and how can we resist them? </p>
                `,
                locations: [],
                connection: []
            },            
            "1836": {
                label_position: "1837",
                label_year: "1839",
                title: "First Opium War, 1839-1842",
                content: `
                    <p>Conflicts over increasing British opium imports into China sparked the First Opium War.  China was defeated and signed the Treaty of Nanking, an unequal treaty that ceded Hong Kong to Britain.</p>
                    <img src="images/Prewar_S1_01.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Signing of the Treaty of Nanking in 1842. </p>
                    <p style="font-size: small;">Source: Mineta, Fūkō. <i>Kaigai Shinwa, 5</i>. Edo, 1849.  Courtesy of University of British Columbia Library, Rare Books and Special Collections. </p>
                `,
                locations: [{ lng: 113.2644, lat: 23.1291 }, { lng: 114.1694, lat: 22.3193 }],
                connection: []
            },
            "1846": {
                label_position: "1847",
                label_year: "1850",
                title: "Taiping Rebellion, 1850-1864",
                content: `
                    <p>Large-scale grassroots uprising against the Qing government led by self-proclaimed prophet Hong Xiuquan.  The 14-year civil war caused 20 million deaths and further weakened the Qing government. </p>
                `,
                locations: [{ lng: 118.7969, lat: 32.0603 }, {lng: 110.0792, lat: 23.3897}],
                connection: []
            },
            "1853": {
                label_position: "1854",
                label_year: "1856",
                title: "Second Opium War, 1856-1860",
                content: `
                    <p>France joined Britain and defeated Qing China in the Second Opium War.  China was forced to sign unequal treaties with Britain, France, and later Russia and the United States that required China to make large reparation payments and cede more territory. </p>
                `,
                locations: [{ lng: 116.4074, lat: 39.9042 }, { lng: 113.2644, lat: 23.1291 }, {lng: 117.6913, lat: 39.0253}],
                connection: []
            },

            "1863": {
                label_position: "1863",
                label_year: "1874",
                title: "Attack on Taiwan, 1874",
                content: `
                    <p>A group of Ryukyu fishermen was killed by indigenous Taiwanese in 1871. In 1874, Japan used the killing as a pretext to send an expedition to Taiwan, then part of Fukien (Fujian) province of China. The attack ended when Qing China agreed to pay an indemnity. </p>
                `,
                locations: [{ lng: 120.6227, lat: 22.5495 }],
                connection: ["Japan"]
            },

            "1874": {
                label_position: "1874",
                label_year: "1884",
                title: "Sino-French War, 1884-1885",
                content: `
                    <p>French military aggression in Vietnam, a tributary state of China, prompted war with Qing China.  As a result of the war, China ceded the protectorate of Vietnam to France. </p>
                `,
                locations: [{ lng: 106.0763, lat: 21.1861 }, { lng: 121.7392, lat: 25.1283 }, { lng: 119.2965, lat: 26.0745 }, { lng: 106.7250, lat: 21.9780 }],
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
                    <p style="font-size: small;"><i>Attacking Pyongyang, Our Soldiers Conquer the Enemy Fortress</i>, by Mizuno Toshikata, 1894. </p>
                    <p style="font-size: small;">Source: Harvard Art Museums/Arthur M. Sackler Museum, Gift of Mrs. Henry G. Vaughan </p>
                `,
                locations: [{ lng: 123.0000, lat: 37.0000 }, {lng: 125.7625, lat: 39.0392}, {lng: 121.2662, lat: 38.8120}, {lng: 122.1217, lat: 37.5139}],
                connection: ["Japan", "Korea"]
            },

            "1887": {
                label_position: "1887",
                label_year: "1894",
                title: "Lüshun Massacre, 1894",
                content: `
                    <p>The Japanese military seized Lüshunkou in Liaoning Province of China (Port Arthur) and massacred an estimated 20,000 Chinese soldiers and civilians. </p>
                `,
                locations: [{ lng: 121.2662, lat: 38.8120 }],
                connection: ["Japan"]
            },

            "1894": {
                label_position: "1894",
                label_year: "1900",
                title: "Boxer Rebellion and Eight-Nation Alliance, 1900",
                content: `
                    <p>The Boxer Militia started an uprising against foreigners and Christians in northern China.  Boxer troops were later supported by Empress Cixi and imperial Chinese forces. </p>
                    <p>A military coalition of seven western imperial powers and Japan was formed to combat the Boxer Militia.  The Qing government's defeat in battle resulted in uncontrollable looting and plundering in the capital city by coalition troops and locals.  The Qing government also paid a large indemnity to the coalition. </p>
                    <img src="images/Prewar_S1_11.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Foreign troops in Beijing following the Boxer Rebellion. </p>
                    <p style="font-size: small;">Source: U.S. National Archives and Records Administration. </p>
                `,
                locations: [{ lng: 116.4074, lat: 39.9042 }, { lng: 117.3616, lat: 39.3434 }],
                connection: []
            },
            "1900": {
                label_position: "1899",
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
                    <p style="font-size: small;">Source: Yi, T. J. Korea History Told to Tokyo University Students: Question of the Validity of Colonial Rule in Korea. Tokyo: Akashi Shoten, 2005. </p>
                `,
                locations: [{ lng: 126.9780, lat: 37.5665 }, {lng: 139.7595, lat: 35.6828}],
                connection: ["Japan", "Korea"]
            },

            "1903": {
                label_position: "1902",
                label_year: "1906",
                title: "South Manchuria Railway Company, 1906",
                content: `
                    <p>Japan established a South Manchuria Railway Company that exercised an increasing degree of control over Northeast China's economy, politics, and culture. </p>
                `,
                locations: [{ lng: 121.2662, lat: 38.8120 }, {lng: 125.3235, lat: 43.8171}],
                connection: ["Japan"]
            },

            "1907": {
                label_position: "1906",
                label_year: "1911",
                title: "Xinhai Revolution, 1911",
                content: `
                    <p>The Xinhai Revolution led by Sun Yat-sen ended the monarchy in China and established the Republic of China.  The new Republic quickly fell into political turmoil and local warlordism. </p>
                    <img src="images/Prewar_S1_07.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">The Wuchang Uprising, turning point of the Xinhai Revolution, on October 10, 1911. </p>
                    <p style="font-size: small;">Source: "100th Anniversary of the 1911 Revolution - Photographic Exhibition," Consulate General of the People's Republic of China, 2011. </p>
                `,
                locations: [{ lng: 114.3055, lat: 30.5928 }, {lng: 118.7969, lat: 32.0603}, {lng: 116.4074, lat: 39.9042}],
                connection: []
            },
            "1910": {
                label_position: "1909",
                label_year: "1914",
                title: "World War I, 1914-1918",
                content: `
                    <p>Japan joined Britain and its allies against Germany.  Under the Treaty of Versailles signed after the war, Japan gained control of the Shantung (Shandong) Peninsula of China and other Pacific Islands previously held by Germany. </p>
                    <img src="images/Prewar_S1_08.jpg" alt="World War I Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">A Japanese heavy gun position during the siege of Tsingtao, formerly under German control. </p>
                    <p style="font-size: small;">Source: <i>The Illustrated War News</i>, Number 21, December 30, 1914 </p>
                `,
                locations: [{ lng: 120.3826, lat: 36.0671 }],
                connection: ["Japan", "Korea"]
            },

            "1913": {
                label_position: "1912",
                label_year: "1915",
                title: "The Twenty-One Demands, 1915",
                content: `
                    <p>Japan presented China with a set of 21 demands, including access to Chinese raw materials and effective control over parts of Northeast China.  The move contributed to anti-Japan sentiment in China. </p>
                `,
                locations: [{ lng: 116.4074, lat: 39.9042 }],
                connection: ["Japan"]
            },

            "1916": {
                label_position: "1915",
                label_year: "1919",
                title: "May 4th Movement, 1919",
                content: `
                    <p>Students led a nationwide movement against the loss of the Shantung Peninsula to Japan and called for a boycott of Japanese products.  The movement inspired many intellectual and civilian groups to call for changes and reforms in China. </p>
                    <img src="images/Prewar_S1_09.jpg" alt="First Opium War Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">Chinese protestors marched against the Treaty of Versailles. </p>
                    <p style="font-size: small; font-style: italic;">Source: “The 100th anniversary of the May 4th Movement exhibition,” Hong Kong Central Library, 2019. </p>
                `,
                locations: [{ lng: 116.4074, lat: 39.9042 }],
                connection: []
            },
            "1921": {
                label_position: "1920",
                label_year: "1925",
                title: "May 30th Movement, 1925",
                content: `
                    <p>A major anti-Japanese and anti-imperialist movement began among students and workers in Shanghai and spread throughout China. </p>
                `,
                locations: [{lng: 121.4737, lat: 31.2304}],
                connection: []
            },
            "1924": {
                label_position: "1923",
                label_year: "1927",
                title: "First Chinese Civil War, 1927-1937",
                content: `
                    <p>Continued civil unrest and corruption heightened conflict between the Nationalist Party (KMT) and the Communist Party of China.  Japanese invasion led to a tenuous reunification of China against a common enemy. </p>
                `,
                locations: [{ lng: 115.8582, lat: 28.6829 }, { lng: 123.4328, lat: 41.8048}],
                connection: []
            },
            "1927": {
                label_position: "1926",
                label_year: "1928",
                title: "Assassination of Zhang Zuolin, 1928",
                content: `
                    <p>Japanese military officers assassinated Chinese warlord Zhang Zuolin in order to destabilize Manchuria.  The killing set the stage for the invasion of the region in 1931. </p>
                `,
                locations: [{ lng: 123.4328, lat: 41.8048 }],
                connection: ["Japan"]
            }
        },
        Japan: {
            "1830": {
                label_position: "1830",
                label_year: "",
                title: "",
                content: `
                    <p>The histories of Japan, China, and Korea have long been intertwined. Hundreds of years of interdependence, rivalry, and imperial aggression culminated in Japan’s annexation of Korea in 1910 and Japan’s 14-year invasion of China (starting in 1931) and later Southeast Asia. </p>
                    <p>Survey these interlocking histories through the map and timeline here. Select "China," "Japan," or "Korea" at the top, then click through the dates on the timeline to see specific events. For events related to more than one country, multiple place-names will be highlighted. </p>
                    <p>As you explore, think about how imperialism (the seizing of land and resources from territories outside one's own) and colonialism (the subjugation of a region to an outside power) played a role in this history. Where do you see these forces at work today, and how can we resist them? </p>
                `,
                locations: [],
                connection: []
            }, 
            "1850": {
                label_position: "1851",
                label_year: "1853",
                title: "Arrival of United States Warship at Tokyo Bay, 1853",
                content: `
                    <img src="images/Arrival_of_United_States_Warship.jpg" alt="Perry Arrival Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;"><i>First landing of Americans in Japan, under Commodore Perry at Gore-Hama July 14, 1853</i>, by Wilhelm Heine, c. 1855. </p>
                    <p style="font-size: small; font-style: italic;">Source: Library of Congress, Prints & Photographs Division. </p>
                `,
                locations: [{ lng: 139.7595, lat: 35.6828 }],
                connection: []
            },
            // More Japanese events can be added here
            "1853": {
                label_position: "1854",
                label_year: "1854",
                title: "Treaty of Kanagawa, 1854",
                content: `
                    <p>This treaty forced Japan to open ports to American ships.  It ended more than 200 years of Japanese isolationism, known as <i>Sakoku</i>, and contributed to the end of the feudal Shogun era. </p>
                `,
                locations: [{ lng: 139.6425, lat: 35.4478 }],
                connection: []
            },

            "1858": {
                label_position: "1858",
                label_year: "1868",
                title: "Meiji Restoration, 1868",
                content: `
                    <p>Based on western models, Japan pursued major political, military, economic, and social reforms with Emperor Meiji as the head of state. The Meiji Constitution of 1889 made Japan Asia's first constitutional monarchy. </p>
                    <img src="images/Prewar_S1_03.jpg" alt="Meiji Restoration Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;"><i>View of the Issuance of the State Constitution in the State Chamber of the New Imperial Palace, by Adachi Ginkō, 1889.</i></p>
                    <p style="font-size: small; font-style: italic;">Source: The Metropolitan Museum of Art, New York, Gift of Lincoln Kirstein, 1959. </p>
                `,
                locations: [{ lng: 135.7681, lat: 35.0116 }, {lng: 139.7595, lat: 35.6828}],
                connection: []
            },
            
            "1863": {
                label_position: "1863",
                label_year: "1874",
                title: "Attack on Taiwan, 1874",
                content: `
                    <p>A group of Ryukyu fishermen was killed by indigenous Taiwanese in 1871. In 1874, Japan used the killing as a pretext to send an expedition to Taiwan, then part of Fukien (Fujian) province of China. The attack ended when Qing China agreed to pay an indemnity. </p>
                `,
                locations: [{ lng: 120.6227, lat: 22.5495 }],
                connection: ["China"]
            },
            
            "1866": {
                label_position: "1866",
                label_year: "1875",
                title: "Annexation of Ryukyu Islands, 1875-1879",
                content: `
                    <p>Japan took control of the Kuril and Bonin Islands and annexed the Ryukyu Islands (colonized as the Okinawa Prefecture of Japan). </p>
                `,
                locations: [{ lng: 127.7215, lat: 26.2173 }],
                connection: []
            },
            
            "1869": {
                label_position: "1869",
                label_year: "1875",
                title: "Ganghwa Island Incident and the Treaty of Ganghwa, 1875-1876",
                content: `
                    <p>Confrontations between Japanese gunboats and Korean forces off of Seoul concluded with the Treaty of Ganghwa.  The agreement opened three Korean ports to Japanese trade and ended the Joseon Dynasty's tributary dependence on Qing China. </p>
                `,
                locations: [{ lng: 126.4871, lat: 37.7475 }],
                connection: ["Korea"]
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
                locations: [{ lng: 123.0000, lat: 37.0000 }, {lng: 125.7625, lat: 39.0392}, {lng: 121.2662, lat: 38.8120}, {lng: 122.1217, lat: 37.5139}],
                connection: ["China", "Korea"]
            },
            
            "1887": {
                label_position: "1887",
                label_year: "1894",
                title: "Lüshun Massacre, 1894",
                content: `
                    <p>The Japanese military seized Lüshunkou in Liaoning Province of China (Port Arthur) and massacred an estimated 20,000 Chinese soldiers and civilians. </p>
                `,
                locations: [{ lng: 121.2662, lat: 38.8120 }],
                connection: ["China"]
            },
            
            "1890": {
                label_position: "1890",
                label_year: "1895",
                title: "Assassination of Empress Myeongseong (Queen Min), 1895",
                content: `
                    <p>The assassination, plotted by a group that included Japan's minister to Korea, fueled intense anti-Japanese sentiment in Korea. </p>
                `,
                locations: [{ lng: 126.9780, lat: 37.5665 }],
                connection: ["Korea"]
            },
            
            "1897": {
                label_position: "1896",
                label_year: "1902",
                title: "Anglo-Japanese Alliance, 1902-1923",
                content: `
                    <p>The Alliance aimed to safeguard Britain's and Japan's respective interests and to check the influence of Russia in East Asia.  The Alliance showed Japan’s rising status as an imperialist power. </p>
                `,
                locations: [{ lng: 139.7595, lat: 35.6828 }, {lng: -0.1276, lat: 51.5074}],
                connection: []
            },
            
            "1903": {
                label_position: "1902",
                label_year: "1906",
                title: "South Manchurian Railway Company, 1906",
                content: `
                    <p>Japan established a South Manchurian Railway Company that exercised an increasing degree of control over Northeast China's economy, politics, and culture. </p>
                `,
                locations: [{ lng: 121.2662, lat: 38.8120 }, {lng: 125.3235, lat: 43.8171}],
                connection: ["China"]
            },
            
            "1900": {
                label_position: "1899",
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
                    <p style="font-size: small;">Source: Yi, T. J. <i>Korea History Told to Tokyo University Students: Question of the Validity of Colonial Rule in Korea</i>. Tokyo: Akashi Shoten, 2005. </p>
                `,
                locations: [{ lng: 126.9780, lat: 37.5665 }, {lng: 139.7595, lat: 35.6828}],
                connection: ["China", "Korea"]
            },

            "1910": {
                label_position: "1909",
                label_year: "1914",
                title: "World War I, 1914-1918",
                content: `
                    <p>Japan joined Britain and its allies against Germany.  Under the Treaty of Versailles signed after the war, Japan gained control of the Shantung (Shandong) Peninsula of China and other Pacific Islands previously held by Germany. </p>
                    <img src="images/Prewar_S1_08.jpg" alt="World War I Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">A Japanese heavy gun position during the siege of Tsingtao, formerly under German control. </p>
                    <p style="font-size: small; font-style: italic;">Source: The Illustrated War News, Number 21, December 30, 1914 </p>
                `,
                locations: [{ lng: 120.3826, lat: 36.0671 }],
                connection: ["China", "Korea"]
            },

            "1913": {
                label_position: "1912",
                label_year: "1915",
                title: "The Twenty-One Demands, 1915",
                content: `
                    <p>Japan presented China with a set of 21 demands, including access to Chinese raw materials and effective control over parts of Northeast China.  The move contributed to anti-Japan sentiment in China. </p>
                `,
                locations: [{ lng: 116.4074, lat: 39.9042 }],
                connection: ["China"]
            },

            "1927": {
                label_position: "1926",
                label_year: "1928",
                title: "Assassination of Zhang Zuolin, 1928",
                content: `
                    <p>Japanese military officers assassinated Chinese warlord Zhang Zuolin in order to destabilize Manchuria.  The killing set the stage for the invasion of the region in 1931. </p>
                `,
                locations: [{ lng: 123.4328, lat: 41.8048 }],
                connection: ["China"]
            },

            "1921": {
                label_position: "1920",
                label_year: "1923",
                title: "Kanto Massacre, 1923",
                content: `
                    <p>After a devastating earthquake in Japan's central Kanto region, rumours of 'Korean revolts' lead to indiscriminate killings of Koreans.  It is estimated that over 6,000 Koreans and other ethnic minorities in Japan were massacred within one week. </p>
                `,
                locations: [{ lng: 139.7595, lat: 35.6828 }, {lng: 139.6380, lat: 35.4437}],
                connection: []
            },

            "1930": {
                label_position: "1928",
                label_year: "1930",
                title: "Showa Depression, 1930",
                content: `
                    <p>The Great Depression caused economic depression in Japan. To quell domestic social unrest and distrust in the government, militarists took the opportunity to push for military aggression abroad. </p>
                `,
                locations: [{ lng: 139.7595, lat: 35.6828 }, {lng: 139.6425, lat: 35.4478}],
                connection: []
            }
        },
        Korea: {
            "1830": {
                label_position: "1830",
                label_year: "",
                title: "",
                content: `
                    <p>The histories of Japan, China, and Korea have long been intertwined. Hundreds of years of interdependence, rivalry, and imperial aggression culminated in Japan’s annexation of Korea in 1910 and Japan’s 14-year invasion of China (starting in 1931) and later Southeast Asia. </p>
                    <p>Survey these interlocking histories through the map and timeline here. Select "China," "Japan," or "Korea" at the top, then click through the dates on the timeline to see specific events. For events related to more than one country, multiple place-names will be highlighted. </p>
                    <p>As you explore, think about how imperialism (the seizing of land and resources from territories outside one's own) and colonialism (the subjugation of a region to an outside power) played a role in this history. Where do you see these forces at work today, and how can we resist them? </p>
                `,
                locations: [],
                connection: []
            }, 
            "1860": {
                label_position: "1860",
                label_year: "1866",
                title: "The French Campaign Against Korea, 1866",
                content: `
                    <p>In retaliation for the killing of French missionaries, France attempted to occupy Ganghwa Island outside of Seoul. The six-week campaign ended in French withdrawal and further entrenched Joseon policies of isolationism. </p>
                `,
                locations: [{ lng: 126.4871, lat: 37.7475 }],
                connection: []
            },
            // More Korean events can be added here
            "1865": {
                label_position: "1865",
                label_year: "1871",
                title: "United States Expedition to Korea, 1871",
                content: `
                    <p>An American naval force attacked Ganghwa Island in an unsuccessful attempt to open up Korean ports to American merchants. Korea was opened to foreign trade with Japan five years later. </p>
                `,
                locations: [{ lng: 126.4871, lat: 37.7475 }],
                connection: []
            },
            
            "1869": {
                label_position: "1869",
                label_year: "1875",
                title: "Ganghwa Island Incident and the Treaty of Ganghwa, 1875-1876",
                content: `
                    <p>Confrontations between Japanese gunboats and Korean forces off of Seoul concluded with the Treaty of Ganghwa. The agreement opened three Korean ports to Japanese trade and ended the Joseon Dynasty's tributary dependence on Qing China. </p>
                `,
                locations: [{ lng: 126.4871, lat: 37.7475 }],
                connection: ["Japan"]
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
                locations: [{ lng: 123.0000, lat: 37.0000 }, {lng: 125.7625, lat: 39.0392}, {lng: 121.2662, lat: 38.8120}, {lng: 122.1217, lat: 37.5139}],
                connection: ["China", "Japan"]
            },

            "1890": {
                label_position: "1890",
                label_year: "1895",
                title: "Assassination of Empress Myeongseong (Queen Min), 1895",
                content: `
                    <p>The assassination, plotted by a group that included Japan's minister to Korea, fueled intense anti-Japanese sentiment in Korea. </p>
                `,
                locations: [{ lng: 126.9780, lat: 37.5665 }],
                connection: ["Japan"]
            },

            "1900": {
                label_position: "1899",
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
                locations: [{ lng: 126.9780, lat: 37.5665 }, {lng: 139.7595, lat: 35.6828}],
                connection: ["Japan", "China"]
            },

            "1910": {
                label_position: "1909",
                label_year: "1914",
                title: "World War I, 1914-1918",
                content: `
                    <p>Japan joined Britain and its allies against Germany.  Under the Treaty of Versailles signed after the war, Japan gained control of the Shantung (Shandong) Peninsula of China and other Pacific Islands previously held by Germany. </p>
                    <img src="images/Prewar_S1_08.jpg" alt="World War I Image" style="width: 100%; height: auto;">
                    <p style="font-size: small;">A Japanese heavy gun position during the siege of Tsingtao, formerly under German control. </p>
                    <p style="font-size: small; font-style: italic;">Source: The Illustrated War News, Number 21, December 30, 1914 </p>
                `,
                locations: [{ lng: 120.3826, lat: 36.0671 }],
                connection: ["China", "Japan"]
            },

            "1916": {
                label_position: "1915",
                label_year: "1919",
                title: "March 1st Movement, 1919",
                content: `
                    <p>Korean activists, students, and cultural leaders headed peaceful demonstrations demanding independence from Japan. Japan violently repressed the movement and intensified its suppression of dissent. </p>
                `,
                locations: [{lng: 126.9780, lat: 37.5665}],
                connection: []
            },

            "1924": {
                label_position: "1923",
                label_year: "1926",
                title: "June 10th Movement, 1926",
                content: `
                    <p>Students led an anti-Japanese movement for national independence. The movement sparked widespread student support for independence and culminated in the 1929 Kwangju Student Movement. </p>
                `,
                locations: [{ lng: 127.4896, lat: 36.6439 }, {lng: 129.3114, lat: 35.5384}, {lng: 126.7165, lat: 35.9673}, {lng: 125.7625, lat: 39.0392}, {lng: 127.1180, lat: 36.4583}, {lng: 127.1480, lat: 35.8242}, {lng: 126.9780, lat: 37.5665}],
                connection: []
            },

            "1929": {
                label_position: "1928",
                label_year: "1929",
                title: "Kwangju Student Movement, 1929-1930",
                content: `
                    <p>Nationwide independence movement led by students that lasted for five months. Approximately 54,000 students from 194 schools throughout Korea took part in protests against Japanese colonialism. </p>
                `,
                locations: [{ lng: 126.8514, lat: 35.1595 }],
                connection: []
            }
        }
    };

    const timelineLabels = {
        China: [1830, 1836, 1846, 1853, 1863, 1874, 1884, 1887, 1894, 1900, 1903, 1907, 1910, 1913, 1916, 1921, 1924, 1927],
        Japan: [1850, 1853, 1858, 1863, 1866, 1869, 1884, 1887, 1890, 1897, 1903, 1900, 1910, 1913, 1927, 1921, 1930],
        Korea: [1860, 1865, 1869, 1884, 1890, 1900, 1910, 1916, 1924, 1929]
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

    function checkOrientation() {
        const rotateNotice = document.getElementById('rotateNotice');
        if (window.innerWidth < window.innerHeight) {
            rotateNotice.style.display = 'flex';
        } else {
            rotateNotice.style.display = 'none';
        }
    }

    // Update marker positions when the window is resized
    window.addEventListener('resize', () => {
        checkOrientation();
    });

    // Initial update
    window.addEventListener('load', checkOrientation);

    // Function to filter events based on search input
    function filterLocations(input) {
        const inputWords = input.toLowerCase().split(' '); // Split the input into words
        const matchingEvents = [];

        // Search through all regions and their events
        Object.keys(events).forEach(region => {
            Object.keys(events[region]).forEach(year => {
                const event = events[region][year];
                const eventText = `${event.title} ${event.content}`.toLowerCase();
                if (inputWords.every(inputWord => eventText.includes(inputWord))) {
                    matchingEvents.push({
                        region,
                        year, // Use the year as the key
                        event
                    });
                }
            });
        });

        return matchingEvents;
    }

    // Function to update the search suggestions based on the input
    function updateSearchSuggestions() {
        const input = document.getElementById('search-input').value;
        const suggestions = filterLocations(input);

        // Clear old suggestions
        let oldSuggestions = document.getElementById('search-suggestions');
        if (!oldSuggestions) {
            oldSuggestions = document.createElement('div');
            oldSuggestions.id = 'search-suggestions';
            document.querySelector('.search-box').appendChild(oldSuggestions);
        } else {
            // Clear suggestions
            oldSuggestions.innerHTML = '';
        }

        // Generate new suggestions
        if (input || document.getElementById('search-input') === document.activeElement) {
            suggestions.forEach(({ region, year, event }) => {
                const suggestionItem = document.createElement('div');
                suggestionItem.style.padding = '10px';
                suggestionItem.style.cursor = 'pointer';
                suggestionItem.textContent = `${event.title} (${region})`;
                suggestionItem.onclick = function() {
                    document.getElementById('search-input').value = event.title;
                    oldSuggestions.innerHTML = ''; // Clear suggestions
                    switchRegion(region); // Switch to the relevant region
                    updateContent(year); // Display the event using the year as the key
                    document.getElementById('timeline').value = year;
                    if (event.locations && event.locations.length > 0) {
                        map.panTo([event.locations[0].lat, event.locations[0].lng]); // Pan the map to the event location
                    }
                };
                oldSuggestions.appendChild(suggestionItem);
            });
        } else {
            oldSuggestions.innerHTML = ''; // Clear suggestions if input is empty and input field is not focused
        }
    }

    // Event listeners for the search input
    document.getElementById('search-input').addEventListener('input', updateSearchSuggestions);
    document.getElementById('search-input').addEventListener('focus', updateSearchSuggestions);
    document.getElementById('search-input').addEventListener('blur', function() {
        setTimeout(function() { // Delay to allow for selection
            const suggestions = document.getElementById('search-suggestions');
            if (suggestions) {
                suggestions.innerHTML = ''; // Clear suggestions
            }
        }, 200); // Delay time in milliseconds, adjust as needed
    });

    // Function to update the content based on the selected year
    function updateContent(year) {
        const regionEvents = events[selectedRegion];
        const event = regionEvents[year]; // Access the event using the year key

        clearButtonColors();  // Clear previous color effects

        if (event) {
            document.querySelector('.content-area').innerHTML = `<h2>${event.title}</h2>${event.content}`;
            updateMap(event.locations);

            // Check for connections and color connected country buttons blue
            if (event.connection && event.connection.length > 0) {
                event.connection.forEach(connCountry => {
                    if (connCountry !== selectedRegion) {
                        colorCountryButtonBlue(connCountry);
                    }
                });
            }
        } else {
            document.querySelector('.content-area').innerHTML = `<h2>No Event</h2><p>No significant events recorded for this year.</p>`;
            updateMap([]);
        }
    }


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
            button.style.backgroundColor = '';
        });
    }
    
    
    function blinkCountryButton(country) {
        const buttonId = `${country.toLowerCase()}-btn`;
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.backgroundColor = '#007bff'; // Set the button color to blue
            button.style.color = 'white';
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

