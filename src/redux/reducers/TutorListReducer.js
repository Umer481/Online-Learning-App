const INITIALSTATE = {
  tutorListCheck: "online",
  tutorSpecficData: {},
};

const TutorListReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "TUTORLISTCHECK": {
      return { ...state, tutorListCheck: action.payload };
    }
    case "TUTOR_SPECIFIC_DATA": {
      return { ...state, tutorSpecficData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default TutorListReducer;
