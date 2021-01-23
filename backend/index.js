
console.log("\x1b[36m%s\x1b[0m", "Starting BACKEND...");

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');


const defaultURI = 'mongodb+srv://cappy:cappy@cmap-cluster.jqzmq.mongodb.net/Reviews?retryWrites=true&w=majority';

mongoose
  .connect(
    defaultURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("MongoDB Connected…");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(require(path.resolve(__dirname, "./Routers/router")));



const PORT = process.env.PORT || 5000;

/**
 * Finally, after we have finished adding all the endpoints we want, we tell the app to listen on the desired port.
 */
app.listen(PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", "Startup Successful, BACKEND is ONLINE");
  console.log(`BACKEND listening on port ${PORT}...`);
});