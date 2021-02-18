const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    title:{
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    userNum: {
      type: Number,
      required: true
    },
    item:[
      
    ]
  },
  { collection: 'game' }
);

module.exports = mongoose.model('game', gameSchema);