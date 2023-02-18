import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationFormAction } from "./../redux/actions";
import TutorApplicationForm from "./TutorApplicationForm/index";
class TutorApplicationContainer extends Component {
  render() {
    return (
      <div>
        <TutorApplicationForm
          TutorInfoObj={this.props.TutorInfoObj}
          AddTutorInfo={this.props.AddTutorInfo}
          {...this.props}
          StepAction={this.props.StepAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    ApplicationFormReducer: {
      TutorInfoObj,
      uploadImage,
      iscompletedForm,
      validationError,
      errorSubmit,
      successSubmit,
      funcStatus
    },
    UserReducer: { user },
  } = state;

  return {
    TutorInfoObj,
    uploadImage,
    user,
    iscompletedForm,
    validationError,
    errorSubmit,
    successSubmit,
    funcStatus
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
    StepAction: (payload) =>
      dispatch(ApplicationFormAction.StepAction(payload)),
    createApplicationFormAction: (payload) =>
      dispatch(ApplicationFormAction.createApplicationFormAction(payload)),
    ImageUploadAction: (payload) =>
      dispatch(ApplicationFormAction.ImageUploadAction(payload)),
    completedFillForm: (payload) =>
      dispatch(ApplicationFormAction.completedFillForm(payload)),
    RemoveErrorSubmit: (payload) =>
      dispatch(ApplicationFormAction.RemoveErrorSubmit(payload)),
      AddTutorInfoStepBeforeCallApi: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfoStepBeforeCallApi(payload)),
      
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorApplicationContainer);
