const INITIALSTATE = {
  TutorInfoObj: {},
  AllTutorInfoArray: [],
  currentStep: 1,
  submitFormLoading: false,
  successSubmit: "",
  errorSubmit: "",
  uploadImage: {},
  iscompletedForm: false,
  validationError: {},
  funcStatus: "",
};

const ApplicationFormReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADDSUBJECT": {
      return { ...state, TutorInfoObj: action.payload };
    }
    case "REMOVESUBJECT": {
      return { ...state, TutorInfoObj: action.payload };
    }

    case "STEPS": {
      return { ...state, currentStep: action.payload };
    }

    case "IMAGE_SAVE": {
      return { ...state, uploadImage: action.payload };
    }
    case "COMPLETED_FILL_FORM": {
      return { ...state, iscompletedForm: action.payload };
    }
    case "LOADING_CREATE_APPLICATION_FORM": {
      return {
        ...state,
        submitFormLoading: true,
        successSubmit: "",
        errorSubmit: "",
        funcStatus: "",
      };
    }

    case "SUCCESS_CREATE_APPLICATION_FORM": {
      return {
        ...state,
        successSubmit: "SuccessFully submitted Form",
        errorSubmit: "",
        submitFormLoading: false,
        validationError: {},
        funcStatus: "",
      };
    }
    case "FAILURE_CREATE_APPLICATION_FORM": {
      return {
        ...state,
        errorSubmit: "submission Fail",
        submitFormLoading: false,
        funcStatus: "",
      };
    }
    case "ERROR_VALIDATION": {
      return {
        ...state,
        validationError: action.payload,
        errorSubmit: "submission Fail",
        successSubmit: "",
      };
    }
    case "REMOVE_ERROR": {
      return {
        ...state,
        errorSubmit: "",
      };
    }
    case "REMOVE_SUCCESS": {
      return {
        ...state,
        successSubmit: "",
      };
    }
    case "FUNC_CALL_STATUS": {
      return {
        ...state,
        funcStatus: action.payload,
      };
    }
    case "NULL_STATE_VALIDATION": {
      return {
        ...state,
        validationError: {},
        errorSubmit: "",
        successSubmit: "",
      };
    }

   
    default: {
      return state;
    }
  }
};

export default ApplicationFormReducer;
