const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/skjangular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/skjangular/'}),
);

app.listen(process.env.PORT || 8080);