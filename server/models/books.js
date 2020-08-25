const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String,
});

module.exports = model('Book', BookSchema);
