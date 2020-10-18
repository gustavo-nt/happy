// Import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// Init express
const server = express();

server
    // Utilizar body do req
    .use(express.urlencoded({extended: true}))
    // Utilizando os arquivos estáticos
    .use(express.static('public'))

    // Config template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Create rote
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrpanhage)
    .get('/edit-orphanage', pages.orphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    .post('/update-orphanage', pages.updateOrphanage)

// Turn on server
server.listen(5500);