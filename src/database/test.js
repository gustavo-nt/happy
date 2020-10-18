const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    // Insert date
    // await saveOrphanage(db, {
    //     lat: "-27.222633", 
    //     lng: "-49.6555874",
    //     name: "Lar dos Meninos",
    //     about: 'Presta asistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
    //     whatsapp: '981778495',
    //     images: [
    //         "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

    //         "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciênica para dar.",
    //     opening_hours: "Horário de visitas Das 18h até 8h",
    //     open_on_weekends: "0",
    // })


    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-27.222633",
    //         "-49.6455874",
    //         "Lar das Meninas",
    //         "Presta asistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //         "981952066",
    //         "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha como se sentir a vontade e traga muito amor e paciênica para dar.",
    //         "Horário de visitas Das 18h até 8h",
    //         "1"
    //     );
    // `)

    // Consult date
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consult one orphanage by id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    // console.log(orphanage);

    // Delet date
    // const deletElement = await db.run('DELETE FROM orphanages WHERE id="12"');
    // console.log(deletElement);
})