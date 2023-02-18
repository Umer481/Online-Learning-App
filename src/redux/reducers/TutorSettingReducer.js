const INITIALSTATE = {
    tutorSettingData: {},
  };
  
  const TutorSettingReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
      case "TUTOR_SETTING_STORE_DATA": {
        return { ...state, tutorSettingData: action.payload };
      }
     
      default: {
        return state;
      }
    }
  };
  
  export default TutorSettingReducer;
  