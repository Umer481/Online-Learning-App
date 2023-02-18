const { db, admin } = require("../util/admin");
const { constants } = require("../util/constants");
const { _ } = require("underscore");

module.exports.persistBankingInfo = (bankingDetails, userId) => {
  Object.keys(bankingDetails).forEach(
    (key) => bankingDetails[key] === undefined && delete bankingDetails[key]
  );

  if (Object.keys(bankingDetails).length === 0) {
    return;
  }

  db.collection(constants.dbCollectionNames.BANKING)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        // Update banking info
        let data = querySnapshot.docs[0].data();
        console.log("Found data, updated needed! " + JSON.stringify(data));

        // Remove property
        delete bankingDetails.uid;
        delete bankingDetails.userId;

        return db
          .collection(constants.dbCollectionNames.BANKING)
          .doc(data.uid)
          .update(bankingDetails);
      } else {
        // Create new banking info
        return db
          .doc(`/${constants.dbCollectionNames.BANKING}/${bankingDetails.uid}`)
          .set(bankingDetails);
      }
    })
    .then((data) => {
      // Return success or failure here
      console.log(JSON.stringify(data));
      return data;
    })
    .catch(function (err) {
      return err;
    });
};
