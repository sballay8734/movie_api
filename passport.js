const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  Models = require('./models.js'),
  passportJWT = require('passport-jwt');


let Users = Models.User,
  JWTStrategy = passportJWT.Strategy,
  ExtractJWT = passportJWT.ExtractJwt;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Local Strategy **************************************************************
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},

  (username, password, callback) => {
    console.log(username + ' ' + password);

    Users.findOne({ username: username }, (error, user) => {
      if (error) {
        console.log(error);
        return callback(error);
      }

      if (!user) {
        console.log('incorrect username');
        return callback(null, false, { message: 'Incorrect username or password' });
      }

      console.log('finished');
      return callback(null, user);
    });

  }));

// JWT Strategy ****************************************************************
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'YudE3ZYZdAbS4Bj5jkpaKR5KwOkrK8Gx'
},

  (jwtPayload, callback) => {
    return Users.findById(jwtPayload._id)
      .then((user) => {
        return callback(null, user);
      })
      .catch((error) => {
        return callback(error)
      });

  }));