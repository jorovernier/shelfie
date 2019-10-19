require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const app = express();

const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
}).catch((err) => console.log(err))

app.use(express.json());

app.get('/api/inventory', controller.getInv);
app.post('/api/product', controller.createProd);
app.delete('/api/product/:id', controller.deleteProd);

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));
