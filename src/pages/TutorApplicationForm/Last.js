import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";

export const Last = (props) => {
  const submit = () => {
    alert("You did it! Yay!"); // eslint-disable-line
  };

  const [state, updateState] = useState({
    confirmWorkEligiblility: false,
    confirmValidDocs: false,
    agreeToTOS: false,
    phoneNumber: "",
  });

  useEffect(() => {
    let {
      confirmWorkEligiblility,
      confirmValidDocs,
      agreeToTOS,
      phoneNumber,
    } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    confirmWorkEligiblility = TutorInfoObj?.step9?.confirmWorkEligiblility;
    confirmValidDocs = TutorInfoObj?.step9?.confirmValidDocs;
    agreeToTOS = TutorInfoObj?.step9?.agreeToTOS;
    phoneNumber = TutorInfoObj?.step9?.phoneNumber;

    updateState((state) => ({
      ...state,
      confirmWorkEligiblility: confirmWorkEligiblility
        ? confirmWorkEligiblility
        : false,
      confirmValidDocs: confirmValidDocs ? confirmValidDocs : false,
      agreeToTOS: agreeToTOS ? agreeToTOS : false,
      phoneNumber,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 9) {
      console.log("Run 9 obj====");
      submitStep9Info(true);
    }
  }, [props]);

  // step9: {
  //   confirmWorkEligiblility: false,
  //   confirmValidDocs: false,
  //   agreeToTOS: false,
  //   phoneNumber: "617-982-4020",
  // },

  const submitStep9Info = (isCallApi) => {
    const {
      confirmWorkEligiblility,
      confirmValidDocs,
      agreeToTOS,
      phoneNumber,
    } = state;
    const { TutorInfoObj } = props;

    let step9 = {
      confirmWorkEligiblility,
      confirmValidDocs,
      agreeToTOS,
      phoneNumber,
    };
    TutorInfoObj.step9 = step9;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (phoneNumber) {
    //   TutorInfoObj.step9 = step9;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };
  let {
    confirmWorkEligiblility,
    confirmValidDocs,
    agreeToTOS,
    phoneNumber,
  } = state;
  const { iscompletedForm } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={9} {...props} nextStep={submit} />
        <div className="row">
          <div className="col-lg-9 subject-mode review_nd_sumbit">
            <h3 className="step-title">
              Review Askademia policies before submitting application
            </h3>
            <span className="label-1">
              By submitting I confirm the following is true:
            </span>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck91"
                checked={confirmWorkEligiblility}
              />
              <label
                className="custom-control-label grey-txt-bold"
                htmlFor="customCheck91"
                style={{ cursor: "pointer" }}
                onClick={
                  !iscompletedForm
                    ? () =>
                        updateState({
                          ...state,
                          confirmWorkEligiblility: !state.confirmWorkEligiblility,
                        })
                    : () => {}
                }
              >
                I am eligible to work or possess the relevant immigration status
                to work in the UK on a self-employed basis. Learn more about{" "}
                <span
                  style={{ color: "#2cb46d" }}
                  onClick={()=>props.history.push("/Uk-Self-EmpLaw")}
                >
                  UK self-employment law.
                </span>
              </label>
              {!confirmWorkEligiblility ? (
                props?.validationError?.data?.confirmWorkEligiblility ? (
                  <div
                    className="red-alert-message"
                    style={{ fontSize: "17px" }}
                  >
                    {props?.validationError?.data?.confirmWorkEligiblility}
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck92"
                checked={confirmValidDocs}
              />
              <label
                className="custom-control-label grey-txt-bold"
                htmlFor="customCheck92"
                style={{ cursor: "pointer" }}
                onClick={
                  !iscompletedForm
                    ? () =>
                        updateState({
                          ...state,
                          confirmValidDocs: !state.confirmValidDocs,
                        })
                    : () => {}
                }
              >
                I confirm that my descriptions and documents supplied are my
                own, and accurately reflect my tutoring sessions.
              </label>
              {!confirmValidDocs ? (
                props?.validationError?.data?.confirmValidDocs ? (
                  <div
                    className="red-alert-message"
                    style={{ fontSize: "17px" }}
                  >
                    {props?.validationError?.data?.confirmValidDocs}
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck93"
                checked={agreeToTOS}
              />
              <label
                className="custom-control-label grey-txt-bold"
                htmlFor="customCheck93"
                style={{ cursor: "pointer" }}
                onClick={
                  !iscompletedForm
                    ? () =>
                        updateState({
                          ...state,
                          agreeToTOS: !state.agreeToTOS,
                        })
                    : () => {}
                }
              >
                {`I agree to the `}
                <span
                  style={{ color: "#2cb46d" }}
                  onClick={()=>props.history.push("/Service-and-refundPolicy")}
                >
                  Askademia Tutoring Terms and Service and Refund Policy.
                </span>
              </label>
              {!agreeToTOS ? (
                props?.validationError?.data?.agreeToTOS ? (
                  <div
                    className="red-alert-message"
                    style={{ fontSize: "17px" }}
                  >
                    {props?.validationError?.data?.agreeToTOS}
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <hr style={{ marginBottom: "4em", marginTop: "4em" }} />
            <h3 className="step-title">Add your mobile number</h3>
            <p className="submit_para grey-txt-bold">
              We’ll send you updates about session requests, upcoming sessions
              and other notifications. This number should be a UK number and
              should be able to receive texts or calls.
            </p>
            <div className="row" style={{ marginBottom: "30px" }}>
              <div className="col-lg-9">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                      style={{
                        borderRight: "none",
                        background: "#fff",
                        height: "70px",
                        color: "#6e6e6ee0",
                        borderColor: props?.validationError?.data
                          ?.accountHolderName
                          ? "red"
                          : "",
                      }}
                    >
                      +44
                    </span>
                  </div>
                  <input
                    // type="number"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{
                      borderLeft: "none",
                      height: "70px",
                      borderColor: props?.validationError?.data
                        ?.accountHolderName
                        ? "red"
                        : "",
                    }}
                    value={phoneNumber}
                    disabled={!iscompletedForm ? false : true}
                    onChange={(e) =>
                      updateState({
                        ...state,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </div>
                {props?.validationError?.data?.phoneNumber ? (
                  <div className="red-alert-message">
                    {props?.validationError?.data?.phoneNumber}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* <div className="col-lg-3">
                <button
                  className="btn btn-primary verify_btn"
                  style={{
                    height: "70px",
                    width: " 200px",
                    borderRadius: "10px",
                  }}
                >
                  Verify
                </button>
              </div> */}
            </div>
            <p className="small-text submit_small">
              <i className="mdi mdi-lock mr-1"></i>This information is not
              shared with other users of Askademia
            </p>
            {/* <label className="label mb-3">
              Askademia just sent you a text message with verification code to
            +447869852442.{" "}
            </label>
            <div className="row">
              <div className="col-lg-8">
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-4 text-right">
                Didn’t receive it?
              <a href="#" className="green-text">
                  Resend
              </a>
              </div>
            </div> */}
          </div>
        </div>
        <Nextsteps step={9} {...props} submitStepInRedux={submitStep9Info} />
      </Col>
    </Row>
  );
};
