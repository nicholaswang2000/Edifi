const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educatorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Educator = mongoose.model('Educator', educatorSchema);

module.exports = Educator;