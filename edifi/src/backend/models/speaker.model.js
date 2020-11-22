const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speakerSchema = new Schema({
  username: { type: String, required: true },
  company: { type: String, required: true },
  jobTitle: { type: String, required: true },
}, {
  timestamps: true,
});

const Speaker = mongoose.model('Speaker', speakerSchema);

module.exports = Speaker;