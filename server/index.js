const express = require('express');

// remember to `npm install` the middleware...
const morgan = require('morgan');
const cors = require('cors');

// import the router
const router = require('./routes.js')

const app = express();
const PORT = 3000 || process.env.PORT;

/* temp practice thingy ===========================
const test1 =
  [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];


app.get('/api/movies', (req, res) => res.end(JSON.stringify(test1)));
app.post('/', (req, res) => res.send('you sent a POST'));
app.delete('/', (req, res) => res.send('you sent a DELETE'));
app.put('/', (req, res) => res.send('you sent a PUT'));
======================================================= */

// parse incoming requests
// use morgan for monitoring(?)
// use cors headers
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// use the router anywhere in the server directory
app.use('/api', router);

// do I need to __dirname this...?1
app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


/*
modify some data

change another data

get: (req, res) => {

  do some more data manipulation

  aPlace.getAll ()
}

*/