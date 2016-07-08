var Sequelize = require('sequelize');


module.exports = function (sequelize) {

  var User = sequelize.define('User', {
    email: {type: Sequelize.STRING(250), allowNull: false, unique: true},
    password: {type: Sequelize.STRING, allowNull: false},
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    last_logged_in: Sequelize.DATE,
    status: {type: Sequelize.BOOLEAN, defaultValue: true}
  }, {
    timestamps: true,
    underscored: true,
    tableName: 'users'
  });

  return {
    User: User
  };
}
