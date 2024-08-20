const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  contractType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Job', JobSchema);
