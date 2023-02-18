import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import TutorListReducer from "./TutorListReducer";
import ApplicationFormReducer from "./ApplicationFormReducer";
import TutorSettingReducer from "./TutorSettingReducer";
export default combineReducers({
  UserReducer,
  TutorListReducer,
  ApplicationFormReducer,
  TutorSettingReducer,
});
