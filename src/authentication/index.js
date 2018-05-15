var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = require('../models');
var table;

passport.use(
	'renters',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		function(email, password, done) {
			db.Renters.findOne({ where: { email: email } })
				.then((renter) => {
					if (!renter) {
						return done(null, false, { message: 'Incorrect email' });
					}
					if (!renter.validPassword(password))
						return done(null, false, { message: 'Incorrect password' });
					return done(null, renter);
				})
				.catch((err) => done(err));
		}
	)
);

passport.use(
	'lenders',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		function(email, password, done) {
			db.Lenders.findOne({ where: { email: email } })
				.then((lender) => {
					if (!lender) {
						return done(null, false, { message: 'Incorrect email' });
					}
					if (!lender.validPassword(password))
						return done(null, false, { message: 'Incorrect password' });
					return done(null, lender);
				})
				.catch((err) => done(err));
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log(id);

	db.Lenders.findById(id)
		.then((lender) => done(null, lender.dataValues))
		.catch((err) => {
			if (err) {
				console.log('renters');
				db.Renters.findById(id).then((renter) => done(null, renter.dataValues));
			}
		});
});

module.exports = passport;
