// const orphanages = require('./database/fakedata.js')
const Database = require('./database/db.js')
const saveOrphanage = require('./database/saveOrphanage.js')
const updateOrphanage = require('./database/editOrphanage.js')


module.exports = {
    index(request, response) {
        return response.render('index')
    },

    async orphanage(request, response) {
        const {id , type} = request.query;

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImages = orphanage.images[0]

            orphanage.open_on_weekends = orphanage.open_on_weekends == 0 ? false : true;

            if(type == 'show') {
                return response.render('orphanage', {orphanage: results[0]})
            }
            else {
                return response.render('edit-orphanage', {orphanage: results[0]})
            }
        } catch {
            console.log(error);
            return response.send('Erro no banco de dados!')
        }
        
    },

    async orphanages(request, response) {
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', {orphanages}) 
        } catch {
            console.log(error);
            return response.send('Erro no banco de dados!')
        }
    },

    createOrpanhage(request, response) {
        return response.render('create-orphanage')
    },

    async updateOrphanage(request, response) {
        const fields = request.body;

        console.log(fields)

        if(Object.values(fields).includes(" ")){
            return response.send('Todos os campos devem ser preenchidos!');
        }

        try {
            const db = await Database
            await updateOrphanage(db, {
                id: fields.id,
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            return response.redirect('/orphanages')
        } catch (error) {
            console.log(error);
            return response.send('Erro no banco de dados!')
        }
    },

    async saveOrphanage(request, response) {
        const fields = request.body;

        if(Object.values(fields).includes(" ")){
            return response.send('Todos os campos devem ser preenchidos!');
        }

        try {
            const db = await Database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends,
            })

            return response.redirect('/orphanages')
        } catch (error) {
            console.log(error);
            return response.send('Erro no banco de dados!')
        }
    }
}