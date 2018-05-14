var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var { Renters } = require('../models');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    Renters.findOne( { where: { email: email } })
    .then(renter => {
      if(!renter) {
        return done(null, false, { message: 'Incorrect email' });
      }
      if(!renter.validPassword(password))
        return done(null, false, { message: "Incorrect password" });
      return done(null, renter);
    })
      .catch(err => done(err) )
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Renters.findById(id)
    .then(renter => done(null, renter.dataValues))
});

module.exports = passport;