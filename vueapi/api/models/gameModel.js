const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    character:{
      type: String,
      required: true
    },
    characterSrc:{
      type: String,
      required: true
    },
    weapon:{
      type: String,
      required:false
    },
    nickname: {
      type: String,
      required: false
    },
    userNum: {
      type: Number,
      required: false
    },
    mode: {
      type:String,
      default:'솔로',
      required: true
    },
    title: {
      type:String,
      required:false
    },
    date: {
      type: Date,
      default:Date.now
    },
    item:[
      
    ]
  },
  { collection: 'game' }
);

module.exports = mongoose.model('game', gameSchema);