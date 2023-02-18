import { createApplicationForm } from "./../../apis/tutors";
export default class ApplicatinFormAction {
  static AddTutorInfo(payload) {
    return {
      type: "ADDSUBJECT",
      payload,
    };
  }

  static RemoveTutorInfo(payload) {
    return {
      type: "REMOVESUBJECT",
      payload,
    };
  }
  static StepAction(payload) {
    return {
      type: "STEPS",
      payload,
    };
  }

  static ImageUploadAction(payload) {
    return {
      type: "IMAGE_SAVE",
      payload,
    };
  }
  //

  static completedFillForm(payload) {
    return {
      type: "COMPLETED_FILL_FORM",
      payload,
    };
  }
  static RemoveErrorSubmit(payload) {
    return {
      type: "REMOVE_ERROR",
      payload,
    };
  }
  static RemoveSuccessSubmit(payload) {
    return {
      type: "REMOVE_SUCCESS",
      payload,
    };
  }
  static NullStateValidation(payload) {
    return {
      type: "NULL_STATE_VALIDATION",
      payload,
    };
  }

  

  static AddTutorInfoStepBeforeCallApi(payload) {
    return {
      type: "FUNC_CALL_STATUS",
      payload,
    };
  }
  static createApplicationFormAction(payload) {
    return (dispatch) => {
      dispatch({ type: "LOADING_CREATE_APPLICATION_FORM" });
      if (payload) {
        createApplicationForm(payload)
          .then((res) => {
            if (res.status !== 200) {
              if (JSON.parse(JSON.stringify(res.response)).status !== 500) {
                return dispatch({
                  type: "ERROR_VALIDATION",
                  payload: JSON.parse(JSON.stringify(res.response)),
                });
              } 
            } else {
              return dispatch({
                type: "SUCCESS_CREATE_APPLICATION_FORM",
                payload: "",
              });
            }
          })
          .catch((err) => console.log("==="));
      }
    };
  }
}
