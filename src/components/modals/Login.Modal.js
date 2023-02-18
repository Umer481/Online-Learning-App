import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

class LoginModal extends React.PureComponent {
  render() {
    const {
      signInopenModal,
      onclose,
      getInputKeyAndValue,
      signInUser,
      openSignUpModal,
      openPasswordResetModal,
      validate,
      error,
      loading
    } = this.props;
    return (
      <Modal
        size="lg"
        className="Login-modal"
        show={signInopenModal}
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
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content-holder">
                <h3 className="title">Log in to Askademia</h3>
                {/* <a href="#" className="btn-lg-block facebook-btn mb-3">
                  <img
                    src={require("./../../assets/images/facebook.svg")}
                    alt=""
                    className="social-logo"
                  />
                  Log in with <span>facebook</span>
                </a> */}
                {/* <a href="#" className="btn-lg-block google-btn mb-3">
                  <img
                    src={require("./../../assets/images/google.svg")}
                    alt=""
                    className="social-logo"
                  />
                  Log in with <span>Google</span>
                </a> */}
                {/* <div className="row mb-3">
                  <div className="col-lg-5">
                    <hr />
                  </div>
                  <div className="col-lg-2 text-center">Or</div>
                  <div className="col-lg-5">
                    <hr />
                  </div>
                </div> */}
                <Textbox
                  className="form-control mb-3"
                  attributesInput={{
                    id: "email",
                    name: "email",
                    type: "text",
                    placeholder: "Email"
                  }}
                  validate={validate}
                  onChange={(email, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={e => {
                  }}
                  validationOption={{
                    name: "email",
                    check: true,
                    required: true
                  }}
                />
                <Textbox
                  attributesInput={{
                    id: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Password"
                  }}
                  validate={validate}
                  onChange={(password, e) => {
                    getInputKeyAndValue(e);
                  }}
                  onBlur={e => {
                  }}
                  validationOption={{
                    name: "password",
                    check: true,
                    required: true
                  }}
                />
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheckl1"
                    name="example1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheckl1"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="btn-lg-block login-btn mb-3"
                  onClick={signInUser}
                >
                  {loading ? (
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Spinner
                        animation="border"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </span>
                  ) : (
                    "Log in"
                  )}
                </a>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                    fontSize: "15px"
                  }}
                >
                  {" "}
                  {error ? error : ""}
                </div>
                <div className="text-center mb-4">
                  <p onClick={openPasswordResetModal}>
                    <a href="#">Forgot Password</a>
                  </p>
                </div>
                <hr />
                <p onClick={openSignUpModal}>
                  Don't have an account? <a href="#">Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default LoginModal;
