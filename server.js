const express = require('express');
const app = express();
const path = require('path');



// Mysql Connection
const mysql = require('./data_queries');

async function main() {
    await app.listen(8080);
    console.log('Listen, port 8080');

    app.set('view engine', 'ejs');
    app.set('views', './public')


    console.log('Initial Route Loaded');

    await app.get('/check', (req, resp) => {
        resp.sendStatus(200);
        resp.send('To check all the info');
    })

    console.log('Second Route was added');

    //Serving static files
    await app.use(express.static('./public'));

    // await mysql()

    await app.get('/', (req, res) => {
        // res.sendFile(path.join(__dirname, '/public/index.html'));
        res.render('index', {
            // names: ['Elmer Cabezon', 'Chere', 'Hachy']
            data: mysql()
        });
    });
}


main();


// module.exports = elements;