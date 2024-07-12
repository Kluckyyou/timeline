document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('map');
    const articleContent = document.querySelector('.article-content').innerText;

    function addMarkers(content) {
        const locations = content.match(/Location: (.+?)(,|\.)/g);
        if (locations) {
            locations.forEach(location => {
                const loc = location.replace(/Location: |,|\./g, '');
                const marker = document.createElement('div');
                marker.className = 'marker';
                marker.style.top = `${Math.random() * 90}%`;
                marker.style.left = `${Math.random() * 90}%`;
                mapElement.appendChild(marker);
            });
        }
    }

    addMarkers(articleContent);
});
