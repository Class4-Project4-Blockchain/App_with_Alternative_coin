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

app.use('/users', users);
app.use('/exchange', exchange);
app.use('/mywallet', mywallet);

app.get("/", (req, res)=>{res.send("Backend Connected")})

const host = process.env.APPHOST || 'localhost';
const port = process.env.APPPORT || 3001;

app.listen(port, () => console.log(`Node.js server is running at http://${host}:${port}/`));