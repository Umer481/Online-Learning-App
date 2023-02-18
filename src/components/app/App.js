import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import IndexPage from "../../pages/IndexPage";
import BecomeTutorPage from "../../pages/BecomeTutorPage";
import TutorDashboardPage from "./../../pages/TutorDashboardPage";
import StudentDashboardPage from "./../../pages/StudentDashboardPage";
import TutorInterestContainer from "./../../pages/TutorInterestContainer";
import TutorSubjectForm from "./../forms/tutorSubjectForm";
import QualificationForm from "./../forms/qualificationForm";
import ModeForTeach from "./../forms/ModeForTeach";
import TutorApplicationContainer from "../../pages/TutorApplicationContainer";
import TutorList from "./../../pages/TutorList";
import SpecificTutor from "./../../pages/SpecficTutor/index";
import NavbarAfterLogin from "../modals/NavbarAfterLogin";
import AthenticateRoutes from "./../privateRoute";
import NotFoundPage from "./../NotFoundPage";
import BookingRequest from "./../../pages/SpecficTutor/BookingRequest";
import RequestSession from "./../../pages/SpecficTutor/requestSession";
import ReviewAndPay from "./../../pages/SpecficTutor/ReviewAndPay";
import TutorMainPageSetting from "./../../pages/TutorSetting/TutorMainPageSetting";
import PersonalInformation from "./../../pages/TutorSetting/PersonalInformation";
import ServiceAndRefundPolicy from "./../../pages/TutorApplicationForm/ServiceAndRefundPolicy";
import UkSelfEmpLaw from "./../../pages/TutorApplicationForm/UkSelfEmpLaw";
import ChangePasswordSetting from "./../../pages/TutorSetting/ChangePasswordSetting";
import Inbox from "./../../pages/TutorInbox";
import Dashboard from "./../../pages/TutorDashboard/index";
import Lesson from "./../../pages/TutorLesson";
import Availability from "./../../pages/TutorAvailability";
import lessonDetails from "./../../pages/lessonDetails";
import TutorSettingIdentification from "./../../pages/TutorSetting/TutorSettingIdentification";

import { withRouter } from "react-router-dom";

import axios from "axios";
import jwtDecode from "jwt-decode";

axios.defaults.baseURL =
  // "http://localhost:5001/askademia-36826/us-central1/api";
  // axios.defaults.baseURL =
  "https://us-central1-askademia-36826.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  debugger;
  console.log(token);
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // Redirect user to login home page and tell them session expired,
    // we can request a new session on user's behalf
    // store.dispatch(logoutUser());
    // window.location.href = "/login";
  } else {
    // store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    // store.dispatch(getUserData());
  }
}

function IndexPageRender() {
  return <IndexPage />;
}

function BecomeTutorPageRender() {
  return <BecomeTutorPage />;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loginAlert: false,
    };
  }

  sucssesLogin = (data) => {
    localStorage.setItem("userDetail", JSON?.stringify(data.data));
    this.setState({
      user: data.data,
    });
  };

  changeRoute = () => {
    localStorage.clear();
    this.setState({
      user: {},
    });
  };

  componentDidMount() {
    debugger;
    const token = localStorage.getItem("FBIdToken");
    axios.defaults.headers.common["Authorization"] = token;
  }

  TutorDashboardPage = () => {
    return <TutorDashboardPage LogOut={this.LogOut} />;
  };

  render() {
    const token = localStorage.getItem("FBIdToken")
      ? localStorage.getItem("FBIdToken")
      : "";
    return (
      <Router>
        <div>
          {token ? (
            <Route
              exact
              path={[
                "/tutor-application-form",
                "/tutor-application-form/Subject",
                "/tutor-application-form/modeForTeach",
                "/tutor-application-form/qualificationForm",
                "/tutor-dashboard/home",
                "/tutor-dashboard/inbox",
                "/tutor-dashboard/lesson",
                "/tutor-dashboard/lessonDetails",
                "/tutor-dashboard/availability",
                "/tutoring-interest",
                "/tutors/search/",
                "/tutors/search/tutor/:id",
                "/tutors/search/tutor/:id/:tag",
                "/tutor-setting",
                "/Tutor-PersonalInformation",
                "/change-password",
                "/Tutor-setting-Identification",
              ]}
              render={(props) => (
                <div className="flex-center-center">
                  <div style={{ maxWidth: "2000px", width: "100%" }}>
                    <NavbarAfterLogin
                      changeRoute={this.changeRoute}
                      {...props}
                    />
                  </div>
                </div>
              )}
            />
          ) : (
            <Route
              path={[
                "/",
                "/tutors/search/",
                "/tutors/search/tutor/:id",
                "/tutors/search/tutor/:id/:tag",
              ]}
              exact
              render={(props) => (
                <Header
                  loginAlert={this.state.loginAlert}
                  sucssesLogin={this.sucssesLogin}
                  loginAlertHide={() => this.setState({ loginAlert: false })}
                  {...props}
                />
              )}
            />
          )}
          <div className="flex-center-center">
            <div style={{ maxWidth: "2000px", width: "100%" }}>
              <Switch>
                <Route path="/" exact component={IndexPageRender} />
                <AthenticateRoutes
                  exact
                  path="/become-a-tutor"
                  component={BecomeTutorPageRender}
                />
                <AthenticateRoutes
                  exact
                  path="/student-dashboard"
                  token={token}
                  changeRoute={this.changeRoute}
                  component={StudentDashboardPage}
                />
                <AthenticateRoutes
                  exact
                  path="/tutor-dashboard/home"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={Dashboard}
                />
                <AthenticateRoutes
                  exact
                  path="/tutor-dashboard/inbox"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={Inbox}
                />{" "}
                <AthenticateRoutes
                  exact
                  path="/tutor-dashboard/lesson"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={Lesson}
                />
                <AthenticateRoutes
                  exact
                  path="/tutor-dashboard/lessonDetails"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={lessonDetails}
                />
                <AthenticateRoutes
                  exact
                  path="/tutor-dashboard/availability"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={Availability}
                />
                <AthenticateRoutes
                  path="/tutor-application-form"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={TutorApplicationContainer}
                />
                <AthenticateRoutes
                  path="/tutoring-interest"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  component={TutorInterestContainer}
                />
                <AthenticateRoutes
                  path="/tutor-application-form/Subject"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={TutorSubjectForm}
                />
                <AthenticateRoutes
                  path="/tutor-application-form/modeForTeach"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={ModeForTeach}
                />
                {/* QualificationForm */}
                <AthenticateRoutes
                  path="/tutor-application-form/qualificationForm"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={QualificationForm}
                />
                <AthenticateRoutes
                  path="/Service-and-refundPolicy"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={ServiceAndRefundPolicy}
                />
                <AthenticateRoutes
                  path="/Uk-Self-EmpLaw"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={UkSelfEmpLaw}
                />
                {/* TutorMainPageSetting */}
                <AthenticateRoutes
                  path="/tutor-setting"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={TutorMainPageSetting}
                />
                <AthenticateRoutes
                  path="/change-password"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={ChangePasswordSetting}
                />
                <AthenticateRoutes
                  path="/Tutor-PersonalInformation"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={PersonalInformation}
                />
                <AthenticateRoutes
                  path="/Tutor-setting-Identification"
                  showAlert={() => this.setState({ loginAlert: true })}
                  token={token}
                  {...this.props}
                  exact
                  component={TutorSettingIdentification}
                />
                {/* TutorList */}
                <Route
                  exact
                  path="/tutors/search"
                  {...this.props}
                  component={TutorList}
                />
                <Route
                  exact
                  path="/tutors/search/tutor/:id"
                  {...this.props}
                  component={SpecificTutor}
                />
                <Route
                  exact
                  path="/tutors/search/tutor/:id/booking-request"
                  {...this.props}
                  component={BookingRequest}
                />
                <Route
                  exact
                  path="/tutors/search/tutor/:id/request-session"
                  {...this.props}
                  component={RequestSession}
                />
                <Route
                  exact
                  path="/tutors/search/tutor/:id/review-pay"
                  {...this.props}
                  component={ReviewAndPay}
                />
                <Route
                  exact
                  path="*"
                  render={(props) => <NotFoundPage props={props} />}
                />
              </Switch>
            </div>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    UserReducer: { user },
  } = state;
  return {
    user,
  };
};

export default connect(mapStateToProps, null)(withRouter(App));
