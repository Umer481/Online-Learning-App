const { _ } = require("underscore");
const { constants } = require("../util/constants");

const isEmailValid = (email) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

const isValidParamId = (data) => {
  let errors = {};
  if (isEmpty(data.params.id)) errors.userId = "User Id required";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must not be empty";
  } else if (!isEmailValid(data.email)) {
    errors.email = "Email must be a valid email address";
  }

  if (isEmpty(data.password)) errors.password = "Password must not be empty";

  if (isEmpty(data.firstName))
    errors.firstName = "First name must not be empty";

  if (isEmpty(data.lastName)) errors.lastName = "Last name must not be empty";

  if (data.isTutor === undefined)
    errors.isTutor = "Specify type of user. Missing isTutor value.";

  if (data.isTutor && data.dob === undefined) {
    errors.dob = "dob must be specified for tutor";
  } else if (
    data.isTutor &&
    new Date(data.dob).toDateString() === "Invalid Date"
  ) {
    errors.dob = "dob specified is invalid";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Email must not be empty";
  if (isEmpty(data.password)) errors.password = "Password not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateApplicationData = (data) => {
  let errors = {};

  if (data.applicationStatus === undefined) {
    errors.applicationStatus = "applicationStatus is required.";
  } else if (data.applicationStatus > 1 || data.applicationStatus < 0) {
    errors.applicationStatus = "Invalid applicationStatus option.";
  }

  if (data.currentStep === undefined) {
    errors.currentStep = "currentStep is required.";
  }

  if (data.step1 === undefined)
    errors.step1 = "step1 node, missing from payload";
  if (data.step2 === undefined)
    errors.step2 = "step2 node, missing from payload";
  if (data.step3 === undefined)
    errors.step3 = "step3 node, missing from payload";
  if (data.step4 === undefined)
    errors.step4 = "step4 node, missing from payload";
  if (data.step5 === undefined)
    errors.step5 = "step5 node, missing from payload";
  if (data.step6 === undefined)
    errors.step6 = "step6 node, missing from payload";
  if (data.step7 === undefined)
    errors.step7 = "step7 node, missing from payload";
  if (data.step8 === undefined)
    errors.step8 = "step8 node, missing from payload";
  if (data.step9 === undefined)
    errors.step9 = "step9 node, missing from payload";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateSubmittedApplication = (data) => {
  let errors = {};
  let devErrors = {};

  if (data.step1 !== undefined) {
    const step1 = data.step1;
    if (step1.subjects === undefined)
      errors.subjects = "Please specify subjects you will be teaching";

    if (step1.modeOfTeaching === undefined)
      errors.modeOfTeaching = "Please specify your mode of teaching";

    if (_.invert(constants.modeOfTeaching)[step1.modeOfTeaching] === undefined)
      devErrors.modeOfTeaching = "Invalid modeOfTeaching option";

    if (
      step1.modeOfTeaching !== undefined &&
      step1.modeOfTeaching !== constants.modeOfTeaching.online
    ) {
      if (step1.willignessToTravel === undefined)
        errors.willignessToTravel =
          "Please select how much you are willing to travel to meet your students";

      if (step1.addressLatLng === undefined) {
        devErrors.addressLatLng = "addressLatLng, missing from payload";
      }

      if (
        step1.addressLatLng !== undefined &&
        Array.isArray(step1.addressLatLng) &&
        step1.addressLatLng.length !== 2
      )
        devErrors.addressLatLngSize =
          "addressLatLng, must be be a two element array with lat and lng values";

      if (step1.address === undefined)
        devErrors.address = "Please enter your full address";

      if (step1.address !== undefined) {
        if (step1.address.street === undefined)
          errors.street = "Please enter street information";

        if (step1.address.town === undefined) errors.town = "Please enter town";

        if (step1.address.country === undefined)
          errors.country = "Please enter country";

        if (step1.address.postCode === undefined)
          errors.postCode = "Please enter your post code";
      }
    }
  }

  if (data.step2 !== undefined) {
    const step2 = data.step2;
  }

  if (data.step3 === undefined || Object.keys(data.step3).length === 0) {
    data.step3 = {};
  }

  const step3 = data.step3;
  if (step3.tagline === undefined || isEmpty(step3.tagline))
    errors.tagline = "Please enter a tag line to be visible on your profile";

  if (step3.bio === undefined || isEmpty(step3.bio))
    errors.bio = "Please enter your bio information";

  if (step3.teachingStyle === undefined || isEmpty(step3.teachingStyle))
    errors.teachingStyle = "Please enter your style of teaching ";

  if (data.step4 !== undefined) {
    const step4 = data.step4;

    if (step4.proilePhotoUrl === undefined || isEmpty(step4.proilePhotoUrl))
      errors.proilePhotoUrl = "Missing profile photo";
  }

  if (data.step5 === undefined || Object.keys(data.step5).length === 0) {
    data.step5 = {};
  }

  if (data.step5 !== undefined) {
    const step5 = data.step5;

    if (step5.employment === undefined)
      errors.employment = "Employment information missing";

    if (Object.keys(step5).length !== 0 && step5.constructor !== Object) {
      if (step5.employment !== undefined && !Array.isArray(step5.employment)) {
        errors.step5.employment = "Employment must be a list";
      } else {
        for (var i = 0; i < step5.employment.length; i++) {
          let employer = step5.employment[i];
          if (
            employer.employerName === undefined ||
            isEmpty(employer.employerName)
          )
            errors.employerName = "Employer name missing";

          if (employer.jobTitle === undefined || isEmpty(employer.jobTitle))
            errors.jobTitle = "Job title missing";

          if (employer.startDate === undefined || isEmpty(employer.startDate))
            errors.startDate = "Job Start date missing";

          if (employer.endDate === undefined || isEmpty(employer.endDate))
            errors.endDate = "Job end date missing";

          if (employer.isCurrentJob === undefined)
            errors.isCurrentJob =
              "Must specify if currently employed at this employer or not";
        }
      }
    }

    if (step5 === undefined || Object.keys(step5).length === 0) {
      step5 = {};
    }

    if (step5.education === undefined) {
      errors.education = "Missing Education information";
    } else if (
      step5.education !== undefined &&
      !Array.isArray(step5.education)
    ) {
      errors.education = "Education must be a list";
    } else {
      for (var i = 0; i < step5.education.length; i++) {
        let education = step5.education[i];
        if (education.schoolName === undefined || isEmpty(education.schoolName))
          errors.schoolName = "School name missing";

        if (education.degree === undefined || isEmpty(education.degree))
          errors.degree = "Degree held at school missing";

        if (education.startDate === undefined || isEmpty(education.startDate))
          errors.startDate = "School Start date missing";

        if (education.endDate === undefined || isEmpty(education.endDate))
          errors.endDate = "School end date missing";

        if (education.isCurrent === undefined)
          errors.isCurrent =
            "Must specify if currently attending this school or not";
      }
    }
  }

  if (data.step6 === undefined || Object.keys(data.step6).length === 0) {
    data.step6 = {};
  }

  if (data.step6 !== undefined) {
    const step6 = data.step6;

    console.log("Rate us : ", step6.ratePerHour);
    if (step6.ratePerHour === undefined || step6.ratePerHour < 1)
      errors.ratePerHour = "Rate per hour missing";
  }

  if (data.step7 === undefined || Object.keys(data.step7).length === 0) {
    data.step7 = {};
  }

  if (data.step7 !== undefined) {
    const step7 = data.step7;

    if (
      step7.authorizeToRunBgCheck === undefined ||
      step7.authorizeToRunBgCheck == false
    )
      errors.authorizeToRunBgCheck =
        "You must agree for us to run a background check";

    if (step7.typeOfDocument === undefined)
      errors.typeOfDocument =
        "You must specify document type that you are uploading";

    if (
      _.invert(constants.imageUploadTypes)[step7.typeOfDocument] === undefined
    )
      errors.typeOfDocument = "Invalid type of document selected";

    if (step7.frontOfCardUrl === undefined || isEmpty(step7.frontOfCardUrl))
      errors.frontOfCardUrl = "Please upload front of the document";

    if (step7.backOfCardUrl === undefined || isEmpty(step7.backOfCardUrl))
      errors.backOfCardUrl = "Please upload back of the document";

    if (step7.dBSCertUrl === undefined || isEmpty(step7.dBSCertUrl))
      errors.dBSCertUrl = "Please upload DBS Certificate";
  }

  if (data.step8 === undefined || Object.keys(data.step8).length === 0) {
    data.step8 = {};
  }

  if (data.step8 !== undefined) {
    const step8 = data.step8;

    if (
      step8.accountHolderName === undefined ||
      step8.accountHolderName.length < 1
    )
      errors.accountHolderName = "Account holder name missing";

    if (
      step8.bankAccountShortCode === undefined ||
      step8.bankAccountShortCode.length < 1
    )
      errors.bankAccountShortCode = "Bank Account short code missing";

    if (step8.accountNumber === undefined || step8.accountNumber.length < 1)
      errors.accountNumber = "Account number missing";
  }

  if (data.step9 === undefined || Object.keys(data.step9).length === 0) {
    data.step9 = {};
  }

  if (data.step9 !== undefined) {
    const step9 = data.step9;

    if (
      step9.confirmWorkEligiblility === undefined ||
      step9.confirmWorkEligiblility === false
    )
      errors.confirmWorkEligiblility = "You must confirm your work eligibility";

    if (
      step9.confirmValidDocs === undefined ||
      step9.confirmValidDocs === false
    )
      errors.confirmValidDocs =
        "You must confirm that the documents you uploaded are valid";

    if (step9.agreeToTOS === undefined || step9.agreeToTOS === false)
      errors.agreeToTOS =
        "You must agree to all our terms of services before you can proceed";

    if (step9.phoneNumber === undefined || isEmpty(step9.phoneNumber))
      errors.phoneNumber = "Phone number missing";
  }

  if (Object.keys(errors).length > 0) {
    errors.devErrors = devErrors;
  }

  if (Object.keys(errors).length === 0 && Object.keys(devErrors).length) {
    errors.devErrors = devErrors;
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

module.exports = {
  isEmpty,
  isValidParamId,
  validateLoginData,
  validateSignupData,
  isEmailValid,
  validateApplicationData,
  validateSubmittedApplication,
};
