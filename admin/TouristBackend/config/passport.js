// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const User = require("../Models/User");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "https://travel-website-5-62rm.onrender.com/api/auth/google/callback"
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         // check user
//         let user = await User.findOne({ googleId: profile.id });

//         // create new user if not exists
//         if (!user) {
//           user = await User.create({
//             googleId: profile.id,
//             name: profile.displayName,
//             email: profile.emails[0].value
//           });
//         }

//         return done(null, user);

//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// // Save user id in session
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// // Get user from id
// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://travel-website-5-62rm.onrender.com/api/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // 🔥 Step 1: check user by EMAIL
        let user = await User.findOne({ email });

        if (!user) {
          // 🆕 create new user
          user = await User.create({
            name: profile.displayName,
            email: email,
            googleId: profile.id
          });
        } else {
          // 🔁 update googleId if not present
          if (!user.googleId) {
            user.googleId = profile.id;
            await user.save();
          }
        }

        return done(null, user); // ✅ always DB user with _id

      } catch (error) {
        return done(error, null);
      }
    }
  )
);