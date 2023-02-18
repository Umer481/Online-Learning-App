import React, { useState, useEffect } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";

export const Third = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };

  const [state, setState] = useState({
    tagline: "",
    bio: "",
    teachingStyle: "",
  });

  // step3: {
  //   tagline: "I am passionate about teaching",
  //   bio:
  //     "I love to teach - Helping students understand comlicated concepts and ideas of course, their success makes it worthwile. I graduated from the University of Liverpool, Liverpool with a B.Sc in Mathetematics and Finance. I am a full time tutor",
  //   teachingStyle:
  //     "I am determined to lean how I could help students who are not doing well in traditional classroom settings. As a result, I tailor my session",
  // },

  const submitStep3Info = (isCallApi) => {
    const { TutorInfoObj } = props;
    const { tagline, bio, teachingStyle } = state;
    let step3 = {
      tagline,
      bio,
      teachingStyle,
    };
    TutorInfoObj.step3 = step3;
    TutorInfoObj.step3 = step3;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (tagline && bio && teachingStyle) {
    //   TutorInfoObj.step3 = step3;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const onGetTxt = (event, limit) => {
    if (event.target.value.length <= limit) {
      setState({
        ...state,
        [event.target.id]: event.target.value,
      });
    }
  };

  useEffect(() => {
    let { tagline, bio, teachingStyle } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    tagline = TutorInfoObj?.step3?.tagline;
    bio = TutorInfoObj?.step3?.bio;
    teachingStyle = TutorInfoObj?.step3?.teachingStyle;

    setState((state) => ({
      ...state,
      tagline,
      bio,
      teachingStyle,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 3) {
      console.log("run Third obj====");
      submitStep3Info(true);
    }
  }, [props]);

  let { tagline, bio, teachingStyle } = state;
  const { iscompletedForm, validationError } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={3} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 subject-mode skill-div">
            <h3 className="step-title">Tagline</h3>
            <p className="grey-txt-bold">Description to show on your profile</p>

            <Form.Control
              className="form_textarea grey-txt-bold"
              id="tagline"
              as="textarea"
              onChange={(e) => onGetTxt(e, 75)}
              value={tagline}
              rows="3"
              style={{
                height: "150px",
                marginBottom: "20px",
                borderColor: !tagline
                  ? props?.validationError?.data?.tagline
                    ? "red"
                    : ""
                  : "",
              }}
              disabled={!iscompletedForm ? false : true}
            />
            {!tagline ? (
              props?.validationError?.data?.tagline ? (
                <div className="red-alert-message">
                  {props?.validationError?.data?.tagline}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <label
              className="limit_label"
              style={{ color: "#7a7c7c", fontSize: "28px" }}
            >{`${tagline?.length ? tagline?.length : 0}/75`}</label>
            <hr style={{ marginBottom: "5em", marginTop: "5em" }} />

            <h3 className="step-title">Tell us about yourself </h3>
            <p className="grey-txt-bold">
              Describe yourself and your tutoring journey to parents and
              students
            </p>

            <Form.Control
              className="form_textarea grey-txt-bold"
              id="bio"
              as="textarea"
              value={bio}
              rows="3"
              onChange={(e) => onGetTxt(e, 750)}
              style={{
                height: "150px",
                marginBottom: "20px",
                borderColor: !bio
                  ? props?.validationError?.data?.bio
                    ? "red"
                    : ""
                  : "",
              }}
              disabled={!iscompletedForm ? false : true}
            />
            {!bio ? (
              props?.validationError?.data?.bio ? (
                <div className="red-alert-message">
                  {props?.validationError?.data?.bio}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <label
              className="limit_label"
              style={{ color: "#7a7c7c", fontSize: "28px" }}
            >{`${bio?.length ? bio?.length : 0}/750`}</label>
            <hr style={{ marginBottom: "5em", marginTop: "5em" }} />
            <h3 className="step-title">Tell us about your teaching style</h3>
            <p className="grey-txt-bold">
              Describe how you will teach and cater for individuals with
              different learning styles to parents and students.
            </p>

            <Form.Control
              className="form_textarea grey-txt-bold"
              id="teachingStyle"
              as="textarea"
              value={teachingStyle}
              rows="3"
              onChange={(e) => onGetTxt(e, 350)}
              style={{
                height: "150px",
                marginBottom: "20px",
                borderColor: !teachingStyle
                  ? props?.validationError?.data?.teachingStyle
                    ? "red"
                    : ""
                  : "",
              }}
              disabled={!iscompletedForm ? false : true}
            />
            {!teachingStyle ? (
              props?.validationError?.data?.teachingStyle ? (
                <div className="red-alert-message">
                  {props?.validationError?.data?.teachingStyle}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
            <label
              className="limit_label"
              style={{ color: "#7a7c7c", fontSize: "28px" }}
            >{`${
              teachingStyle?.length ? teachingStyle?.length : 0
            }/350`}</label>
          </div>
        </div>

        <Nextsteps step={3} {...props} submitStepInRedux={submitStep3Info} />
      </Col>
    </Row>
  );
};
