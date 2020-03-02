import express from 'express';
import https from 'https';

const router = express.Router();

// API:
// GET movies by section    .../api/movies?section={section}

const API = 'https://gizmo.rakuten.tv';
const COMMON_PARAMS = 'classification_id=5&device_identifier=web&locale=es&market_code=es';

router.get('/', (req, res, next) => {
    const url = `${API}/v3/lists/${req.query.section}?${COMMON_PARAMS}`; // section example 'estrenos-imprescindibles-en-taquilla'
    https.get(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            const json = JSON.parse(data);
            if (response.statusCode != null && response.statusCode !== 200) {
                res.status(response.statusCode).json(json);
            } else {
                res.json(json);
            }
        });
    }).on('error', (err) => next(err));
});

export default router;
