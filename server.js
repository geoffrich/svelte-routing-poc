const path = require('path');
const express = require('express');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.get('*', async function (req, res) {
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width,initial-scale=1'>

            <title>Svelte app</title>

            <link rel='icon' type='image/png' href='/favicon.png'>
            <link rel='stylesheet' href='/global.css'>
            <link rel='stylesheet' href='/build/bundle.css'>
            <script>window.componentProps={ url: ${req.url} }</script>
            <script defer src='/build/bundle.js'></script>
        </head>

        <body>
        </body>
        </html>
    `);

    res.end();
});

const port = 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
