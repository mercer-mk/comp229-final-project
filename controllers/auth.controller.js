const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('mongoose').model('User');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const config = require('../env.config');
const apiSecret = config.apiSecret;
const argon2 = require('argon2');

passport.use(
  'signUp',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      try {
        const hashOptions = {
          type: argon2.argon2id,
          memoryCost: 2 ** 16,
          hashLength: 64,
          saltLength: 32,
          parallelism: 2
        };
        const hashedPassword = await argon2.hash(password, hashOptions);
        const user = await UserModel.create({
          forename: req.body.forename,
          surname: req.body.surname,
          username,
          password: hashedPassword,
          email: req.body.email,
          permissionLevel: 1
        });
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  'signIn',
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    async (username, password, done) => {
      try {
        const user = await UserModel.findOne({ username });
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
          return done(null, false, { message: 'Wrong Password' });
        }
        done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      secretOrKey: apiSecret,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
