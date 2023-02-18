import React from "react";
import { Modal, Spinner } from "react-bootstrap";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

class PasswordResetModal extends React.PureComponent {
  render() {
    const {
      passwordResetOpenModal,
      onclose,
      getInputKeyAndValue,
      resetUserPassword,
      openSignInModal,
      validate,
      error,
      loading,
    } = this.props;
    return (
      <Modal
        size="lg"
        className="Login-modal"
        show={passwordResetOpenModal}
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
                <h3 className="title">Password Reset</h3>
                <p>
                  Enter the email address associated with your account, and
                  we'll email you a link to reset your password.
                </p>
                <Textbox
                  className="form-control mb-3"
                  attributesInput={{
                    id: "email",
                    name: "email",
                    type: "text",
                    placeholder: "Email",
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
                <a
                  href="#"
                  className="btn-lg-block login-btn mb-3"
                  onClick={resetUserPassword}
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
                    "Send reset link"
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
                <p onClick={openSignInModal}>
                  <a href="#">Back to login</a>
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

export default PasswordResetModal;
