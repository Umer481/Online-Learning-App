import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
  Image,
  Table
} from "react-bootstrap";
import { getLesson } from "./../apis/tutors";
class Lesson extends Component {
  constructor() {
    super();

    this.state = {
      AllLesson: [],
      dummayData: [
        {
          status: "Confirmed",
          lessonNo: "2 out of 10",
          student: "Mawuli A.",
          sessionType: "Online",
          day: "Monday",
          time: "17:00PM - 18PM",
          booked: "30jan 2020",
          subject: "GCSE Maths",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          earningAmount: "$60.00"
        },
        {
          status: "Cancelled",
          lessonNo: "3 out of 5",
          student: "Mawuli A.",
          sessionType: "Online",
          day: "Monday",
          time: "17:00PM - 18PM",
          booked: "30jan 2020",
          subject: "GCSE Maths",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          earningAmount: "$160.00"
        },
        {
          status: "Confirmed",
          lessonNo: "2 out of 10",
          student: "Mawuli A.",
          sessionType: "Online",
          day: "Monday",
          time: "17:00PM - 18PM",
          booked: "30jan 2020",
          subject: "GCSE Maths",
          detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          earningAmount: "$180.00"
        }
      ],
      selectedBtn: "Request"
    };
  }
  // getLesson
  getAllLesson = data => {
    getLesson({ token: data.token, id: data.id })
      .then(res => {
        this.setState({
          AllLesson: res.data
        });
      })
      .catch(err =>
        this.setState({
          error: err
        })
      );
  };
  componentDidMount = () => {
    // get Token
    let token = JSON.parse(localStorage.getItem("userDetail"));
    token = `Bearer ${token?.token}`;

    // getLesson
    this.getAllLesson({ id: "1234", token });
  };
  render() {
    const { selectedBtn, AllLesson } = this.state;
    return (
      <div className="Lesson-Col">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="header">
              <h2>Lessons</h2>
            </div>
            <div className="session-div">
              <h5>All sessions from</h5>
              <Row lg={12} md={12} sm={12} xs={12}>
                <Col
                  lg={9}
                  md={9}
                  sm={9}
                  xs={12}
                  className="flex-center btns-section"
                >
                  <Button
                    className={selectedBtn === "Request" ? "activebtn" : ""}
                    onClick={() => this.setState({ selectedBtn: "Request" })}
                  >
                    Request
                  </Button>
                  <Button
                    className={selectedBtn === "Upcoming" ? "activebtn" : ""}
                    onClick={() => this.setState({ selectedBtn: "Upcoming" })}
                  >
                    Upcoming
                  </Button>
                  <Button
                    className={selectedBtn === "Cancelled" ? "activebtn" : ""}
                    onClick={() => this.setState({ selectedBtn: "Cancelled" })}
                  >
                    Cancelled
                  </Button>
                  <Button
                    className={selectedBtn === "Declined" ? "activebtn" : ""}
                    onClick={() => this.setState({ selectedBtn: "Declined" })}
                  >
                    Declined
                  </Button>
                  <Button
                    className={selectedBtn === "Completed" ? "activebtn" : ""}
                    onClick={() => this.setState({ selectedBtn: "Completed" })}
                  >
                    Completed
                  </Button>
                </Col>
                <Col lg={3} md={3} sm={3} xs={12} className="dropdown-btn-Col">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={
                      <span>
                        Downloads
                        <span className="border" />
                      </span>
                    }
                  >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12} className="Search-Col">
                  <Col className="search-Col2 flex-center">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={
                        <span>
                          <span style={{ fontSize: "18px" }}>Search Date</span>
                          <Image
                            style={{ width: "15px", marginLeft: "20px" }}
                            src={require("./../assets/icons/down-arrow.png")}
                          />
                        </span>
                      }
                    >
                      <Dropdown.Item href="#/action-1">
                        Search Date
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                    </DropdownButton>
                    <div className="truncate" style={{ fontWeight: "bold" }}>
                      Lessons booked can be rescheduled or cancelled
                    </div>
                  </Col>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Table borderless responsive className="table-parent">
                    <thead>
                      <tr>
                        <th className="tabel-head">Status</th>
                        <th className="tabel-head">Lesson number</th>
                        <th className="tabel-head">Students</th>
                        <th className="tabel-head">Lesson type</th>
                        <th className="tabel-head">Day</th>
                        <th className="tabel-head">Time</th>
                        <th className="tabel-head">Booked</th>
                        <th className="tabel-head">Subject</th>
                        <th
                          className="tabel-head"
                          style={{ maxWidth: "270px" }}
                        >
                          Detail
                        </th>
                        <th className="tabel-head">Earning to date</th>
                        <th className="tabel-head"></th>
                        <th className="tabel-head"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {AllLesson?.length &&
                        AllLesson.map((value, index) => (
                          <tr key={index}>
                            <td
                              className={`tabel-data ${
                                value.status === "Confirmed" ? "green" : ""
                              }`}
                            >
                              {value.status}
                            </td>
                            <td className="tabel-data">{value.lessonNo}</td>
                            <td className="tabel-data">{value.student}</td>
                            <td className="tabel-data">{value.sessionType}</td>
                            <td className="tabel-data">{value.day}</td>
                            <td className="tabel-data">{value.time}</td>
                            <td className="tabel-data">{value.booked}</td>
                            <td className="tabel-data">{value.subject}</td>
                            <td
                              className="tabel-data"
                              style={{ display: "flex", maxWidth: "270px" }}
                            >
                              <span>{value.detail}</span>
                            </td>
                            <td className="tabel-data">
                              {value.earningAmount}
                            </td>
                            <td className="tabel-data">
                              <Button>Details</Button>
                            </td>
                            <td
                              className="tabel-data"
                              style={{ paddingLeft: "0px" }}
                            >
                              <Button>Contact</Button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Lesson;
