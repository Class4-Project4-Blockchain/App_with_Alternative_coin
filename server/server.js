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

app.get('/', (req,res) => {
    res.send({ test : "this is test!!"});
})

app.use('/users', users);
app.use('/exchange', exchange);
app.use('/mywallet', mywallet);

app.get("/", (req, res)=>{res.send("Backend Connected")})

const host = 'localhost';
const port = 3003;

app.listen(port, () => console.log(`Node.js server is running at http://${host}:${port}/`));

// git test 조민경 goorm
// git test 태수
