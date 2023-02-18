import React, { useState } from "react";
import StepWizard from "react-step-wizard";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";
import { Fifth } from "./Fifth";
import { Six } from "./Sixth";
import { Seven } from "./Seven";
import { Eight } from "./Eight";
import { Last } from "./Last";
import { InstanceDemo } from "./InstanceDemo";
const TutorApplicationForm = (props) => {
  const [state, updateState] = useState({
    form: {},

    // demo: true, // uncomment to see more
    overlayToogle: false,
  });

  const updateForm = (key, value) => {
    const { form } = state;

    form[key] = value;
    updateState({
      ...state,
      form,
    });
  };

  // Do something on step change
  const onStepChange = (stats) => {};

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });
  const { SW, demo } = state;

  // const addAllTutorInfo = () => {
  //   let subjectObj = localStorage.getItem("subjectObj");
  //   let ModeOfTutor = localStorage.getItem("ModeOfTutor");
  //   let Qualification = localStorage.getItem("Qualification");
  //   let TutorArray = [];
  //   subjectObj = subjectObj ? JSON.parse(subjectObj) : "";
  //   ModeOfTutor = ModeOfTutor ? JSON.parse(ModeOfTutor) : "";
  //   Qualification = Qualification ? JSON.parse(Qualification) : "";
  //   return (subjectObj?.Maths?.length ||
  //     subjectObj?.FurtherMaths?.length ||
  //     subjectObj?.PureMaths?.length ||
  //     subjectObj?.Statistics?.length) &&
  //     ModeOfTutor !== "" &&
  //     (Qualification?.TeachAndEduCertificate?.length ||
  //       Qualification?.DocDegree?.length)
  //     ? ((TutorArray = [{ subjectObj, ModeOfTutor, Qualification }]),
  //       props.AddTutorInfo([...props.TutorInfoObj, ...[TutorArray]]),
  //       localStorage.removeItem("ModeOfTutor"),
  //       localStorage.removeItem("subjectObj"),
  //       localStorage.removeItem("Qualification"),
  //       props.history.push("./tutoring-interest"))
  //     : props.history.push("./tutoring-interest");
  // };
  return (
    <div>
      <div className={"form-wrapper"}>
        <div className={`col-lg-12 `}>
          <StepWizard
            onStepChange={onStepChange}
            isHashEnabled
            instance={setInstance}
          >
            <First hashKey={"FirstStep"} update={updateForm} {...props} />
            <Second form={state.form} history={props} {...props} />
            <Third form={state.form} {...props} />
            <Fourth form={state.form} {...props} />
            <Fifth form={state.form} {...props} />
            <Six form={state.form} {...props} />
            <Seven form={state.form} {...props} />
            <Eight form={state.form} {...props} />

            <Last hashKey={"TheEnd!"} {...props} />
          </StepWizard>
        </div>
      </div>
      {demo && SW && <InstanceDemo SW={SW} />}
    </div>
  );
};

export default TutorApplicationForm;
