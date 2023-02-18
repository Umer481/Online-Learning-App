import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  Alert,
  Image,
  Button,
  ButtonGroup,
  Col,
} from "react-bootstrap";

import "../../styles/components/layout/header.scss";
import logoImg from "../../assets/images/logo.png";
import LoginModal from "./../modals/Login.Modal";
import SignUpDecision from "./../modals/SignUpDecision";
import TutorSignupModal from "./../modals/TutorSignup.Modal";
import TuteeSignupModal from "./../modals/TutueeSignup.Modal";
import PasswordResetModal from "./../modals/PasswordReset.Modal";
import RegForm from "./../forms/RegFrom";
import { signup, login, passwordRest } from "././../../apis/auth";
import { connect } from "react-redux";
import {
  TutorListAction,
  ApplicationFormAction,
  UserAction,
} from "./../../redux/actions/index";
import { getTutorApplication } from "./../../apis/tutors";
import { getSubjectWithCategory } from "./../../apis/tutorList";

var regExpr = /^\s+$|^$/gi;
class Header extends Component {
  constructor() {
    super();
    this.state = {
      fixedHeader: false,
      isOpen: false,
      signInopenModal: false,
      signUpopenModal: false,
      tutorOpenModal: false,
      tutueeOpenModal: false,
      passwordResetOpenModal: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isTutor: false,
      isReciveEmails: false,
      loading: false,
      validate: false,
      pathName: "/",
      tutorListBtn: "online",
      DOB: "",
      dobValidate: true,
      tutorSubjectObj: {},
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });

    this.setState({
      pathName:
        this.props.location.pathname !== "/"
          ? this.props.location.pathname
          : "/",
      tutorListBtn: this?.props?.tutorListCheck
        ? this?.props?.tutorListCheck
        : "online",
    });
  }
  makeSubjectData = (subject) => {
    let allSubject = {};
    subject.map((sub, i) => {
      if (allSubject.hasOwnProperty(sub.category)) {
        if (allSubject[sub.category].hasOwnProperty(sub.subject)) {
          if (allSubject[sub.category][sub.subject]?.length) {
            allSubject[sub.category][sub.subject].push(sub.level);
          } else {
            allSubject[sub.category][sub.subject] = [];
            allSubject[sub.category][sub.subject].push(sub.level);
          }
        } else {
          allSubject[sub.category][sub.subject] = [];
          allSubject[sub.category][sub.subject].push(sub.level);
        }
      } else {
        allSubject[sub.category] = {};
        allSubject[sub.category][sub.subject] = [];
        allSubject[sub.category][sub.subject].push(sub.level);
      }
    });
    return allSubject;
  };
  componentDidUpdate = (prevProps) => {
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
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // handleScroll = (event) => {
  //   debugger;
  //   if (event.path[1].visualViewport.pageTop > 50) {
  //     this.setState({
  //       fixedHeader: true,
  //     });
  //     // do something like call `this.setState`
  //     // access window.scrollY etc
  //   } else {
  //     this.setState({
  //       fixedHeader: false,
  //     });
  //   }
  // };

  signUpUser = () => {
    debugger;
    const {
      email,
      password,
      firstName,
      lastName,
      isTutor,
      isReciveEmails,
      error,
      DOB,
      dobValidate,
    } = this.state;
    this.setState({ loading: true, validate: true });
    if (isTutor ? !dobValidate : true) {
      if (
        !email.match(regExpr) &&
        !password.match(regExpr) &&
        !firstName.match(regExpr) &&
        !lastName.match(regExpr) &&
        (isTutor ? !String(DOB).match(regExpr) : true)
      ) {
        let signUpObj = {
          email,
          password,
          firstName,
          lastName,
          isTutor,
          recieveMarketingEmails: isReciveEmails,
          dob: DOB,
        };
        if (password && password.length < 6) {
          this.setState({
            error: error + " password Weak",
          });
        }
        signup(signUpObj)
          .then((data) => {
            if (data && data.status && data.status === 201) {
              localStorage.setItem("userDetail", JSON.stringify(data.data));
              this.props.completedFillForm(false);
              this.props.userUpdateFunc(data.data);
              this.props.sucssesLogin(data);
              if (this.state.isTutor) {
                this.props.AddTutorInfo({});
                this.props.NullStateValidation();
                this.props.history.push("/tutor-application-form");
              } else {
                this.props.history.push("/student-dashboard");
              }
              this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                isTutor: false,
                isReciveEmails: false,
                loading: false,
                tutueeOpenModal: false,
                tutorOpenModal: false,
                validate: false,
              });
            } else {
              let error = JSON.stringify(data).split(" ")[5].split(",")[0];
              if (error) {
                this.setState({
                  error: "Something Went Wrong",
                  loading: false,
                });
              }
            }
          })
          .catch((err) => {
            console.log("err===", err);
          });
      } else {
        this.setState({
          error: "Please fill all required fields",
          loading: false,
        });
      }
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  resetUserPassword = () => {
    const { email } = this.state;
    this.setState({ loading: true, validate: true });

    if (!email.match(regExpr)) {
      let passwordReqObj = {
        email,
      };
      passwordRest(passwordReqObj)
        .then((data) => {
          if (data && data.status && data.status === 201) {
            alert("Password reset instructions sent to your email");
            this.setState({
              loading: false,
              email: "",
            });
          } else {
            let error = JSON.stringify(data).split(" ")[5].split(",")[0];
            if (error === '500"') {
              this.setState({
                error: "An error happened. Try again later!",
                loading: false,
              });
            } else {
              this.setState({
                error:
                  "An error happened. Check and make sure your email is valid.",
                loading: false,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        error: "Please fill all required fields",
        loading: false,
      });
    }
  };

  signInUser = () => {
    let { email, password, tutorSubjectObj } = this.state;
    this.setState({ loading: true, validate: true });
    if (!email.match(regExpr) && !password.match(regExpr)) {
      let signInObj = {
        email,
        password,
      };
      login(signInObj)
        .then((data) => {
          if (data && data.status && data.status === 200) {
            if (
              data.data.user.isTutor &&
              data.data.user.applicationStatus === "Pending Review"
            ) {
              this.props.userUpdateFunc(data.data);
              this.props.sucssesLogin(data);
              // Show the tutor application on last step
            } else if (
              data.data.user.isTutor &&
              !data.data.user.isApplicationCompleted
            ) {
              getTutorApplication({
                token: data.data.token,
                id: data.data.user.userId,
              })
                .then((response) => {
                  getSubjectWithCategory({
                    id: data.data.user.userId,
                  })
                    .then((res) => {
                      tutorSubjectObj = this.makeSubjectData(res.data);
                      if (!response?.name) {
                        response.data.step1.subjects = tutorSubjectObj;
                      }
                      this.props.AddTutorInfo(
                        response?.name ? {} : response.data
                      );
                      this.props.completedFillForm(
                        response?.data?.applicationStatus ? true : false
                      );
                      this.props.userUpdateFunc(data.data);
                      this.props.sucssesLogin(data);
                      this.props.NullStateValidation();
                      console.log("=========", response?.data);
                      return !response?.data?.applicationStatus
                        ? response?.data?.currentStep
                          ? this.props.history.push(
                              `/tutor-application-form#${
                                response?.data?.currentStep === 1
                                  ? `FirstStep`
                                  : response?.data?.currentStep !== 9
                                  ? `step${response?.data?.currentStep}`
                                  : "TheEnd!"
                              }`
                            )
                          : this.props.history.push(`/tutor-application-form`)
                        : this.props.history.push(`/tutoring-interest`);
                    })
                    .catch((err) => console.log(err));
                })
                .catch((err) => console.log(err));
              // Show the tutor application form
            } else if (
              data.data.user.isTutor &&
              data.data.user.isApplicationCompleted
            ) {
              // Show tutor dashboard
              this.props.history.push("/tutor-dashboard/home");
              this.props.userUpdateFunc(data.data);
              this.props.sucssesLogin(data);
            } else if (!data.data.user.isTutor) {
              // Show student dashboard
              this.props.sucssesLogin(data);
              this.props.history.push("/student-dashboard");
            }

            this.setState({
              email: "",
              password: "",
              loading: false,
              signInopenModal: false,
              validate: false,
            });
          } else {
            let error = JSON.stringify(data).split(" ")[5].split(",")[0];
            if (error === '500"') {
              this.setState({
                error: "Invalid Email",
                loading: false,
              });
            } else {
              this.setState({
                error: "Invalid Email and Password",
                loading: false,
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    } else {
      this.setState({
        error: "Please fill all required fields",
        loading: false,
      });
    }
  };

  getInputKeyAndValue = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
      error: "",
    });
  };
  dateOfBirth = (dateValue) => {
    let valDate = new Date();
    valDate = valDate?.getFullYear();
    const date = dateValue?.getFullYear();
    if (valDate - date >= 18) {
      this.setState({
        DOB: dateValue,
        dobValidate: false,
      });
    } else {
      this.setState({
        DOB: dateValue,
        dobValidate: "You must be 18 or older to signup as a tutor",
      });
    }
  };

  onClose = () => {
    this.setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      isTutor: false,
      isReciveEmails: false,
      signInopenModal: false,
      signUpopenModal: false,
      tutorOpenModal: false,
      tutueeOpenModal: false,
      passwordResetOpenModal: false,
      error: "",
      dobValidate: false,
    });
  };

  render() {
    const {
      fixedHeader,
      signInopenModal,
      signUpopenModal,
      tutorOpenModal,
      tutueeOpenModal,
      isReciveEmails,
      passwordResetOpenModal,
      email,
      password,
      firstName,
      lastName,
      error,
      loading,
      validate,
      pathName,
      tutorListBtn,
      DOB,
      dobValidate,
    } = this.state;
    const {
      history: {
        location: { pathname },
      },
      notFoundPage,
    } = this.props;
    let isTutorSearch = pathname.indexOf("/tutors/search/tutor/") !== -1;
    return (
      <header
        className={
          pathName == "/tutors/search/" || isTutorSearch || notFoundPage
            ? "custom-header"
            : ""
        }>
        <>
          {pathName == "/tutors/search/" ? (
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="after-login-nav-Col">
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                  {" "}
                  <Image src={logoImg} alt="" class="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto" style={{ color: "#000" }}>
                    <ButtonGroup aria-label="Basic example">
                      <Button
                        className={`tutorListBtn ${
                          tutorListBtn === "online" ? "active" : ""
                        }`}
                        onClick={() => {
                          this.setState({ tutorListBtn: "online" });
                          this.props.TutorListCheck("online");
                        }}>
                        Online
                      </Button>
                      <Button
                        onClick={() => {
                          this.setState({ tutorListBtn: "in-person" });
                          this.props.TutorListCheck("in-person");
                        }}
                        className={`tutorListBtn ${
                          tutorListBtn !== "online" ? "active" : ""
                        }`}>
                        In-Person
                      </Button>
                    </ButtonGroup>
                  </Nav>
                  <div className="login-sinup-btn">
                    <Button
                      onClick={() => this.setState({ signUpopenModal: true })}>
                      Sign up
                    </Button>
                    <Button
                      onClick={() => this.setState({ signInopenModal: true })}>
                      Login
                    </Button>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          ) : (
            <Navbar
              expand="lg top-nav"
              className={`navbar navbar-expand-lg top-nav ${
                isTutorSearch
                  ? "navbar-tutor-top"
                  : fixedHeader
                  ? "navbar-fixed-top"
                  : ""
              }`}>
              <div className="container header-div">
                <Navbar.Brand href="/">
                  <img src={logoImg} alt="" className="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* <Route
                  exact
                  path={["/", "/tutors/search/tutor"]}
                  render={(props) => ( */}
                {notFoundPage || pathName === "/" || isTutorSearch ? (
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                      <div className="nav-item">
                        <Nav.Link href="/become-a-tutor">
                          Become a Tutor
                        </Nav.Link>
                      </div>
                      <div className="nav-item">
                        <Nav.Link href="#">Our Tuition Centres</Nav.Link>
                      </div>
                      <div className="nav-item">
                        <Nav.Link href="#">Revision Events</Nav.Link>
                      </div>
                      <div className="nav-item">
                        <Nav.Link href="#">Help</Nav.Link>
                      </div>
                    </Nav>

                    <Nav className="ml-auto">
                      <li className="nav-item active">
                        <a
                          className="sign-up"
                          href="#"
                          onClick={() =>
                            this.setState({ signUpopenModal: true })
                          }>
                          Sign up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="rounded-btn"
                          href="#"
                          onClick={() =>
                            this.setState({ signInopenModal: true })
                          }>
                          Log in
                        </a>
                      </li>
                    </Nav>
                  </Navbar.Collapse>
                ) : (
                  // />
                  <Route
                    path="/become-a-tutor"
                    render={(props) => (
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto ml-auto">
                          <div className="nav-item active">
                            <Nav.Link href="/become-a-tutor">Lorem</Nav.Link>
                          </div>
                          <div className="nav-item">
                            <Nav.Link href="#">Conve</Nav.Link>
                          </div>
                          <div className="nav-item">
                            <Nav.Link href="#">Tibique</Nav.Link>
                          </div>
                          <div className="nav-item">
                            <Nav.Link href="#">Inermis</Nav.Link>
                          </div>
                          <div className="nav-item">
                            <Nav.Link href="#">Hinc aliquam</Nav.Link>
                          </div>
                        </Nav>

                        <Nav className="ml-auto btn-holder">
                          <a className="sign-up-tutor">cu causae</a>
                        </Nav>
                      </Navbar.Collapse>
                    )}
                  />
                )}
              </div>
            </Navbar>
          )}

          <LoginModal
            signInopenModal={signInopenModal}
            onclose={this.onClose}
            getInputKeyAndValue={this.getInputKeyAndValue}
            signInUser={this.signInUser}
            email={email}
            password={password}
            openSignUpModal={() =>
              this.setState({
                signUpopenModal: true,
                signInopenModal: false,
                error: "",
                validate: false,
              })
            }
            openPasswordResetModal={() =>
              this.setState({
                passwordResetOpenModal: true,
                signInopenModal: false,
                error: "",
                validate: false,
              })
            }
            error={error}
            loading={loading}
            validate={validate}
          />
          <PasswordResetModal
            passwordResetOpenModal={passwordResetOpenModal}
            onclose={this.onClose}
            getInputKeyAndValue={this.getInputKeyAndValue}
            resetUserPassword={this.resetUserPassword}
            email={email}
            validate={validate}
            openSignInModal={() =>
              this.setState({
                signInopenModal: true,
                signUpopenModal: false,
                error: "",
                validate: false,
              })
            }
            error={error}
            loading={loading}
            validate={validate}
          />
          <SignUpDecision
            signUpopenModal={signUpopenModal}
            onclose={this.onClose}
            tutorOpenModalFunc={() =>
              this.setState({
                isTutor: true,
                signUpopenModal: false,
                tutorOpenModal: true,
                error: "",
                validate: false,
              })
            }
            tutueeOpenModalFunc={() =>
              this.setState({
                isTutor: false,
                signUpopenModal: false,
                tutueeOpenModal: true,
                error: "",
                validate: false,
              })
            }
            openSignInModal={() =>
              this.setState({
                signInopenModal: true,
                signUpopenModal: false,
                error: "",
                validate: false,
              })
            }
          />
          <TutorSignupModal
            tutorOpenModal={tutorOpenModal}
            onclose={this.onClose}
            onChangeReciveEmails={() =>
              this.setState({ isReciveEmails: !isReciveEmails })
            }
            getInputKeyAndValue={this.getInputKeyAndValue}
            signUpUser={this.signUpUser}
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            isReciveEmails={isReciveEmails}
            openSignInModal={() =>
              this.setState({
                signInopenModal: true,
                signUpopenModal: false,
                tutorOpenModal: false,
                error: "",
                validate: false,
              })
            }
            error={error}
            loading={loading}
            validate={validate}
            DOB={DOB}
            dobValidate={dobValidate}
            dateOfBirth={this.dateOfBirth}
          />
          <TuteeSignupModal
            tutueeOpenModal={tutueeOpenModal}
            onclose={this.onClose}
            onChangeReciveEmails={() =>
              this.setState({ isReciveEmails: !isReciveEmails })
            }
            getInputKeyAndValue={this.getInputKeyAndValue}
            signUpUser={this.signUpUser}
            email={email}
            password={password}
            firstName={firstName}
            lastName={lastName}
            isReciveEmails={isReciveEmails}
            openSignInModal={() =>
              this.setState({
                signInopenModal: true,
                signUpopenModal: false,
                tutueeOpenModal: false,
                error: "",
                validate: false,
              })
            }
            error={error}
            loading={loading}
            validate={validate}
          />
        </>
        {this.props.loginAlert &&
        this.props.history.location.pathname === "/" ? (
          <div className="alert-div">
            <Alert variant="danger">
              <span>
                <Image
                  src={require("./../../assets/icons/warning.png")}
                  style={{ width: "17px", marginRight: "10px" }}
                />
                {` you need to sign in or sign up before continuing`}
              </span>{" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={this.props.loginAlertHide}>
                X
              </span>{" "}
            </Alert>
          </div>
        ) : null}

        <RegForm />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    TutorListReducer: { tutorListCheck },
  } = state;
  return {
    tutorListCheck,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
    TutorListCheck: (payload) =>
      dispatch(TutorListAction.TutorListCheck(payload)),
    userUpdateFunc: (user) => {
      dispatch(UserAction.user(user));
    },
    completedFillForm: (payload) =>
      dispatch(ApplicationFormAction.completedFillForm(payload)),
    NullStateValidation: (payload) =>
      dispatch(ApplicationFormAction.NullStateValidation(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
