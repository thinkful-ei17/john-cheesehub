const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {PORT, CLIENT_ORIGIN} = require('./config');
const {dbConnect} = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
    morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
        skip: (req, res) => process.env.NODE_ENV === 'test'
    })
);

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

function runServer(port = PORT) {
    const server = app
        .listen(port, () => {
            console.info(`App listening on port ${server.address().port}`);
        })
        .on('error', err => {
            console.error('Express failed to start');
            console.error(err);
        });
}

if (require.main === module) {
    dbConnect();
    runServer();
}

app.get('/api/cheeses', (req,res) => {
    const cheeses =`{"cheeses":[
        "Bath Blue",
        "Barkham Blue",
        "Buxton Blue",
        "Cheshire Blue",
        "Devon Blue",
        "Dorset Blue Vinney",
        "Dovedale",
        "Exmoor Blue",
        "Harbourne Blue",
        "Lanark Blue",
        "Lymeswold",
        "Oxford Blue",
        "Shropshire Blue",
        "Stichelton",
        "Stilton",
        "Blue Wensleydale",
        "Yorkshire Blue"
    ]}`;
    let json = JSON.parse(cheeses);
    res.send(json);

})


module.exports = {app};
