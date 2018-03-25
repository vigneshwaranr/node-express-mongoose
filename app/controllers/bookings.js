const mongoose = require('mongoose');

const BookingModel = mongoose.model('Booking');

const getBookings = function(checkIn, checkOut) {
  if (checkIn == null && checkOut == null) {
    return BookingModel.find();
  } else {
    return BookingModel.find({
      'checkIn': { '$gte': checkIn },
      'checkOut': { '$lte': checkOut }
    });
  }
}

// list bookings
// GET /bookings
exports.index = async function (req, res) {
  let checkIn = req.query.checkIn;
  let checkOut = req.query.checkOut;
  let bookings = await getBookings(checkIn, checkOut).lean().exec();
  return res.end(JSON.stringify(bookings));
}

// create post
// POST /posts
exports.create = function (req, res) {
  let booking = new BookingModel(req.body)
  booking.save(function(err) {
    if (err) throw err;
    return res.end(JSON.stringify(booking));
  });
}

// delete post
// DEL /posts/:id
exports.destroy = function (req, res) {
  BookingModel.remove({_id: req.params.id}, function(err, booking) {
    if (err) throw err;

    return res.end(`deleted ${req.params.id}`);
  });

}
