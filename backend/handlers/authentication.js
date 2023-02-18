const uuidv4 = require("uuid/v4");
const { db } = require("../util/admin");
const firebase = require("firebase");
const { admin } = require("../util/admin");
const { constants } = require("../util/constants");

var firebaseConfig = require("../secrets/firebase-config");
firebase.initializeApp(firebaseConfig);

const {
  validateSignupData,
  validateLoginData,
  isEmpty,
} = require("../util/validators");

exports.login = (req, resp) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);

  if (!valid) return resp.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return token;
    })
    .then((token) => {
      admin
        .auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
          req.user = decodedToken;

          db.collection(constants.dbCollectionNames.USERS)
            .where("userId", "==", req.user.uid)
            .limit(1)
            .get()
            .then(function (querySnapshot) {
              if (querySnapshot.size > 0) {
                // Contents of first document
                console.log(querySnapshot.docs[0].data());
                return resp.json({
                  token: token,
                  user: querySnapshot.docs[0].data(),
                });
              } else {
                return resp
                  .status(400)
                  .json({ general: "Wrong credentials. Try again" });
              }
            })
            .catch(function (err) {
              return err;
            });
        });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return resp
          .status(403)
          .json({ general: "Wrong credentials. Try again" });
      } else {
        return resp.status(500).json({ err: err.code });
      }
    });
};

exports.resetPassword = (req, resp) => {
  const user = {
    email: req.body.email,
  };

  let errors = {};

  if (isEmpty(user.email)) errors.email = "Email must not be empty";
  if (Object.keys(errors).length > 0) return resp.status(400).json(errors);

  return firebase
    .auth()
    .sendPasswordResetEmail(user.email)
    .then(() => {
      return resp
        .status(201)
        .json({ passwordReset: "Password reset link sent." });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        return resp.status(400).json({ email: "Invalid Email provided" });
      } else {
        return resp.status(500).json({ err: err.code });
      }
    });
};

exports.logout = (req, resp) => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("log out!");
      return resp.status(200).json({ logout: "Logout successfully!" });
    })
    .catch((err) => {
      return resp.status(500).json({ err: err.code });
    });
};

exports.signup = (req, resp) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    recieveMarketingEmails: req.body.recieveMarketingEmails,
    isTutor: req.body.isTutor,
    dob: req.body.dob,
  };

  let token, userId, createdUser;
  const noImg = "no-img.png";
  const { valid, errors } = validateSignupData(newUser);

  if (!valid) return resp.status(400).json(errors);

  db.doc(`/${constants.dbCollectionNames.USERS}/${newUser.email}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return resp.status(400).json({ email: "this email already is taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        recieveMarketingEmails: newUser.recieveMarketingEmails,
        isTutor: newUser.isTutor,
        createdAt: new Date().toISOString(),
        isApplicationAccepted: false,
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
        uid: uuidv4(),
        userId,
      };

      // Set the dob for tutors
      if (newUser.isTutor) {
        userCredentials.dob = new Date(newUser.dob);
      }

      createdUser = userCredentials;
      // Persist user info to seperate table
      return db
        .doc(`/${constants.dbCollectionNames.USERS}/${userId}`)
        .set(userCredentials);
    })
    .then(() => {
      return resp.status(201).json({ token: token, user: createdUser });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return resp.status(400).json({ email: "Email is already in use" });
      } else {
        return resp.status(500).json({ err: err.code });
      }
    });
};
