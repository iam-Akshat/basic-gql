const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const connectDb = require('./models/dbinit');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

connectDb(process.env.MONGO_URL);

const shouldUseGraphiql = true;
app.use('/graphql', graphqlHTTP.graphqlHTTP({
  schema,
  graphiql: shouldUseGraphiql,
}));

app.get('/', (req, res) => {
  res.send('HELLO');
});

module.exports = app;
