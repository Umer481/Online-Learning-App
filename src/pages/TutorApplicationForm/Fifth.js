import React, { useState, useEffect } from "react";
import { Col, Row, Dropdown, DropdownButton, Image } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export const Fifth = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };

  const [state, updateState] = useState({
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
  });
  const educationAdd = () => {
    state.education.push({
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
      isCurrent: false,
    });
    updateState({
      ...state,
      education,
    });
  };
  const positionAdd = () => {
    state.employment.push({
      employerName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      isCurrentJob: false,
    });
    updateState({
      ...state,
      employment,
    });
  };
  const onChangeDate = (date, index, dateType, position) => {
    return (
      position
        ? (employment[index][dateType] = date)
        : (education[index][dateType] = date),
      updateState({
        ...state,
        employment,
        education,
      })
    );
  };

  const onCurrentWork = (index, rollStatus) => {
    const { employment, education } = state;
    return (
      rollStatus === "isCurrentJob"
        ? (employment[index][rollStatus] = !employment[index][rollStatus])
        : (education[index][rollStatus] = !education[index][rollStatus]),
      updateState({
        employment,
        education,
        ...state,
      })
    );
  };

  const onTextChange = (e, index) => {
    const { employment, education } = state;
    return (
      e.target.name === "employerName" || e.target.name === "jobTitle"
        ? (employment[index][e.target.name] = e.target.value)
        : (education[index][e.target.name] = e.target.value),
      updateState({
        employment,
        education,
        ...state,
      })
    );
  };

  useEffect(() => {
    let { employment, education } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    employment = TutorInfoObj?.step5?.employment;
    education = TutorInfoObj?.step5?.education;
    if (employment && education)
      updateState((state) => ({
        ...state,
        employment,
        education,
      }));
    if (props.funcStatus === "loading..." && props.currentStep === 5) {
      submitStep5Info(true);
    }
  }, [props]);

  // step5: {
  //   employment: [
  //     {
  //       employerName: "London Eye",
  //       jobTitle: "Tour guide",
  //       startDate: "2020-04-27T20:12:55.53",
  //       endDate: "2020-04-27T20:12:55.53",
  //       isCurrentJob: false,
  //     },
  //   ],
  //   education: [
  //     {
  //       schoolName: "University of Lancaster",
  //       degree: "BSc.",
  //       startDate: "2010-04-27T20:12:55.53",
  //       endDate: "2014-04-27T20:12:55.53",
  //       isCurrent: false,
  //     },
  //     {
  //       schoolName: "University of Liverppol",
  //       degree: "Masters",
  //       startDate: "2020-04-27T20:12:55.53",
  //       endDate: "",
  //       isCurrent: true,
  //     },
  //   ],
  // },

  const submitStep5Info = (isCallApi) => {
    const { employment, education } = state;
    const { TutorInfoObj } = props;

    let step5 = {
      employment,
      education,
    };
    TutorInfoObj.step5 = step5;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (
    //   employment.length &&
    //   education.length &&
    //   education[0].schoolName &&
    //   education[0].degree &&
    //   education[0].startDate &&
    //   (education[0].endDate || education[0].isCurrent) &&
    //   employment[0].employerName &&
    //   employment[0].jobTitle &&
    //   employment[0].startDate &&
    //   (employment[0].endDate || employment[0].isCurrentJob)
    // ) {
    //   TutorInfoObj.step5 = step5;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const { employment, education } = state;
  const { iscompletedForm } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={5} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 subject-mode work">
            {employment?.length
              ? employment.map((value, index) => {
                  return (
                    <div key={index}>
                      <h3 className="step-title">Your work experience</h3>
                      <span className="label-input">Company</span>
                      <input
                        type="text"
                        className="form-control comp_input"
                        placeholder="Employer Name"
                        name="employerName"
                        onChange={(e) => onTextChange(e, index)}
                        value={value.employerName}
                        disabled={!iscompletedForm ? false : true}
                        style={{
                          borderColor: !value.employerName
                            ? props?.validationError?.data?.employment
                              ? "red"
                              : ""
                            : "",
                        }}
                      />
                      {!value.employerName ? (
                        props?.validationError?.data?.employment ? (
                          <div className="red-alert-message">
                            {"Missing company name"}
                          </div>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <span className="label-input ">Your Role</span>
                      <input
                        type="text"
                        className="form-control comp_input"
                        placeholder="Job Title"
                        onChange={(e) => onTextChange(e, index)}
                        name="jobTitle"
                        value={value.jobTitle}
                        disabled={!iscompletedForm ? false : true}
                        style={{
                          borderColor: !value.jobTitle
                            ? props?.validationError?.data?.employment
                              ? "red"
                              : ""
                            : "",
                        }}
                      />
                      {!value.jobTitle ? (
                        props?.validationError?.data?.employment ? (
                          <div className="red-alert-message">
                            {"Missing role"}
                          </div>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <hr style={{ margin: "80px 0px" }} />
                      <h3 className="step-title">
                        When did you work in this role?
                      </h3>
                      <div className="green-checkbox mb-3">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck2${index}`}
                            checked={value.isCurrentJob}
                          />
                          <label
                            className="custom-control-label enroll"
                            htmlFor={`customCheck2${index}`}
                            style={{ cursor: "pointer" }}
                            onClick={
                              !iscompletedForm
                                ? () => onCurrentWork(index, "isCurrentJob")
                                : () => {}
                            }
                          >
                            <p className="grey-txt-bold">
                              I am currently working in this role
                            </p>
                          </label>
                        </div>
                      </div>
                      <Row style={{ marginBottom: "50px" }}>
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <span
                            className="label-input"
                            style={{ display: "flex", fontWeight: "500" }}
                          >
                            Start date
                          </span>
                          <div style={{ display: "flex" }}>
                            <div
                              className={`${
                                !value.startDate
                                  ? props?.validationError?.data?.employment
                                    ? "red-alert"
                                    : ""
                                  : ""
                              } select`}
                              style={{ marginLeft: "0" }}
                            >
                              <DatePicker
                                selected={
                                  value?.startDate
                                    ? new Date(
                                        new Date(value?.startDate).getTime()
                                      )
                                    : null
                                }
                                onChange={(date) =>
                                  onChangeDate(
                                    date,
                                    index,
                                    "startDate",
                                    "position"
                                  )
                                }
                                dateFormat="dd/MM/yyyy"
                                // showMonthYearPicker
                                // showFullMonthYearPicker
                                showYearDropdown
                              />
                            </div>
                          </div>
                          {!value.startDate ? (
                            props?.validationError?.data?.employment ? (
                              <div className="red-alert-message">
                                {"Missing start date"}
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </Col>
                        {!value.isCurrentJob ? (
                          <Col lg={6} md={6} sm={12} xs={12}>
                            <span
                              className="label-input"
                              style={{ display: "flex", fontWeight: "500" }}
                            >
                              {" "}
                              End date
                            </span>
                            <div style={{ display: "flex" }}>
                              <div
                                className={`${
                                  !value.endDate
                                    ? props?.validationError?.data?.employment
                                      ? "red-alert"
                                      : ""
                                    : ""
                                } select`}
                              >
                                <DatePicker
                                  selected={
                                    value?.endDate
                                      ? new Date(
                                          new Date(value?.endDate).getTime()
                                        )
                                      : null
                                  }
                                  onChange={(date) =>
                                    onChangeDate(
                                      date,
                                      index,
                                      "endDate",
                                      "position"
                                    )
                                  }
                                  dateFormat="dd/MM/yyyy"
                                  // showMonthYearPicker
                                  // showFullMonthYearPicker
                                  showYearDropdown
                                />
                              </div>
                            </div>
                            {!value.endDate ? (
                              props?.validationError?.data?.employment ? (
                                <div className="red-alert-message">
                                  {"Missing end date"}
                                </div>
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )}
                          </Col>
                        ) : (
                          ""
                        )}
                      </Row>
                    </div>
                  );
                })
              : ""}

            <a
              className="green-link-2"
              onClick={!iscompletedForm ? positionAdd : () => {}}
            >
              <i className="mdi mdi-plus mr-1"></i>
              Add another position
            </a>
            <hr style={{ margin: "80px 0px" }} />
            {education?.length
              ? education.map((value, index) => {
                  return (
                    <div key={index}>
                      <h3 className="step-title">
                        Add detail about your education
                      </h3>
                      <span className="label-input">School/University</span>
                      <input
                        type="text"
                        className="form-control comp_input"
                        placeholder="University/School/College"
                        name="schoolName"
                        value={value.schoolName}
                        onChange={(e) => onTextChange(e, index)}
                        disabled={!iscompletedForm ? false : true}
                        style={{
                          borderColor: !value.schoolName
                            ? props?.validationError?.data?.education
                              ? "red"
                              : ""
                            : "",
                        }}
                      />
                      {!value.schoolName ? (
                        props?.validationError?.data?.education ? (
                          <div className="red-alert-message">
                            {"Missing school name"}
                          </div>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <span className="label-input ">
                        Degree/ Qualification{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control comp_input"
                        placeholder="Qualifilcation"
                        name="degree"
                        value={value.degree}
                        onChange={(e) => onTextChange(e, index)}
                        disabled={!iscompletedForm ? false : true}
                        style={{
                          borderColor: !value.degree
                            ? props?.validationError?.data?.education
                              ? "red"
                              : ""
                            : "",
                        }}
                      />
                      {!value.degree ? (
                        props?.validationError?.data?.education ? (
                          <div className="red-alert-message">
                            {"Missing Degree/certificate"}
                          </div>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                      <hr style={{ margin: "80px 0px" }} />

                      <h3 className="step-title">
                        When did you enroll in this instituition?
                      </h3>
                      <div className="green-checkbox mb-3">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`customCheck${index}`}
                            checked={value.isCurrent}
                            onClick={
                              !iscompletedForm
                                ? () => onCurrentWork(index, "isCurrent")
                                : () => {}
                            }
                          />
                          <label
                            className="custom-control-label enroll"
                            htmlFor={`customCheck${index}`}
                            style={{ cursor: "pointer" }}
                          >
                            <p className="grey-txt-bold">
                              I am currently enrolled at this institution
                            </p>
                          </label>
                        </div>
                      </div>
                      <Row style={{ marginBottom: "50px" }}>
                        <Col lg={6} md={6} sm={12} xs={12}>
                          <span
                            className="label-input"
                            style={{ display: "flex", fontWeight: "500" }}
                          >
                            Start date
                          </span>
                          <div style={{ display: "flex" }}>
                            <div
                              className={`${
                                !value.startDate
                                  ? props?.validationError?.data?.education
                                    ? "red-alert"
                                    : ""
                                  : ""
                              } select`}
                            >
                              <DatePicker
                                selected={
                                  value?.startDate
                                    ? new Date(
                                        new Date(value?.startDate).getTime()
                                      )
                                    : null
                                }
                                onChange={(date) =>
                                  onChangeDate(date, index, "startDate")
                                }
                                dateFormat="dd/MM/yyyy"
                                // showMonthYearPicker
                                // showFullMonthYearPicker
                                showYearDropdown
                              />
                            </div>
                          </div>
                          {!value.startDate ? (
                            props?.validationError?.data?.education ? (
                              <div className="red-alert-message">
                                {"Missing start date"}
                              </div>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </Col>
                        {!value.isCurrent ? (
                          <Col lg={6} md={6} sm={12} xs={12}>
                            <span
                              className="label-input"
                              style={{ display: "flex", fontWeight: "500" }}
                            >
                              {" "}
                              End date
                            </span>
                            <div style={{ display: "flex" }}>
                              <div
                                className={`${
                                  !value.endDate
                                    ? props?.validationError?.data?.education
                                      ? "red-alert"
                                      : ""
                                    : ""
                                } select`}
                              >
                                <DatePicker
                                  selected={
                                    value?.endDate
                                      ? new Date(
                                          new Date(value?.endDate).getTime()
                                        )
                                      : null
                                  }
                                  onChange={(date) =>
                                    onChangeDate(date, index, "endDate")
                                  }
                                  dateFormat="dd/MM/yyyy"
                                  // showMonthYearPicker
                                  // showFullMonthYearPicker
                                  showYearDropdown
                                />
                              </div>
                            </div>
                            {!value.endDate ? (
                              props?.validationError?.data?.education ? (
                                <div className="red-alert-message">
                                  {"Missing end date"}
                                </div>
                              ) : (
                                ""
                              )
                            ) : (
                              ""
                            )}
                          </Col>
                        ) : (
                          ""
                        )}
                      </Row>
                    </div>
                  );
                })
              : ""}

            <a
              className="green-link-2"
              onClick={!iscompletedForm ? educationAdd : () => {}}
            >
              <i className="mdi mdi-plus mr-1"></i>
              Add new education
            </a>
          </div>
        </div>
        <Nextsteps step={5} {...props} submitStepInRedux={submitStep5Info} />
      </Col>
    </Row>
  );
};
