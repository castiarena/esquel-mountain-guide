import express from 'express';
const index = express.Router();
// map to name and url
const iconMapper = (name, url) => {
  return { name, url }
};

/* GET home page. */
index.get('/', (req, res) => {
  console.log(0);
  res.render('dale')
});

export default index;
