import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";

export const First = (props) => {
  const [state, setState] = useState({
    subjects: {},
    modeOfTeaching: "",
    willignessToTravel: "",
  });

  const AddSubjectAndLevel = () => {
    props.history.push("/tutor-application-form/Subject");
  };
  const AddModeOfTutor = () => {
    props.history.push("/tutor-application-form/modeForTeach");
  };

  useEffect(() => {
    let subjects = props?.TutorInfoObj?.step1?.subjects;
    let modeOfTeaching = props?.TutorInfoObj?.step1?.modeOfTeaching;
    let willignessToTravel = props?.TutorInfoObj?.step1?.willignessToTravel;
    let address = props?.TutorInfoObj?.step1?.address;
    let addressLatLng = props?.TutorInfoObj?.step1?.addressLatLng;
    let addressRaw = props?.TutorInfoObj?.step1?.addressRaw;

    setState((state) => ({
      ...state,
      subjects,
      modeOfTeaching,
      willignessToTravel,
      address,
      addressLatLng,
      addressRaw,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 1) {
      submitStep1(true);
    }
  }, [props]);

  const isExistObj = () => {
    const { subjects } = state;
    let exist = [];
    if (subjects) {
      Object.keys(subjects).map((subjectObj, title) => {
        return Object.keys(subjects[subjectObj]).map((wSub) =>
          wSub
            ? subjects[subjectObj][wSub].length
              ? subjects[subjectObj][wSub].map((sub) => exist.push(true))
              : exist.push(false)
            : exist.push(false)
        );
      });
      return exist;
    } else return [false];
  };
  const submitStep1 = (isCallApi) => {
    const {
      modeOfTeaching,
      willignessToTravel,
      address,
      addressLatLng,
      addressRaw,
    } = state;
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // return isExistObj().indexOf(true) !== -1 &&
    //   (modeOfTeaching === 0 ||
    //     (willignessToTravel &&
    //       address?.street &&
    //       address?.town &&
    //       address?.country &&
    //       address?.postCode))
    //   ? true
    //   : false;
  };
  const { subjects, modeOfTeaching, willignessToTravel } = state;
  const { iscompletedForm } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={1} {...props} />
        <Row>
          <Col lg={9} md={9} sm={12} xs={12} className="subject-mode">
            <h3 className="step-title">
              What subject and level will you teach?
            </h3>
            <p className="grey-txt-bold">
              Choose the subjects and levels that you feel most confident
              tutoring.
            </p>

            {isExistObj().indexOf(true) !== -1 ? (
              <div className="filled-data-card">
                {Object.keys(subjects).map((subjectObj, title) => {
                  return Object.keys(subjects[subjectObj]).map((wSub) =>
                    subjects[subjectObj][wSub].length ? (
                      <>
                        <label className="label">
                          {wSub.charAt(0).toUpperCase() + wSub.slice(1)}
                        </label>
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {subjects[subjectObj][wSub].map((level, i) => (
                            <span
                              style={{
                                margin: i != 0 ? "0px 1%" : "",
                              }}
                            >
                              {level}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null
                  );
                })}
                <span className="flex-end-center">
                  <a
                    className="edit-style"
                    onClick={AddSubjectAndLevel}
                    style={{ cursor: "pointer" }}
                  >
                    Edit
                  </a>
                </span>
              </div>
            ) : (
              <div>
                <label className="labelAdd">Subject and levels</label>
                <div
                  className="btn-transparent-outline mb-5"
                  onClick={AddSubjectAndLevel}
                >
                  <div className="btn-circle">
                    <i className="mdi mdi-plus"></i>
                  </div>{" "}
                  Select Subject and levels
                </div>
              </div>
            )}

            <hr />
            <h3 className="step-title">Where should students meet you?</h3>
            <p className="grey-txt-bold">
              Tell parents exactly where you will be teaching your where you
              will be teaching.
            </p>
            {modeOfTeaching || modeOfTeaching === 0 ? (
              <div className="filled-data-card">
                <label className="label">MODE OF TUTORING</label>
                <span style={{ display: "flex" }}>
                  {modeOfTeaching === 0
                    ? "online"
                    : modeOfTeaching === 1
                    ? "inperson"
                    : modeOfTeaching === 2
                    ? "online and inperson"
                    : ""}
                  {!(modeOfTeaching !== 0) ? (
                    <a
                      className="edit-style flex-end-a"
                      onClick={!iscompletedForm ? AddModeOfTutor : ""}
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </a>
                  ) : (
                    ""
                  )}
                </span>
                {modeOfTeaching ? (
                  <label className="label">DISTANCE</label>
                ) : (
                  ""
                )}

                {modeOfTeaching ? (
                  <span className="flex-between-center">
                    {willignessToTravel
                      ? `Within ${willignessToTravel} of my
                      address`
                      : "I only teach at my address "}

                    <a
                      className="edit-style flex-end-a"
                      onClick={!iscompletedForm ? AddModeOfTutor : ""}
                      style={{ cursor: "pointer" }}
                    >
                      Edit
                    </a>
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div>
                <label className="labelAdd ">Location</label>
                <div
                  className="btn-transparent-outline mb-5"
                  onClick={AddModeOfTutor}
                >
                  <div className="btn-circle">
                    <i className="mdi mdi-plus"></i>
                  </div>{" "}
                  Select your mode of tutoring
                </div>
              </div>
            )}
          </Col>
        </Row>
        <Nextsteps step={1} {...props} submitStepInRedux={submitStep1} />
      </Col>
    </Row>
  );
};
