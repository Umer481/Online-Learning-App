import React, { Component } from "react";
import {
  Row,
  Col,
  Form,
  DropdownButton,
  Image,
  Dropdown,
  Button,
  Spinner,
  InputGroup,
} from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import {
  getLevels,
  getTutors,
  getPostCodeName,
  getPostCode,
} from "./../apis/tutorList";
import { TutorListAction } from "./../redux/actions/index";
import { debounce } from "lodash";
import SearchSubject from "./../components/SearchSubject";

class TutorList extends Component {
  constructor() {
    super();

    this.state = {
      searchhistory: "",
      subject: "",
      focus: "",
      levels: [],
      levelValue: "",
      location: "",
      tutorList: [],
      loading: true,
      paginationpages: 1,
      errorMessage: "",
      show: false,
      postCodeArray: [],
      searchmode: false,
      postcodeLoader: false,
      adminDistrict: "",
      learnMore: "",
    };
  }

  getPostCode = debounce((text) => {
    this.setState({
      postcodeLoader: true,
    });
    let isInputFieldEmptyRE = /^\s*$/;
    if (!isInputFieldEmptyRE.test(text)) {
      getPostCode({ text })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              postCodeArray: response.result,
              searchmode: true,
              postcodeLoader: false,
            });
          }
        })
        .catch((error) => {
          this.setState({
            postcodeLoader: false,
          });
        });
    } else {
      this.setState({
        searchmode: false,
        postcodeLoader: false,
      });
    }
  }, 200);

  componentDidMount = () => {
    const { location } = this.props;
    let { paginateTutor, paginationpages } = this.state;
    getTutors({ search: location.search })
      .then((res) => {
        if (res?.data) {
          paginationpages = Math.ceil(res?.data.length / 5);
          paginateTutor = res?.data.filter((tutor, i) => i + 1 < 6);
          this.setState({
            tutorList: res?.data,
            loading: false,
            paginationpages,
            paginateTutor,
          });
        } else {
          this.setState({
            loading: false,
            paginateTutor: [],
          });
        }
      })
      .catch((err) => {
        console.log("res", err);
        this.setState({ loading: false });
      });
    let search = location.search.replace("?", "")?.split("&");
    if (search?.length === 4) {
      let searchMode = search[0]?.split("=")[1];
      let searchsubject = search[1]?.split("=")[1];
      let searchlevel = search[2]?.split("=")[1];
      let searchLocation = search[3]?.split("=")[1].replace("%20", " ");
      getPostCodeName({ searchLocation })
        .then((response) => {
          if (response.status === 200) {
            this.setState({
              adminDistrict: "(" + response?.result[0]?.admin_district + ")",
            });
          }
        })
        .catch((err) => {});
      setTimeout(() => this.props.TutorListCheck(searchMode), 500);
      if (searchMode && searchsubject && searchlevel && searchLocation)
        this.setState({
          searchMode,
          searchsubject,
          searchlevel,
          searchLocation,
          location: searchLocation,
          subject: searchsubject,
          levelValue: searchlevel,
        });
      else
        this.setState({
          errorMessage: "Please specify all the missing fields",
        });
    } else {
      let searchMode = search[0]?.split("=")[1];
      let searchsubject = search[1]?.split("=")[1];
      let searchlevel = search[2]?.split("=")[1];
      if (searchMode && searchsubject && searchlevel) {
        setTimeout(() => this.props.TutorListCheck(searchMode), 500);

        this.setState({
          searchMode,
          searchsubject,
          searchlevel,
          searchLocation: "",
          subject: searchsubject,
          levelValue: searchlevel,
        });
      } else {
        this.setState({
          errorMessage: "Please specify all the missing fields",
        });
      }
    }

    getLevels()
      .then((res) => {
        this.setState({ levels: res.data });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };
  componentDidUpdate = (prevProps) => {
    let {
      location: { search },
    } = this.props;
    if (search !== prevProps.location.search) {
      search = search.replace("?", "")?.split("&");
      if (search?.length === 4) {
        let searchMode = search[0]?.split("=")[1];
        let searchsubject = search[1]?.split("=")[1];
        let searchlevel = search[2]?.split("=")[1];
        let searchLocation = search[3]?.split("=")[1].replace("%20", " ");
        getPostCodeName({ searchLocation })
          .then((response) => {
            if (response.status === 200) {
              this.setState({
                adminDistrict: "(" + response?.result[0]?.admin_district + ")",
              });
            }
          })
          .catch((err) => {});
        this.setState({
          searchMode,
          searchsubject,
          searchlevel,
          searchLocation,
          levelValue: searchlevel,
        });
      } else {
        let searchMode = search[0]?.split("=")[1];
        let searchsubject = search[1]?.split("=")[1];
        let searchlevel = search[2]?.split("=")[1];
        this.setState({
          searchMode,
          searchsubject,
          searchlevel,
          levelValue: searchlevel,
          searchLocation: "",
        });
      }
    }
  };

  goTosearchTutor = () => {
    const { subject, location, levelValue } = this.state;
    const { tutorListCheck } = this.props;
    const toogle = tutorListCheck !== "online" ? true : false;
    var regExpr = /^\s+$|^$/gi;

    if (
      (toogle ? !location?.match(regExpr) : true) &&
      levelValue &&
      !levelValue?.match(regExpr) &&
      subject &&
      !subject?.match(regExpr)
    ) {
      this.setState({ loading: true });
      this.props.history.push({
        pathname: "/tutors/search/",
        search: `?mode=${
          toogle === true ? "in-person" : "online"
        }&subject=${subject}&level=${levelValue}${
          toogle === true ? `&postCode=${location}` : ""
        }`,
      });
      getTutors({
        search: `?mode=${
          toogle === true ? "in-person" : "online"
        }&subject=${subject}&level=${levelValue}${
          toogle === true ? `&postCode=${location}` : ""
        }`,
      })
        .then((res) =>
          this.setState({
            paginateTutor: res?.data.filter((tutor, i) => i + 1 < 6),
            tutorList: res.data,
            loading: false,
            errorMessage: "",
          })
        )
        .catch((err) => this.setState({ loading: false }));
    } else {
      this.setState({
        errorMessage: "Please specify all the missing fields",
      });
    }
  };

  handlePageClick = (data) => {
    let { tutorList, paginateTutor } = this.state;
    let selected = data.selected + 1;
    let start = selected * 5 - 4;
    let end = selected * 5;
    paginateTutor = tutorList.filter((value, i) => start <= i && end >= i);
    this.setState({ page: selected, paginateTutor });
  };
  onToggle = () => {
    const { show } = this.state;
    if (!show) {
      this.setState({
        focus: "",
      });
    }
    this.setState({ show: !show });
  };
  onFocusfield = (e, focus) => {
    e.stopPropagation();
    this.setState({
      focus,
    });
  };
  onLearnMoreArray = (e, index) => {
    e.stopPropagation();
    index || index === 0
      ? this.setState({
          learnMore: index,
        })
      : this.setState({
          learnMore: "",
        });
  };
  getSubjectValue = (value) => {
    let subAndLev = value.split("(");
    if (subAndLev.length > 1) {
      let subject = subAndLev[0].substring(0, subAndLev[0].length - 1);
      let level = subAndLev[1].substring(0, subAndLev[1].length - 1);
      console.log('subject',subject)
      console.log('level',level)

      this.setState({ subject: subject, levelValue: level, errorMessage: "" });
    } else {
      this.setState({ subject: value, levelValue: "", errorMessage: "" });
    }
  };
  render() {
    const {
      focus,
      levels,
      levelValue,
      searchsubject,
      searchlevel,
      tutorList,
      loading,
      searchLocation,
      paginateTutor,
      paginationpages,
      errorMessage,
      location,
      subject,
      show,
      postCodeArray,
      searchmode,
      postcodeLoader,
      adminDistrict,
      learnMore,
    } = this.state;
    const { tutorListCheck } = this.props;
    const toogle = tutorListCheck !== "online" ? true : false;
    return (
      <div>
        <Row
          className="tutor-list-Row"
          onClick={() =>
            this.setState({
              focus: "",
            })
          }
        >
          <Col lg={1} md={1}></Col>
          <Col
            sm={12}
            md={toogle ? 10 : 8}
            lg={toogle ? 8 : 6}
            className="TutorList-Head_Col"
          >
            {toogle && (
              <span
                className={
                  focus === "postCode"
                    ? "search-subject-col-selected"
                    : "search-subject-col"
                }
                style={{ width: toogle ? "25%" : "33%" }}
              >
                <Form.Group controlId="formBasicEmail">
                  <InputGroup>
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control
                      type="text"
                      onClick={(e) => this.onFocusfield(e, "postCode")}
                      placeholder="Add your postcode"
                      onChange={(e) => {
                        this.getPostCode(e.target.value);
                        this.setState({ location: e.target.value });
                      }}
                      value={location}
                    />
                    <InputGroup.Append
                      style={{
                        border: "none",
                        padding: "0 3px",
                      }}
                      className="flex-center-center"
                    >
                      {location ? (
                        <span
                          className="cross-style"
                          onClick={(e) => {
                            this.setState({
                              location: "",
                            });
                            this.getPostCode("");
                          }}
                        >
                          x
                        </span>
                      ) : (
                        ""
                      )}
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                <div
                  style={{
                    display:
                      postcodeLoader || (postCodeArray?.length && searchmode)
                        ? "flex"
                        : "none",
                  }}
                  className="postcode-list-div"
                >
                  {!postcodeLoader ? (
                    searchmode && postCodeArray?.length ? (
                      postCodeArray.map((post, map) => (
                        <p
                          key={map}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            this.setState({
                              location: post,
                              searchmode: false,
                              postCodeArray: [],
                            })
                          }
                        >
                          <div className="flex-start-center post-value">
                            <Image
                              style={{
                                width: "15px",
                                marginRight: "5px",
                                marginBottom: "2px",
                              }}
                              src={require("./../assets/icons/gps.png")}
                            />
                            <span>{post}</span>
                          </div>
                        </p>
                      ))
                    ) : (
                      "no post code"
                    )
                  ) : (
                    <div className="flex-center-center">
                      <Spinner
                        animation="border"
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                  )}
                </div>
              </span>
            )}
            <span
              className={
                focus === "subject"
                  ? "search-subject-col-selected"
                  : "search-subject-col"
              }
              style={{ width: toogle ? "25%" : "33%" }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                {/* <Form.Control
                  type="text"
                  placeholder="Add Subject"
                  onClick={(e) => this.onFocusfield(e, "subject")}
                  onChange={(e) => this.setState({ subject: e.target.value })}
                  value={subject}
                /> */}
                <SearchSubject
                  subjectValue={subject}
                  getSubjectValue={(value) => this.getSubjectValue(value)}

                  onClick={(e) => this.onFocusfield(e, "subject")}
                />
              </Form.Group>
            </span>
            <div
              className={`dropdownlevel ${
                show ? "search-subject-col-selected" : ""
              }`}
              style={{ width: toogle ? "25%" : "33%" }}
            >
              <div className="level-title">Level</div>
              <DropdownButton
                id="dropdown-basic-button"
                show={show}
                onToggle={this.onToggle}
                title={
                  <span className="flex-between-center">
                    <span className="search-date">
                      {levelValue ? levelValue : "No Selected"}
                    </span>
                    <Image
                      style={{ width: "15px" }}
                      src={require("./../assets/icons/down-arrow.png")}
                    />
                  </span>
                }
              >
                {levels && levels.length ? (
                  levels.map((level, index) => {
                    return (
                      <Dropdown.Item
                        onClick={() => this.setState({ levelValue: level })}
                        key={index}
                      >
                        {level}
                      </Dropdown.Item>
                    );
                  })
                ) : (
                  <Dropdown.Item>No Data</Dropdown.Item>
                )}
              </DropdownButton>
            </div>
            <div
              className="search-div"
              style={{ width: toogle ? "25%" : "33%" }}
            >
              <Button
                className="flex-center-center"
                onClick={this.goTosearchTutor}
              >
                <Image
                  src={require("./../assets/icons/search-white.png")}
                  style={{ width: "20px", marginRight: "7px" }}
                />
                Search
              </Button>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="body-steps">
              {!errorMessage &&
                `${tutorList?.length ? tutorList?.length : 0}  tutors . ${
                  searchsubject ? searchsubject : ""
                } . ${searchlevel ? searchlevel : ""}${`. ${
                  searchLocation ? searchLocation : ""
                }`}`}
            </div>
            <div className="body-title">
              <h2>
                {errorMessage
                  ? errorMessage
                  : `${searchlevel ? searchlevel : ""} ${
                      searchsubject ? searchsubject : ""
                    } tutors, ${searchLocation ? searchLocation : ""} ${
                      toogle ? (adminDistrict ? adminDistrict : "") : ""
                    } `}
              </h2>
              <div className="flex-between-center">
                <div>
                  <Button>Price</Button>
                  <Button>Availability</Button>
                  <Button>Qualification</Button>
                </div>
                <div className="menu-style">
                  <Image
                    src={require("./../assets/icons/grid.png")}
                    style={{
                      marginRight: "20px",
                      height: "31px",
                      marginBottom: "2px",
                    }}
                  />
                  <span>Grid View</span>
                </div>
              </div>
            </div>
            <Col lg={12} md={12} sm={12} xs={12} className="body-content">
              {loading ? (
                <div className="flex-center-center">
                  <Spinner
                    animation="border"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              ) : paginateTutor?.length ? (
                paginateTutor.map((value, index) => {
                  value.subjectName = subject;
                  value.levelName = levelValue;
                  return (
                    <Row
                      key={index}
                      className="tutors-box-ROw"
                      onClick={() => {
                        this.props.history.push(
                          `/tutors/search/tutor/${value.userId}`
                        );
                        this.props.TutorSpecificDataAction(value);
                      }}
                    >
                      <Col lg={9} md={9} sm={12} xs={12}>
                        <div className="tutors-box">
                          <div className="flex-between-center">
                            <div className="tutors-box-title flex-between-center">
                              {value.starTutorRating ? (
                                <span className="star-title flex-center-center">
                                  STAR TUTOR
                                </span>
                              ) : (
                                ""
                              )}
                              <span className="tutors-name">{`${value.firstName} ${value.lastName}`}</span>
                            </div>
                          </div>
                          <div className="tutor-info">
                            <h2>{value?.tutorDetail?.tagline}</h2>
                            <div>My teaching styles:</div>
                            <p>
                              {value?.tutorDetail?.teachingStyle
                                ? value?.tutorDetail.teachingStyle
                                : ""}
                            </p>
                            <div className="flex">
                              <span
                                className="learn-more"
                                onClick={(e) =>
                                  this.onLearnMoreArray(
                                    e,
                                    learnMore === index ? "" : index
                                  )
                                }
                              >
                                Learn More
                                {learnMore === index ? (
                                  <div className="moreText">
                                    {value?.tutorDetail?.bio}
                                  </div>
                                ) : (
                                  ""
                                )}
                              </span>
                              <span className="hours-rate">
                                <Image
                                  src={require("./../assets/icons/pound-black.png")}
                                />
                                <span>
                                  {value?.tutorDetail.hourlyRate} / hours
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        lg={3}
                        md={3}
                        sm={12}
                        xs={12}
                        className="tutor-img-col flex-end-center"
                      >
                        <div className="image-div">
                          <span className="head-img">
                            <Image
                              src={
                                value?.profileImage
                                  ? value.profileImage
                                  : require("./../assets/icons/computer.png")
                              }
                            />
                            <span>i can teach online</span>
                          </span>
                          <Image
                            style={{
                              height: "100%",
                              width: "100%",
                              borderRadius: "5px",
                            }}
                            src={
                              value?.imageUrl
                                ? value?.imageUrl
                                : "https://firebasestorage.googleapis.com/v0/b/askademia-36826.appspot.com/o/no-img.png?alt=media&token=139f8f26-4fa9-4cdf-88d7-a27859180a12"
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  );
                })
              ) : (
                <Col lg={12} md={12} sm={12} xs={12} className="tutors-box-ROw">
                  <h4>No results</h4>
                  <div>
                    To more results, try adjusting your search by changing or
                    removing your filters
                  </div>
                </Col>
              )}
            </Col>
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="flex-center-center pagnination-Col"
            >
              <ReactPaginate
                previousLabel={
                  <span>
                    <Image
                      style={{ transform: "rotate(90deg)", width: "18px" }}
                      src={require("./../assets/icons/down-arrow-blue.png")}
                    />
                  </span>
                }
                nextLabel={
                  <span>
                    <Image
                      style={{ transform: "rotate(270deg)", width: "18px" }}
                      src={require("./../assets/icons/down-arrow-blue.png")}
                    />
                  </span>
                }
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={paginationpages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    TutorListReducer: { tutorListCheck },
    UserReducer: { user },
  } = state;

  return {
    tutorListCheck,
    user,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    TutorListCheck: (payload) =>
      dispatch(TutorListAction.TutorListCheck(payload)),
    TutorSpecificDataAction: (payload) =>
      dispatch(TutorListAction.TutorSpecificDataAction(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(TutorList);
