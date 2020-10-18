const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

// Get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Create Map
const map = L.map('mapid', options).setView([lat, lng], 15);

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

// Create and add Marker
L.
marker([lat, lng], { icon })
.addTo(map)

// Image Gallery

function selectImage(event) {
    const button = event.currentTarget;

    //Remover todas as classes .active
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach( value => {
        value.classList.remove('active');
    });
    
    //Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    //Atualizar o container de imagem
    imageContainer.src = image.src;

    //Adicionar a classe .active para o botão clicado
    button.classList.add('active');
}