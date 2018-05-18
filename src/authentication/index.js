var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var { Renters, Lenders } = require('../models');

passport.use(
	'renters',
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		function(email, password, done) {
			Renters.findOne({ where: { email: email } })
				.then((renter) => {
					if (!renter) {
						return done(null, false, { message: 'Incorrect email' });
					}
					if (!renter.validPassword(password))
						return done(null, false, { message: 'Incorrect password' });
					renter.type = 'renter';
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
			Lenders.findOne({ where: { email: email } })
				.then((lender) => {
					if (!lender) {
						return done(null, false, { message: 'Incorrect email' });
					}
					if (!lender.validPassword(password)) {
						return done(null, false, { message: 'Incorrect password' });
					}
					lender.type = 'lender';
					return done(null, lender);
				})
				.catch((err) => done(err));
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, {id: user.id, type: user.type});
});

passport.deserializeUser(function(id, done) {
	if(id.type === 'renter'){
		Renters.findById(id.id)
			.then((renter) => {
				var r = renter.dataValues;
				r.type = 'renter';
				done(null, r)
			})
			.catch((err) => console.log(err));
	}

	else if(id.type === 'lender'){
		Lenders.findById(id.id)
		  .then((lender) => {
			  var l = lender.dataValues;
			  l.type = 'lender';
			  done(null, l)
		  })
		  .catch((err) => console.log(err));
	}
});

module.exports = passport;
