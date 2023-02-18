const { db } = require("../util/admin");
const { constants } = require("../util/constants");
const { fakeData } = require("../util/fakeData");
const { allowedSubjects } = require("../util/allowedSubjects");

exports.getApplicationSubjects = (req, resp) => {
  console.log("Get application subjects for user: " + req.params.id);

  if (req.body.isMockData) return resp.status(200).json(fakeData.subjects);

  db.collection(constants.dbCollectionNames.SUBJECTS)
    .where("userId", "==", req.params.id)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let results = [];
        querySnapshot.forEach((doc) => {
          const d = doc.data();
          delete d.uid;
          delete d.userId;
          results.push(d);
        });

        return resp.status(200).json(results);
      } else {
        console.log("Not found");
        return resp.status(200).json([]);
      }
    })
    .catch(function (err) {
      console.log("An error with get subjects" + err);
      return err;
    });
};

exports.getSubjectsForUser = (req, resp) => {
  console.log("Get subjects for user: " + req.params.id);

  if (req.body.isMockData) return resp.status(200).json(fakeData.subjects);

  db.collection(constants.dbCollectionNames.SUBJECTS)
    .where("userId", "==", req.params.id)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let results = [];
        let map = {};
        const res = [];

        querySnapshot.forEach((doc) => {
          const d = doc.data();
          delete d.uid;
          delete d.userId;

          if (map.hasOwnProperty(d.level)) {
            let val = map[d.level];
            val.push(d.subject);
            map[d.level] = val;
          } else {
            map[d.level] = [d.subject];
          }

          results.push(d);
        });

        for (var i = 0; i < Object.keys(map).length; i++) {
          var p = {
            level: Object.keys(map)[i],
            subject: map[Object.keys(map)[i]],
          };
          res.push(p);
        }

        return resp.status(200).json(res);
      } else {
        console.log("Not found");
        return resp.status(200).json([]);
      }
    })
    .catch(function (err) {
      console.log("An error with get subjects" + err);
      return err;
    });
};

exports.allSubjects = (req, resp) => {
  return resp.status(200).json(allowedSubjects);
};

exports.allCategories = (req, resp) => {
  return resp.status(200).json(Object.keys(allowedSubjects));
};

exports.subjectByCategory = (req, resp) => {
  let allSubs = allowedSubjects;
  let map = {};
  for (var i = 0; i < Object.keys(allSubs).length; i++) {
    let o = allSubs[Object.keys(allSubs)[i]];
    map[Object.keys(allSubs)[i]] = Object.keys(o);
  }
  return resp.status(200).json(map);
};

exports.allLevels = (req, resp) => {
  let arr = Object.values(allowedSubjects);
  let result = Object.assign.apply({}, arr);
  return resp.status(200).json(result);
};
