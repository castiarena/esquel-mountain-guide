import express from 'express';
const users = express.Router();

/* GET users listing. */
users.get('/', (req, res, next) => res.send('respond with a resource'));

export default users;
