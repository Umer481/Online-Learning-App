import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

import AvailabilityCalender from "./AvailabilityCalender";
import calander from "../../assets/images/calendar.png";

const Availability = () => {
  return (
    <div className="availability-Col">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="availablity-header">
            <h2>Availability</h2>
          </div>
          <div className="Availability-modal__body__container">
            <button
              type="button"
              className="close Availability-modal__body__container__close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="Availability-modal__body__container__data">
              <div className="Availability-modal__body__container__data__calender">
                <div className="Availability-modal__body__container__data__calender__container">
                  <div className="Availability-modal__body__container__data__calender__container__header">
                    <div>
                      <img
                        src={calander}
                        alt="calander"
                        className="Availability-modal__body__container__data__calender__container__header__image"
                      />
                      <span className="Availability-modal__body__container__data__calender__container__header__heading">
                        Set your Availability
                      </span>
                    </div>
                    <Button
                      style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: "#007AB5",
                      }}
                      size="sm"
                    >
                      Preview Profile
                    </Button>
                  </div>
                  <div className="Availability-modal__body__container__data__calender__container__footer">
                    <p className="Availability-modal__body__container__data__calender__container__footer__paragraph">
                      Select from the weekly time slot you have Availabile to
                      deliver lessons. These will appear on your tutor profile
                    </p>
                  </div>
                  <AvailabilityCalender />
                </div>
              </div>
              <div className="Availability-modal__body__container__data__schedule">
                <div className="Availability-modal__body__container__data__schedule__container">
                  <div>
                    <span className="Availability-modal__body__container__data__schedule__container__heading">
                      Availability settings
                    </span>
                  </div>
                  <div>
                    <p className="Availability-modal__body__container__data__schedule__container__week">
                      Tuesday, Morning Pre 12pm
                    </p>
                  </div>

                  <div className="Availability-modal__body__container__data__schedule__available">
                    <span className="Availability-modal__body__container__data__schedule__available__avail">
                      Availabile
                    </span>
                    <Form>
                      <Form.Check custom type="radio" id="2" label={``} />
                    </Form>
                  </div>
                  <div className="Availability-modal__body__container__data__schedule__available">
                    <span className="Availability-modal__body__container__data__schedule__available__avail">
                      Unavailable
                    </span>

                    <Form>
                      <Form.Check custom type="radio" id="1" label={``} />
                    </Form>
                  </div>
                  <div className="Availability-modal__body__container__data__schedule__lesson">
                    <div className="Availability-modal__body__container__data__schedule__lesson__drop">
                      <div className="Availability-modal__body__container__data__schedule__lesson__drop__text">
                        Start lesson from
                      </div>
                      <div>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                              style={{
                                padding: "0px 5px",
                                height: "30px",
                                color: "#0f0f0f",
                                border: "1px solif #0f0f0f",
                              }}
                              as="select"
                            >
                              <option>8:00AM</option>
                              <option>8:15AM</option>
                              <option>8:30AM</option>
                              <option>8:45AM</option>
                              <option>9:00AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>

                    <div className="Availability-modal__body__container__data__schedule__lesson__drop">
                      <div className="Availability-modal__body__container__data__schedule__lesson__drop__text">
                        End lesson to
                      </div>
                      <div>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control
                              style={{
                                padding: "0px 5px",
                                height: "30px",
                                color: "#0f0f0f",
                                border: "1px solif #0f0f0f",
                              }}
                              as="select"
                            >
                              <option>8:00AM</option>
                              <option>8:15AM</option>
                              <option>8:30AM</option>
                              <option>8:45AM</option>
                              <option>9:00AM</option>
                            </Form.Control>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>

                    <div className="Availability-modal__body__container__data__schedule__lesson__drop">
                      <div className="Availability-modal__body__container__data__schedule__lesson__drop__text">
                        Your yearly lesson rate
                      </div>
                      <div>
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control
                              type="text"
                              placeholder="$35.00"
                              style={{
                                width: "70px",
                                padding: "0px",
                                height: "30px",
                                textAlign: "center",
                                borderRadius: "5px",
                              }}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>

                    <div>
                      <p className="Availability-modal__body__container__data__schedule__lesson__drop__paragraph">
                        You are always in controll of your taught subjects,
                        price and availabilty to tech
                      </p>
                    </div>
                  </div>
                </div>

                <div className="Availability-modal__body__container__data__schedule__buttons">
                  <Button
                    style={{
                      backgroundColor: "#007AB5",
                    }}
                    variant="primary"
                  >
                    Save
                  </Button>{" "}
                  <Button
                    variant="outline-info"
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Cancel
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Availability;
