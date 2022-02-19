'use strict';

require('dotenv').config();

const express = require('express');
const https = require('https');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

  var dadJokeOptions = {
    hostname: 'dad-jokes.p.rapidapi.com',
    path: '/random/joke',
    method: 'GET',
    json: true,
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'Accept': 'application/json'
    }
  }

  function sendJoke(data) {
    if (data.success) {
      let setup = data.body[0].setup;
      let punchline = data.body[0].punchline;
      res.send(`${setup} \n\n ${punchline}`);
    } else {
      res.send('Oops, something went wrong');
    }
  }

  const dadjokeRequest = https.request(dadJokeOptions, dadJokeResponse => {
    console.log(`statusCode: ${dadJokeResponse.statusCode}`)

    dadJokeResponse.on('data', d => {
      sendJoke(JSON.parse(d));
    })
  })

  dadjokeRequest.on('error', error => {
    res.send(error);
  })

  dadjokeRequest.end()
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
