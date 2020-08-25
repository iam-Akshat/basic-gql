const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = model('Author', AuthorSchema);
