import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class SignUpDecision extends React.PureComponent {
  render() {
    const { signUpopenModal, onclose, tutorOpenModalFunc, tutueeOpenModalFunc, openSignInModal } = this.props;
    return (
      <Modal
        size="lg"
        className="signUp-modal"
        show={signUpopenModal} onHide={onclose}>

        <Modal.Body>
          <button onClick={onclose} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="content-holder">
                  <a className="btn-lg-block button-white mb-4" onClick={tutorOpenModalFunc} style={{ cursor: "pointer" }}>
                    I am a tutor
                    </a>
                  <div className="row mb-4">
                    <div className="col-lg-5">
                      <hr />
                    </div>
                    <div className="col-lg-2 text-center"><strong>Or</strong></div>
                    <div className="col-lg-5">
                      <hr />
                    </div>
                  </div>
                  <a className="btn-lg-block login-btn mb-3" onClick={tutueeOpenModalFunc} style={{ cursor: "pointer" }}>
                    I am a parent or tutee
                    </a>
                  <div className="row mb-4">
                    <div className="col-lg-12">
                      <hr />
                    </div>
                  </div>
                  <p className="desc"> Already have an Askademia account ?
                      <a href="#" className="link-text" onClick={openSignInModal} >Log in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>

    );
  }
}

export default SignUpDecision;