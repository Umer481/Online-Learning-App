import React, { Component } from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import Progress from "./progress";
import UserReviews from "./UserReviews";
import Availability from "./../TutorDashboard/availability";
import { getSpecificTutor } from "./../../apis/tutorList";
import { getReviewTutor } from "./../../apis/tutorList";
import { getSubjectTutor } from "./../../apis/tutorList";
import { connect } from "react-redux";

class SpecificTutor extends Component {
  constructor() {
    super();

    this.state = {
      selectedBtn: 1,
      tutorDetailObj: {},
      tutorReviewObj: {},
      tutorSubjectObj: {},
      totalReview: 0,
      employmentData: [],
      educationData: [],

      scale: {
        communication: 0,
        teachingStyle: 0,
        content: 0,
        interaction: 0,
        knowledge: 0,
        timeliness: 0,
      },
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
    };
  }
  componentDidUpdate = (prevProps) => {
    const { tutorSpecficData } = this.props;

    if (tutorSpecficData?.userId !== prevProps?.tutorSpecficData?.userId) {
      var educationData = tutorSpecficData?.tutorDetail?.education.sort(
        function (a, b) {
          return new Date(b.startDate) - new Date(a.startDate);
        }
      );
      var employmentData = tutorSpecficData?.tutorDetail?.employment.sort(
        function (a, b) {
          return new Date(b.startDate) - new Date(a.startDate);
        }
      );
      this.setState({
        tutorDetailObj: tutorSpecficData,
        employmentData,
        educationData,
      });
    }
  };

  componentDidMount = () => {
    let { scale } = this.state;
    const {
      match: {
        params: { id },
      },
      tutorSpecficData,
    } = this.props;
    let communication = 0;
    let teachingStyle = 0;
    let content = 0;
    let interaction = 0;
    let knowledge = 0;
    let timeliness = 0;
    let totalReview = 0;
    let tutorSubjectObj = {};
    getReviewTutor({
      id,
    })
      .then((res) => {
        this.setState({
          tutorReviewObj: res.data,
        });

        res?.data?.length &&
          res.data.map((scaleObj) => {
            communication = communication + scaleObj.scale.communication;
            teachingStyle = teachingStyle + scaleObj.scale.teachingStyle;
            content = content + scaleObj.scale.content;
            interaction = interaction + scaleObj.scale.interaction;
            knowledge = knowledge + scaleObj.scale.knowledge;
            timeliness = timeliness + scaleObj.scale.timeliness;
          });
        totalReview =
          communication +
          teachingStyle +
          content +
          interaction +
          knowledge +
          timeliness;
        totalReview = totalReview / (res?.data?.length * 6);
        totalReview = totalReview.toFixed(2);
        communication = ((communication / res?.data?.length) * 100) / 5;
        teachingStyle = ((teachingStyle / res?.data?.length) * 100) / 5;
        content = ((content / res?.data?.length) * 100) / 5;
        interaction = ((interaction / res?.data?.length) * 100) / 5;
        knowledge = ((knowledge / res?.data?.length) * 100) / 5;
        timeliness = ((timeliness / res?.data?.length) * 100) / 5;

        scale = {
          communication,
          teachingStyle,
          content,
          interaction,
          knowledge,
          timeliness,
        };
        this.setState({
          scale,
          totalReview,
        });
      })
      .catch((err) => console.log(err));

    getSubjectTutor({
      id: id,
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

    var educationData = tutorSpecficData?.tutorDetail?.education.sort(function (
      a,
      b
    ) {
      return new Date(b.startDate) - new Date(a.startDate);
    });
    var employmentData = tutorSpecficData?.tutorDetail?.employment.sort(
      function (a, b) {
        return new Date(b.startDate) - new Date(a.startDate);
      }
    );
    this.setState({
      tutorDetailObj: tutorSpecficData,
      employmentData,
      educationData,
    });
  };
  render() {
    const {
      selectedBtn,
      availability,
      tutorDetailObj,
      tutorSubjectObj,
      tutorReviewObj,
      totalReview,
      scale,
      employmentData,
      educationData,
    } = this.state;
    const {
      match: {
        params: { id },
      },
      history: {
        location: { pathname },
      },
    } = this.props;
    let firstName = tutorDetailObj?.firstName;
    let lastName = tutorDetailObj?.lastName;
    let mode = tutorDetailObj?.tutorDetail?.modeOfTeaching;
    let user_id = pathname.split("/")[4];
    let joined =
      tutorDetailObj?.createdAt && tutorDetailObj.createdAt.substring(0, 4);

    return (
      <div className="specific-tutor-div">
        <div className="border-style" />
        <Row>
          <Col lg={4} md={4} sm={12} xs={12} className="profile-card-col">
            <div className="profile-card">
              <div className="flex-center-center image-div">
                <Image
                  src={
                    tutorDetailObj?.imageUrl
                      ? tutorDetailObj.imageUrl
                      : "https://firebasestorage.googleapis.com/v0/b/askademia-36826.appspot.com/o/no-img.png?alt=media&token=139f8f26-4fa9-4cdf-88d7-a27859180a12"
                  }
                  roundedCircle
                />
              </div>
              <div className="tutor-info-style-div">
                <div className="tutor-hour">
                  <Image
                    src={require("./../../assets/icons/pound-black.png")}
                    className="pound-img"
                  />
                  <h2>
                    {tutorDetailObj?.tutorDetail
                      ? tutorDetailObj?.tutorDetail.hourlyRate
                      : ""}
                  </h2>
                  <span>per hour</span>
                </div>
                <div className="tutor-review">
                  <Image
                    src={require("./../../assets/icons/fillStar.png")}
                    className="pound-img"
                  />
                  <span className="star-span">
                    {totalReview ? totalReview : "N/A"}
                  </span>
                  <span className="rew-span">{`(${
                    tutorReviewObj?.length ? tutorReviewObj?.length : ""
                  } reviews)`}</span>
                </div>
              </div>
              <div className="teach-style-div">
                <div>
                  <Image
                    src={require("./../../assets/icons/computer-black.png")}
                  />

                  <span>{` I can teach ${
                    mode === 0
                      ? "online"
                      : mode === 1
                      ? "inperson"
                      : mode === 2
                      ? "online and inperson"
                      : ""
                  }`}</span>
                </div>
                <div>
                  <Image src={require("./../../assets/icons/verified.png")} />
                  <span>Verified</span>
                </div>
              </div>
              <div className="btn-div">
                <Button
                  onClick={() =>
                    this.props.history.push(
                      `/tutors/search/tutor/${id}/booking-request`
                    )
                  }
                >
                  Request Lesson
                </Button>
                <Button>Contact tutor</Button>
              </div>
            </div>
          </Col>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="tutor-info-div-detail">
              <h2 className="truncate">
                {tutorDetailObj?.tutorDetail?.tagline
                  ? tutorDetailObj?.tutorDetail?.tagline
                  : ""}
              </h2>
              <h4 className="truncate">{`${firstName ? firstName : ""} ${
                lastName ? lastName : ""
              } . Joined in ${joined}`}</h4>

              <a href={`#bio`}>
                <Button
                  className={`${selectedBtn === 1 ? "active" : ""} first-btn`}
                  onClick={() =>
                    this.setState({
                      selectedBtn: 1,
                    })
                  }
                >
                  Bio
                </Button>
              </a>
              <a href={`#subject`}>
                <Button
                  className={`${selectedBtn === 2 ? "active" : ""}`}
                  onClick={() =>
                    this.setState({
                      selectedBtn: 2,
                    })
                  }
                >
                  Taught subject
                </Button>
              </a>
              <a href={`#review`}>
                <Button
                  className={`${selectedBtn === 3 ? "active" : ""}`}
                  onClick={() =>
                    this.setState({
                      selectedBtn: 3,
                    })
                  }
                >
                  Reviews
                </Button>
              </a>
              <a href={`#availabilty`}>
                <Button
                  className={`${selectedBtn === 4 ? "active" : ""}`}
                  onClick={() =>
                    this.setState({
                      selectedBtn: 4,
                    })
                  }
                >
                  Availability
                </Button>
              </a>
              <a href={`#workEducation`}>
                <Button
                  className={`${selectedBtn === 5 ? "active" : ""}`}
                  onClick={() =>
                    this.setState({
                      selectedBtn: 6,
                    })
                  }
                >
                  Work and education
                </Button>
              </a>
            </div>

            <div className="about-tutor" id="bio">
              <h2 className="truncate">{`About ${firstName ? firstName : ""} ${
                lastName ? lastName : ""
              }`}</h2>
              <Image
                className="quote-img"
                src={require("./../../assets/icons/quote.png")}
              />
              <p className="para-tutor">
                {tutorDetailObj?.tutorDetail?.bio
                  ? tutorDetailObj?.tutorDetail?.bio
                  : ""}
              </p>
              <h2 className="truncate">
                {` ${firstName ? firstName : ""} ${lastName ? lastName : ""}`}
                's teaching style
              </h2>
              <p className="para-tutor">
                {tutorDetailObj?.tutorDetail?.teachingStyle
                  ? tutorDetailObj?.tutorDetail?.teachingStyle
                  : ""}
              </p>
              <div>
                <h2
                  className="truncate"
                  style={{ marginTop: "80px" }}
                  id="subject"
                >
                  Taught subjects
                </h2>
                <Row style={{ padding: "0px" }}>
                  {Object.keys(tutorSubjectObj).map((subject, index) => {
                    return (
                      <Col
                        lg={3}
                        md={4}
                        sm={12}
                        xs={12}
                        key={index}
                        style={{ padding: "0px" }}
                        className="btn-subjects-col"
                      >
                        <h5>{subject}</h5>
                        {tutorSubjectObj[subject]?.length &&
                          tutorSubjectObj[subject][0].map((sub, index) => {
                            return <Button key={index}>{sub}</Button>;
                          })}
                      </Col>
                    );
                  })}
                </Row>
                <h2
                  className="truncate"
                  style={{ marginTop: "80px" }}
                  id="review"
                >
                  Student reviews
                </h2>
                <div className="tutor-review">
                  <Image
                    src={require("./../../assets/icons/fillStar.png")}
                    className="pound-img"
                  />
                  <span className="star-span">
                    {totalReview ? totalReview : "N/A"}
                  </span>
                  <span
                    style={{
                      fontSize: "27px",
                      paddingTop: "0px",
                      marginRight: "4px",
                    }}
                  >
                    |
                  </span>
                  <span className="rew-span">
                    {`${
                      tutorReviewObj?.length ? tutorReviewObj?.length : ""
                    } reviews`}
                  </span>
                </div>
                <Progress scale={scale} />
                {tutorReviewObj?.length
                  ? tutorReviewObj.map((review, index) => {
                      return (
                        <UserReviews
                          key={index}
                          review={review}
                          firstName={firstName}
                          lastName={lastName}
                          tutorImg={
                            tutorDetailObj.imageUrl
                              ? tutorDetailObj.imageUrl
                              : "https://firebasestorage.googleapis.com/v0/b/askademia-36826.appspot.com/o/no-img.png?alt=media&token=139f8f26-4fa9-4cdf-88d7-a27859180a12"
                          }
                        />
                      );
                    })
                  : ""}
              </div>
              <h2
                className="truncate"
                style={{ marginTop: "40px" }}
                id="availabilty"
              >
                Availability
              </h2>
              <h4 style={{ color: "#000" }}>Select availability to book</h4>
              <Availability
                tutor={true}
                availability={availability}
                firstName={firstName}
                lastName={lastName}
              />

              <h2 id="workEducation">Education</h2>
              {educationData?.length
                ? educationData.map((edu, index) => {
                    return (
                      <div key={index} className="h4-head-div">
                        <h4 className="h4-head-style">
                          <span>{edu.schoolName}</span>
                          <span>{`${new Date(edu.startDate).getFullYear()} - ${
                            edu.isCurrent
                              ? "present"
                              : new Date(edu.endDate).getFullYear()
                          }`}</span>
                        </h4>
                        <h4>{edu.degree}</h4>
                      </div>
                    );
                  })
                : ""}
              <hr />
              <h2 id="workEducation">Employment</h2>
              {employmentData?.length
                ? employmentData.map((empl, index) => {
                    return (
                      <div key={index} className="h4-head-div">
                        <h4 className="h4-head-style">
                          <span>{empl.employerName}</span>
                          <span>{`${new Date(empl.startDate).getFullYear()} - ${
                            empl.isCurrentJob
                              ? "present"
                              : new Date(empl.endDate).getFullYear()
                          }`}</span>
                        </h4>
                        <h4>{empl.jobTitle}</h4>
                      </div>
                    );
                  })
                : ""}
              <div className="textmore-style">Report this profile</div>
            </div>
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

export default connect(mapStateToProps, null)(SpecificTutor);
