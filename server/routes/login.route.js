const express = require('express');
const app = express();
const loginRoutes = express.Router();

// Require Business model in our routes module
const user= require('../models/User');

loginRoutes.route('/').get(function (req, res) {
  console.log(req.query);
  res.send({
    data: 'This is the data'
  });
});

module.exports = loginRoutes;
