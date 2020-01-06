'use strict';

const express = require('express');
const app = module.exports = express();
const https = require('https');
const cluster = require('cluster');
const path = require('path');
const port = process.env.PORT || 8100;
const bodyParser = require('body-parser')

const bookController = require('./src/server/controllers/books/books.js');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

app.post('/api/addBook', bookController.addBook);

app.get('/api/getBook', bookController.getBook);

app.put('/api/updateBook', bookController.updateBook);


//create child process to avoid crashing node
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (var i = 0; i < 2; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}
else {
  app.listen(port, () => console.log(`Listening on port ${port}`));

}
