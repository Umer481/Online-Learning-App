import React, { useState, useEffect } from "react";
import { Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";
import CertificatePic from "./CertificatePic";
import FrontIdPic from "./FrontIdPic";
import BackIdPic from "./BackIdPic";
import Backend from "react-dnd-html5-backend";
import DraggableComponent from "./../../components/DraggableComponent";
import { DndProvider } from "react-dnd";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const Seven = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };

  const [state, updateState] = useState({
    typeOfDocument: 0,
    authorizeToRunBgCheck: false,
    frontOfCardUrl: "",
    backOfCardUrl: "",
    dBSCertUrl: "",
    countryRegion: "",
    country: ["Pakistan", "United kingdom", "USA", "Canada", "Srilanka"],
    imageErrorMessage: "",
    certificateError: false,
    showAlert: false,
  });
  useEffect(() => {
    let {
      typeOfDocument,
      authorizeToRunBgCheck,
      frontOfCardUrl,
      backOfCardUrl,
      dBSCertUrl,
      countryRegion,
    } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    typeOfDocument = TutorInfoObj?.step7?.typeOfDocument;
    authorizeToRunBgCheck = TutorInfoObj?.step7?.authorizeToRunBgCheck;
    frontOfCardUrl = TutorInfoObj?.step7?.frontOfCardUrl;
    backOfCardUrl = TutorInfoObj?.step7?.backOfCardUrl;
    dBSCertUrl = TutorInfoObj?.step7?.dBSCertUrl;
    countryRegion = TutorInfoObj?.step7?.countryRegion;
    updateState((state) => ({
      ...state,
      typeOfDocument,
      authorizeToRunBgCheck,
      frontOfCardUrl,
      backOfCardUrl,
      dBSCertUrl,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 7) {
      submitStep7Info(true);
    }
  }, [props]);

  const submitStep7Info = (isCallApi) => {
    const {
      typeOfDocument,
      authorizeToRunBgCheck,
      frontOfCardUrl,
      backOfCardUrl,
      dBSCertUrl,
      countryRegion,
    } = state;

    // step7: {
    //   typeOfDocument: 0,
    //   authorizeToRunBgCheck: true,
    //   frontOfCardUrl: "",
    //   backOfCardUrl: "",
    //   dBSCertUrl: "",
    // },

    const { TutorInfoObj } = props;

    let step7 = {
      typeOfDocument,
      authorizeToRunBgCheck,
      frontOfCardUrl,
      backOfCardUrl,
      dBSCertUrl,
      countryRegion,
    };
    TutorInfoObj.step7 = step7;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (
    //   (typeOfDocument === 0 || typeOfDocument) &&
    //   authorizeToRunBgCheck  &&
    //   frontOfCardUrl &&
    //   backOfCardUrl &&
    //   dBSCertUrl &&
    //   countryRegion
    // ) {
    //   TutorInfoObj.step7 = step7;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const showAlert = () => {
    confirmAlert({
      title: "Type ",
      title: "Please select a PDF",
      buttons: [
        {
          label: "Ok",
          onClick: () =>
            updateState({
              certificateError: false,
              ...state,
            }),
        },
      ],
      closeOnEscape: true,
    });
  };
  const {
    country,
    countryRegion,
    dBSCertUrl,
    frontOfCardUrl,
    backOfCardUrl,
    typeOfDocument,
    imageErrorMessage,
    certificateError,
  } = state;
  const { iscompletedForm, validationError } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={7} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 subject-mode  background">
            <h3 className="step-title">
              Add your background check Certificate
            </h3>
            <p className="certifcate_para grey-txt-bold">
              You do not need a background check to use our platform tutor,
              however you may miss on opportunities where students or parents
              require you to have a background check certificate. All tutors who
              upload a copy of their enhanced background check certificate such
              as the DBS or PVG will be awarded a verification badge on their
              tutor profile and have access all tutoring jobs within their
              speciality.
            </p>
            <label className="label">Your certificate</label>
            <p className="certifcate_para grey-txt-bold">
              Upload a colour copy of your enhanced DBS or PVG certificate which
              has been issued within the last 2 years
            </p>
            <DndProvider backend={Backend}>
              <DraggableComponent
                TargetChildComponent={CertificatePic}
                certificateError={certificateError}
                ImageUploadAction={props.ImageUploadAction}
                uploadedImage={props.uploadImage}
                iscompletedForm={iscompletedForm}
                errorMessagehandling={(error) => {
                  updateState({
                    ...state,
                    certificateError: error,
                  });
                  setTimeout(() => {
                    updateState({
                      ...state,
                      certificateError: false,
                    });
                    showAlert();
                  }, 1000);
                }}
                updateImageUrl={(e) =>
                  updateState({
                    ...state,
                    dBSCertUrl: e,
                  })
                }
                imageUrl={dBSCertUrl}
                typeNo={"3"}
              />
            </DndProvider>
            {!dBSCertUrl ? (
              props?.validationError?.data?.dBSCertUrl ? (
                <div
                  className="red-alert-message"
                  style={{ textAlign: "center" }}
                >
                  {props?.validationError?.data?.dBSCertUrl}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <p className="small-text certfcate_small">
              <i className="mdi mdi-lock mr-1"></i>Your certificate is used to
              verify and award you with a badge on your tutor profile and is not
              shared with other users of Askademia
            </p>
            <p className="certifcate_para grey-txt-bold">
              We request updates from the{" "}
              <span style={{ color: "#2cb46d" }}>DBS update service</span>{" "}
              periodically to keep your DBS status updated. Other users of
              Askademia will not see this information.
            </p>
            <div className="custom-control custom-checkbox mb-3 cerfcate_check">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck61"
                checked={state.authorizeToRunBgCheck}
              />
              <label
                className="custom-control-label certifcate_para grey-txt-bold"
                htmlFor="customCheck61"
                style={{ cursor: "pointer", marginBottom: "0px" }}
                onClick={
                  !iscompletedForm
                    ? () =>
                        updateState({
                          ...state,
                          authorizeToRunBgCheck: !state.authorizeToRunBgCheck,
                        })
                    : () => {}
                }
              >
                By checking this box you authorise Askademia running your DBS
                Check through the DBS Update Service
              </label>
              {!state.authorizeToRunBgCheck ? (
                props?.validationError?.data?.authorizeToRunBgCheck ? (
                  <div className="red-alert-message">
                    {props?.validationError?.data?.authorizeToRunBgCheck}
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <hr style={{ margin: "50px 0px", marginBottom: "60px" }} />
            <h3 className="step-title">Add your official ID</h3>
            <p className="certifcate_para grey-txt-bold">
              This helps us check that you are really you. Identity verification
              is one of the ways to keep Askademia secure.
            </p>
            <span className="label">Issuing country/region</span>
            <div
              className="row"
              style={{ fontSize: "20px", margin: "40px 0px" }}
              >
              <div className="col-4 country">
                <DropdownButton
                  id="dropdown-basic-button"
                  title={
                    <span className="flex-between-center">
                      <span className="search-date">
                        {countryRegion ? countryRegion : "Your Level"}
                      </span>
                    </span>
                  }
                >
                  {!iscompletedForm ? (
                    country && country.length ? (
                      country.map((countryRegion, index) => {
                        return (
                          <Dropdown.Item
                            key={index}
                            onClick={() =>
                              updateState({
                                ...this.state,
                                countryRegion: countryRegion,
                              })
                            }
                            key={index}
                          >
                            {countryRegion}
                          </Dropdown.Item>
                        );
                      })
                    ) : (
                      <Dropdown.Item>No Data</Dropdown.Item>
                    )
                  ) : (
                    ""
                  )}
                </DropdownButton>
              </div>
              <div className="col-4">
                {/* <span
                  className="green-link"
                  style={{ fontSize: "30px", fontWeight: "400" }}
                >
                  Change
                </span> */}
              </div>
            </div>
            <span
              className="label"
              style={{ marginBottom: "30px", display: "flex" }}
            >
              Type of document
            </span>
            <div className="row mb-3">
              <div className="col-lg-12 green-radio">
                <div className="custom-control custom-radio custom-control-inline radio-btn">
                  <input
                    type="radio"
                    id="customRadioInline73"
                    name="customRadioInline73"
                    className="custom-control-input"
                    checked={typeOfDocument === 6 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline73"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            updateState({
                              ...state,
                              typeOfDocument: 6,
                              imageErrorMessage: "",
                            })
                        : () => {}
                    }
                  >
                    Driver’s licence
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline radio-btn">
                  <input
                    type="radio"
                    id="customRadioInline74"
                    name="customRadioInline73"
                    className="custom-control-input"
                    checked={typeOfDocument === 4 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline74"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            updateState({
                              ...state,
                              typeOfDocument: 4,
                              imageErrorMessage: "",
                            })
                        : () => {}
                    }
                  >
                    Passport
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline radio-btn">
                  <input
                    type="radio"
                    id="customRadioInline75"
                    name="customRadioInline73"
                    className="custom-control-input"
                    checked={typeOfDocument === 1 ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline75"
                    onClick={
                      !iscompletedForm
                        ? () =>
                            updateState({
                              ...state,
                              typeOfDocument: 1,
                              imageErrorMessage: "",
                            })
                        : () => {}
                    }
                  >
                    Identity card
                  </label>
                </div>
              </div>
            </div>
            <span
              className="label"
              style={{ marginBottom: "30px", display: "flex" }}
            >
              Upload images of your ID
            </span>
            <p className="certifcate_para grey-txt-bold">
              Upload images of the front and back of your ID. Make sure your
              images are not cropped, covered or blurred and the front clearly
              shows your face.
            </p>
            <div className="row" style={{ marginBottom: "40px" }}>
              <div className="flex-center-center image-message">
                {!typeOfDocument ? (
                  imageErrorMessage ? (
                    imageErrorMessage
                  ) : props?.validationError?.data?.typeOfDocument ? (
                    <div
                      className="red-alert-message"
                      style={{ textAlign: "center" }}
                    >
                      {props?.validationError?.data?.typeOfDocument}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6">
                <DndProvider backend={Backend}>
                  <DraggableComponent
                    TargetChildComponent={FrontIdPic}
                    iscompletedForm={iscompletedForm}
                    errorMessagehandling={(error) =>
                      updateState({
                        ...state,
                        imageErrorMessage: error,
                      })
                    }
                    updateImageUrl={(e) =>
                      updateState({
                        ...state,
                        frontOfCardUrl: e,
                      })
                    }
                    imageUrl={frontOfCardUrl}
                    typeNo={
                      typeOfDocument
                        ? typeOfDocument === 1
                          ? "1"
                          : typeOfDocument === 6
                          ? "6"
                          : "4"
                        : ""
                    }
                  />
                </DndProvider>
                {!frontOfCardUrl ? (
                  props?.validationError?.data?.frontOfCardUrl ? (
                    <div className="red-alert-message">
                      {props?.validationError?.data?.frontOfCardUrl}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6 ">
                <DndProvider backend={Backend}>
                  <DraggableComponent
                    TargetChildComponent={BackIdPic}
                    iscompletedForm={iscompletedForm}
                    errorMessagehandling={(error) =>
                      updateState({
                        ...state,
                        imageErrorMessage: error,
                      })
                    }
                    updateImageUrl={(e) =>
                      updateState({
                        ...state,
                        backOfCardUrl: e,
                      })
                    }
                    imageUrl={backOfCardUrl}
                    typeNo={
                      typeOfDocument
                        ? typeOfDocument === 1
                          ? "2"
                          : typeOfDocument === 6
                          ? "7"
                          : "5"
                        : ""
                    }
                  />
                </DndProvider>
                {!backOfCardUrl ? (
                  props?.validationError?.data?.backOfCardUrl ? (
                    <div className="red-alert-message">
                      {props?.validationError?.data?.backOfCardUrl}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <p className="certfcate_small">
              <i className="mdi mdi-lock mr-1"></i>Your ID is used to verify
              your identity and is not shared with other users of Askademia
            </p>
          </div>
        </div>
        <Nextsteps step={7} {...props} submitStepInRedux={submitStep7Info} />
      </Col>
    </Row>
  );
};
