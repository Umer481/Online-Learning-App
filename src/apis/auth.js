/**
 * @module auth
 */
import axios from "axios";
import logger from "../util/logger";

/**
 * Perform login operation.
 * 
 * @param {object} data - Signup information 
 * {
    email: String,
    password: String
  }
 */
export const login = async (data) => {
  logger.info("Request made to log user into our system");
  try {
    const resp = await axios({
      url: "/login",
      method: "POST",
      data: data,
    });
    localStorage.setItem(
      "isApplicationAccepted",
      resp.data.user.isApplicationAccepted
    );
    setAuthorizationHeader(resp.data.token);

    return resp;
  } catch (err) {
    return err;
  }
};

/**
 * Signup user into the system.
 * 
 * @param {object} data - Signup information 
 * {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    recieveMarketingEmails: Boolean,
    isTutor: Boolean
  }
 */
export const signup = async (data) => {
  logger.info("Request made to signup user into our system");
  try {
    const resp = await axios({
      url: "/signup",
      method: "POST",
      data: data,
    });
    setAuthorizationHeader(resp.data.token);
    return resp;
  } catch (err) {
    return err;
  }
};

/**
 * Perform password reset operation.
 * 
 * @param {object} data - User email object 
 * {
    email: String
  }
 */
export const passwordRest = async (data) => {
  logger.info("Request made to change user password");
  try {
    const resp = await axios({
      url: "/password-reset",
      method: "POST",
      data: data,
    });
    return resp;
  } catch (err) {
    return err;
  }
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem("FBIdToken", FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
