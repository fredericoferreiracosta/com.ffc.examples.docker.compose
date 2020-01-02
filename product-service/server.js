var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/products', (request, response) => {
    response.json([
        {
            id: 1,
            name: "Product 1"
        },
        {
            id: 2,
            name: "Product 2"
        },
        {
            id: 3,
            name: "Product 3"
        }
    ]);
});

app.listen(3002);
