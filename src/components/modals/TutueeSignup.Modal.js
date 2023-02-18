import React from 'react';
// import { observable } from 'mobx';
// import { observer } from 'mobx-react';
import { Modal, Spinner } from 'react-bootstrap'
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

class TuteeSignupModal extends React.PureComponent {


  render() {
    const { tutueeOpenModal, onclose, getInputKeyAndValue, signUpUser, openSignInModal, onChangeReciveEmails, error, loading ,validate} = this.props;

    return (
      <Modal
        size="lg"
        className="signUp-tutor-modal"
        show={tutueeOpenModal} onHide={onclose}>

        <Modal.Body>
          <button onClick={onclose} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="content-holder">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="title">Sign up as a parent/student
                </h3>
              
                <Textbox
                  className="form-control mb-3"
                  attributesInput={{ 
                    id: 'email',
                    name: 'email',
                    type: 'text',
                    placeholder: 'Email',
                  }}
                  validate={validate}
                  onChange={(email, e) => {
                    getInputKeyAndValue(e)
                    console.log(e);
                  }}
                  onBlur={(e) => { console.log(e) }} 
                  validationOption={{
                    name: 'email', 
                    check: true, 
                    required: true 
                  }}
                />
                <Textbox
                  attributesInput={{ 
                    id: 'firstName',
                    name: 'firstName',
                    type: 'text',
                    placeholder: 'First Name',
                  }}
                  validate={validate}
                  onChange={(firstName, e) => {
                    getInputKeyAndValue(e)
                    console.log(e);
                  }}
                  onBlur={(e) => { console.log(e) }} 
                  validationOption={{
                    name: 'first name', 
                    check: true, 
                    required: true 
                  }}
                />
                <Textbox
                  attributesInput={{ 
                    id: 'lastName',
                    name: 'lastName',
                    type: 'text',
                    placeholder: 'Last Name',
                  }}
                  validate={validate}
                  onChange={(lastName, e) => {
                    getInputKeyAndValue(e)
                    console.log(e);
                  }}
                  onBlur={(e) => { console.log(e) }} 
                  validationOption={{
                    name: 'last name', 
                    check: true, 
                    required: true 
                  }}
                />
                <Textbox
                  attributesInput={{ 
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                  }}
                  validate={validate}
                  onChange={(password, e) => {
                    getInputKeyAndValue(e)
                    console.log(e);
                  }}
                  onBlur={(e) => { console.log(e) }} 
                  validationOption={{
                    name: 'password', 
                    check: true, 
                    required: true 
                  }}
                />
                <p className="message">Askademia will send you members-only deals, inspiration, offers, promotion, policy
                  updates via email. You can opt
                  out of receiving these at anytime in your account settings or directly from the marketing notification.
                  </p>
                <div className="custom-control custom-checkbox mb-3">
                  <input type="checkbox" onChange={onChangeReciveEmails} className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">I don't want to receive marketing message from
                      Askademia</label>
                </div>
                <a href="#" className="btn-lg-block login-btn mb-3" onClick={signUpUser}>
                  {loading ? <span style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}><Spinner animation="border" style={{ width: "25px", height: "25px" }} /></span> : "Sign up"}
                </a>
                <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "red", fontSize: "15px" }}> {error ? error : ""}</div>

                <hr />
                <p style={{ fontSize: "15px" }}>Already have an Askademedia account ? <a onClick={openSignInModal} href="#">Log in</a></p>
              </div>
            </div>
          </div>
        </Modal.Body>

      </Modal >


    );
  }
}

export default TuteeSignupModal;