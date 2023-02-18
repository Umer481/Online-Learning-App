import React, { Component } from "react";
import { connect } from "react-redux";
import { ApplicationFormAction } from "./../redux/actions";
import { TutoringInterest } from "./../components/forms/tutoringInterest";
class TutorInterestContainer extends Component {
  render() {
    return (
      <div>
        <TutoringInterest
          TutorInfoObj={this.props.TutorInfoObj}
          AddTutorInfo={this.props.AddTutorInfo}
          RemoveTutorInfo={this.props.RemoveTutorInfo}
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    ApplicationFormReducer: { TutorInfoObj, validationError, errorSubmit ,currentStep},
  } = state;

  return {
    TutorInfoObj,
    validationError,
    errorSubmit,
    currentStep
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
    RemoveTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.RemoveTutorInfo(payload)),
    completedFillForm: (payload) =>
      dispatch(ApplicationFormAction.completedFillForm(payload)),
    RemoveSuccessSubmit: (payload) =>
      dispatch(ApplicationFormAction.RemoveSuccessSubmit(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorInterestContainer);
