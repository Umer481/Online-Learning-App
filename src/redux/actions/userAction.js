export default class UserAction {
  static user(payload) {
    return {
      type: "USER",
      payload,
    };
  }
}
