var validator = require('validator'),
  express = require('express'),
  router = express.Router(),
  db = require('../models'),
  userService = require('../services/user')(db.sequelize);

module.exports = function (app) {
  app.use('/user', router);
};

router.post('/', function (req, res, next) {
  var user = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name || null,
    last_name: req.body.last_name || null,
    address: req.body.address || null,
    phone_number: req.body.phone_number || null
  };

  if (!user.email || !validator.isEmail(user.email)) {
    var error = new Error('Email is required or is invalid email format');
    error.status = 400;
    return next(error);
  }

  if (!user.password) {
    var error = new Error('Password is required');
    error.status = 400;
    return next(error);
  }

  userService.addNewUser(user, function (error, createdUser) {
    if (error) {
      return next(error);
    }

    return res.json({message: "Successful", data: createdUser});
  })

});

router.post('/login', function (req, res, next) {

  var email = req.body.email,
    password = req.body.password;

  if (!email || !validator.isEmail(email)) {
    var error = new Error('Email is required or is invalid email format');
    error.status = 400;
    return next(error);
  }

  if (!password) {
    var error = new Error('Password is required');
    error.status = 400;
    return next(error);
  }

  userService.login(email, password, function (error, isSuccess) {
    if (error) {
      return next(error);
    }
    return res.json({message: isSuccess ? "Successful" : "Fail"});
  });

});
