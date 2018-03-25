
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
//var userPlugin = require('mongoose-user');
var Schema = mongoose.Schema;

/**
 * User schema
 */

var BookingSchema = new Schema({
  hotelName: { type: String, default: '' },
  checkIn: { type: Date, default: Date.now },
  checkOut: { type: Date, default: Date.now },
  price: { type: Number, default: 0 }
});

/**
 * User plugin
 */

//BookingSchema.plugin(userPlugin, {});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

BookingSchema.method({

});

/**
 * Statics
 */

BookingSchema.static({

});

/**
 * Register
 */

exports.Booking = mongoose.model('Booking', BookingSchema);
