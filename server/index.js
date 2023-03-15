const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes.js')
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// ===== MONGO ITERATION (NO MVC) =====

// const express = require('express');
// const app = express();
// const PORT = 3000 || process.env.PORT;
// const path = require('path');
// const morgan = require('morgan');
// const cors = require('cors');
// const { retrieveAll, addOrFix } = require('./db');

// app.use(express.static('client/dist'));
// app.use(express.json());
// app.use(morgan('dev'));
// app.use(cors());

// // routes 'n things
// app.get('/movies', (req, res) => {
//   retrieveAll()
//     .then((movies) => {
//       console.log('GET success in server/index.js');
//       res.status(200).send(movies);
//     })
//     .catch(err => {
//       console.log('GET err in server/index.js: ', err);
//       res.sendStatus(500);
//     });
// })

// app.post('/movies', (req, res) => {
//   addOrFix(req.body)
//     .then(movies => {
//       console.log('POST success in server/index.js');
//       return retrieveAll()
//         .then((movies) => {
//           console.log('retrieval success in POST');
//           res.status(201).send(movies);
//         })
//     })
//     .catch(err => {
//       console.log('POST err in server/index.js: ', err);
//       res.sendStatus(500);
//     });
// })


// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}`);
// })
