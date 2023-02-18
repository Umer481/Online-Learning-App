const removePIIFromPublicTutor = (d) => {
  delete d.uid;
  delete d.banking;
  delete d.verificationDoc;
  delete d.addressRaw;
  delete d.agreeToTOS;
  delete d.addressLatLng;
  delete d.address;
  delete d.addressLatLng;
  delete d.uid;
  delete d.supportingDocs;
  delete d.currentStep;
  delete d.confirmWorkEligibility;
  delete d.confirmValidDocs;
  return d;
};

const removePIIFromPublicUser = (d) => {
  delete d.dob;
  delete d.isApplicationAccepted;
  delete d.recieveMarketingEmails;
  delete d.phoneNumber;
  delete d.uid;
  return d;
};

module.exports = {
  removePIIFromPublicTutor,
  removePIIFromPublicUser,
};
