import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import SessionRequest from "./sessionRequest";
import UpcomingSession from "./upcomingSession";
import Performance from "./performance";
import Availability from "./availability";
import Notification from "./notification";
import Tips from "./Tips";
import { connect } from "react-redux";

import {
  analytics,
  getallSessions,
  notifications,
  availability,
  TipsApi,
} from "./../../apis/tutors";
class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      performance: {},
      allSessions: [],
      availability: [],
      availabilityLoading: false,
      TipsData: [],
    };
  }

  getAvailability = (data) => {
    this.setState({ availabilityLoading: true });
    availability({ token: data.token, id: data.id })
      .then((res) =>
        this.setState({
          availability: res.data,
          availabilityLoading: false,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
          availabilityLoading: false,
        })
      );
  };
  getNotifications = (data) => {
    notifications({ token: data.token, id: data.id })
      .then((res) =>
        this.setState({
          notifations: res.data,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  };
  getSessions = (data) => {
    getallSessions({ token: data.token, id: data.id })
      .then((res) =>
        this.setState({
          allSessions: res.data,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  };
  getAnalytics = (data) => {
    analytics({ token: data.token, id: data.id })
      .then((res) =>
        this.setState({
          performance: res.data,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  };

  getTips = (data) => {
    TipsApi({ token: data.token, id: data.id })
      .then((res) =>
        this.setState({
          TipsData: res.data,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
        })
      );
  };

  componentDidMount = () => {
    // get Token
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;

    // analytics
    this.getAnalytics({ id: "1234", token });

    // getallSessions
    this.getSessions({ id: "1234", token });

    // notifications
    this.getNotifications({ id: "1234", token });

    // getAvailability
    this.getAvailability({ id: "1234", token });

    // getTips
    this.getTips({ id: "1234", token });
  };
  render() {
    const {
      notifations,
      availability,
      performance,
      allSessions,
      availabilityLoading,
      TipsData,
    } = this.state;

    return (
      <div className="Dashboard-div">
        <Row className="flex-center">
          <Col lg={12} md={12} sm={12} xs={12} style={{ marginBottom: "70px" }}>
            <Row className="flex-center">
              <Col lg={6} md={6} sm={6} xs={6}>
                <div className="header">
                  <h2>Dashboard</h2>
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                sm={6}
                xs={6}
                className="live-style flex-center"
              >
                <span>
                  Your profile is offline-Are you ready to tutor again?
                </span>
                <Button>Go live</Button>
              </Col>
            </Row>
          </Col>

          <Col lg={7} md={7} sm={12} xs={12}>
            <div className="session-request">
              <Row className="flex-center">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Row className="flex-center" style={{ marginBottom: "25px" }}>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <div className="header">
                        <h4>Session Requests</h4>
                      </div>
                    </Col>
                  </Row>
                  {allSessions?.length &&
                    allSessions.map((session, index) => {
                      return session?.status === "new" ? (
                        <SessionRequest
                          session={session}
                          allSessions={allSessions}
                          index={index}
                          key={index}
                        />
                      ) : (
                        ""
                      );
                    })}
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={5} md={5} sm={12} xs={12}>
            <Availability
              availability={availability}
              loading={availabilityLoading}
              user={this?.props?.user}
              isDashboard={true}
            />
          </Col>
          <Row>
            <Col lg={7} md={7} sm={12} xs={12}>
              <Performance performance={performance} />
              <Tips TipsData={TipsData} />
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  color: "#025277",
                  fontSize: "16px",
                  marginBottom: "26px",
                }}
              >
                you are always in control of your taught subjects, price and
                availability.
                <span
                  style={{
                    color: "#025277",
                    borderBottom: "1px solid",
                    paddingLeft: "2px",
                  }}
                >
                  Learn more
                </span>
              </Col>
              <div className="upcoming-session">
                <Row className="flex-center">
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Row
                      className="flex-center"
                      style={{ marginBottom: "25px" }}
                    >
                      <Col lg={6} md={6} sm={12} xs={12}>
                        <div className="header">
                          <h4>Upcoming Sessions</h4>
                        </div>
                      </Col>
                    </Row>

                    {allSessions?.length &&
                      allSessions.map((session, index) => {
                        return session?.status !== "new" ? (
                          <UpcomingSession
                            key={index}
                            session={session}
                            allSessions={allSessions}
                            index={index}
                          />
                        ) : (
                          ""
                        );
                      })}
                  </Col>
                </Row>
                <div
                  style={{
                    fontSize: "20px",
                    color: "#025277",
                    borderBottom: "1px solid",
                    marginBottom: "40px",
                    width: "265px",
                  }}
                >
                  Go to all upcoming sessions{" "}
                </div>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12} xs={12}>
              <Notification notifations={notifations} />
            </Col>
          </Row>
        </Row>
        <Row style={{ paddingLeft: "4px" }}>
          <span
            style={{
              fontSize: "20px",
              color: "#025277",
              borderBottom: "1px solid",
              marginBottom: "40px",
            }}
          >
            Give us feedback
          </span>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    UserReducer: { user },
  } = state;
  return {
    user,
  };
};
export default connect(mapStateToProps, null)(Dashboard);
