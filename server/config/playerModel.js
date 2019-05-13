const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  createdDate: {
    type: Date,
    default: Date.now
  },
  token: {
    type: String,
    default: ""
  },
  score: {
    type: Number,
    default: 0
  },
  playing: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ""
  }
});

// userSchema.methods.passwordHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// userSchema.methods.passwordCheck = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('Player', playerSchema);