var map = L.map('map').setView([-3.4572757, -79.9554167], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ1bm9mcmFuY2lvbmkiLCJhIjoiY2tlZzJzN2k3MGhhbzJycnNkaWhqb3U2eCJ9.IBbLv-Uvs6YI3-reYkb2-Q'
}).addTo(map);


/* Method for get from url */
fetch('/api/bicicletas')
    .then(res => res.json())
    .then(data => {
        this.map.setView(data.data[0]?.ubicacion, 20);

        data.data.forEach(function(bicicleta) {
    
            L.marker(bicicleta.ubicacion).addTo(map);
            
        });
    })
