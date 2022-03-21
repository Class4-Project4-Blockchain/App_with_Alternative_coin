const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users');
const exchange = require('./routes/exchange');
const mywallet = require('./routes/mywallet');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/users', users);
app.use('/exchange', exchange);
// app.use('/mywallet', mywallet);

const host = '127.0.0.1';
const port = 3001;

app.listen(port, () => console.log(`Node.js server is running at http://${host}:${port}/`));