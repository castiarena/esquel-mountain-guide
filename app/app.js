import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import postcssMiddleware from 'postcss-middleware';
import autoprefixer from 'autoprefixer';

import index from './routes/index';
import users from './routes/users';
import under_construction from './routes/under_construction';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const destPath = path.join(__dirname, 'public')
app.use(sassMiddleware({
  src: destPath,
  dest: destPath,
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(postcssMiddleware({
    plugins: [
        /* Plugins */
        autoprefixer({
            browsers: ['> 1%', 'last 4 versions', 'Firefox >= 20', 'iOS >=7']
        })
    ]
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/under-construction', under_construction);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
