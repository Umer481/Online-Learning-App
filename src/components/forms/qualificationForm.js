import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { InputCheckForQualification } from "./inputCheckForQualification";
import { connect } from "react-redux";
import { ApplicationFormAction } from "./../../redux/actions";

const QualificationForm = (props) => {
  const [state, updateState] = useState({
    certificates: {
      teachingAndEducation: [],
      doctoralDegree: [],
    },
  });

  const getInput = (headTitle, title) => {
    let { certificates } = state;
    certificates[headTitle].push(title);
    updateState({
      ...state,
      certificates,
    });
  };

  useEffect(() => {
    const { TutorInfoObj } = props;
    let certificates = TutorInfoObj?.step2?.certificates
      ? TutorInfoObj?.step2?.certificates
      : {
          teachingAndEducation: [],
          doctoralDegree: [],
        };

    updateState((state) => ({ ...state, certificates }));
  }, [props.TutorInfoObj]);
  const remove = (headTitle, title) => {
    let { certificates } = state;
    certificates[headTitle] = certificates[headTitle].filter(
      (degree) => degree !== title
    );
    updateState({
      ...state,
      certificates,
    });
  };
  const SaveAndCancel = () => {
    let { certificates } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    let previouslyTutored = TutorInfoObj?.step2?.previouslyTutored;
    let providedAddistionalCerts = TutorInfoObj?.step2?.providedAddistionalCerts;
    let teachingCerts = TutorInfoObj?.step2?.teachingCerts;
    let lengthOfTeachingPractice =
      TutorInfoObj?.step2?.lengthOfTeachingPractice;
    let informedStudent = TutorInfoObj?.step2?.informedStudent;
    let socialUrls = TutorInfoObj?.step2?.socialUrls;

    let step2 = {
      certificates,
      previouslyTutored,
      teachingCerts,
      lengthOfTeachingPractice,
      informedStudent,
      socialUrls,
      providedAddistionalCerts,
      supportingDocs: [],
    };
    props.AddTutorInfo({ ...TutorInfoObj, step2 });
    props.history.push("/tutor-application-form#step2");
  };

  const { certificates } = state;
  return (
    <div>
      <Row className="Qualification-Col flex-center-center">
        <Col lg={7} md={10} sm={12} xs={12} className="modal-content">
          <Row className="header">
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="modal-title flex-center-center"
            >
              <Row className="header_options ">
                Select your earned certificate and qualification
              </Row>
            </Col>
          </Row>
          <div style={{ borderBottom: "1px solid #00000033" }} />
          <Row className="Qualification-body">
            <Col lg={12} md={12} sm={12} xs={12} style={{ padding: "0px" }}>
              <h4
                style={{ color: "#000", fontSize: "25px", fontWeight: "600" }}
              >
                Teaching and education certificate
              </h4>
            </Col>
            <Col className="checkBox-col" lg={6} md={6} sm={12} xs={12}>
              <InputCheckForQualification
                headTitle={"teachingAndEducation"}
                getInput={getInput}
                remove={remove}
                obj={certificates}
                title={"Primary"}
                id={1}
              />
            </Col>
            <Col className="checkBox-col" lg={6} md={6} sm={12} xs={12}>
              <InputCheckForQualification
                headTitle={"teachingAndEducation"}
                getInput={getInput}
                remove={remove}
                obj={certificates}
                title={"Graduate Teacher traning Program"}
                id={2}
              />
            </Col>
            <Col className="checkBox-col" lg={6} md={6} sm={12} xs={12}>
              <InputCheckForQualification
                headTitle={"teachingAndEducation"}
                getInput={getInput}
                remove={remove}
                obj={certificates}
                title={"Teach First"}
                id={3}
              />
            </Col>
            <Col className="checkBox-col" lg={6} md={6} sm={12} xs={12}>
              <InputCheckForQualification
                headTitle={"teachingAndEducation"}
                getInput={getInput}
                remove={remove}
                obj={certificates}
                title={"Bachelor of Education"}
                id={4}
              />
            </Col>
            <Col className="checkBox-col" lg={6} md={6} sm={12} xs={12}>
              <InputCheckForQualification
                headTitle={"teachingAndEducation"}
                getInput={getInput}
                remove={remove}
                obj={certificates}
                title={"SCITT"}
                id={5}
              />
            </Col>

            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ padding: "0px", marginTop: "20px" }}
            >
              <h4
                style={{ color: "#000", fontSize: "25px", fontWeight: "600" }}
              >
                Doctoral Degree
              </h4>
            </Col>
            <Col className="checkBox-col" lg={12} md={12} sm={12} xs={12}>
              <InputCheckForQualification
                getInput={getInput}
                remove={remove}
                headTitle={"doctoralDegree"}
                obj={certificates}
                title={"University Lecturer"}
                id={6}
              />
            </Col>
            <Col className="checkBox-col" lg={12} md={12} sm={12} xs={12}>
              <InputCheckForQualification
                getInput={getInput}
                remove={remove}
                headTitle={"doctoralDegree"}
                obj={certificates}
                title={"University Professor"}
                id={7}
              />
            </Col>
          </Row>

          <div className="modal-footer">
            <div className="row flex-center" style={{ width: "100%" }}>
              <div className="col-lg-6 text-left">
                <a
                  href="#"
                  className="green-link"
                  onClick={() =>
                    props.history.push("/tutor-application-form#step2")
                  }
                >
                  <i className="mdi mdi-chevron-left mr-1"></i>Cancel
                </a>
              </div>
              <div className="col-lg-6 text-right">
                <button className="btn-theme-green" onClick={SaveAndCancel}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(QualificationForm);
