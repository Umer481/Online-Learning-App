const functions = require("firebase-functions");
var express = require("express");
const FireBaseAuth = require("./util/fireBaseAuth");

var app = express();

const {
  uploadImage,
  getUser,
  getProfileSuggestions,
  getUserAuthenticated,
  updateSettings,
} = require("./handlers/users");
const { getAllNotifications } = require("./handlers/notification");
const {
  getAllTutors,
  getAnalytics,
  getAllSessions,
  getAvailability,
  updateAvailability,
  tutorApplication,
  currentApplication,
  subjectLevels,
} = require("./handlers/tutors");
const {
  login,
  signup,
  resetPassword,
  logout,
} = require("./handlers/authentication");
const {
  createSession,
  updateSessionStatus,
  deleteSession,
  getSession,
} = require("./handlers/session");
const {
  getReviewForUser,
  createReview,
  updateReview,
} = require("./handlers/reviews");
const {
  getSubjectsForUser,
  allSubjects,
  subjectByCategory,
  allCategories,
  allLevels,
  getApplicationSubjects,
} = require("./handlers/subjects");
const {
  updateNotificationSettings,
  getNotificationSeettings,
} = require("./handlers/notificationSettings");

const cors = require("cors");
app.use(cors());
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Authentication API's
app.post("/login", login);
app.post("/signup", signup);
app.post("/password-reset", resetPassword);
app.post("/logout", logout);

// User API's
app.post("/user/upload", FireBaseAuth, uploadImage);
app.get("/user/:id", getUser);
app.get("/user/authenticated/:id", FireBaseAuth, getUserAuthenticated);
app.get("/user/tips/:id", FireBaseAuth, getProfileSuggestions);
app.post("/user/settings", FireBaseAuth, updateSettings);

// All tutor related API's
app.get("/tutors", getAllTutors);
app.get("/tutor/analytics/:id", FireBaseAuth, getAnalytics);
app.get("/tutor/sessions/:id", FireBaseAuth, getAllSessions);
app.get("/tutor/availability/:id", FireBaseAuth, getAvailability);
app.post("/tutor/availability/update/:id", FireBaseAuth, updateAvailability);
app.post("/tutor/subjects", FireBaseAuth, getAvailability);
app.post("/tutor/verification-docs", FireBaseAuth, getAvailability);
app.post("/tutor/tutor-application/:id", FireBaseAuth, tutorApplication);
app.get(
  "/tutor/tutor-application/current/:id",
  FireBaseAuth,
  currentApplication
);
app.get("/tutor/subject/levels", subjectLevels);
app.get("/tutor/subject/all", allSubjects);
app.get("/tutor/subject/subjectByCategory", subjectByCategory);
app.get("/tutor/subject/allCategories", allCategories);
app.get("/tutor/subject/allLevels", allLevels);

// Notification API's
app.get("/notifications/:id", FireBaseAuth, getAllNotifications);

// User notification settings API's
app.get("/settings/notification", FireBaseAuth, getNotificationSeettings);
app.post("/settings/notification", FireBaseAuth, updateNotificationSettings);

// Session API's
app.post("/session", FireBaseAuth, createSession);
app.post("/session/status/:id", FireBaseAuth, updateSessionStatus);
app.delete("/session/:id", FireBaseAuth, deleteSession);
app.get("/session/:id", FireBaseAuth, getSession);

// Review API's
app.post("/review/user/:id", FireBaseAuth, createReview);
app.get("/review/user/:id", getReviewForUser);
app.put("/review/user/:id", updateReview);

// Subjects API's
app.get("/subjects/user/:id", getSubjectsForUser);
app.get("/application-subjects/user/:id", getApplicationSubjects);

exports.api = functions.https.onRequest(app);
