import React from "react";
import { Modal, Image, Spinner } from "react-bootstrap";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class TutorSignupModal extends React.PureComponent {
  render() {
    const {
      tutorOpenModal,
      onclose,
      getInputKeyAndValue,
      signUpUser,
      validate,
      openSignInModal,
      onChangeReciveEmails,
      error,
      loading,
      DOB,
      dateOfBirth,
      dobValidate,
    } = this.props;
    return (
      <Modal
        size="lg"
        className="signUp-tutor-modal"
        show={tutorOpenModal}
        onHide={onclose}
      >
        <Modal.Body>
          <button
            onClick={onclose}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="content-holder">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="title">Sign up as a tutor</h3>

                <Textbox
                  className="form-control mb-3"
                  attributesInput={{
                    id: "email",
                    name: "email",
                    type: "text",
                    placeholder: "Email address",
                  }}
                  validate={validate}
                  onChange={(email, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={(e) => {
                    console.log(e);
                  }}
                  validationOption={{
                    name: "email",
                    check: true,
                    required: true,
                  }}
                />
                <Textbox
                  attributesInput={{
                    id: "firstName",
                    name: "firstName",
                    type: "text",
                    placeholder: "First Name",
                  }}
                  validate={validate}
                  onChange={(firstName, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={(e) => {
                    console.log(e);
                  }}
                  validationOption={{
                    name: "first name",
                    check: true,
                    required: true,
                  }}
                />
                <Textbox
                  attributesInput={{
                    id: "lastName",
                    name: "lastName",
                    type: "text",
                    placeholder: "Last Name",
                  }}
                  validate={validate}
                  onChange={(lastName, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={(e) => {
                    console.log(e);
                  }}
                  validationOption={{
                    name: "last name",
                    check: true,
                    required: true,
                  }}
                />
                <Textbox
                  attributesInput={{
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Password",
                  }}
                  validate={validate}
                  onChange={(password, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={(e) => {
                    console.log(e);
                  }}
                  validationOption={{
                    name: "password",
                    check: true,
                    required: true,
                  }}
                />
                <label>Date of birth</label>
                <p className="message">
                  To sign up to tutor, you need to be at least 18. Other users
                  of Askademia won't see your date of birth.{" "}
                </p>
                <div
                  className={`row mb-3 ${
                    dobValidate.length ? "dobValidate-show" : ""
                  }`}
                  style={{ margin: "0" }}
                >
                  <DatePicker
                    selected={DOB}
                    placeholderText="dd/mm/yyyy"
                    onChange={(date) => dateOfBirth(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                  />
                  {dobValidate ? (
                    <span className="dob-message">{dobValidate}</span>
                  ) : (
                    ""
                  )}
                </div>
                <p className="message">
                  Askademia will send you members-only deals, inspiration,
                  offers, promotion, policy updates via email. You can opt out
                  of receiving these at anytime in your account settings or
                  directly from the marketing notification.
                </p>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    onChange={onChangeReciveEmails}
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    I don't want to receive marketing message from Askademia
                  </label>
                </div>
                <a
                  href="#"
                  className="btn-lg-block login-btn mb-3"
                  onClick={signUpUser}
                >
                  {loading ? (
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Spinner
                        animation="border"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </span>
                  ) : (
                    "Sign up"
                  )}
                </a>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  {error ? error : ""}
                </div>

                <hr />
                <p style={{ fontSize: "15px" }}>
                  Already have an Askademedia account ?{" "}
                  <a onClick={openSignInModal} href="#">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default TutorSignupModal;
