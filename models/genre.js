const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

// Віртуальне поле для URL жанру
GenreSchema.virtual("url").get(function () {
  // Ми не використовуємо стрілочну функцію, оскільки нам знадобиться об'єкт this
  return `/catalog/genre/${this._id}`;
});

// Експортуємо модель
module.exports = mongoose.model("Genre", GenreSchema);