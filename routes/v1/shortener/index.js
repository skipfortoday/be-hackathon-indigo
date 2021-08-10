const express = require('express');
const router = express.Router();
const axios = require('axios');
const apiShortener = require('../../../config')

router.get('/', async function(req, res, next) {
    try {
          let data = {
              url: "rizqipratamar.vercel.app",
              customAlias: "testRikaRahma"
          }
          const response = await axios.post(apiShortener.url, data, apiShortener.config );
          res.json(response.data);
        } catch (error) {
          console.error(error);
          res.json(error);
        }
});

module.exports = router;