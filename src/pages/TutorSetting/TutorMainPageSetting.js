import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { TutorSettingAction } from "./../../redux/actions";
import { connect } from "react-redux";
import { getSetting } from "./../../apis/tutors";

class TutorMainPageSetting extends Component {
  constructor() {
    super();

    this.state = {
      allTutorInfo: {},
    };
  }
  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("userDetail"));
    let user_id = user.user.userId;
    getSetting({ user_id })
      .then((res) => {
        this.props.TutorSettingStoreData(res.data);
        this.setState({
          allTutorInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { allTutorInfo } = this.state;
    return (
      <div className="tutor-main-page-setting">
        <Col lg={12} md={12} sm={12} xs={12}>
          <h1 className="head-h1">Account settings</h1>
          <h3 className="head-h3">{`${
            allTutorInfo?.firstName ? allTutorInfo?.firstName : ""
          } ${allTutorInfo?.lastName ? allTutorInfo?.lastName : ""}`}</h3>
        </Col>
        <Row style={{ margin: "0px" }}>
          <SettingCard
            cardImage={require("./../../assets/icons/profile.png")}
            cardHeadTxt="Personal information"
            cardDescription="Personal details and contact information"
            GoToSpecificSetting={() =>
              this.props.history.push("/Tutor-PersonalInformation")
            }
          />
          <SettingCard
            cardImage={require("./../../assets/icons/security.png")}
            cardHeadTxt="Login and security"
            cardDescription="Change or update your password"
            GoToSpecificSetting={() =>
              this.props.history.push("/change-password")
            }
          />
          <SettingCard
            cardImage={require("./../../assets/icons/id-card.png")}
            cardHeadTxt="Identification"
            cardDescription="Add your id verify your identify"
          />
          <SettingCard
            cardImage={require("./../../assets/icons/payment.png")}
            cardHeadTxt="Payment details"
            cardDescription="Add bank account information for payment"
          />
          <SettingCard
            cardImage={require("./../../assets/icons/check.png")}
            cardHeadTxt="Background check"
            cardDescription="Upload a copy of your enhance DBS or PVG certificate"
            GoToSpecificSetting={() =>
              this.props.history.push("/Tutor-setting-Identification")
            }
          />
          <SettingCard
            cardImage={require("./../../assets/icons/social-media.png")}
            cardHeadTxt="Notifications"
            cardDescription="Set your notification and contact preference"
            imageCircle={true}
          />
          <SettingCard
            cardImage={require("./../../assets/icons/seo-and-web.png")}
            cardHeadTxt="Teaching or doctoral certificates"
            cardDescription="Supporting documents to verify your teaching or doctoral status"
          />
        </Row>
      </div>
    );
  }
}

function SettingCard({
  cardImage,
  cardHeadTxt,
  cardDescription,
  imageCircle,
  GoToSpecificSetting,
}) {
  return (
    <Col
      lg={6}
      md={6}
      sm={12}
      xs={12}
      className="card-setting-col flex-center-center"
      onClick={GoToSpecificSetting}
    >
      <div className="card-setting-div">
        {imageCircle ? (
          <span
            style={{
              border: "4px solid #007bb8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60px",
              height: "60px",
              borderRadius: "100%",
              marginBottom: "20px",
            }}
          >
            <Image
              src={cardImage}
              className="title-Image"
              style={{
                margin: "0",
                width: "50%",
                height: "50%",
                width: "40px",
                height: "35px",
              }}
            />
          </span>
        ) : (
          <Image src={cardImage} className="title-Image" />
        )}
        <span className="flex-start-center">
          <h3>{cardHeadTxt}</h3>
          <Image src={require("./../../assets/icons/directional.png")} />
        </span>
        <p>{cardDescription}</p>
      </div>
    </Col>
  );
}

const mapDispatchToprops = (dispatch) => {
  return {
    TutorSettingStoreData: (payload) =>
      dispatch(TutorSettingAction.TutorSettingStoreData(payload)),
  };
};

export default connect(null, mapDispatchToprops)(TutorMainPageSetting);
