// Create Map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// Create and add Tilelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: '/img/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
    // Create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/edit-orphanage?id=${id}&type=update"><img src="/img/pencil-tool.svg"></a> <a href="/orphanage?id=${id}&type=show"><img src="/img/arrow-white.svg"></a>`)

    // Create and add Marker
    L.
    marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(value => {
    const orphanage = {
        id: value.dataset.id,
        name: value.dataset.name,
        lat: value.dataset.lat,
        lng: value.dataset.lng,
    }

    addMarker(orphanage)
})

