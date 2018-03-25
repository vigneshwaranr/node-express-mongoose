process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
require('../app/models/booking');
const BookingModel = mongoose.model('Booking');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let app = server.app
let should = chai.should();

chai.use(chaiHttp);

describe('Bookings', () => {

  beforeEach((done) => { //Before each test we empty the database
      BookingModel.remove({}, (err) => {
         done();
      });
  });

  /* /GET */
  describe('/GET booking', () => {
    it('it should get all the bookings', (done) => {
      return chai.request(app)
        .get('/bookings')
        .end((err, res) => {
          console.log('bai')
          console.log(res);
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);
          done();
        });
    });
  });

});
