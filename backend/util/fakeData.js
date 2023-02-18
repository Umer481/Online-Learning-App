require("datejs");
const uuidv4 = require("uuid/v4");
const { _ } = require("underscore");
const { constants } = require("./constants");

module.exports.fakeData = {
  subjects: [
    {
      level: "IB",
      userId: "F7RAubwBrTgFVDQBi9Ea0slEzlz1",
      subject: "pure maths",
      category: "maths",
    },
    {
      category: "maths",
      level: "Primary",
      userId: "F7RAubwBrTgFVDQBi9Ea0slEzlz1",
      subject: "maths",
    },
    {
      uid: "f7982517-bd6c-4c97-9b75-3fbda67d64f8",
      category: "maths",
      level: "IB",
      userId: "F7RAubwBrTgFVDQBi9Ea0slEzlz1",
      subject: "maths",
    },
    {
      subject: "statistics",
      category: "maths",
      level: "A-level",
      userId: "F7RAubwBrTgFVDQBi9Ea0slEzlz1",
    },
  ],
  reviews: [
    {
      createdAt: new Date(),
      studentId: uuidv4(),
      tutorId: uuidv4(),
      details: "Worth every penny and I will definately recommend this tutor!",
      response: "Many thanks for the review, glad you enjoyed it",
      courseTutored: "math lesson",
      lessonId: "",
      scale: {
        communication: 3,
        teachingStyle: 4,
        content: 5,
        interaction: 4,
        knowledge: 4,
        timeliness: 5,
      },
    },
    {
      createdAt: new Date(),
      studentId: uuidv4(),
      tutorId: uuidv4(),
      details:
        "After taking both SAT and ACT practice test, we decided to work on the ACT which was a better fit",
      response: "",
      courseTutored: "english lesson",
      lessonId: "",
      scale: {
        communication: 3,
        teachingStyle: 4,
        content: 5,
        interaction: 4,
        knowledge: 4,
        timeliness: 5,
      },
    },
  ],
  tutorDetail: {
    reviews: [],
    tutorDetail: {
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu fringilla massa. Vestibulum fermentum consequat euismod. Maecenas feugiat tellus a luctus faucibus. Sed tempor vestibulum elementum. Praesent quis sapien sed risus sagittis vehicula vitae nec sapien. Curabitur mollis hendrerit felis et auctor. Vestibulum tincidunt, turpis ut blandit iaculis, ipsum justo cursus lacus, sit amet accumsan dolor arcu vel est. Nunc bibendum congue rhoncus. Aliquam aliquam eros eu eros porttitor, et ullamcorper nisi aliquet.",
      tagline: "Passionate about teaching",
      teachingStyle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu fr.",
    },
    employment: [
      {
        employerName: "Berkshire Bank",
        jobTitle: "Analyst",
        startDate: "04/2019",
        endDate: "",
        isCurrentJob: true,
      },
      {
        employerName: "London Eye",
        jobTitle: "Tour guide",
        startDate: "04/2017",
        endDate: "06/2018",
        isCurrentJob: false,
      },
    ],
    education: [
      {
        schoolName: "University of Lancater",
        degree: "BSC.",
        startDate: "04/2011",
        endDate: "04/2015",
        isCurrent: false,
      },
    ],
  },
  applicationData: {
    applicationStatus: 0, // 0 => in progress, 1 => submitted
    currentStep: 3,
    step1: {
      subjects: {
        maths: {
          maths: ["Primary", "IB"],
          statistics: ["A-level"],
        },
      },
      modeOfTeaching: 0, //0 => online & in-person, 1 => online, 2 =>In person
      willignessToTravel: 0, // 0 => only teach at home
      address: {
        street: "",
        town: "",
        country: "",
        postCode: "",
      },
    },
    step2: {
      previouslyTutored: true,
      teachingCerts: false,
      lengthOfTeachingPractice: 0, // 0 => less than a year, 1 => 1- 4yrs, 2 => more than 5yrs
      urlsOfCerts: ["https://www.instagram.com/mikey_wets/"],
    },
    step3: {
      tagline: "",
      bio: "",
      teachingStyle: "",
    },
    step4: {
      profilePhotoSelected: true,
      proilePhotoUrl: "",
    },
    step5: {
      employment: [
        {
          employerName: "",
          jobTitle: "",
          startDate: "",
          endDate: "",
          isCurrentJob: false,
        },
      ],
      education: [
        {
          schoolName: "",
          degree: "",
          startDate: "",
          endDate: "",
          isCurrent: false,
        },
      ],
    },
    step6: {
      ratePerHour: 30,
    },
    step7: {
      typeOfDocument: 0, // 0 => drivers license, 1 => passport, 2 => ID
      authorizeToRunBgCheck: true,
      frontOfCardUrl: "",
      backOfCardUrl: "",
      dBSCertUrl: "",
    },
    step8: {
      accountHolderName: "",
      bankAccountShortCode: "",
      accountNumber: "",
    },
    step9: {
      confirmWorkEligiblility: null,
      confirmValidDocs: null,
      agreeToTOS: null,
      phoneNumber: "",
    },
  },
  getTutors: [
    {
      name: "Thomas Keynear",
      rating: "4.98",
      tagline: "Passionate Maths and Physics tutor",
      bio: "",
      totalReview: 20,
      hourlyRate: 30,
      profileImage: "",
      canTeachOnline: true,
      starTutorRating: true,
      userId: uuidv4(),
      latLng: [42.25999, -70.98606],
    },
    {
      name: "Ashley Smithson",
      rating: "N/A",
      tagline: "I love helping others succeed",
      bio: "",
      totalReview: 0,
      hourlyRate: 15,
      profileImage: "",
      canTeachOnline: false,
      starTutorRating: false,
      userId: uuidv4(),
      latLng: [],
    },
  ],
  getAllSessions: [
    {
      status: _.invert(constants.sessionState)[0],
      student: "Mawuli A.",
      tutor: "James Smith",
      studentId: uuidv4(),
      tutorId: uuidv4(),
      date: new Date("2020-03-03T08:51:57.164Z").toString("MMMM dS, yyyy"),
      day: constants.days[new Date("2020-03-03T08:51:57.164Z").getDay()],
      time: "17:00PM - 18PM",
      booked: new Date().toString,
      subject: "GCSE Maths",
      notes: "Understanding trig and differential equations",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      earningAmount: "$60.00",
      sessionType: _.invert(constants.sessionType)[0],
      lessonNo: "1 out of 10",
    },
    {
      id: "e10b7609-2a11-47d4-8304-33c928fbb0c2",
      name: "James M.",
      subject: "GSCE Math",
      date: "Monday 2nd October 2020",
      notes: "Understanding trig and differential equations",
      time: "17:00pm - 18:00pm",
      status: "online",
    },
    {
      id: "dd81405a-0799-4a0d-b299-642b5f07d35c",
      name: "Tommas K.",
      subject: "O-Level English",
      date: "Tuesday 2nd November 2020",
      notes: "Hamlet and Othelo",
      time: "17:00pm - 18:00pm",
      status: "completed",
    },
    {
      id: "dd81405a-0799-4a0d-b299-642b5f07d35c",
      name: "Mawuli J.",
      subject: "O-Level English",
      date: "Tuesday 2nd November 2020",
      notes: "Hamlet and Othelo",
      time: "17:00pm - 18:00pm",
      status: "new",
    },
  ],
  availability: [
    {
      timeStatus: "Morning",
      time: "Pre 12am",
      week: {
        mon: {
          status: "unavailable",
          hour1: true,
          hour2: false,
          houur3: true,
        },
        tues: "available",
        wed: "booked",
        thus: "available",
        fri: "booked",
        sat: "unavailable",
        sun: "available",
      },
    },
    {
      timeStatus: "Afternoon",
      time: "12 - 3pm",
      week: {
        mon: "unavailable",
        tues: "available",
        wed: "booked",
        thus: "booked",
        fri: "booked",
        sat: "available",
        sun: "unavailable",
      },
    },
    {
      timeStatus: "Late Afternoon",
      time: "4 - 6pm",
      week: {
        mon: "unavailable",
        tues: "available",
        wed: "booked",
        thus: "booked",
        fri: "booked",
        sat: "available",
        sun: "unavailable",
      },
    },
    {
      timeStatus: "Evening",
      time: "6 - 8pm",
      week: {
        mon: "unavailable",
        tues: "available",
        wed: "booked",
        thus: "available",
        fri: "booked",
        sat: "unavailable",
        sun: "available",
      },
    },
    {
      timeStatus: "Late Evening",
      time: "After 8pm",
      week: {
        mon: "available",
        tues: "available",
        wed: "booked",
        thus: "unavailable",
        fri: "booked",
        sat: "unavailable",
        sun: "unavailable",
      },
    },
  ],
  analytics: {
    totalRating: "4.0",
    totalReviews: "300",
    lastMonthEarnings: "220",
    upcomingSessionCount: "61",
    responseRate: "80%",
    profileViews: "71",
  },
  profileSuggestions: [
    {
      linkAction: "Jobs",
      text: "Apply for tutoring opportunities near you.",
      icon: "searchbox.png",
    },
    {
      linkAction: "Rate",
      text: "Consider lowering your rates.",
      icon: "pound-sterling1.png",
    },
    {
      linkAction: "Order",
      text:
        "Consider our digital pad or stylus pen to annotate freely during online lessons.",
      icon: "marketplace.png",
    },
  ],
};
