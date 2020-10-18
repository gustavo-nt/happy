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
})

let marker;

// Create and add Marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // Remove icon
    marker && map.removeLayer(marker);

    // Add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
})

// Add image
function addPhotoField() {
    const container = document.querySelector('#images');

    const fieldsContainer = document.querySelectorAll('.new-upload');

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return 
    }

    input.value = ' ';

    container.appendChild(newFieldContainer);
}

// Delete image
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = " ";
        return;
    }

    span.parentNode.remove()
}

// Selection yes or no
function toogleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach( value => {
        value.classList.remove('active');
    });

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}

// function validate(event) {
//     event.preventDefault();
// }