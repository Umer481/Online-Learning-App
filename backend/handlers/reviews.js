const { db } = require("../util/admin");
const { constants } = require("../util/constants");
const { fakeData } = require("../util/fakeData");
// const { logger } = require("../util/");

const { isValidParamId } = require("../util/validators");

exports.createReview = (req, resp) => {
  const obj = [];

  return resp.status(200).json(obj);
};

exports.updateReview = (req, resp) => {
  const obj = [];

  return resp.status(200).json(obj);
};

exports.getReviewForUser = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  console.log("Get review for user: " + req.params.id);

  console.log("yoooo " + req.query.isMockData);

  if (req.query.isMockData) return resp.status(200).json(fakeData.reviews);

  db.collection(constants.dbCollectionNames.REVIEWS)
    .where("tutorId", "==", req.params.id)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let data = querySnapshot.docs[0].data();
        return resp.status(200).json(data);
      } else {
        return resp.status(404).json({
          message: "No reviews found for specified user",
        });
      }
    })
    .catch(function (err) {
      console.log("An error with get reviews" + err);
      return err;
    });
};
