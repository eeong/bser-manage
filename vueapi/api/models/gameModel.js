const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    nickname: {
      type: String,
      required: true
    },
    userNum: {
      type: Number,
      required: true
    }
  },
  { collection: 'game' }
);

module.exports = mongoose.model('game', gameSchema);