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
    },
    login: function (email, password, cb) {
      User.findOne({
        where: {email: email}
      })
        .then(function (instance) {
          if (!instance) {
            return cb(null, false);
          }
          var user = _.clone(instance.dataValues);
          if (user.password !== password) {
            return cb(null, false);
          }
          return cb(null, true);
        })
        .catch(function (error) {
          return cb(error);
        });
    }
  }
};
