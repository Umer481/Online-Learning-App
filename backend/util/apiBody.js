require("datejs");
const uuidv4 = require("uuid/v4");
const { _ } = require("underscore");
const { constants } = require("./constants");

module.exports.apiRequestBody = {
  updateAvailability: {
    day: 0, // Sunday
    status: "available", // unavailable - remove entry in DB
    slotType: "morning", // 0...n
    startTime: "8:00AM",
    endTime: "9:00AM",
  },
  allAvailabilityResponse: [
    {
      day: 0, // Sunday
      status: "available",
      slots: [
        {
          type: "morning",
          startTime: "8:00AM",
          endTime: "11:30AM",
        },
        {
          type: "afternoon",
          startTime: "12:30PM",
          endTime: "1:00PM",
        },
        {
          type: "lateAfternoon",
          startTime: "4:00PM",
          endTime: "5:00PM",
        },
        {
          type: "evening",
          startTime: "6:30PM",
          endTime: "8:30PM",
        },
        {
          type: "lateEvening",
          startTime: "9:00PM",
          endTime: "12:00AM",
        },
      ],
    },
    {
      day: 1, // Monday
      status: "available",
      slots: [
        {
          type: "lateEvening",
          startTime: "9:00PM",
          endTime: "9:30PM",
        },
      ],
    },
  ],
  notificationSettings: {
    marketingEmails: false,
    newRequestAndUpcomingLessonText: false,
    newRequestAndUpcomingLessonEmail: false,
    messagesText: false,
    messagesEmail: false,
    lessonAndFeedbackReminderText: false,
    lessonAndFeedbackReminderEmail: false,
    jobOpportunitiesEmail: false,
    updatesAndPromoText: false,
    updatesAndPromoEmail: false,
  },
  settings: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    recieveMarketingEmails: true,
    bio: "",
    tagline: "",
    teachingStyle: "",
    socialLinks: [],
    previouslyTutored: true,
    subjects: {},
    address: {
      street: "33 SE Street",
      town: "London",
      country: "UK",
      postCode: "L12 AB",
    },
    addressLatLng: [66.56788, -41.34566],
    addressRaw: "33 SE Street London UK L12 AB",
    certificates: {
      teachingAndEducation: ["Primary", "Bachelor of Education"],
      doctoralDegree: ["University Lecturer"],
    },
    accountHolderName: "Tawheed Raheem",
    bankAccountShortCode: "XDFK",
    accountNumber: "1234567",
  },
  employment: [
    {
      employerName: "London Eye",
      jobTitle: "Tour guide",
      startDate: "2020-04-27T20:12:55.53",
      endDate: "2020-04-27T20:12:55.53",
      isCurrentJob: false,
    },
  ],
  education: [
    {
      schoolName: "University of Lancaster",
      degree: "BSc.",
      startDate: "2010-04-27T20:12:55.53",
      endDate: "2014-04-27T20:12:55.53",
      isCurrent: false,
    },
  ],
};
