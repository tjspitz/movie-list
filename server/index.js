const express = require('express');

// remember to `npm install` the middleware...
const morgan = require('morgan');
const cors = require('cors');

// import the router
const router = require('./routes.js')

const app = express();
const PORT = 3000 || process.env.PORT;

// parse incoming requests
// use morgan for monitoring(?)
// use cors headers
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// use the router anywhere in the server directory
app.use('/api', router);

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// ===== MONGO ITERATION (NO MVC) =====

