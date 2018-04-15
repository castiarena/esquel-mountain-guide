import express from 'express';
const index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.redirect('/under-construction');
});

export default index;
