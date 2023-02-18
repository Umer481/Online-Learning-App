import React, { Component } from "react";
import {
  Modal,
  Dropdown,
  Row,
  Col,
  DropdownButton,
  FormControl,
  Image,
} from "react-bootstrap";
class ModeOfTeachModal extends Component {
  render() {
    const {
      isModalShow,
      onHide,
      modeOfTeaching,
      selectMode,
      updateState,
      willignessToTravel,
      getAndSetinputValue,
      street,
      town,
      country,
      postCode,
      SaveAndCancel,
    } = this.props;
    return (
      <Modal
        bsSize="large"
        className="ModeofTeachModal"
        aria-labelledby="contained-modal-title-lg"
        show={isModalShow}
        onHide={onHide}
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton style={{ height: "50px" }}>
          <Modal.Title className="txt-bold-style" style={{ fontSize: "16px" }}>
            <div className="flex-center-center">Mode of teaching</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="Modal-body">
          {/* <div>
            <Row className="ModeForTeach-Col flex-center-center">
              <Col lg={10} md={10} sm={12} xs={12} className="modal-content">
                <Row className="header">
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className="modal-title flex-center-center"
                  >
                    <Row className="header_options ">
                      Select mode for teaching
                    </Row>
                  </Col>
                </Row>
                <div style={{ borderBottom: "1px solid #00000033" }} />
                <Row className="ModeForTeach-body">
                  <Col
                    lg={4}
                    md={4}
                    sm={4}
                    xs={12}
                    style={{
                      paddingLeft: "70px",
                      borderTop:
                        modeOfTeaching === 2 ? `4px solid #056b9a` : "",
                      cursor: "pointer",
                    }}
                    className="flex-start-center"
                  >
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      onClick={() => selectMode(2)}
                    >
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="customRadioInline1"
                        className="custom-control-input"
                        checked={modeOfTeaching === 2 ? true : false}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline1"
                      >
                        Online and In-person
                      </label>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={4}
                    xs={12}
                    style={{
                      borderTop:
                        modeOfTeaching === 0 ? `4px solid #056b9a` : "",
                      cursor: "pointer",
                    }}
                    className="flex-center-center"
                  >
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      onClick={() => selectMode(0)}
                    >
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="customRadioInline1"
                        className="custom-control-input"
                        checked={modeOfTeaching === 0 ? true : false}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline2"
                      >
                        Online
                      </label>
                    </div>
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={4}
                    xs={12}
                    style={{
                      paddingRight: "70px",
                      borderTop:
                        modeOfTeaching === 1 ? `4px solid #056b9a` : "",
                      cursor: "pointer",
                    }}
                    className="flex-end-center"
                  >
                    <div
                      className="custom-control custom-radio custom-control-inline"
                      onClick={() => selectMode(1)}
                    >
                      <input
                        type="radio"
                        id="customRadioInline3"
                        name="customRadioInline1"
                        className="custom-control-input"
                        checked={modeOfTeaching === 1 ? true : false}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customRadioInline3"
                      >
                        In-person
                      </label>
                    </div>
                  </Col>
                </Row>
                {(modeOfTeaching === 1 || modeOfTeaching === 2) && (
                  <Row style={{ margin: 0 }}>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      style={{
                        color: "#7c7c7b",
                        fontSize: "19px",
                        padding: "0px 70px",
                      }}
                    >
                      if you will be teaching in-person, how far you willing to
                      travel from your address to teach the student
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="ModeForTeach-body-down"
                    >
                      <DropdownButton
                        onSelect={(e) =>
                          updateState({
                            willignessToTravel: e,
                          })
                        }
                        id="dropdown-basic-button"
                        title={
                          <span className="flex-between-center">
                            <span
                              style={{
                                textAlign: "left",
                                fontSize: "25px",
                                color: "#000",
                              }}
                            >
                              {willignessToTravel
                                ? willignessToTravel
                                : "I only at teach my address"}
                            </span>
                            <Image
                              style={{ width: "15px", marginLeft: "20px" }}
                              src={require("./../../assets/icons/down-arrow.png")}
                            />
                          </span>
                        }
                      >
                        <Dropdown.Item eventkey="I only teach at my address">
                          I only teach at my address
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1 miles">
                          1 miles
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2 miles">
                          2 miles
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="10 miles">
                          10 miles
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="15 miles">
                          15 miles
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="20 miles">
                          20 miles
                        </Dropdown.Item>
                      </DropdownButton>

                      <div className="Ques-txt">What is your address?</div>
                      <div className="para-txt">
                        To complete your application,you need to provide
                        address. Other people who use Askademia Won't see your
                        address. if you teach from house this will only be
                        provided to students and parent's once you have accepted
                        booking.
                      </div>
                      <FormControl
                        placeholder="Street"
                        name="street"
                        onChange={getAndSetinputValue}
                        value={street}
                      />

                      <FormControl
                        placeholder="Town"
                        name="town"
                        onChange={getAndSetinputValue}
                        value={town}
                      />

                      <FormControl
                        placeholder="Country"
                        name="country"
                        onChange={getAndSetinputValue}
                        value={country}
                      />

                      <FormControl
                        placeholder="PostCode"
                        name="postCode"
                        onChange={getAndSetinputValue}
                        value={postCode}
                      />
                    </Col>
                  </Row>
                )}

                <div className="modal-footer">
                  <div className="row flex-center" style={{ width: "100%" }}>
                    <div className="col-lg-6 text-left">
                      <a
                        href="#"
                        className="green-link"
                        onClick={() =>
                          this.props.history.push("/tutor-application-form")
                        }
                      >
                        <i className="mdi mdi-chevron-left mr-1"></i>Cancel
                      </a>
                    </div>
                    <div className="col-lg-6 text-right">
                      <button
                        className="btn-theme-green"
                        onClick={SaveAndCancel}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div> */}
        </Modal.Body>
      </Modal>
    );
  }
}

export default ModeOfTeachModal;
