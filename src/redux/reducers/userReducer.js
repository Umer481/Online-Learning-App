const INITIALSTATE = {
  user: {},
};

const userReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "USER": {
      return { ...state, user: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
