import React, { Component } from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
import { getSetting } from "./../../apis/tutors";
import { connect } from "react-redux";
import { getSubjectTutor } from "./../../apis/tutorList";
import ModeOfTeachModal from "./ModeOfTeachModal";
class TutorSettingBioAndSub extends Component {
  constructor() {
    super();

    this.state = {
      allTutorInfo: {},
      modeofTeaching: [],
      teachingCertificate: [],
      profileBio: [],
      employmentData: [],
      educationData: [],
    };
  }

  makeSubjectDataforRendor = (res) => {
    let user = JSON.parse(localStorage.getItem("userDetail"));
    let user_id = user.user.userId;
    let { modeofTeaching } = this.state;
    let tutorSubjectObj = {};

    modeofTeaching.push({
      name: "Venue Preference",
      value:
        res.modeOfTeaching === 0
          ? "Online"
          : res.modeOfTeaching === 1
          ? "In-person"
          : "Online and In-person",
    });
    this.setState({
      modeofTeaching,
    });
    getSubjectTutor({
      id: user_id,
    })
      .then((res) => {
        for (var i = 0; i < res.data.length; i++) {
          var u = res.data[i];
          if (tutorSubjectObj.hasOwnProperty(u.level)) {
            let val = tutorSubjectObj[u.level];
            val.push(u.subject);
            tutorSubjectObj[u.level] = val;
          } else {
            tutorSubjectObj[u.level] = [u.subject];
          }
        }
        this.setState({
          tutorSubjectObj,
        });
      })
      .catch((err) => console.log(err));
  };
  makeProfileBioDataforRendor = (res) => {
    let { profileBio } = this.state;

    profileBio.push({ name: "Profile tagline", value: res.tagline });
    profileBio.push({ name: "About yourself", value: res.bio });
    profileBio.push({ name: "Teaching style", value: res.teachingStyle });
    this.setState({
      profileBio,
    });
  };

  makeCertificatesDataforRendor = (res) => {
    let { teachingCertificate } = this.state;
    if (res?.certificates?.doctoralDegree) {
      Object.keys(res.certificates).map((cert) => {
        console.log(res.certificates[cert]);

        if (
          res.certificates?.[cert].length &&
          cert === "teachingAndEducation"
        ) {
          return res.certificates?.[cert].map((certiValue) => {
            teachingCertificate.push({
              name: "Teaching and education certificate",
              value: certiValue,
            });
          });
        }
        if (res.certificates?.[cert].length && cert === "doctoralDegree") {
          return res.certificates?.[cert].map((degreeValue) => {
            teachingCertificate.push({
              name: "Doctoral degree",
              value: degreeValue,
            });
          });
        }
      });
      this.setState({
        teachingCertificate,
      });
    } else {
      return;
    }
  };
  makeEducationAndWorkDataforRendor = (data) => {
    var educationData = data.education.sort(function (a, b) {
      return new Date(b.startDate) - new Date(a.startDate);
    });
    var employmentData = data.employment.sort(function (a, b) {
      return new Date(b.startDate) - new Date(a.startDate);
    });
    this.setState({
      educationData,
      employmentData,
    });
  };
  makeRateDataforRendor = (data) => {
    let hourlyRate = [];
    hourlyRate.push({ name: "Your hourly rate", value: data.hourlyRate });
    this.setState({ hourlyRate });
  };
  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("userDetail"));
    let user_id = user.user.userId;
    getSetting({ user_id })
      .then((res) => {
        this.makeSubjectDataforRendor(res.data?.tutorDetails);
        this.makeCertificatesDataforRendor(res.data?.tutorDetails);
        this.makeProfileBioDataforRendor(res.data?.tutorDetails);
        this.makeEducationAndWorkDataforRendor(res.data?.tutorDetails);
        this.makeRateDataforRendor(res.data?.tutorDetails);
        this.setState({
          allTutorInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const {
      tutorSubjectArray,
      modeofTeaching,
      teachingCertificate,
      profileBio,
      educationData,
      employmentData,
      hourlyRate,
      tutorSubjectObj,
      modeModal,
    } = this.state;
    return (
      <div className="tutor-setting-BioAndSub">
        <ModeOfTeachModal
          isModalShow={modeModal}
          onHide={() =>
            this.setState({
              modeModal: false,
            })
          }
        />
        <Col
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className="flex-end-center btn-session"
        >
          <Button className="green-fill-btn">Preview Profile</Button>
          <Button className="green-unfill-btn">Set availabilty</Button>
        </Col>
        <Row style={{ margin: "0px" }}>
          <SettingSubAndBioPanel
            settingTitle={"Taught subjects"}
            tutorSettingArray={tutorSubjectObj}
            nameProperty="level"
            valueProperty="subject"
            ObjectType={true}
          />
          <SettingSubAndBioPanel
            settingTitle={"Mode of tutoring"}
            tutorSettingArray={modeofTeaching}
            nameProperty="name"
            valueProperty="value"
            onEdit={() =>
              this.setState({
                modeModal: true,
              })
            }
          />
          <SettingSubAndBioPanel
            settingTitle={"Teaching, education or doctoral qualifications"}
            tutorSettingArray={teachingCertificate}
            nameProperty="name"
            valueProperty="value"
          />
          <SettingSubAndBioPanel
            settingTitle={"Profile bio"}
            tutorSettingArray={profileBio}
            nameProperty="name"
            valueProperty="value"
            para={true}
          />
          <SettingSubAndBioPanel
            settingTitle={"Education"}
            tutorSettingArray={educationData}
            nameProperty="schoolName"
            valueProperty="startDate"
            endDate="endDate"
            subTitle="degree"
          />
          <SettingSubAndBioPanel
            settingTitle={"Works history"}
            tutorSettingArray={employmentData}
            nameProperty="employerName"
            valueProperty="startDate"
            endDate="endDate"
            subTitle="jobTitle"
          />
          <SettingSubAndBioPanel
            settingTitle={"Set your rate"}
            tutorSettingArray={hourlyRate}
            nameProperty="name"
            valueProperty="value"
            valueImage={require("./../../assets/icons/pound-black.png")}
          />
          <SettingSubAndBioPanel
            settingTitle={"Profile status"}
            noData={true}
            liveSign={require("./../../assets/icons/greenCircle.svg")}
            simpleTxt={"Live"}
          />
          <SettingSubAndBioPanel
            settingTitle={"Who can see your profile and book you?"}
            noData={true}
            isEditBtnHide={true}
            simpleTxt={"Everyone on Askademia."}
          />
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
// const mapDispatchToProps = (dispatch) => {

// };

export default connect(mapStateToProps, null)(TutorSettingBioAndSub);

function SettingSubAndBioPanel({
  settingTitle,
  tutorSettingArray,
  nameProperty,
  valueProperty,
  valueImage,
  endDate,
  subTitle,
  para,
  noData,
  isEditBtnHide,
  liveSign,
  simpleTxt,
  ObjectType,
  onEdit,
}) {
  console.log(
    ObjectType && tutorSettingArray && Object.keys(tutorSettingArray).length,
    "==="
  );
  return (
    <div style={{ width: "100%" }}>
      <Col
        lg={10}
        md={10}
        sm={12}
        xs={12}
        className="setting-bio-and-sub-col flex-between-center"
      >
        <div className="setting-title-div">{settingTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onEdit}>
            Edit
          </Button>
        ) : (
          ""
        )}
      </Col>
      {noData ? (
        <Col
          lg={10}
          md={10}
          sm={12}
          xs={12}
          className="flex-between-center setting-panel-col"
          style={{ borderBottom: "1px solid #ccc" }}
        >
          <div style={{ marginTop: subTitle ? "30px" : "" }}>
            <div className="name-div">
              {liveSign ? (
                <Image
                  style={{ width: "13px", marginRight: "25px" }}
                  src={liveSign}
                />
              ) : (
                ""
              )}{" "}
              {simpleTxt}
            </div>
          </div>
        </Col>
      ) : ObjectType ? (
        tutorSettingArray &&
        Object.keys(tutorSettingArray)?.map((level, index) => {
          return (
            <Col
              lg={10}
              md={10}
              sm={12}
              xs={12}
              className="flex-between-center setting-panel-col"
              key={index}
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div className="name-div">{level}</div>
              <div className="flex-center">
                {tutorSettingArray[level]?.length &&
                  tutorSettingArray[level][0].map((sub, index) => {
                    console.log("tutorsetting", tutorSettingArray);
                    let data = tutorSettingArray[level];
                    return (
                      <div
                        className="value-div"
                        style={{
                          marginLeft: data[0].length - 1 ? "3px" : null,
                        }}
                        key={index}
                      >
                        {index === data[0].length - 1 ? sub : `${sub}, `}
                      </div>
                    );
                  })}
              </div>
            </Col>
          );
        })
      ) : tutorSettingArray?.length ? (
        !para ? (
          tutorSettingArray.map((value, i) => (
            <Col
              lg={10}
              md={10}
              sm={12}
              xs={12}
              className="flex-between-center setting-panel-col"
              key={i}
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div style={{ marginTop: subTitle ? "30px" : "" }}>
                <div className="name-div">{value[nameProperty]}</div>
                {subTitle ? (
                  <div className="name-div">{value[subTitle]}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="value-div">
                {valueImage ? (
                  <Image
                    style={{ width: "17px", paddingBottom: "3px" }}
                    src={valueImage}
                  />
                ) : (
                  ""
                )}
                {valueProperty === "startDate"
                  ? `${new Date(value[valueProperty]).getFullYear()} - ${
                      value.isCurrent
                        ? "present"
                        : new Date(value[endDate]).getFullYear()
                    }`
                  : value[valueProperty]}
              </div>
            </Col>
          ))
        ) : (
          tutorSettingArray.map((value, i) => (
            <Col
              lg={10}
              md={10}
              sm={12}
              xs={12}
              className="setting-panel-col"
              key={i}
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <div className="para-title-bold">{value[nameProperty]}</div>
              <div className="value-para">{value[valueProperty]}</div>
            </Col>
          ))
        )
      ) : (
        <span className="no-data">no data</span>
      )}
    </div>
  );
}
