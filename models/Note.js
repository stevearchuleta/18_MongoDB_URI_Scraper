var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object.
var NoteSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
  },
  // `link` is required and of type String
  link: {
    type: String,
  },
});

var Note = mongoose.model("Note", NoteSchema);

// This creates model from the above schema, using mongoose's model method
var note = mongoose.model("Note", NoteSchema);

module.exports = Note;