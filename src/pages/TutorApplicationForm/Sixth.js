import React, { useState, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";

export const Six = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };
  const [state, updateState] = useState({
    ratePerHour: "",
    serviceFee: "",
  });

  // step6: {
  //   ratePerHour: 30,
  // },
  useEffect(() => {
    let { ratePerHour } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    ratePerHour = TutorInfoObj?.step6?.ratePerHour;

    updateState((state) => ({
      ...state,
      ratePerHour,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 6) {
      submitStep6Info(true);
    }
  }, [props]);

  const submitStep6Info = (isCallApi) => {
    const { ratePerHour, serviceFee } = state;
    const { TutorInfoObj } = props;

    let step6 = {
      ratePerHour: Number(ratePerHour),
    };
    TutorInfoObj.step6 = step6;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (ratePerHour) {
    //   TutorInfoObj.step6 = step6;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const { serviceFee, ratePerHour } = state;
  const { iscompletedForm, validationError } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={6} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9  subject-mode date-div">
            <h3 className="step-title">Set your price per hour</h3>
            <p className="dates_desc grey-txt-bold">
              The price of your sessions are entirely up to you. The amount will
              appear on your profile and it is the hourly rates parents and
              stuudents will pay for your session. We charge tutors a 20% fee
              and it is calculated based on the per price per hour. The fee is
              automatically deducted from your tutor payout.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <label className="label date-txt">Your rate</label>
                <div
                  className="comp_input"
                  style={{
                    borderColor: !ratePerHour
                      ? props?.validationError?.data?.ratePerHour
                        ? "red"
                        : ""
                      : "",
                  }}
                >
                  <input
                    style={{
                      paddingLeft: "40px",
                    }}
                    type="number"
                    className="form-control"
                    value={ratePerHour}
                    disabled={!iscompletedForm ? false : true}
                    onChange={(e) =>
                      updateState({
                        ...state,
                        ratePerHour: e.target.value,
                        serviceFee: (e.target.value * 20) / 100,
                      })
                    }
                    name="Your rate"
                  />
                  <Image
                    src={require("./../../assets/icons/pound-black.png")}
                  />
                </div>

                {!ratePerHour ? (
                  props?.validationError?.data?.ratePerHour ? (
                    <div className="red-alert-message">
                      {props?.validationError?.data?.ratePerHour}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-6">
                <label className="label date-txt">Service Fee </label>
                <div
                  className="comp_input"
                  style={{
                    borderColor: !ratePerHour
                      ? props?.validationError?.data?.ratePerHour
                        ? "red"
                        : ""
                      : "",
                  }}
                >
                  <input
                    style={{
                      paddingLeft: "40px",
                    }}
                    type="number"
                    className="form-control"
                    disabled
                    value={(ratePerHour * 20) / 100}
                    name="serviceFee"
                  />
                  <Image
                    src={require("./../../assets/icons/pound-black.png")}
                  />
                </div>
                {!ratePerHour ? (
                  props?.validationError?.data?.ratePerHour ? (
                    <div className="red-alert-message">
                      {"Service fee missing"}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <Nextsteps step={6} {...props} submitStepInRedux={submitStep6Info} />
      </Col>
    </Row>
  );
};
