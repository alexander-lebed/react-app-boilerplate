const express = require("express");
const https = require('https');
const router = express.Router();

// API:
// GET movies by section    .../api/movies?section={section}

const API = 'https://gizmo.rakuten.tv';
const COMMON_PARAMS = 'classification_id=5&device_identifier=web&locale=es&market_code=es';

router.get('/', (req, res, next) => {
    let url = `${API}/v3/lists/${req.query.section}?${COMMON_PARAMS}`; // section example 'estrenos-imprescindibles-en-taquilla'
    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const json = JSON.parse(data);
            if (response.statusCode !== 200) {
                res.status(response.statusCode).json(json);
            } else {
                res.json(json);
            }
        });
    }).on('error', (err) => next(err));
});


module.exports = router;
