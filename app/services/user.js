var _ = require('underscore');

module.exports = function (sequelize) {
  var User = require('../models/schemas')(sequelize).User;

  return {
    addNewUser: function (user, cb) {
      User.create(user)
        .then(function(instance){
          return cb(null, _.clone(instance.dataValues));
        })
        .catch(function (error) {
          return cb(error);
        });
    }
  }
};
