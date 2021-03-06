'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Dish = new Schema({
  created_date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String,
    required: 'Missing Required Name'
  },
  dish_type:{
    type: String,
  },
  location_id: {
    type: String,
    required: 'Missing Location ID'
  },
  cuisines:{
    type: String,
  },
  tags:{
    type: String,
  },
  up_votes: {
    type: Number,
  },
  down_votes: {
    type: Number,
  },
  image_url: {
    type: String,
  }
});

module.exports = mongoose.model('Dish', Dish);
