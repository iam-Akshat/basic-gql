/* eslint-disable no-console */
const mongoose = require('mongoose');

const connectDb = (uri) => {
  // console.time('ttc');
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.once('open', () => {
    // console.timeLog('ttc');
    console.log('DB CONNECTED');
  });
};
module.exports = connectDb;
