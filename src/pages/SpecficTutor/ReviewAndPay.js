import React, { Component } from "react";
import CommonDropdown from "./../../components/commonDropdown";
import InputField from "./../../components/InputFieldComponent";
import { Col, Row, Image, Form, Button } from "react-bootstrap";
import visaImg from "./../../assets/icons/visa.png";
import masterCard from "./../../assets/icons/commerce-and-shopping.png";
import americanExp from "./../../assets/icons/americanExp.png";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class ReviewAndPay extends Component {
  constructor() {
    super();
    this.state = {
      paymentMethod: "",
    };
  }
  render() {
    const { tutorDetailObj, value, paymentMethod } = this.state;
    return (
      <div className="review-session-main-div">
        <Row>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="review-session-profile-col"
          >
            <div className="review-sess-di-parent">
              <div className="review-sess-div">
                <Col lg={7} md={7} sm={12} xs={12} className="profile-info-col">
                  <div className="session-txt">Tue, 1 May 2020</div>
                  <p className="session-txt">9:00 AM - 10:00 Am . L1 6BU</p>
                  <p className="session-txt">
                    <Image
                      src={require("./../../assets/icons/pound-black.png")}
                      style={{ width: "15px", marginBottom: "4px" }}
                    />
                    <span style={{ fontWeight: "900" }}>20</span> per lesson
                  </p>
                  <p className="session-txt">GCSE MATHS</p>
                  <p className="session-txt">*Weekly</p>
                </Col>
                <Col
                  lg={5}
                  md={5}
                  sm={12}
                  xs={12}
                  className="profile-col flex-end-center"
                >
                  <Image
                    src={require("./../../assets/images/team1.png")}
                    roundedCircle
                  />
                </Col>
              </div>
              <hr />
              <div
                className="flex-between-center"
                style={{ padding: "20px 0px" }}
              >
                <span className="txt-grey-style">
                  <Image src={require("./../../assets/icons/pound-grey.png")} />
                  20 x 1 session
                </span>
                <span className="txt-grey-style">
                  <Image src={require("./../../assets/icons/pound-grey.png")} />
                  20
                </span>
              </div>
              <hr />
              <div style={{ padding: "20px 0px" }}>
                <div
                  className="flex-between-center"
                  style={{ marginBottom: "10px" }}
                >
                  <h1 className="text-bold">Total (GBP)</h1>
                  <h1 className="text-bold">
                    <Image
                      src={require("./../../assets/icons/pound-black.png")}
                    />
                    20
                  </h1>
                </div>
                <p className="session-txt">
                  *Repeating Weekly every Tuesday at 9:00 am
                </p>
              </div>
              <hr />
              <div className="head-syle">
                Review lesson cancellation or rescheduling policy
              </div>
              <p className="session-txt">
                We understand that our tutors spend time to plan lessons in
                order to deliver an excellent learning experiance. Where a
                student is wishes to cancel or reschedule a lesson, reschedule a
                lesson, reschedule 24 hours to qualify a new session. For
                cancellation cancel 24 hours before the scheduled lesson for a{" "}
                <span className="green-txt">full refund</span> under the{" "}
                <span className="green-txt">tutoring cancellation policy</span>.
              </p>
              <hr />
              <div className="head-syle">online lesson recording</div>
              <p className="session-txt">
                We store recordings of online lesson for 30 days to help with
                safegaurding and ensuring the quality of online lessons. See our{" "}
                <span className="green-txt">Privacy Policy</span> for more
                information.
              </p>
            </div>
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            xs={12}
            className="review-session-Form-Col"
          >
            <h1 className="text-bold">Review and pay</h1>
            <p className="session-txt" style={{ marginBottom: "70px" }}>
              You will only be charged an hour after your session as taken
              place.
            </p>
            <h1 className="text-bold">Payment method</h1>
            <p className="session-txt">
              Add payment to confirm lesson request with tutor.
            </p>
            <div style={{ marginBottom: "40px" }} />
            <CommonDropdown
              dropdownTitle={"Choose payment"}
              iconPre={require("./../../assets/icons/business-and-finance.png")}
              dropdowndefaultValue={`Credit or debit card`}
              itemArray={[
                { name: "1490", image: visaImg },
                { name: "2509", image: masterCard },
                { name: "2490", image: visaImg },
              ]}
              value={paymentMethod}
              onSelect={(value) => {
                this.setState({
                  paymentMethod: value,
                });
              }}
              style={{
                titleColor: "#b1adad",
                fontSize: "21px",
                titleheadMarginBottom: "30px",
                imageItemBorder: "1px solid #ccc",
              }}
              dropdownTitleWithImage={[
                visaImg,
                masterCard,
                americanExp,
                masterCard,
              ]}
            />
            <div style={{ marginBottom: "40px" }} />
            <InputField
              InputHeadTitle={"Card holders name"}
              type="text"
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "55px",
                borderRadius: "10px",
              }}
            />
            <div style={{ marginBottom: "40px" }} />
            <InputField
              InputHeadTitle={"Card details"}
              type="number"
              placeholder="Card number"
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "55px",
                borderRadius: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            />
            <div style={{ marginBottom: "20px" }} />
            <div className="flex">
              <Col style={{ flex: "1", paddingLeft: "0px" }}>
                <DatePicker
                  selected={value ? new Date(new Date(value).getTime()) : null}
                  onChange={(date) => this.setState({ value: date })}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  showFullMonthYearPicker
                  placeholderText="MM/YYYY"
                />
              </Col>
              <Col style={{ flex: "1", paddingRight: "0px" }}>
                <InputField
                  type="text"
                  placeholder="CVV"
                  style={{
                    border: "1px solid #eaeaea",
                    outline: "none",
                    boxShadow: "none",
                    height: "55px",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    fontSize: "20px",
                  }}
                />
              </Col>
            </div>
            <div style={{ marginBottom: "60px" }} />
            <InputField
              InputHeadTitle={"Billing address"}
              type="text"
              placeholder="Street"
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "55px",
                borderRadius: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            />
            <div style={{ marginBottom: "20px" }} />
            <InputField
              type="text"
              placeholder="Town"
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "55px",
                borderRadius: "10px",
                paddingLeft: "20px",
                fontSize: "20px",
              }}
            />
            <div style={{ marginBottom: "20px" }} />
            <div className="flex">
              <Col style={{ flex: "1", paddingLeft: "0px" }}>
                <InputField
                  type="text"
                  placeholder="City"
                  style={{
                    border: "1px solid #eaeaea",
                    outline: "none",
                    boxShadow: "none",
                    height: "55px",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    fontSize: "20px",
                  }}
                />
              </Col>
              <Col style={{ flex: "1", paddingRight: "0px" }}>
                <InputField
                  type="text"
                  placeholder="Post code"
                  style={{
                    border: "1px solid #eaeaea",
                    outline: "none",
                    boxShadow: "none",
                    height: "55px",
                    borderRadius: "10px",
                    paddingLeft: "20px",
                    fontSize: "20px",
                  }}
                />
              </Col>
            </div>
            <div style={{ marginBottom: "50px" }} />
            <hr />
            <div style={{ marginBottom: "50px" }} />
            <div className="head-syle">How billing works </div>
            <p className="session-txt">
              At Askademia, you only pay for your session after the session ad
              occured. We don't charge any deposit or upfront fees, and your
              card will not be charged untill 24 hours after lesson has been
              completed.
            </p>
            <div style={{ marginBottom: "50px" }} />
            <hr />
            <div style={{ marginBottom: "50px" }} />
            <div className="session-txt-bold">
              By selecting the button below,you authorize Askademia to charge
              your card for lessons through our platform in accordance to our{" "}
              <span className="green-txt">Terms and conditions</span> and you
              also agree to our{" "}
              <span className="green-txt">Cancellation Policy</span> and the{" "}
              <span className="green-txt">Student Refund Policy</span>.
            </div>
            <Button className="confirm-pay-btn">
              <Image src={require("./../../assets/icons/restricted.png")} />
              Confirm and pay
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReviewAndPay;
