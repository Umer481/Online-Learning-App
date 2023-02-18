const { db, admin } = require("../util/admin");
const { constants } = require("../util/constants");
const { fakeData } = require("../util/fakeData");
const { persistUserDetails: saveUserDetails } = require("./users");
const { persistBankingInfo } = require("./banking");

const {
  removePIIFromPublicTutor,
  removePIIFromPublicUser,
} = require("../util/utils");

const { _ } = require("underscore");

const uuidv4 = require("uuid/v4");

const {
  isValidParamId,
  validateApplicationData,
  validateSubmittedApplication,
} = require("../util/validators");

exports.subjectLevels = (req, resp) => {
  return resp.status(200).json(constants.subjectlevels);
};

exports.currentApplication = (req, resp) => {
  let userId = req.params.id;

  const tutorDetail = db
    .collection(constants.dbCollectionNames.TUTOR_DETAIL)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        return querySnapshot.docs[0].data();
      } else {
        return undefined;
      }
    })
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Error with tutorDetail: " + userData);
      return err;
    });

  const userData = db
    .collection(constants.dbCollectionNames.USERS)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        return querySnapshot.docs[0].data();
      } else {
        return undefined;
      }
    })
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Error with userData: " + userData);
      return err;
    });

  const subjectsData = db
    .collection(constants.dbCollectionNames.SUBJECTS)
    .where("userId", "==", userId)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        const output = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          output.push(data);
        });
        return output;
      } else {
        return undefined;
      }
    })
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Error with subjectsData: " + subjectsData);
      return err;
    });

  const bankingData = db
    .collection(constants.dbCollectionNames.BANKING)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        return querySnapshot.docs[0].data();
      } else {
        return undefined;
      }
    })
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Error with bankingData: " + bankingData);
      return err;
    });

  Promise.all([bankingData, subjectsData, userData, tutorDetail])
    .then((values) => {
      if (values[0].userId !== req.user.user_id) {
        return resp
          .status(400)
          .json({ error: "Not allowed to retrieve application data" });
      }
      return resp
        .status(200)
        .json(unpackApplication(values[0], values[1], values[2], values[3]));
    })
    .catch(function (err) {
      console.log("An error occured " + err);
      return resp
        .status(500)
        .json({ message: "Unable to retrieve application data" });
    });
};

function unpackApplication(bankingData, subjectsData, userData, tutorDetail) {
  let resp = {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {},
    step7: {},
    step8: {},
    step9: {},
  };

  if (tutorDetail !== undefined) {
    resp.step1.modeOfTeaching = tutorDetail.modeOfTeaching;
    resp.step3.bio = tutorDetail.bio;
    resp.step3.tagline = tutorDetail.tagline;
    resp.step3.teachingStyle = tutorDetail.teachingStyle;
    resp.step1.addressRaw = tutorDetail.addressRaw;
    resp.step1.address = tutorDetail.address;
    resp.step6.ratePerHour = tutorDetail.hourlyRate;
    resp.step9.confirmWorkEligiblility = tutorDetail.confirmWorkEligiblility;
    resp.step9.confirmValidDocs = tutorDetail.confirmValidDocs;
    resp.step9.agreeToTOS = tutorDetail.agreeToTOS;
    resp.step2.previouslyTutored = tutorDetail.previouslyTutored;
    // resp.step2.providedAdditionalCerts = tutorDetail.providedAdditionalCerts;
    resp.currentStep = tutorDetail.currentStep;
    resp.step2.socialUrls = tutorDetail.socialUrls;
    resp.step2.lengthOfTeachingPractice = tutorDetail.lengthOfTeachingPractice;
    resp.step2.supportingDocs = tutorDetail.supportingDocs;
    resp.step2.certificates = tutorDetail.certificates;
    resp.step1.addressLatLng = tutorDetail.addressLatLng;
    resp.step5.employment = tutorDetail.employment;
    resp.step5.education = tutorDetail.education;
    resp.step1.willignessToTravelInMiles =
      tutorDetail.willignessToTravelInMiles;
    resp.step7 = tutorDetail.verificationDoc;
  }

  if (subjectsData !== undefined) {
  }

  if (bankingData !== undefined) {
    resp.step8.accountHolderName = bankingData.accountHolderName;
    resp.step8.bankAccountShortCode = bankingData.bankAccountShortCode;
    resp.step8.accountNumber = bankingData.accountNumber;
  }

  if (userData !== undefined) {
    resp.step9.phoneNumber = userData.phoneNumber;
    resp.step4.proilePhotoUrl = userData.imageUrl;
  }

  return resp;
}

exports.tutorApplication = (req, resp) => {
  const applicationData = req.body;
  const userId = req.user.uid;

  console.log("User id " + userId);

  const { valid, errors } = validateApplicationData(applicationData);

  if (!valid) return resp.status(400).json(errors);

  // If application status is submitted then validate all fields
  if (
    applicationData.applicationStatus === constants.applicationStatus.submitted
  ) {
    // Validate all fields
    const { valid, errors } = validateSubmittedApplication(applicationData);
    if (!valid) return resp.status(400).json(errors);
  }

  //  check the current user's application state and only allow updates to
  // subjects if their status is submitted
  db.collection(constants.dbCollectionNames.TUTOR_DETAIL)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let u = querySnapshot.docs[0].data();

        // Persist subjects to db
        saveSubjectsData(applicationData.step1, userId);

        if (u.applicationStatus === constants.applicationStatus.inProgress) {
          // Save to tutor detail table
          saveTutorInfo(applicationData, userId);

          // Save to banking table
          saveBankingDetails(applicationData.step8, userId);

          // Save to user table
          saveUserInfo(applicationData, userId);
        }
        return querySnapshot.docs[0].data();
      } else {
        // Persist subjects to db
        saveSubjectsData(applicationData.step1, userId);

        // Save to tutor detail table
        saveTutorInfo(applicationData, userId);

        // Save to banking table
        saveBankingDetails(applicationData.step8, userId);

        // Save to user table
        saveUserInfo(applicationData, userId);
      }
    })
    .then((data) => {
      return resp
        .status(200)
        .json({ message: "Saved application data", success: true });
    })
    .catch(function (err) {
      console.log("Error with tutorDetail: " + err);
      return err;
    });
};

exports.getAllTutors = (req, resp) => {
  // Validate input
  let mode = req.query.mode;
  let level = req.query.level;
  let subject = req.query.subject;
  let postCode = req.query.postCode;

  if (req.query.isMockData) return resp.status(200).json(fakeData.getTutors);

  console.log("Level: " + level + " Subject: " + subject);

  // perform query on subjects table
  db.collection(constants.dbCollectionNames.SUBJECTS)
    .where("subject", "==", subject)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        const userIds = [];
        const output = {};
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          if (data.level === level) {
            userIds.push(data.userId);
          }
        });
        output.userIds = userIds;
        output.mode = mode;
        output.postCode = postCode;

        if (userIds.length > 0) {
          return output;
        }
        return undefined;
      } else {
        return undefined;
      }
    })
    .then((data) => {
      console.log("DATA: " + JSON.stringify(data));
      if (data === undefined) {
        return resp.status(200).json([]);
      }
      // Fetch user info
      console.log(data.userIds);
      db.collection(constants.dbCollectionNames.USERS)
        .where("userId", "in", data.userIds.slice(1, 9))
        .get()
        .then(function (querySnapshot) {
          let result = {};
          result.mode = data.mode;
          result.postCode = data.postCode;
          if (querySnapshot.size > 0) {
            querySnapshot.forEach((doc) => {
              let d = doc.data();
              removePIIFromPublicUser(d);
              result[d.userId] = d;
            });
            return getTutorInformation(result, resp);
          } else {
            return resp.status(200).json({});
          }
        });
    })
    .catch(function (err) {
      console.log("Error with subjectsData: " + err);
      return err;
    });
};

function getTutorInformation(data, resp) {
  let arr = Object.keys(data);
  let mode = constants.modeOfTeaching[data.mode];

  arr = arr.filter(function (item) {
    return item !== "mode" && item !== "postCode";
  });

  db.collection(constants.dbCollectionNames.TUTOR_DETAIL)
    .where("userId", "in", arr)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        let r = [];
        querySnapshot.forEach((doc) => {
          let d = doc.data();
          if (mode == d.modeOfTeaching) {
            let info = data[d.userId];
            removePIIFromPublicTutor(d);
            info.tutorDetail = d;
            r.push(info);
          }
        });
        return resp.status(200).json(r);
      } else {
        return resp.status(200).json([]);
        // return undefined;
      }
    })
    .catch(function (err) {
      console.log("Error with tutorDetail: " + err);
      return err;
    });
}

exports.getAnalytics = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  return resp.status(200).json(fakeData.analytics);
};

exports.getAllSessions = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);
  return resp.status(200).json(fakeData.getAllSessions);
};

module.exports.persistTutorInfo = (tutorDetails, userId) => {
  Object.keys(tutorDetails).forEach(
    (key) => tutorDetails[key] === undefined && delete tutorDetails[key]
  );
  if (Object.keys(tutorDetails).length === 0) {
    return;
  }

  db.collection(constants.dbCollectionNames.TUTOR_DETAIL)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        // Update tutor
        let data = querySnapshot.docs[0].data();

        // Remove property
        delete tutorDetails.uid;
        delete tutorDetails.userId;
        delete tutorDetails.createdAt;

        console.log(
          "Updating tutor detail doc with: " + JSON.stringify(tutorDetails)
        );

        return db
          .collection(constants.dbCollectionNames.TUTOR_DETAIL)
          .doc(data.uid)
          .update(tutorDetails);
      } else {
        // Create new tutor detail
        console.log(
          "Creating a new tutor detail doc with: " +
            JSON.stringify(tutorDetails)
        );

        return db
          .doc(
            `/${constants.dbCollectionNames.TUTOR_DETAIL}/${tutorDetails.uid}`
          )
          .set(tutorDetails);
      }
    })
    .then((data) => {
      return data;
    })
    .catch(function (err) {
      console.log("Error: " + err);
      return err;
    });
};

exports.getAvailability = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  return resp.status(200).json(fakeData.availability);
};

exports.updateAvailability = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const obj = {
    status: "success",
  };
  return resp.status(200).json(obj);
};

function unpackSubjectsData(subjects, userId) {
  let objectToSave = [];
  for (category in subjects) {
    for (subject in subjects[category]) {
      const levels = subjects[category][subject];
      for (var i = 0; i < levels.length; i++) {
        let obj = {
          userId: userId,
          subject: subject,
          level: levels[i],
          category: category,
          uid: uuidv4(),
        };
        objectToSave.push(obj);
      }
    }
  }
  return objectToSave;
}

function saveSubjectsData(obj, userId) {
  // Unpack the object
  const subjects = obj.subjects;
  let objectToSave = unpackSubjectsData(subjects, userId);

  console.log("Persist subject details for: " + userId);
  db.collection(constants.dbCollectionNames.SUBJECTS)
    .where("userId", "==", userId)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          // Remove it from list if it already exists
          objectToSave = _.reject(objectToSave, function (el) {
            return (
              el.level === data.level &&
              el.subject === data.subject &&
              el.category === data.category
            );
          });
        });

        console.log("Length is: " + objectToSave.length);
        if (objectToSave.length > 0) {
          return batchUpdateSubjects(objectToSave);
        } else {
          return { success: true };
        }
      } else {
        console.log("No data found!");

        // Batch post
        return batchUpdateSubjects(objectToSave);
      }
    })
    .then((data) => {
      // Return success or failure here
      console.log(JSON.stringify(data));
      return resp
        .status(200)
        .json({ message: "Saved application data", success: true });
      // return data;
    })
    .catch(function (err) {
      return err;
    });
}

function batchUpdateSubjects(objectToSave) {
  const batch = db.batch();
  console.log("object to save: " + JSON.stringify(objectToSave));
  objectToSave.forEach((doc) => {
    batch.set(db.collection(constants.dbCollectionNames.SUBJECTS).doc(), doc);
  });
  // Commit the batch
  return batch.commit();
}

function saveBankingDetails(obj, userId) {
  const bankingDetails = {
    accountHolderName: obj.accountHolderName,
    bankAccountShortCode: obj.bankAccountShortCode,
    accountNumber: obj.accountNumber,
    userId: userId,
    uid: uuidv4(),
  };

  persistBankingInfo(bankingDetails, userId);
}

function saveTutorInfo(obj, userId) {
  const tutorDetails = {
    modeOfTeaching: obj.step1.modeOfTeaching,
    bio: obj.step3.bio,
    tagline: obj.step3.tagline,
    teachingStyle: obj.step3.teachingStyle,
    addressRaw: obj.step1.addressRaw,
    address: obj.step1.address,
    hourlyRate: obj.step6.ratePerHour,
    userId: userId,
    confirmWorkEligibility: obj.step9.confirmWorkEligiblility,
    confirmValidDocs: obj.step9.confirmValidDocs,
    agreeToTOS: obj.step9.agreeToTOS,
    previouslyTutored: obj.step2.previouslyTutored,
    currentStep: obj.currentStep,
    applicationStatus: obj.applicationStatus,
    socialUrls: obj.step2.socialUrls,
    lengthOfTeachingPractice: obj.step2.lengthOfTeachingPractice,
    supportingDocs: obj.step2.supportingDocs,
    certificates: obj.step2.certificates,
    employment: obj.step5.employment,
    education: obj.step5.education,
    uid: uuidv4(),
    verificationDoc: obj.step7,
    createdAt: new Date().toISOString(),
  };

  if (obj.step1.modeOfTeaching != constants.modeOfTeaching.online) {
    tutorDetails.willignessToTravelInMiles =
      obj.step1.willignessToTravelInMiles;
  }

  // Validate lat lng
  if (
    obj.step1.addressLatLng !== undefined &&
    obj.step1.addressLatLng.length == 2
  ) {
    let latlng = obj.step1.addressLatLng;
    tutorDetails.addressLatLng = new admin.firestore.GeoPoint(
      latlng[0],
      latlng[1]
    );
  }

  this.persistTutorInfo(tutorDetails, userId);
}

function saveUserInfo(obj, userId) {
  const userInfo = {
    phoneNumber: obj.step9.phoneNumber,
    imageUrl: obj.step4.proilePhotoUrl,
  };
  saveUserDetails(userInfo, userId);
}
