const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users');
const exchange = require('./routes/exchange');
const mywallet = require('./routes/mywallet');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true, 
  };
  
app.use(cors(corsOptions));
app.get('/', (req,res) => {
    res.send({ test : "this is test!!"});
})
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use('/users', cors(), users);
app.use('/exchange',cors(),  exchange);
app.use('/mywallet',cors(),  mywallet);

app.get("/", (req, res)=>{res.send("Backend Connected")})

const host = process.env.APPHOST || 'localhost';
const port = process.env.APPPORT || 3001;

app.listen(port, () => console.log(`Node.js server is running at http://${host}:${port}/`));

// git test 조민경 goorm
// git test 태수
