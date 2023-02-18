import React, { useEffect, useState, useRef } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const Nextsteps = (props) => {
  const {
    currentStep,
    nextStep,
    previousStep,
    totalSteps,
    step,
    history,
    submitStepInRedux,
  } = props;

  const showAlert = (validationError) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return validationError ? (
          <div className="custom-ui">
            <h4>Error with application form</h4>
            <ul>
              {Object.keys(validationError).map((error) =>
                error !== "devErrors" ? <li>{validationError[error]}</li> : ""
              )}
            </ul>
            <div className="btn-div">
              <button
                onClick={() => {
                  props.RemoveErrorSubmit();
                  onClose();
                }}
              >
                Ok
              </button>
            </div>
          </div>
        ) : (
          onClose()
        );
      },
      onClickOutside: () => props.RemoveErrorSubmit(),
    });
  };
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const preSuccessSubmit = usePrevious({
    successSubmit: props.successSubmit,
  });
  const prevErrorSubmit = usePrevious({
    errorSubmit: props.errorSubmit,
  });

  useEffect(() => {
    const { validationError, errorSubmit, successSubmit } = props;
    if (errorSubmit && errorSubmit !== prevErrorSubmit?.errorSubmit) {
      showAlert(validationError?.data);
      console.log("===", validationError?.data);
    } else {
      if (successSubmit && successSubmit !== preSuccessSubmit?.successSubmit) {
        props.history.push("./tutoring-interest");
      }
    }
  }, [props]);

  // const goNextStep = () => {
  //   let ispermission = submitStepInRedux();
  //   return ispermission
  //     ? (props.StepAction(Number(currentStep) + 1), nextStep())
  //     : showAlert();
  // };

  const goNextStep = () => {
    submitStepInRedux();
    props.StepAction(Number(currentStep) + 1);
    nextStep();
  };
  const goBackStep = () => {
    props.StepAction(Number(currentStep) - 1);
    previousStep();
  };

  const FinshStep = () => {
    // let ispermission = submitStepInRedux();
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;
    submitStepInRedux();
    const { TutorInfoObj, currentStep, user, completedFillForm } = props;
    // if(currentStep===9){
    //   completedFillForm(true)
    // }
    let tutorObjNull = {
      step1: {
        subjects: {
          maths: {
            maths: [],
            statistics: [],
            "pure maths": [],
            "further maths": [],
          },
        },
        modeOfTeaching: 0,
        willignessToTravel: 0,
        address: {
          street: "",
          town: "",
          country: "",
          postCode: "",
        },
        addressLatLng: [],
        addressRaw: "",
      },
      step2: {
        previouslyTutored: false,
        lengthOfTeachingPractice: 0,
        socialUrls: [],
        certificates: {
          teachingAndEducation: [],
          doctoralDegree: [],
        },
        supportingDocs: [""],
      },
      step3: {
        tagline: "",
        bio: "",
        teachingStyle: "",
      },
      step4: {
        profilePhotoSelected: true,
        proilePhotoUrl: "",
      },
      step5: {
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
      },
      step6: {
        ratePerHour: 0,
      },
      step7: {
        typeOfDocument: 0,
        authorizeToRunBgCheck: false,
        frontOfCardUrl: "",
        backOfCardUrl: "",
        dBSCertUrl: "",
      },
      step8: {
        accountHolderName: "",
        bankAccountShortCode: "",
        accountNumber: "",
      },
      step9: {
        confirmWorkEligiblility: false,
        confirmValidDocs: false,
        agreeToTOS: false,
        phoneNumber: "",
      },
    };

    let input = {
      applicationInput: {
        applicationStatus: 1,
        currentStep: currentStep,
        step1: TutorInfoObj?.step1 ? TutorInfoObj.step1 : tutorObjNull.step1,
        step2: TutorInfoObj?.step2 ? TutorInfoObj.step2 : tutorObjNull.step2,
        step3: TutorInfoObj?.step3 ? TutorInfoObj.step3 : tutorObjNull.step3,
        step4: TutorInfoObj?.step4 ? TutorInfoObj.step4 : tutorObjNull.step4,
        step5: TutorInfoObj?.step5 ? TutorInfoObj.step5 : tutorObjNull.step5,
        step6: TutorInfoObj?.step6 ? TutorInfoObj.step6 : tutorObjNull.step6,
        step7: TutorInfoObj?.step7 ? TutorInfoObj.step7 : tutorObjNull.step7,
        step8: TutorInfoObj?.step8 ? TutorInfoObj.step8 : tutorObjNull.step8,
        step9: TutorInfoObj?.step9 ? TutorInfoObj.step9 : tutorObjNull.step9,
      },

      user_id: user.user.userId,
    };
    props.createApplicationFormAction(input);
    // if (ispermission) {
    //   if (currentStep === 9) {
    //     completedFillForm(true);
    //   }
    //   props.createApplicationFormAction(input);
    //   props.history.push("./tutoring-interest");
    // } else {
    //   showAlert();
    // }
  };

  return (
    <div>
      <div className="row mt-4 footer-btn-div">
        <div className="col-lg-6">
          {step > 1 && (
            <button className="btn btn-default " onClick={goBackStep}>
              <i className="mdi mdi-chevron-left mr-1"></i> Back
            </button>
          )}
        </div>
        <div className="col-lg-6 text-right">
          {step < totalSteps ? (
            <button className="btn btn-primary" onClick={goNextStep}>
              Continue
            </button>
          ) : (
            <button className="btn btn-primary" onClick={FinshStep}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
