var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var flash = require('connect-flash');
var passport = require('./authentication');
var SequelizeStore = require('connect-session-sequelize')(session.Store);

//renters route
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var sequelize = require('./config/sequelize');
//lenders route
var lenderIndexRouter = require('./routes/lenderIndex');
var lendersApiRouter = require('./routes/lendersApi');

//comman route
var messagesRouter = require('./routes/messagesRouter');

var app = express();

//requiring DB
var db = require('./models');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// setup session
var myStore = new SequelizeStore({
	db: sequelize,
});
app.use(
	session({
		name: 'session-id',
		secret: 'scrt',
		store: myStore,
		resave: true,
		saveUninitialized: true,
	})
);
myStore.sync();

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
	app.use((req, res, next) => {
		const allowed_header = ['http://localhost:3000'];
		const origin = req.headers.origin;
		if (allowed_header.indexOf(origin) > -1) {
			res.header('Access-Control-Allow-Origin', origin);
		}
		res.header(
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, ideaJWT, Accept'
		);
		res.header(
			'Access-Control-Allow-Methods',
			'POST, GET, OPTIONS, PUT, DELETE'
		);
		next();
	});
}
app.disable('etag');

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//Renters
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/messages', messagesRouter);

//Lenders
app.use('/lenders', lenderIndexRouter);
app.use('/lendersapi', lendersApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
