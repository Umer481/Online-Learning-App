import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";
import { uploadImage } from "./../../apis/tutors";

var regexpUrl = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

export const Second = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };
  const [state, setState] = useState({
    certificates: {},
    files: [],
    link: "",
    socialUrls: [],
    showLinkInput: null,
    previouslyTutored: "",
    lengthOfTeachingPractice: "",
    informedStudent: null,
    supportingDocs: [],
    validateUrl: "",
  });

  const submitStep2Info = (isCallApi) => {
    const {
      previouslyTutored,
      lengthOfTeachingPractice,
      informedStudent,
      supportingDocs,
      socialUrls,
      providedAddistionalCerts,
    } = state;
    const { TutorInfoObj } = props;

    let step2 = {
      previouslyTutored: previouslyTutored,
      providedAddistionalCerts,
      lengthOfTeachingPractice,
      // informedStudent: informedStudent,
      supportingDocs,
      socialUrls,
      certificates: TutorInfoObj?.step2?.certificates
        ? TutorInfoObj?.step2?.certificates
        : {
            teachingAndEducation: [],
            doctoralDegree: [],
          },
    };
    TutorInfoObj.step2 = step2;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (
    //   previouslyTutored !== "" &&
    //   (lengthOfTeachingPractice === 0 || lengthOfTeachingPractice) &&
    //   supportingDocs.length &&
    //   TutorInfoObj?.step2?.certificates
    // ) {
    //   TutorInfoObj.step2 = step2;
    //   props.AddTutorInfo(TutorInfoObj);

    //   return true;
    // } else {
    //   return false;
    // }
  };

  const fileupload = (file) => {
    let supportingDocs = state.supportingDocs ? state.supportingDocs : [];
    const image = file.target.files[0];
    let formdata = new FormData();
    formdata.append("image", image);
    state.files.push(file.target.files[0]);
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;
    uploadImage({ token, typeNo: "3", file: formdata })
      .then((res) => {
        if (res.data.message === "image uploaded successfully") {
          supportingDocs.push(res.data.uploadImagePath);
          setState({
            ...state,
            supportingDocs,
          });
        }
      })
      .catch((err) => console.log(err, "==err"));
    setState({
      ...state,
    });
  };

  const oncloseFile = (index) => {
    state.files.splice(index, 1);
    setState({
      ...state,
    });
  };

  const onDeleteLink = (index) => {
    state.socialUrls.splice(index, 1);
    setState({
      ...state,
    });
  };
  const addLink = () => {
    if (regexpUrl.test(state.link)) {
      state.socialUrls.push(state.link);
      setState({
        ...state,
        link: "",
        showLinkInput: false,
      });
    } else {
      setState({
        ...state,
        validateUrl: "Please enter a valid URL",
      });
    }
  };
  useEffect(() => {
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    let previouslyTutored = TutorInfoObj?.step2?.previouslyTutored;
    let providedAddistionalCerts =
      TutorInfoObj?.step2?.providedAddistionalCerts;
    let lengthOfTeachingPractice =
      TutorInfoObj?.step2?.lengthOfTeachingPractice;
    let informedStudent = TutorInfoObj?.step2?.informedStudent;
    let supportingDocs =
      TutorInfoObj && TutorInfoObj.step2 && TutorInfoObj.step2.supportingDocs
        ? TutorInfoObj.step2.supportingDocs
        : [];
    let socialUrls = TutorInfoObj?.step2?.socialUrls
      ? TutorInfoObj?.step2?.socialUrls
      : [];
    let certificates = TutorInfoObj?.step2?.certificates
      ? TutorInfoObj?.step2?.certificates
      : {
          teachingAndEducation: [],
          doctoralDegree: [],
        };
    setState((state) => ({
      ...state,
      certificates: certificates,
      previouslyTutored,
      providedAddistionalCerts,
      informedStudent,
      supportingDocs,
      socialUrls,
      lengthOfTeachingPractice,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 2) {
      submitStep2Info(true);
    }
  }, [props]);
  const {
    certificates,
    files,
    socialUrls,
    link,
    showLinkInput,
    previouslyTutored,
    providedAddistionalCerts,
    informedStudent,
    lengthOfTeachingPractice,
    supportingDocs,
    validateUrl,
  } = state;
  const { iscompletedForm } = props;

  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={2} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 subject-mode skill-div">
            <h3 className="step-title">Skills and experiences</h3>
            <p className="grey-txt-bold">
              Have you previously tutored these subjects informally or another
              platform?
            </p>
            <div className="row mb-3">
              <div className="col-lg-12 green-radio-custom">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked={previouslyTutored === true ? true : false}
                  />
                  <label
                    className="custom-control-label grey-txt-bold"
                    htmlFor="customRadioInline1"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              previouslyTutored: true,
                            })
                        : () => {}
                    }
                  >
                    Yes, I have
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline custom-control-right">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                    checked={previouslyTutored === false ? true : false}
                  />
                  <label
                    className="custom-control-label grey-txt-bold"
                    htmlFor="customRadioInline2"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              previouslyTutored: false,
                            })
                        : () => {}
                    }
                  >
                    No, I haven’t
                  </label>
                </div>
              </div>
            </div>
            <p className="grey-txt-bold">
              Do you have teaching certificates or qualification relevant to the
              subject’s you’ll be tutoring?
            </p>
            <div className="row mb-3">
              <div className="col-lg-12 green-radio-custom">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline3"
                    name="customRadioInline3"
                    className="custom-control-input"
                    checked={providedAddistionalCerts === true ? true : false}
                  />
                  <label
                    className="custom-control-label grey-txt-bold"
                    htmlFor="customRadioInline3"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              providedAddistionalCerts: true,
                            })
                        : () => {}
                    }
                  >
                    Yes, I have
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline custom-control-right">
                  <input
                    type="radio"
                    id="customRadioInline4"
                    name="customRadioInline3"
                    className="custom-control-input"
                    checked={providedAddistionalCerts === false ? true : false}
                  />
                  <label
                    className="custom-control-label grey-txt-bold"
                    htmlFor="customRadioInline4"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              providedAddistionalCerts: false,
                            })
                        : () => {}
                    }
                  >
                    No, I haven’t
                  </label>
                </div>
              </div>
            </div>
            <p className="grey-txt-bold">
              This information will help parents’ students make informed
              decisions and will not affect your application.
            </p>

            {certificates?.teachingAndEducation?.length ||
            certificates?.doctoralDegree?.length ? (
              <div className="filled-data-card">
                {certificates?.teachingAndEducation?.length
                  ? certificates.teachingAndEducation.map((qualifi, index) => {
                      return (
                        <>
                          <label className="label">
                            TEACHING AND EDUCATION CERTIFICATES
                          </label>
                          <span className="flex-between-center">
                            {qualifi}
                            {certificates?.teachingAndEducation?.length ===
                              index + 1 &&
                            !certificates?.doctoralDegree?.length ? (
                              <span
                                className="edit-style"
                                onClick={
                                  !iscompletedForm
                                    ? () => {
                                        submitStep2Info(false);
                                        props.history.push(
                                          "/tutor-application-form/qualificationForm"
                                        );
                                      }
                                    : () => {}
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Edit
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                        </>
                      );
                    })
                  : ""}
                {certificates?.doctoralDegree?.length
                  ? certificates.doctoralDegree.map((degree, index) => {
                      return (
                        <>
                          <label className="label">DOCTORAL DEGREE</label>
                          <span className="flex-between-center">
                            {degree}
                            {certificates?.doctoralDegree?.length ===
                            index + 1 ? (
                              <a
                                className="edit-style"
                                onClick={
                                  !iscompletedForm
                                    ? () => {
                                        submitStep2Info();
                                        props.history.push(
                                          "/tutor-application-form/qualificationForm"
                                        );
                                      }
                                    : () => {}
                                }
                                style={{ cursor: "pointer" }}
                              >
                                Edit
                              </a>
                            ) : (
                              ""
                            )}
                          </span>
                        </>
                      );
                    })
                  : ""}
              </div>
            ) : (
              <div
                className="btn-transparent-outline mb-5"
                style={{
                  height: "150px",
                  display:
                    certificates?.teachingAndEducation?.length ||
                    certificates?.doctoralDegree?.length ||
                    providedAddistionalCerts
                      ? ""
                      : "none",
                }}
                onClick={() => {
                  submitStep2Info();
                  props.history.push(
                    "/tutor-application-form/qualificationForm"
                  );
                }}
              >
                <div className="btn-circle">
                  <i className="mdi mdi-plus"></i>
                </div>{" "}
                Select your teaching certificate or certificates
              </div>
            )}

            <hr style={{ marginBottom: "5em", marginTop: "5em" }} />
            <h3 className="step-title" style={{ marginBottom: "40px" }}>
              Add supporting documents to verify your qualifications, supporting
              documents will appear as verified on your tutor profile.
            </h3>
            <p className="small-text">
              <i className="mdi mdi-lock mr-2" style={{ color: "#888483" }}></i>
              This information is used to verify and award you with a badge on
              your tutor profile and is not shared with other users of Askademia
            </p>
            <a className="green-link-1">
              + Add File
              {!iscompletedForm ? (
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={fileupload}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                ""
              )}
            </a>
            <ul className="files-list">
              {supportingDocs?.length
                ? supportingDocs.map((file, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          marginBottom:
                            files.length === index + 1 ? "80px" : "",
                        }}
                      >
                        <span>
                          {" "}
                          {file?.name ? file?.name : `File ${index + 1}`}
                        </span>
                        <i
                          style={{
                            fontSize: "32px",
                            textAlign: "right",
                            cursor: "pointer",
                          }}
                          onClick={() => oncloseFile(index)}
                          className="mdi mdi-close"
                        ></i>
                      </li>
                    );
                  })
                : files?.length
                ? files.map((file, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          marginBottom:
                            files.length === index + 1 ? "80px" : "",
                        }}
                      >
                        <span> {file?.name}</span>
                        <i
                          style={{
                            fontSize: "32px",
                            textAlign: "right",
                            cursor: "pointer",
                          }}
                          onClick={() => oncloseFile(index)}
                          className="mdi mdi-close"
                        ></i>
                      </li>
                    );
                  })
                : ""}
            </ul>

            <p className="grey-txt-bold">
              How long have you been practicing, teaching or tutoring the
              subjects that you’ll be tutoring?
            </p>
            <div className="row " style={{ marginBottom: "40px" }}>
              <div className="col-lg-12 green-radio-custom mb-3">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline7"
                    name="customRadioInline7"
                    className="custom-control-input"
                    checked={lengthOfTeachingPractice === 0 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline7"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              lengthOfTeachingPractice: 0,
                            })
                        : () => {}
                    }
                  >
                    Less than a year
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline8"
                    name="customRadioInline7"
                    className="custom-control-input"
                    checked={lengthOfTeachingPractice === 1 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline8"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              lengthOfTeachingPractice: 1,
                            })
                        : () => {}
                    }
                  >
                    Between 1 – 4 years
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline9"
                    name="customRadioInline7"
                    className="custom-control-input"
                    checked={lengthOfTeachingPractice === 3 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline9"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            setState({
                              ...state,
                              lengthOfTeachingPractice: 3,
                            })
                        : () => {}
                    }
                  >
                    More than 5 years
                  </label>
                </div>
              </div>
            </div>
            <p className="grey-txt-bold">
              Do you have a social media following or website related to
              tutoring or teaching your subjects?
            </p>
            <p className="grey-txt-bold">
              Add links to your Instagram, Twitter, Facebook, website, blog, or
              articles written by you or about you. Other users of Askademia
              will not see this information.
            </p>
            <a
              onClick={
                !iscompletedForm
                  ? () => setState({ ...state, showLinkInput: !showLinkInput })
                  : () => {}
              }
              className="green-link-1"
              style={{ cursor: "pointer" }}
            >
              <i className="mdi mdi-plus"></i>Add Link
            </a>
            {showLinkInput ? (
              <div>
                <div className="input-div">
                  <input
                    type="text"
                    className="form-control url-input grey-txt-bold flex-center-center"
                    placeholder="Your Url"
                    style={{
                      height: "80px",
                      padding: "8px 50px",
                      borderColor: validateUrl ? "red" : "",
                    }}
                    onChange={(e) =>
                      setState({
                        ...state,
                        link: e.target.value,
                        validateUrl: "",
                      })
                    }
                    value={link}
                  />
                  <Button
                    onClick={addLink}
                    style={{ borderRadius: " 0px 5px 5px 0px", width: "88px" }}
                  >
                    Add
                  </Button>
                </div>
                {validateUrl ? (
                  <div className="red-alert-message">{validateUrl}</div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            <ul className="files-list">
              {socialUrls?.length
                ? socialUrls.map((link, index) => {
                    return (
                      <li
                        key={index}
                        style={{ boxShadow: "0 0 0 1px #2cb46c" }}
                      >
                        {link}
                        <i
                          className="mdi mdi-close"
                          onClick={
                            !iscompletedForm
                              ? () => onDeleteLink(index)
                              : () => {}
                          }
                        ></i>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
        </div>
        <Nextsteps step={2} {...props} submitStepInRedux={submitStep2Info} />
      </Col>
    </Row>
  );
};
