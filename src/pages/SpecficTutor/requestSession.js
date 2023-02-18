import React, { Component } from "react";
import CommonDropdown from "./../../components/commonDropdown";
import Availability from "./../TutorDashboard/availability";
import { Col, Row, Image, Form, Button } from "react-bootstrap";

class RequestSession extends Component {
  constructor() {
    super();
    this.state = {
      availability: [
        {
          timeStatus: "Morning",
          time: "Pre 12am",
          week: {
            mon: "unavailable",
            tues: "available",
            wed: "unavailable",
            thus: "available",
            fri: "unavailable",
            sat: "unavailable",
            sun: "available",
          },
        },
        {
          timeStatus: "Afternoon",
          time: "12 - 3pm",
          week: {
            mon: "unavailable",
            tues: "available",
            wed: "unavailable",
            thus: "unavailable",
            fri: "unavailable",
            sat: "available",
            sun: "unavailable",
          },
        },
        {
          timeStatus: "Late Afternoon",
          time: "4 - 6pm",
          week: {
            mon: "unavailable",
            tues: "available",
            wed: "unavailable",
            thus: "available",
            fri: "unavailable",
            sat: "unavailable",
            sun: "available",
          },
        },
        {
          timeStatus: "Evening",
          time: "6 - 8pm",
          week: {
            mon: "unavailable",
            tues: "available",
            wed: "unavailable",
            thus: "available",
            fri: "unavailable",
            sat: "unavailable",
            sun: "available",
          },
        },
        {
          timeStatus: "Late Evening",
          time: "After 8pm",
          week: {
            mon: "unavailable",
            tues: "available",
            wed: "unavailable",
            thus: "available",
            fri: "unavailable",
            sat: "unavailable",
            sun: "available",
          },
        },
      ],
      studentWish: "",
    };
  }
  render() {
    const { availability, studentWish } = this.state;
    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className="request-booking-col" >
            <h2
              className="truncate"
              style={{ marginTop: "40px", paddingLeft: "11%", color: "#000" }}
              id="availabilty"
            >
              Availability
            </h2>
            <Availability
              tutor={true}
              availability={availability}
              isStudentsearch={true}
            />
            <div className="contact-to-div">
              <p className="contact-to-tutor-para">
                Contact Christopher to check fr specific availability, or if you
                have a specific requirment about the subject you wish to learn
              </p>
              <div className="flex-center">
                <span className="green-txt">Contact tutor</span>
                <span className="green-txt">Request availability</span>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="booking-request-Form-Col"
            
          >
            <Col lg={11} md={11} sm={12} xs={12}>
              <div className="booking-request-Form" style={{boxShadow:"none"}}>
                <h2
                  className="truncate"
                  style={{ color: "#000" }}
                  id="availabilty"
                >
                  Select to request session
                </h2>
                <div className="flex-start-center time-date-div">
                  <div className="day-div">
                    <CommonDropdown
                      dropdowndefaultValue={"Select day"}
                      ishideArrow={true}
                      style={{ fontSize: "24px" }}
                      titleAlign={"center"}
                    />
                  </div>
                  <div className="time-div">
                    <CommonDropdown
                      dropdowndefaultValue={"Start time"}
                      ishideArrow={true}
                      style={{ fontSize: "24px" }}
                      titleAlign={"center"}

                    />
                  </div>
                </div>
                {[1, 2, 3, 4].map((value) => (
                  <div className="session-request-div">
                    <div className="session-txt">Tue, 1 May 2020</div>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      className="session-request-Col"
                    >
                      <Col
                        lg={8}
                        md={8}
                        sm={12}
                        xs={12}
                        style={{ padding: "0" }}
                      >
                        <p className="session-txt">
                          9:00 AM - 10:00 Am . L1 6BU
                        </p>
                        <p className="session-txt">
                          <Image
                            src={require("./../../assets/icons/pound-black.png")}
                            style={{ width: "15px", marginBottom: "4px" }}
                          />
                          <span style={{ fontWeight: "900" }}>20</span> per
                          lesson
                        </p>
                        <p className="session-txt">GCSE MATHS</p>
                        <p className="session-txt">*Weekly</p>
                      </Col>
                      <Col lg={4} md={4} sm={12} xs={12}>
                        <Button className="session-button"
                        onClick={()=>this.props.history.push(`/tutors/search/tutor/${id}/review-pay`)}
                        >Select</Button>
                      </Col>
                    </Col>
                  </div>
                ))}
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RequestSession;
