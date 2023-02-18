import React, { Component } from "react";
import { Navbar, Nav, Col, Image, Button, ButtonGroup } from "react-bootstrap";
import logoImg from "../../assets/images/logo.png";
import { connect } from "react-redux";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {
  TutorListAction,
  ApplicationFormAction,
} from "./../../redux/actions/index";
class NavbarAfterLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: {},
      userInfo: {},
      routeName: "home",
      overlayToogle: false,
      pathName: "/",
      token: null,
      tutorListBtn: "online",
      submitFormLoading: false,
    };
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }
  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleClick, false);
    // get Token
    let token = JSON.parse(localStorage.getItem("userDetail"));
    let route = localStorage.getItem("routeName");
    this.setState({
      routeName: route ? route : "home",
      pathName: this?.props?.history?.location?.pathname,
      token: token?.token,
      tutorListBtn: this?.props?.tutorListCheck
        ? this?.props?.tutorListCheck
        : "online",
      submitFormLoading: this.props.submitFormLoading,
    });
  };
  handleClickOutside = () => {
    this.setState({
      overlayToogle: false,
    });
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      this.setState({
        overlayToogle: true,
      });
      return;
    }
    this.handleClickOutside();
  };
  componentDidUpdate = (prevProps) => {
    const {
      errorSubmit,
      validationError,
      successSubmit,
      currentStep,
    } = this.props;
    let currentPath = this?.props?.location?.pathname;
    let prevPath = prevProps.location?.pathname;
    if (currentPath !== prevPath) {
      this.setState({
        pathName: this?.props?.history?.location?.pathname,
      });
    }
    if (this?.props?.tutorListCheck !== prevProps.tutorListCheck) {
      this.setState({
        tutorListBtn: this?.props?.tutorListCheck
          ? this?.props?.tutorListCheck
          : "online",
      });
    }
    if (this.props.submitFormLoading !== prevProps.submitFormLoading) {
      this.setState({
        submitFormLoading: this.props.submitFormLoading,
      });
    }
    if (this.props.funcStatus === "done") {
      this.addAllTutorInfo();
    }
    if (errorSubmit && prevPath.errorSubmit !== errorSubmit) {
      this.showAlert(validationError?.data);
    } else {
      if (
        !currentStep === 9 &&
        successSubmit &&
        prevPath.successSubmit !== successSubmit
      ) {
        this.props.history.push("./tutoring-interest");
      }
    }
  };
  routeChange = (route, routeName) => {
    localStorage.setItem("routeName", routeName);
    this.setState({
      routeName,
    });
    this.props.history.push(route);
  };

  logOut = () => {
    localStorage.clear();
    this.props.history.push("/#");
    this.props.changeRoute();
  };
  addSubject = () => {
    localStorage.removeItem("ModeOfTutor");
    localStorage.removeItem("subjectObj");
    localStorage.removeItem("Qualification");
    this.props.history.push("/tutor-application-form");
  };

  showAlert = (validationError) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return validationError ? (
          <div className="custom-ui">
            <h4>Error with application form</h4>
            <ul>
              {Object.keys(validationError).map((error) =>
                error !== "devErrors" ? <li>{validationError[error]}</li> : ""
              )}
            </ul>
            <div className="btn-div">
              <button
                onClick={() => {
                  this.props.RemoveErrorSubmit();
                  onClose();
                }}
              >
                Ok
              </button>
            </div>
          </div>
        ) : (
          onClose()
        );
      },
      onClickOutside: () => this.props.RemoveErrorSubmit(),
    });
  };

  addAllTutorInfo = () => {
    const {
      TutorInfoObj,
      currentStep,
      user,
      location: { hash },
    } = this.props;
    const { submitFormLoading } = this.state;
    let findStep = hash.substring(1, 5);
    let findCurrentStep = "";
    if (findStep === "step") {
      findCurrentStep = Number(hash.substring(5, 6));
    } else if (findStep === "Firs") {
      findCurrentStep = 1;
    } else {
      findCurrentStep = 9;
    }
    let tutorObjNull = {
      step1: {
        subjects: {
          maths: {
            maths: [],
            statistics: [],
            "pure maths": [],
            "further maths": [],
          },
        },
        modeOfTeaching: 0,
        willignessToTravel: 0,
        address: {
          street: "",
          town: "",
          country: "",
          postCode: "",
        },
        addressLatLng: [],
        addressRaw: "",
      },
      step2: {
        previouslyTutored: false,
        lengthOfTeachingPractice: 0,
        socialUrls: [],
        certificates: {
          teachingAndEducation: [],
          doctoralDegree: [],
        },
        supportingDocs: [""],
      },
      step3: {
        tagline: "",
        bio: "",
        teachingStyle: "",
      },
      step4: {
        profilePhotoSelected: true,
        proilePhotoUrl: "",
      },
      step5: {
        employment: [
          {
            employerName: "",
            jobTitle: "",
            startDate: "",
            endDate: "",
            isCurrentJob: false,
          },
        ],
        education: [
          {
            schoolName: "",
            degree: "",
            startDate: "",
            endDate: "",
            isCurrent: false,
          },
        ],
      },
      step6: {
        ratePerHour: 0,
      },
      step7: {
        typeOfDocument: 0,
        authorizeToRunBgCheck: false,
        frontOfCardUrl: "",
        backOfCardUrl: "",
        dBSCertUrl: "",
      },
      step8: {
        accountHolderName: "",
        bankAccountShortCode: "",
        accountNumber: "",
      },
      step9: {
        confirmWorkEligiblility: false,
        confirmValidDocs: false,
        agreeToTOS: false,
        phoneNumber: "",
      },
    };

    let input = {
      applicationInput: {
        applicationStatus: 0,
        currentStep: findCurrentStep,
        step1: TutorInfoObj?.step1 ? TutorInfoObj.step1 : tutorObjNull.step1,
        step2: TutorInfoObj?.step2 ? TutorInfoObj.step2 : tutorObjNull.step2,
        step3: TutorInfoObj?.step3 ? TutorInfoObj.step3 : tutorObjNull.step3,
        step4: TutorInfoObj?.step4 ? TutorInfoObj.step4 : tutorObjNull.step4,
        step5: TutorInfoObj?.step5 ? TutorInfoObj.step5 : tutorObjNull.step5,
        step6: TutorInfoObj?.step6 ? TutorInfoObj.step6 : tutorObjNull.step6,
        step7: TutorInfoObj?.step7 ? TutorInfoObj.step7 : tutorObjNull.step7,
        step8: TutorInfoObj?.step8 ? TutorInfoObj.step8 : tutorObjNull.step8,
        step9: TutorInfoObj?.step9 ? TutorInfoObj.step9 : tutorObjNull.step9,
      },

      user_id: user.user.userId,
    };

    this.props.createApplicationFormAction(input);
    this.props.StepAction(findCurrentStep);
  };

  render() {
    const {
      userInfo,
      routeName,
      overlayToogle,
      pathName,
      tutorListBtn,
    } = this.state;
    return (
      <Col lg={12} md={12} sm={12} xs={12} className="after-login-nav-Col">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            {" "}
            <Image src={logoImg} alt="" class="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {pathName === "/tutors/search/" ? (
              <Nav className="mr-auto" style={{ color: "#000" }}>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    className={`tutorListBtn ${
                      tutorListBtn === "online" ? "active" : ""
                    }`}
                    onClick={() => {
                      this.setState({ tutorListBtn: "online" });
                      this.props.tutorListCheck("online");
                    }}
                  >
                    Online
                  </Button>
                  <Button
                    onClick={() => {
                      this.setState({ tutorListBtn: "in-person" });
                      this.props.tutorListCheck("in-person");
                    }}
                    className={`tutorListBtn ${
                      tutorListBtn !== "online" ? "active" : ""
                    }`}
                  >
                    In-Person
                  </Button>
                </ButtonGroup>
              </Nav>
            ) : pathName === "/tutor-application-form" ? (
              <Nav className="mr-auto" style={{ color: "#000" }}>
                <h3 style={{ fontWeight: "700" }}>
                  Create and submit tutor profile
                </h3>
              </Nav>
            ) : pathName === "/tutoring-interest" ? (
              <Nav className="mr-auto">
                <Nav.Link
                  className={`${"Tutoring" === "Tutoring" ? "active" : ""}`}
                >
                  Tutoring
                </Nav.Link>
                <Nav.Link
                  className={`${routeName === "Profile" ? "active" : ""}`}
                >
                  Profile
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="mr-auto">
                <Nav.Link
                  className={`${routeName === "home" ? "active" : ""}`}
                  onClick={() =>
                    this.routeChange("/tutor-dashboard/home", "home")
                  }
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  className={`${routeName === "inbox" ? "active" : ""}`}
                  onClick={() =>
                    this.routeChange("/tutor-dashboard/inbox", "inbox")
                  }
                >
                  Inbox
                </Nav.Link>
                <Nav.Link>Subject</Nav.Link>
                <Nav.Link>Studends</Nav.Link>
                <Nav.Link
                  className={`${routeName === "lesson" ? "active" : ""}`}
                  onClick={() =>
                    this.routeChange("/tutor-dashboard/lesson", "lesson")
                  }
                >
                  Lessons
                </Nav.Link>
                <Nav.Link
                  className={`${routeName === "availablity" ? "active" : ""}`}
                  onClick={() =>
                    this.routeChange(
                      "/tutor-dashboard/availability",
                      "availablity"
                    )
                  }
                >
                  Availablity
                </Nav.Link>
                <Nav.Link>Result</Nav.Link>
                <Nav.Link>Help</Nav.Link>
              </Nav>
            )}
            <div className="flex-center custom-overlay">
              {pathName === "/tutor-application-form" ? (
                <Button
                  style={{
                    border: "3px solid #2cb46c",
                    backgroundColor: "transparent",
                    color: "#2cb46c",
                    fontWeight: "900",
                    width: "165px",
                    height: "57px",
                    borderRadius: "10px",
                    marginRight: "20px",
                  }}
                  onClick={() =>
                    this.props.AddTutorInfoStepBeforeCallApi("loading...")
                  }
                >
                  Save and exit
                </Button>
              ) : (
                <Button
                  style={{
                    backgroundColor: "#fff",
                    border: "none",
                    marginRight: "20px",
                    color: "#2cb46c",
                    fontSize: "19px",
                    fontWeight: "500",
                  }}
                  // onClick={this.addSubject}
                >
                  {/* Add new Subject */}
                </Button>
              )}
              <div class="overlay-tooltip" ref={(node) => (this.node = node)}>
                <Image
                  roundedCircle
                  // onClick={() =>
                  //   this.setState({ overlayToogle: !overlayToogle })
                  // }
                  width="65px"
                  height="65px"
                  src={
                    this?.props?.user?.user?.imageUrl
                      ? this?.props?.user?.user?.imageUrl
                      : "https://firebasestorage.googleapis.com/v0/b/askademia-36826.appspot.com/o/no-img.png?alt=media&token=139f8f26-4fa9-4cdf-88d7-a27859180a12"
                  }
                />

                <div
                  class="tooltiptext"
                  style={{ visibility: overlayToogle ? "visible" : "" }}
                >
                  <div className="menu-div">
                    <div
                      className="text-style"
                      onClick={() => {
                        this.props.history.push("/tutor-dashboard/home");
                        this.setState({
                          overlayToogle: false,
                        });
                      }}
                    >
                      Dashboard
                    </div>
                    <div
                      className="text-style"
                      onClick={() => {
                        this.props.history.push("/tutor-dashboard/home");
                        this.setState({
                          overlayToogle: false,
                        });
                      }}
                    >
                      Profile
                    </div>
                    <div
                      className="text-style"
                      onClick={() => {
                        this.props.history.push("/help");
                        this.setState({
                          overlayToogle: false,
                        });
                      }}
                    >
                      Help and Support
                    </div>
                    <div
                      className="text-style"
                      onClick={() => {
                        this.props.history.push("/tutor-setting");
                        this.setState({
                          overlayToogle: false,
                        });
                      }}
                    >
                      Settings
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid #a0a4a5",
                        width: "100%",
                      }}
                    />
                    <div className="text-style" onClick={this.logOut}>
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    TutorListReducer: { tutorListCheck },
    UserReducer: { user },
    ApplicationFormReducer: {
      TutorInfoObj,
      submitFormLoading,
      successSubmit,
      errorSubmit,
      currentStep,
      funcStatus,
    },
  } = state;

  return {
    TutorInfoObj,
    submitFormLoading,
    successSubmit,
    errorSubmit,
    currentStep,
    tutorListCheck,
    user,
    funcStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
    tutorListCheck: (payload) =>
      dispatch(TutorListAction.TutorListCheck(payload)),
    createApplicationFormAction: (payload) =>
      dispatch(ApplicationFormAction.createApplicationFormAction(payload)),
    AddTutorInfoStepBeforeCallApi: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfoStepBeforeCallApi(payload)),
    StepAction: (payload) =>
      dispatch(ApplicationFormAction.StepAction(payload)),
    RemoveErrorSubmit: (payload) =>
      dispatch(ApplicationFormAction.RemoveErrorSubmit(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarAfterLogin);
