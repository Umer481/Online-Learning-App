const { db } = require("../util/admin");
const { admin } = require("../util/admin");
const { _ } = require("underscore");
const uuidv4 = require("uuid/v4");
const { constants, imageUploadTypes } = require("../util/constants");
const { fakeData } = require("../util/fakeData");
const {
  removePIIFromPublicTutor,
  removePIIFromPublicUser,
} = require("../util/utils");
const { persistBankingInfo } = require("./banking");

let config = {
  storageBucket: "askademia-36826.appspot.com",
};

const { isValidParamId } = require("../util/validators");
const { persistTutorInfo } = require("./tutors");

module.exports.persistUserDetails = (obj, userId) => {
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key]);

  if (Object.keys(obj).length === 0) {
    return;
  }

  db.collection(constants.dbCollectionNames.USERS)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        // Update user info
        let data = querySnapshot.docs[0].data();
        console.log("Found user data, updated needed! " + JSON.stringify(data));

        return db
          .collection(constants.dbCollectionNames.USERS)
          .doc(data.userId)
          .update(obj);
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

exports.updateSettings = (req, resp) => {
  const settingsData = req.body;
  const userId = req.user.uid;

  const userData = {};
  const tutorDetailData = {};
  const bankingData = {};

  // User table specifics
  userData.firstName = settingsData.firstName;
  userData.lastName = settingsData.lastName;
  userData.phoneNumber = settingsData.phoneNumber;
  userData.recieveMarketingEmails = settingsData.recieveMarketingEmails;
  console.log("User data is ", JSON.stringify(userData));
  this.persistUserDetails(userData, userId);

  // Banking detail specifics
  bankingData.accountHolderName = settingsData.accountHolderName;
  bankingData.bankAccountShortCode = settingsData.bankAccountShortCode;
  bankingData.accountNumber = settingsData.accountNumber;
  persistBankingInfo(bankingData, userId);
  console.log("Banking data is ", JSON.stringify(bankingData));

  // Tutor specific details
  tutorDetailData.bio = settingsData.bio;
  tutorDetailData.tagline = settingsData.tagline;
  tutorDetailData.teachingStyle = settingsData.teachingStyle;
  tutorDetailData.previouslyTutored = settingsData.previouslyTutored;
  tutorDetailData.socialLinks = settingsData.socialLinks; // Must be an array
  tutorDetailData.addressRaw = settingsData.addressRaw;
  tutorDetailData.employment = settingsData.employment; // Must be list of objects
  tutorDetailData.education = settingsData.education; // Must be list of objects
  tutorDetailData.certificates = settingsData.certificates; // Must be an object
  // Must be an array of lat lng
  if (
    settingsData.addressLatLng !== undefined &&
    settingsData.addressLatLng.length == 2
  ) {
    let latlng = settingsData.addressLatLng;
    tutorDetailData.addressLatLng = new admin.firestore.GeoPoint(
      latlng[0],
      latlng[1]
    );
  }
  console.log("Tutor data is ", JSON.stringify(tutorDetailData));
  persistTutorInfo(tutorDetailData, userId);

  return resp
    .status(200)
    .json({ message: "Updated user settings", success: true });
};

// Public GET user API
exports.getUser = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  const userId = req.params.id;

  db.collection(constants.dbCollectionNames.USERS)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        const d = querySnapshot.docs[0].data();
        removePIIFromPublicUser(d);

        return d;
      } else {
        return resp.status(400).json({ general: "User does not exists" });
      }
    })
    .then((userObj) => {
      if (userObj.isTutor) {
        if (req.body.isMockData) {
          userObj.tutorDetails = fakeData.tutorDetail;
          return resp.status(200).json(userObj);
        }

        db.collection(constants.dbCollectionNames.TUTOR_DETAIL)
          .where("userId", "==", userObj.userId)
          .limit(1)
          .get()
          .then(function (querySnapshot) {
            if (querySnapshot.size > 0) {
              let d = querySnapshot.docs[0].data();

              // Delete fields from response
              removePIIFromPublicTutor(d);

              userObj.tutorDetails = d;
              return resp.status(200).json(userObj);
            } else {
              return resp.status(400).json({
                general: "Unable to fetch details for specified tutor",
              });
            }
          });
        // return resp.json(userObj);
      } else {
        return resp.json(userObj);
      }
    })
    .catch((err) => {
      console.log(err);
      return resp.status(403).json(err);
    });
};

exports.getUserAuthenticated = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);
  const userId = req.params.id;
  db.collection(constants.dbCollectionNames.USERS)
    .where("userId", "==", userId)
    .limit(1)
    .get()
    .then(function (querySnapshot) {
      if (querySnapshot.size > 0) {
        // Contents of first document
        const d = querySnapshot.docs[0].data();
        console.log(d);

        delete d.uid;

        // Only return PII information for user making request
        if (req.user === undefined || req.user.user_id !== d.userId) {
          delete d.dob;
          delete d.isApplicationAccepted;
          delete d.recieveMarketingEmails;
          delete d.phoneNumber;
        }

        return d;
      } else {
        return resp.status(400).json({ general: "User does not exists" });
      }
    })
    .then((userObj) => {
      if (userObj.isTutor) {
        db.collection(constants.dbCollectionNames.TUTOR_DETAIL)
          .where("userId", "==", userObj.userId)
          .limit(1)
          .get()
          .then(function (querySnapshot) {
            if (querySnapshot.size > 0) {
              let d = querySnapshot.docs[0].data();

              // Delete fields
              delete d.uid;
              delete d.banking;
              delete d.verificationDoc;

              if (
                req.user === undefined ||
                req.user.user_id !== userObj.userId
              ) {
                delete d.addressRaw;
                delete d.agreeToTOS;
                delete d.addressLatLng;
                delete d.address;
                delete d.uid;
                delete d.supportingDocs;
                delete d.currentStep;
              }

              userObj.tutorDetails = d;
              return resp.status(200).json(userObj);
            } else {
              return resp.status(400).json({
                general: "Unable to fetch details for specified tutor",
              });
            }
          });
        // return resp.json(userObj);
      } else {
        return resp.json(userObj);
      }
    })
    .catch((err) => {
      console.log(err);
      return resp.status(403).json(err);
    });
};

exports.getProfileSuggestions = (req, resp) => {
  const { valid, errors } = isValidParamId(req);
  if (!valid) return res.status(400).json(errors);

  resp.status(200).json(fakeData.profileSuggestions);
};

exports.uploadImage = (req, resp) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");

  let typeOfImageToUpload = req.query.type;
  let userId = req.user.user_id;
  if (typeOfImageToUpload === undefined) {
    return resp.status(400).json({
      email: "Type of image to be uploaded must be specified. ?type=",
    });
  }

  if (Number.isInteger(parseInt(typeOfImageToUpload))) {
    typeOfImageToUpload = parseInt(typeOfImageToUpload);
  } else {
    return resp.status(400).json({
      type: "Bad image upload type specified. Must be a valid integer.",
    });
  }

  if (_.invert(constants.imageUploadTypes)[typeOfImageToUpload] === undefined) {
    return resp.status(400).json({
      email:
        "Inavlid image type selected. Valid types are " +
        JSON.stringify(constants.imageUploadTypes),
    });
  }

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;
  // String for image token
  let generatedToken = uuidv4();

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    // console.log(fieldname, file, filename, encoding, mimetype);

    // Validate that the image user wants to upload is of the right format
    if (
      _.contains(
        [
          constants.imageUploadTypes.profilePic,
          constants.imageUploadTypes.idCard,
          constants.imageUploadTypes.idCardBack,
          constants.imageUploadTypes.passport,
          constants.imageUploadTypes.passportBack,
          constants.imageUploadTypes.driversLicense,
          constants.imageUploadTypes.driversLicenseBack,
        ],
        parseInt(typeOfImageToUpload)
      )
    ) {
      if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
        return resp
          .status(400)
          .json({ error: "Wrong file type submitted. Must be PNG or JPEG" });
      }
    } else {
      if (mimetype !== "application/pdf") {
        return resp
          .status(400)
          .json({ error: "Wrong file type submitted. Must be PDF" });
      }
    }

    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    // 32756238461724837.png
    imageFileName = `${Math.round(
      Math.random() * 1000000000000
    ).toString()}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype,
            //Generate token to be appended to imageUrl
            firebaseStorageDownloadTokens: generatedToken,
          },
        },
      })
      .then(() => {
        // Append token to url
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${generatedToken}`;
        return imageUrl;
        // return db.doc(`/users/${req.user.uid}`).update({ imageUrl });
      })
      .then((imageUrl) => {
        saveImagePathToObject(typeOfImageToUpload, imageUrl, userId);
        return resp.json({
          message: "image uploaded successfully",
          uploadImagePath: imageUrl,
        });
      })
      .catch((err) => {
        console.error(err);
        return resp.status(500).json({ error: "something went wrong" });
      });
  });
  busboy.end(req.rawBody);
};

function saveImagePathToObject(typeOfImage, url, userId) {
  switch (typeOfImage) {
    case constants.imageUploadTypes.profilePic:
      saveProfilePhoto(url, userId);
      break;
    default:
      break;
  }
}

function saveProfilePhoto(url, userId) {
  let obj = {
    imageUrl: url,
  };
  db.collection(constants.dbCollectionNames.USERS).doc(userId).update(obj);
}
