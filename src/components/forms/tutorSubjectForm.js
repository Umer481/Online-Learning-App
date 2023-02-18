import React, { Component } from "react";
import { Col, Row, Spinner, Image } from "react-bootstrap";
import { InputCheck } from "./inputcheckComponent";
import { connect } from "react-redux";
import { ApplicationFormAction } from "./../../redux/actions";
import { getAllSubject } from "./../../apis/tutors";
class TutorSubjectForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedSub: "maths",
      Allsubject: {},
      subjects: {},
      loader: false,
    };
  }
  componentDidMount = () => {
    this.setState({
      loader: true,
    });
    getAllSubject()
      .then((res) =>
        this.setState({
          Allsubject: res.data,
          loader: false,
        })
      )
      .catch((err) => console.log(err));
    let subjects = this.props?.TutorInfoObj?.step1?.subjects;
    return subjects ? this.setState({ subjects }) : null;
  };

  componentDidUpdate = (prevProps) => {
    return prevProps?.TutorInfoObj?.step1?.subjects !==
      this.props?.TutorInfoObj?.step1?.subjects
      ? this.setState({ subjects: this.props?.TutorInfoObj?.step1?.subjects })
      : null;
  };
  selectSubject = (sub) => {
    this.setState({
      selectedSub: sub,
    });
  };

  SaveAndCancel = () => {
    const { subjects } = this.state;
    let TutorInfoObj = this.props?.TutorInfoObj ? this.props?.TutorInfoObj : {};
    let modeOfTeaching = this.props?.TutorInfoObj?.step1?.modeOfTeaching;
    let willignessToTravel = this.props?.TutorInfoObj?.step1
      ?.willignessToTravel;
    let address = this.props?.TutorInfoObj?.step1?.address;
    let step1 = {
      subjects,
      modeOfTeaching,
      willignessToTravel,
      address,
    };
    this.props.AddTutorInfo({ ...TutorInfoObj, step1 });
    this.props.history.push("/tutor-application-form");
  };

  checkExistObj = (subjects, headTitle, selectedSub) => {
    if (subjects.hasOwnProperty(selectedSub)) {
      if (subjects[selectedSub].hasOwnProperty(headTitle)) {
        return subjects;
      } else {
        subjects[selectedSub][headTitle] = [];
        return subjects;
      }
    } else {
      subjects[selectedSub] = {};
      subjects[selectedSub][headTitle] = [];
      return subjects;
    }
  };

  getInput = (headTitle, title, selectedSub) => {
    let { subjects } = this.state;
    subjects = this.checkExistObj(subjects, headTitle, selectedSub);
    subjects[selectedSub][headTitle].push(title);
    this.setState({
      subjects,
    });
  };
  remove = (headTitle, title, selectedSub) => {
    let { subjects } = this.state;
    subjects[selectedSub][headTitle] = subjects[selectedSub][headTitle]?.filter(
      (subject) => subject !== title
    );
    this.setState({
      subjects,
    });
  };

  scrollToRight = (e) => {
    let scrollStep = 200;
    e.preventDefault();

    var element = document.getElementById("head-title-id");
    let sl = element.scrollLeft,
      cw = element.scrollWidth;

    if (sl + scrollStep >= cw) {
      element.scrollTo(cw, 0);
    } else {
      element.scrollTo(sl + scrollStep, 0);
    }
  };

  scrollToLeft = (e) => {
    let scrollStep = 200;
    e.preventDefault();

    var element = document.getElementById("head-title-id");
    let sl = element.scrollLeft;

    if (sl - scrollStep <= 0) {
      element.scrollTo(0, 0);
    } else {
      element.scrollTo(sl - scrollStep, 0);
    }
  };

  render() {
    const { selectedSub, subjects, Allsubject, loader } = this.state;
    return (
      <div>
        <Row className="tutoringInterest-Col flex-center-center">
          <Col lg={10} md={11} sm={12} xs={12} className="modal-content">
            <Row className="header">
              <Col
                lg={1}
                md={1}
                sm={3}
                xs={3}
                className="flex-start-center"
                style={{ transform: "rotate(180deg)" }}
              >
                <span
                  className="flex-center-center next-span"
                  onClick={this.scrollToLeft}
                >
                  <Image
                    style={{ width: "20px" }}
                    src={require("./../../assets/icons/back-right.png")}
                  />
                </span>
              </Col>
              <Col lg={10} md={10} sm={6} xs={6} className="modal-title">
                <Row className="header_options" id="head-title-id">
                  {Object.keys(Allsubject).map((subject, index) => {
                    return (
                      <Col
                        key={index}
                        lg={2}
                        md={2}
                        sm={12}
                        xs={12}
                        style={{ height: "100%" }}
                      >
                        <span
                          className={`sub-txt ${
                            selectedSub === subject ? "active" : ""
                          }`}
                          onClick={() => this.selectSubject(subject)}
                        >
                          {subject.charAt(0).toUpperCase() + subject.slice(1)}
                        </span>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col lg={1} md={1} sm={3} xs={3} className="flex-start-center">
                <span
                  className="flex-center-center next-span"
                  onClick={this.scrollToRight}
                >
                  <Image
                    style={{ width: "20px" }}
                    src={require("./../../assets/icons/back-right.png")}
                  />
                </span>
              </Col>
            </Row>
            <div style={{ borderBottom: "1px solid #00000033" }} />

            <div className="modal-body">
              {!loader ? (
                Allsubject && Allsubject[selectedSub] ? (
                  Object.keys(Allsubject[selectedSub]).map((subject, index) => {
                    return (
                      <div key={index} className="modal_subject_Head">
                        <p className="modal_subject_title">
                          {subject.charAt(0).toUpperCase() + subject.slice(1)}
                        </p>
                        <div className="subject_category_wrap">
                          <div className="subject_category_item">
                            {Allsubject[selectedSub][subject].length ? (
                              Allsubject[selectedSub][
                                subject
                              ].map((level, i) => (
                                <InputCheck
                                  key={i}
                                  selectedSub={selectedSub}
                                  obj={subjects}
                                  headTitle={subject}
                                  title={level}
                                  id={`${subject}${level}${i}`}
                                  getInput={this.getInput}
                                  remove={this.remove}
                                />
                              ))
                            ) : (
                              <InputCheck
                                selectedSub={selectedSub}
                                obj={subjects}
                                headTitle={subject}
                                title={"All"}
                                id={`All${index}`}
                                getInput={this.getInput}
                                remove={this.remove}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  ""
                )
              ) : (
                <div className="flex-center-center">
                  <Spinner
                    animation="border"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              )}
            </div>

            <div className="modal-footer">
              <div className="row flex-center" style={{ width: "100%" }}>
                <div className="col-lg-6 text-left">
                  <a
                    href="#"
                    className="green-link"
                    onClick={() =>
                      this.props.history.push("/tutor-application-form")
                    }
                  >
                    <i className="mdi mdi-chevron-left mr-1"></i>Cancel
                  </a>
                </div>
                <div className="col-lg-6 text-right">
                  <button
                    className="btn-theme-green"
                    onClick={this.SaveAndCancel}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    ApplicationFormReducer: { TutorInfoObj },
  } = state;

  return {
    TutorInfoObj,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorSubjectForm);
