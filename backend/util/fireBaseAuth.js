const { admin, db } = require("./admin");

module.exports = (req, resp, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return resp.status(403).json({ err: "Unauthorized" });
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedToken => {
      req.user = decodedToken;
      return db
        .collection("users")
        .where("userId", "==", req.user.user_id)
        .limit(1)
        .get();
    })
    .then(data => {
      req.user.handle = data.docs[0].data.userId;
      return next();
    })
    .catch(err => {
      const error = {};

      switch (err.code) {
        case "auth/id-token-expired":
          error.message = "Token expired / Bad request!";
          break;
        default:
          error.message = "Error whiles verifying token";
          break;
      }
      console.error("Error whiles verifying token", err);
      return resp.status(403).json(error);
    });
};
