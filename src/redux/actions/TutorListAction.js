export default class TutorListAction {
  static TutorListCheck(payload) {
    return {
      type: "TUTORLISTCHECK",
      payload,
    };
  }

  static TutorSpecificDataAction(payload) {
    return {
      type: "TUTOR_SPECIFIC_DATA",
      payload,
    };
  }
}
