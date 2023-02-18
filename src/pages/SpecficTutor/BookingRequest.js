import React, { Component } from "react";
import CommonDropdown from "./../../components/commonDropdown";
import InputField from "../../components/InputFieldComponent";

import Availability from "./../TutorDashboard/availability";
import { Col, Row, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

class BookingRequest extends Component {
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
  componentDidMount = () => {
    const { tutorSpecficData } = this.props;

    let subject = tutorSpecficData?.subjectName;
    let level = tutorSpecficData?.levelName;

    this.setState({
      subject,
      level,
    });
  };
  componentDidUpdate = (prevProps) => {
    const { tutorSpecficData } = this.props;

    if (tutorSpecficData?.userId !== prevProps?.tutorSpecficData?.userId) {
      let subject = tutorSpecficData?.subjectName;
      let level = tutorSpecficData?.levelName;

      this.setState({
        subject,
        level,
      });
    }
  };

  render() {
    const { availability, studentWish, subject, level } = this.state;

    const {
      match: {
        params: { id },
      },
    } = this.props;
    return (
      <div>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12} className="request-booking-col">
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
              <div className="booking-request-Form">
                <h2
                  className="truncate"
                  style={{ color: "#000" }}
                  id="availabilty"
                >
                  Booking request
                </h2>
                <div className="slect-header">Select availability to book</div>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <InputField
                      InputHeadTitle={"Subject"}
                      value={subject ? subject : ""}
                      disabled={true}
                      image={require("./../../assets/icons/lock.png")}
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <InputField
                      InputHeadTitle={"Level"}
                      value={level ? level : ""}
                      disabled={true}
                      image={require("./../../assets/icons/lock.png")}

                    />
                  </Col>
                </Row>
                <hr />
                <div className="section-header">
                  Describe What you wish to learn?
                </div>
                <Form.Control
                  className="form_textarea grey-txt-bold"
                  as="textarea"
                  name="studentWish"
                />
                <div className="count-stu">{`${studentWish.length}/350`}</div>
                <CommonDropdown
                  dropdownTitle={"Where would you like to take your lessons?"}
                />
                <hr style={{ marginBottom: "40px", marginTop: "30px" }} />
                <CommonDropdown dropdownTitle={"Lesson duration?"} />
                <hr style={{ marginBottom: "40px", marginTop: "30px" }} />
                <CommonDropdown
                  dropdownTitle={
                    "How often would you like to take your sessions?"
                  }
                />
                <div
                  className="flex-between-center"
                  style={{ marginTop: "30px" }}
                >
                  <div className="cancel-div">Cancel</div>
                  <Button
                    className="continue-btn"
                    onClick={() =>
                      this.props.history.push(
                        `/tutors/search/tutor/${id}/request-session`
                      )
                    }
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    TutorListReducer: { tutorListCheck, tutorSpecficData },
  } = state;

  return {
    tutorListCheck,
    tutorSpecficData,
  };
};

export default connect(mapStateToProps, null)(BookingRequest);
