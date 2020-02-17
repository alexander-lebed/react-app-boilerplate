import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import moviesApi from './api/service/movies';

const app           = express();
const router        = express.Router();
const isDevelopment = process.env.NODE_ENV !== 'production';
const port          = isDevelopment ? process.env.API_PORT || 3000 : process.env.PORT || 3000;

console.log(`--- mode: ${process.env.NODE_ENV}`);

if (!isDevelopment) {
    app.use(express.static(__dirname + '/'));
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// set headers to allow Cross Origin Resource Sharing
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    // remove caching to get the most recent data
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

router.use('/movies', moviesApi);
app.use('/api/v1', router);

// serve index.html to the client
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

// start the server and listen for requests
const server = app.listen(port, () => {
    console.log(`--- API running on port ${port}`);
});

const stopHandler = (signal) => {
    console.error(`\nGracefully shutting down from ${signal}`);
    server.close();
    process.exit(1);
};

process.on('SIGTERM', stopHandler, 'SIGTERM');
process.on('SIGINT', stopHandler, 'SIGINT');
process.on('SIGHUP', stopHandler, 'SIGINT');