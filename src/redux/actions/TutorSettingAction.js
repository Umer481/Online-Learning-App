export default class TutorSettingAction {
  static TutorSettingStoreData(payload) {
    return {
      type: "TUTOR_SETTING_STORE_DATA",
      payload,
    };
  }
}
