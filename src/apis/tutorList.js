import axios from "axios";

// GetLevels
export const getLevels = async (data) => {
  try {
    const resp = await axios({
      url: `/tutor/subject/levels`,
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

export const getTutors = async (data) => {
  try {
    const resp = await axios({
      url: `/tutors${data.search}`,
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

export const getSpecificTutor = async (data) => {
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

export const getReviewTutor = async (data) => {
  try {
    const resp = await axios({
      url: `/review/user/${data.id}?isMockData=true`,
      method: "GET",
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getSubjectTutor = async (data) => {
  try {
    const resp = await axios({
      url: `/subjects/user/${data.id}`,
      method: "GET",
    });
    return resp;
  } catch (err) {
    return err;
  }
};

export const getSubjectWithCategory=async(data)=>{
  
  try {
    const resp = await axios({
      url: `/application-subjects/user/${data.id}`,
      method: "GET",
    });
    return resp;
  } catch (err) {
    return err;
  }
}

// export const getPostCodeName = async (data) => {
//   try {
//     const resp = await axios({
//       baseURL: "https://api.postcodes.io",
//       url: `/postcodes?q=${data.searchLocation}`,
//       method: "GET",
//     });
//     return resp;
//   } catch (err) {
//     return err;
//   }
// };

export const getPostCodeName = async (data) => {
  try {
    const resp = await fetch(
      `https://api.postcodes.io/postcodes?q=${data.searchLocation}`
    );
    return resp.json();
  } catch (err) {
    return err;
  }
};

export const getPostCode = async (data) => {
  try {
    const resp = await fetch(
      `https://api.postcodes.io/postcodes/${data.text}/autocomplete`
    );
    return resp.json();
  } catch (err) {
    return err;
  }
};
