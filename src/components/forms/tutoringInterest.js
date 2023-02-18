import React, { useState, useEffect, useRef } from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import { getTutorApplication } from "./../../apis/tutors";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
export const TutoringInterest = (props) => {
  let { TutorInfoObj } = props;
  const [state, updateState] = useState({
    subjectObj: {},
    showvalidationList: {},
  });

  const prevFile = usePrevious({ TutorInfoObj });

  const validationStep2 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step2?.previouslyTutored !== "" &&
      TutorInfoObj?.step2?.supportingDocs?.length &&
      TutorInfoObj?.step2?.certificates
      ? true
      : false;
  };
  const validationStep3 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step3?.tagline &&
      TutorInfoObj?.step3?.bio &&
      TutorInfoObj?.step3?.teachingStyle
      ? true
      : false;
  };
  const validationStep4 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step4?.proilePhotoUrl ? true : false;
  };
  const validationStep5 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step5?.employment?.length &&
      TutorInfoObj?.step5?.education?.length &&
      TutorInfoObj?.step5?.education[0]?.schoolName &&
      TutorInfoObj?.step5?.education[0]?.degree &&
      TutorInfoObj?.step5?.education[0]?.startDate &&
      (TutorInfoObj?.step5?.education[0]?.endDate ||
        TutorInfoObj?.step5?.education[0]?.isCurrent) &&
      TutorInfoObj?.step5?.employment[0]?.employerName &&
      TutorInfoObj?.step5?.employment[0]?.jobTitle &&
      TutorInfoObj?.step5?.employment[0]?.startDate &&
      (TutorInfoObj?.step5?.employment[0]?.endDate ||
        TutorInfoObj?.step5?.employment[0]?.isCurrentJob)
      ? true
      : false;
  };
  const validationStep6 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step6?.ratePerHour ? true : false;
  };
  const validationStep7 = () => {
    const { TutorInfoObj } = props;
    return (TutorInfoObj?.step7?.typeOfDocument === 0 ||
      TutorInfoObj?.step7?.typeOfDocument) &&
      TutorInfoObj?.step7?.authorizeToRunBgCheck &&
      TutorInfoObj?.step7?.frontOfCardUrl &&
      TutorInfoObj?.step7?.backOfCardUrl &&
      TutorInfoObj?.step7?.dBSCertUrl
      ? true
      : false;
  };
  const validationStep8 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj.step8?.accountHolderName &&
      TutorInfoObj?.step8?.bankAccountShortCode &&
      TutorInfoObj?.step8?.accountNumber
      ? true
      : false;
  };
  const validationStep9 = () => {
    const { TutorInfoObj } = props;
    return TutorInfoObj?.step9?.phoneNumber &&
      TutorInfoObj?.step9?.agreeToTOS &&
      TutorInfoObj?.step9?.confirmValidDocs &&
      TutorInfoObj?.step9?.confirmWorkEligiblility
      ? true
      : false;
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    // let subjectObj = JSON.parse(localStorage.getItem("subjectObj"));
    // updateState((state) => ({ ...state, subjectObj }));
    // if (prevFile?.TutorInfoObj !== TutorInfoObj) {
    // }
  }, [props]);

  const GotoEditForm = () => {
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;
    props.completedFillForm(true);
    props.history.push(`/tutor-application-form`);
  };

  const isExistObj = (subjects) => {
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

  TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : [];

  return (
    <div>
      <Row className="flex-center-center">
        <Col lg={10} md={10} sm={12} xs={12} className="tutoringInterest-Col">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ marginBottom: "50px" }}
          >
            <h1 className="tutoringInterest-head">Tutor Application Form </h1>
          </Col>

          {isExistObj(TutorInfoObj.step1?.subjects).indexOf(true) !== -1 &&
            validationStep2() &&
            validationStep3() &&
            validationStep4() &&
            validationStep5() &&
            validationStep6() &&
            validationStep7() &&
            validationStep8() &&
            validationStep9() ? (
              <SubmittedSubject
                props={props}
                subjects={TutorInfoObj.step1?.subjects}
                GotoEditForm={GotoEditForm}
              />
            ) : (
              <UnSubmittedSubject props={props} />
            )}
        </Col>
      </Row>
    </div>
  );
};

const SubmittedSubject = ({ props, subjects, GotoEditForm }) => {
  return (
    <Col lg={12} md={12} sm={12} xs={12} className="tutoringInterest-body">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="tutoringInterest-body-head"
      >
        <div className="icon-div">
          <span className="icon-Col">
            <Image
              style={{
                transform: "rotate(90deg)",
              }}
              src={require("./../../assets/icons/folder.png")}
            />
          </span>
          <span className="text-style">Submitted</span>
        </div>
      </Col>
      <hr style={{ marginTop: "0px", borderColor: "#c5c1c1" }} />
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="tutoringInterest-body-content"
      >
        <p
          className="para-txt"
          style={{
            paddingBottom: "0px",
          }}
        >
          Your interest to tutor the following subject on Askademia in under
          rewiew
          <div className="button-session">
            {Object.keys(subjects).map((subjectObj, title) => {
              return Object.keys(subjects[subjectObj]).map((wSub, index) =>
                subjects[subjectObj][wSub].length ? (
                  <Button key={index}>
                    {wSub.charAt(0).toUpperCase() + wSub.slice(1)}
                  </Button>
                ) : null
              );
            })}
          </div>
        </p>
        <div className="icon-div flex-end-center">
          <span className="icon-inner">
            <Image src={require("./../../assets/images/logo.png")} />
          </span>
        </div>
      </Col>
      <hr style={{ margin: 0, borderColor: "#c5c1c1" }} />
      <Col lg={12} md={12} sm={12} xs={12} className="tutoringInterest-footer">
        <div className="flex-start-center">
          <span
            className="green-style"
            onClick={() => {
              props.RemoveSuccessSubmit();
              GotoEditForm();
            }}
          >
            Edit
          </span>
        </div>
      </Col>
    </Col>
  );
};

const UnSubmittedSubject = ({ props }) => {
  console.log("props", props);
  return props?.TutorInfoObj?.step1 ||
    props?.TutorInfoObj?.step2 ||
    props?.TutorInfoObj?.step3 ||
    props?.TutorInfoObj?.step4 ||
    props?.TutorInfoObj?.step5 ||
    props?.TutorInfoObj?.step6 ||
    props?.TutorInfoObj?.step7 ||
    props?.TutorInfoObj?.step8 ||
    props?.TutorInfoObj?.step9 ? (
      <Col lg={12} md={12} sm={12} xs={12} className="tutoringInterest-body">
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="tutoringInterest-body-head"
        >
          <div className="icon-div">
            <span className="icon-Col">
              <Image src={require("./../../assets/icons/doc-file.png")} />
            </span>
            <span className="text-style">In progress</span>
          </div>
        </Col>
        <hr style={{ marginTop: "0px", borderColor: "#c5c1c1" }} />
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="tutoringInterest-body-content"
        >
          <p
            className="para-txt"
            style={{
              paddingBottom: "85px",
            }}
          >
            You'll need to submit a few more detail before you can submit your
            application
        </p>
          <div className="icon-div flex-end-center">
            <span className="icon-inner">
              <Image src={require("./../../assets/images/logo.png")} />
            </span>
          </div>
        </Col>
        <hr style={{ margin: 0, borderColor: "#c5c1c1" }} />
        <Col lg={12} md={12} sm={12} xs={12} className="tutoringInterest-footer">
          <div className="flex-start-center">
            <span
              className="green-style"
              onClick={() => {
                props.RemoveSuccessSubmit();
                props.history.push(
                  `./tutor-application-form#${
                  props?.currentStep === 1
                    ? `FirstStep`
                    : props?.currentStep !== 9
                      ? `step${props?.currentStep}`
                      : "TheEnd!"
                  }`
                );
              }}
            >
              Continue
          </span>
          </div>
        </Col>
      </Col>
    ) : (
      ""
    );
};
