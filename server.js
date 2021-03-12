const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.static('./dist/angularproject1'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angularproject1/'}),
);

app.listen(port, () => {
    console.log('listening on port: ', port);
});