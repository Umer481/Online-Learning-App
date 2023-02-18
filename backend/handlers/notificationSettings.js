const { db } = require("../util/admin");
const { constants } = require("../util/constants");
const { isValidParamId } = require("../util/validators");
const { apiRequestBody } = require("../util/apiBody");

exports.updateNotificationSettings = (req, resp) => {
  let userId = req.user.uid;
  const notificationData = req.body;
  let validKeys = Object.keys(apiRequestBody.notificationSettings);
  let userKeys = Object.keys(notificationData);

  for (var i = 0; i < userKeys.length; i++) {
    const v = userKeys[i];
    if (!validKeys.includes(v)) {
      return resp
        .status(400)
        .json({ message: "Invalid payload body - unkown key: " + v });
    }
  }

  notificationData.userId = userId;

  db.collection(constants.dbCollectionNames.NOTIFICATION_SETTINGS)
    .where("userId", "==", req.user.uid)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        db.collection(constants.dbCollectionNames.NOTIFICATION_SETTINGS)
          .doc(userId)
          .update(notificationData);
        return true;
      } else {
        db.doc(
          `/${constants.dbCollectionNames.NOTIFICATION_SETTINGS}/${userId}`
        ).set(notificationData);
        return true;
      }
    })
    .then((data) => {
      return resp
        .status(200)
        .json({ message: "Saved notification data", success: true });
    })
    .catch(function (err) {
      console.log("An error with update user noticiations " + err);
      return err;
    });
};

exports.getNotificationSeettings = (req, resp) => {
  db.collection(constants.dbCollectionNames.NOTIFICATION_SETTINGS)
    .where("userId", "==", req.user.uid)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let data = querySnapshot.docs[0].data();
        delete data.userId;
        return resp.status(200).json(data);
      } else {
        console.log("No notification found, sending default");
        return resp.status(200).json(apiRequestBody.notificationSettings);
      }
    })
    .catch(function (err) {
      console.log("An error with get user noticiations " + err);
      return err;
    });
};
