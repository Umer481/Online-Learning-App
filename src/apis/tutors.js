/**
 * @module tutor
 */
import axios from "axios";

/**
 * @description Get all tutor details from backend
 *
 */

export const createApplicationForm = async (params) => {
  try {
    const resp = await axios({
      url: `/tutor/tutor-application/${params.user_id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: params.applicationInput,
    });

    return resp;
  } catch (error) {
    console.log('error===>>',error)
    return error;
  }
};

export const uploadImage = async (params) => {
  // var bodyFormData = new FormData();
  // bodyFormData.append('image', params.file);

  try {
    const resp = await axios({
      url: `/user/upload?type=${params.typeNo}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: params.file,
    });

    return resp;
  } catch (error) {
    return error;
  }
};

export const getTutorApplication = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/tutor-application/current/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getAllSubject = async () => {
  try {
    const resp = await axios({
      url: `/tutor/subject/all`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getAllTutors = async (params) => {
  let urlQuery = "?";
  if (params.subject) {
    urlQuery += "subject=" + params.subject;
  }

  if (params.mode) {
    urlQuery += "&mode=" + params.mode;
  }

  if (params.level) {
    urlQuery += "&level=" + params.level;
  }

  if (params.postCode) {
    urlQuery += "&postCode=" + params.postCode;
  }

  axios
    .get("/tutors" + urlQuery)
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

export const notifications = async (data) => {
  try {
    const resp = await axios({
      url: `/notifications/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const analytics = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/analytics/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getallSessions = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/sessions/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

// availability
export const availability = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/availability/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const TipsApi = async (data) => {
  try {
    const resp = await axios({
      url: `/user/tips/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

// User info.
export const getUser = async (data) => {
  try {
    const resp = await axios({
      url: `/user/${data.id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

// Getinbox
export const getMessages = async (data) => {
  try {
    const resp = await axios({
      url: `/message/user/${data.id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        queryType: 0,
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};
// GetLesson
export const getLesson = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/sessions/1234`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

// user/authenticated/AlnTx2WFicN5HRPOfsCHMvLupPw1
export const getSetting = async (data) => {
  try {
    const resp = await axios({
      url: `/user/authenticated/${data.user_id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getLangLat = async (location) => {
  try {
    const resp = await fetch(
      `https://www.mapquestapi.com/geocoding/v1/address?key=5Rxi4IU96mTWoh2uagk2yyPhAWnO0OuE&inFormat=kvp&outFormat=json&location=${location}&thumbMaps=false`
    );
    return resp.json();
  } catch (err) {
    return err;
  }
};



// POST /user/settings

export const updateTutorSettings = async (params) => {
  try {
    const resp = await axios({
      url: `/user/settings`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: params.updateSetting,
    });

    return resp;
  } catch (error) {
    console.log('error===>>',error)
    return error;
  }
};