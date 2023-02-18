import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import DraggableComponent from "./../../components/DraggableComponent";
import ProfilePic from "./profilePic";
export const Fourth = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };

  const [state, setState] = useState({
    profilePhotoSelected: true,
    proilePhotoUrl: "",
  });

  const updateImageUrl = (url) => {
    setState({
      ...state,
      proilePhotoUrl: url,
    });
  };

  // step4: {
  //   profilePhotoSelected: true,
  //   proilePhotoUrl: "aaaaaaaaaaaaa",
  // },

  useEffect(() => {
    let { proilePhotoUrl } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    proilePhotoUrl = TutorInfoObj?.step4?.proilePhotoUrl;
    setState((state) => ({
      ...state,
      proilePhotoUrl,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 4) {
      console.log('Run fourth obj====')
      submitStep4Info(true);
    }
  }, [props]);

  const submitStep4Info = (isCallApi) => {
    const { profilePhotoSelected, proilePhotoUrl } = state;
    const { TutorInfoObj } = props;

    let step4 = {
      profilePhotoSelected,
      proilePhotoUrl,
    };
    TutorInfoObj.step4 = step4;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;
    // if (proilePhotoUrl) {
    //   TutorInfoObj.step4 = step4;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };
  const { proilePhotoUrl } = state;
  const { iscompletedForm } = props;

  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={4} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 profile subject-mode">
            <h3 className="step-title">
              Add profile picture to your tutoring service
            </h3>
            <p className="grey-txt-bold">
              This is the photo that will appear on your profile when parents
              and students browse for tutors.
            </p>
            <DndProvider backend={Backend}>
              <DraggableComponent
                TargetChildComponent={ProfilePic}
                updateImageUrl={updateImageUrl}
                imageUrl={proilePhotoUrl}
                typeNo={"0"}
                iscompletedForm={iscompletedForm}
              />
            </DndProvider>
          </div>
        </div>
        <Nextsteps step={4} {...props} submitStepInRedux={submitStep4Info} />
      </Col>
    </Row>
  );
};
