const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/angularproject1'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angularproject1/'}),
);

app.listen(process.env.PORT || 8080);