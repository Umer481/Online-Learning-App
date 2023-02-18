import React from "react";
import { Row, Col, Image, Button, Table, Spinner } from "react-bootstrap";
import tickmark from "./../../assets/icons/tickmark.png";
import crossMark from "./../../assets/icons/cancel.png";

let spinner = <Spinner animation="grow" />;
export default ({
  availability,
  loading,
  user,
  tutor,
  firstName,
  lastName,
  isStudentsearch,
  isDashboard,
}) => {
  return (
    <div
      className={`${tutor ? "availability-tutor" : "availability"}`}
      style={{
        marginBottom: isDashboard ? "30px" : isStudentsearch ? "0px" : "82px",
      }}
    >
      {tutor ? (
        <Row style={{ margin: "0", padding: "0" }}>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className={
              isStudentsearch ? "flex-center-center" : "flex-start-center"
            }
            style={{ marginBottom: "30px", padding: "0" }}
          >
            <Table borderless bsPrefix="customTable">
              <thead>
                <tr>
                  <th></th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                  <th>Su</th>
                </tr>
              </thead>
              <tbody>
                {availability.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td
                        className="day-section"
                        style={{ textAlign: "center" }}
                      >
                        <div>{value.timeStatus}</div>
                        <div>{value.time}</div>
                      </td>

                      <td>
                        <Button className={value?.week?.mon}>
                          <Image
                            src={
                              value?.week?.mon !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.tues}>
                          <Image
                            src={
                              value?.week?.tues !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.wed}>
                          <Image
                            src={
                              value?.week?.wed !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.thus}>
                          <Image
                            src={
                              value?.week?.thus !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.fri}>
                          <Image
                            src={
                              value?.week?.fri !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.sat}>
                          <Image
                            src={
                              value?.week?.sat !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                      <td>
                        <Button className={value?.week?.sun}>
                          <Image
                            src={
                              value?.week?.sun !== "unavailable"
                                ? tickmark
                                : crossMark
                            }
                          />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          {firstName && lastName ? (
            <Col lg={12} md={12} sm={12} xs={12} className="flex-center hint">
              <span className="img-box-green">
                <Image src={tickmark} />
              </span>
              <span>
                {`${firstName ? firstName : ""} ${lastName ? lastName : ""}`} is
                availabile to tutor
              </span>
            </Col>
          ) : null}
          {firstName && lastName ? (
            <Col lg={12} md={12} sm={12} xs={12} className="flex-center hint">
              <span className="img-box-grey">
                <Image src={crossMark} />
              </span>
              <span>
                {`${firstName ? firstName : ""} ${lastName ? lastName : ""}`} is
                unavailabile
              </span>
            </Col>
          ) : null}
        </Row>
      ) : (
        <Row className="flex-center">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row
              className="flex-center"
              style={{
                marginBottom: "10px",
                paddingBottom: "10px",
                paddingLeft: "45px",
              }}
            >
              <div className="header">
                <h4>Availability</h4>
              </div>
            </Row>
          </Col>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="flex-center-center"
            style={{ marginBottom: "30px" }}
          >
            <Table borderless bsPrefix="customTable">
              <thead>
                <tr>
                  <th></th>
                  <th>Mo</th>
                  <th>Tu</th>
                  <th>We</th>
                  <th>Th</th>
                  <th>Fr</th>
                  <th>Sa</th>
                  <th>Su</th>
                </tr>
              </thead>
              <tbody>
                {availability?.length
                  ? availability.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="day-section">
                            <div>{value.timeStatus}</div>
                            <div>{value.time}</div>
                          </td>

                          <td>
                            <Button className={value?.week?.mon}>
                              <Image
                                src={
                                  value?.week?.mon !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.tues}>
                              <Image
                                src={
                                  value?.week?.tues !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.wed}>
                              <Image
                                src={
                                  value?.week?.wed !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.thus}>
                              <Image
                                src={
                                  value?.week?.thus !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.fri}>
                              <Image
                                src={
                                  value?.week?.fri !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.sat}>
                              <Image
                                src={
                                  value?.week?.sat !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                          <td>
                            <Button className={value?.week?.sun}>
                              <Image
                                src={
                                  value?.week?.sun !== "unavailable"
                                    ? tickmark
                                    : crossMark
                                }
                              />
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  : [1, 2, 3, 4, 5].map((value, index) => {
                      return (
                        <tr key={index}>
                          <td className="day-section">
                            <div>{}</div>
                            <div>{}</div>
                          </td>

                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {" "}
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                          <td>
                            <Button className="undefind">
                              {loading ? spinner : ""}
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="flex-center hint">
            <span className="img-box-green">
              <Image src={tickmark} />
            </span>
            <span>
              {`${user?.firstName} ${user?.lastName}`} is availabile to tutor
            </span>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="flex-center hint">
            <span className="img-box-red">
              <Image src={tickmark} />
            </span>
            <span>
              {`${user?.firstName} ${user?.lastName}`} is fully booked
            </span>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12} className="flex-center hint">
            <span className="img-box-grey">
              <Image src={crossMark} />
            </span>
            <span>
              {`${user?.firstName} ${user?.lastName}`} is unavailabile
            </span>
          </Col>
        </Row>
      )}
    </div>
  );
};
