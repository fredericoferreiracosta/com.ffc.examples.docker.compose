var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/customers', (request, response) => {
    response.json([
        {
            id: 1,
            name: "Customer 1"
        },
        {
            id: 2,
            name: "Customer 2"
        },
        {
            id: 3,
            name: "Customer 3"
        }
    ]);
});

app.listen(3001);
