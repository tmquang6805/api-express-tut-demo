var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'app_api_tut'
    },
    port: process.env.PORT || 3000,
    db_config: {
      database: 'app_api_tut',
      username: 'root',
      password: 'mysql@123',
      options: {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: '3306'
      }
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-express-tutorial'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/api-express-tutorial-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-express-tutorial'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/api-express-tutorial-production'
  }
};

module.exports = config[env];
