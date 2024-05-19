// auth.mjs

import passport from 'passport';
import LocalStrategy from 'passport-local';

passport.use(new LocalStrategy(
    async function(username, password, done) {
        try {
            // Lookup user in the database and validate credentials
            const user = await User.findOne({ username: username });
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
