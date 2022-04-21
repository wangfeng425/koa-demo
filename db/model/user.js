const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  _id: Object
})

module.exports = mongoose.model('user', userShema, 'user')