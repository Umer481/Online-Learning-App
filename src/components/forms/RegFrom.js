import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { getLevels } from "./../../apis/tutorList";
import {
  DropdownButton,
  Dropdown,
  Spinner,
  Image,
  InputGroup,
  FormControl,
  FormGroup,
} from "react-bootstrap";
import { debounce } from "lodash";
import SearchSubject from "./../../components/SearchSubject";
class RegForm extends Component {
  constructor() {
    super();
    this.state = {
      toogle: true,
      subject: "",
      location: "",
      levels: [],
      errorMessage: "",
      levelValue: "",
      postCodeArray: [],
      searchmode: false,
      postcodeLoader: false,
      location: "",
    };
  }

  componentDidMount = () => {
    getLevels()
      .then((res) => {
        this.setState({ levels: res.data });
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  getPostCode = debounce((text) => {
    this.setState({
      postcodeLoader: true,
    });
    let isInputFieldEmptyRE = /^\s*$/;
    if (!isInputFieldEmptyRE.test(text)) {
      fetch(`https://api.postcodes.io/postcodes/${text}/autocomplete`)
        .then((response) => {
          return response.json();
        })
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
        postCodeArray: [],
      });
    }
  }, 200);

  goTosearchTutor = () => {
    const { toogle, subject, location, levels, levelValue } = this.state;
    var regExpr = /^\s+$|^$/gi;
    if (
      (toogle ? !location.match(regExpr) : true) &&
      !levelValue.match(regExpr) &&
      !subject.match(regExpr)
    ) {
      this.setState({
        errorMessage: "",
        levelValue: "",
        location: "",
        subject: "",
      });

      this.props.history.push({
        pathname: "/tutors/search/",
        search: `?mode=${
          toogle === true ? "in-person" : "online"
        }&subject=${subject}&level=${levelValue}${
          toogle === true ? `&postCode=${location}` : ""
        }`,
      });
    } else {
      this.setState({
        errorMessage: "Please specify all the missing fields",
      });
    }
  };
  getSubjectValue = (value) => {
    let subAndLev = value.split("(");
    if (subAndLev.length > 1) {
      let subject = subAndLev[0].substring(0, subAndLev[0].length - 1);
      let level = subAndLev[1].substring(0, subAndLev[1].length - 1);
      this.setState({ subject: subject, levelValue: level, errorMessage: "" });
    } else {
      this.setState({ subject: value, levelValue: "", errorMessage: "" });
    }
  };

  render() {
    const {
      toogle,
      levels,
      levelValue,
      errorMessage,
      postCodeArray,
      searchmode,
      postcodeLoader,
      location,
      subject,
    } = this.state;

    return (
      <Route
        exact
        path="/"
        render={() => (
          <div class="container">
            <div class="banner-card-wrapper-home">
              <div class="banner-card">
                <div class="banner-header">
                  <h3 class="title">Study Beyond The Classroom</h3>
                  <p class="subtitle">
                    Find a tutor in any subject to help you learn more.
                  </p>
                </div>
                <ul
                  class="nav nav-pills mb-3 row"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item col-lg-6">
                    <a
                      class={`${
                        toogle === true ? "nav-link active" : "nav-link"
                      }`}
                      id="pills-home-tab"
                      data-toggle="pill"
                      onClick={() => {
                        this.setState({
                          toogle: true,
                          errorMessage: "",
                        });
                      }}
                      href="#"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected={`${toogle === true ? "true" : "false"}`}
                    >
                      In-Person
                    </a>
                  </li>
                  <li class="nav-item col-lg-6">
                    <a
                      class={`${
                        toogle === false ? "nav-link active" : "nav-link "
                      }`}
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#"
                      onClick={() => {
                        this.setState({
                          toogle: false,
                          errorMessage: "",
                        });
                      }}
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected={`${toogle === false ? "false" : "true"}`}
                    >
                      Online
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class={`tab-pane fade ${
                      toogle === true ? "show active" : ""
                    }`}
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="row">
                      <div class="col-lg-12">
                        <FormGroup
                          controlId="search"
                          className="form_search"
                          style={{
                            marginBottom: "0",
                          }}
                        >
                          <InputGroup
                            style={{
                              border: "0.08em solid #cdd4da",
                              borderRadius: "5px",
                            }}
                          >
                            <FormControl
                              type="text"
                              class="form-control"
                              placeholder="Enter your location"
                              value={location}
                              style={{
                                border: "none",
                              }}
                              onChange={(e) => {
                                this.getPostCode(e.target.value);
                                this.setState({
                                  location: e.target.value,
                                  errorMessage: "",
                                });
                              }}
                            />
                            <InputGroup.Append
                              style={{
                                background: "#fff",
                                border: "none",
                                padding: "0 3px",
                                height: "48px",
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
                        </FormGroup>

                        <div
                          style={{
                            display:
                              postcodeLoader ||
                              searchmode ||
                              postCodeArray?.length
                                ? "inline"
                                : "none",
                          }}
                          className={
                            postcodeLoader ||
                            searchmode ||
                            postCodeArray?.length
                              ? "postcode-list-div"
                              : ""
                          }
                        >
                          {!postcodeLoader ? (
                            searchmode && postCodeArray?.length ? (
                              postCodeArray.map((post, index) => (
                                <p
                                  key={index}
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
                                      src={require("./../../assets/icons/gps.png")}
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
                      </div>
                    </div>
                    <div
                      class="row cu-padding"
                      style={{
                        marginTop: "1rem",
                      }}
                    >
                      <div class="col-lg-6">
                        {/* <FormControl
                          type="text"
                          class="form-control"
                          placeholder="search your subject"
                          onChange={(e) =>
                            this.setState({
                              subject: e.target.value,
                              errorMessage: "",
                            })
                          }
                        /> */}
                        <SearchSubject
                          subjectValue={subject}
                          getSubjectValue={(value) =>
                            this.getSubjectValue(value)
                          }
                        />
                      </div>
                      <div class="col-lg-6 home-search-dropdown">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={
                            <span className="flex-between-center">
                              <span className="search-date">
                                {levelValue ? levelValue : "Your Level"}
                              </span>
                            </span>
                          }
                        >
                          {levels && levels.length ? (
                            levels.map((level, index) => {
                              return (
                                <Dropdown.Item
                                  onClick={() =>
                                    this.setState({ levelValue: level })
                                  }
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
                    </div>
                    <div class="row ">
                      <div class="col-lg-12 text-right">
                        <div
                          class="btn btn-success"
                          onClick={this.goTosearchTutor}
                        >
                          Search
                        </div>
                      </div>

                      <div className="flex-center-center error-message">
                        {errorMessage ? errorMessage : null}
                      </div>
                    </div>
                  </div>
                  <div
                    class={`tab-pane fade ${
                      toogle === false ? "show active" : ""
                    }`}
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="row cu-padding">
                      <div class="col-lg-6">
                        {/* <input
                          type="text"
                          class="form-control"
                          placeholder="search your subject"
                          onChange={(e) =>
                            this.setState({
                              subject: e.target.value,
                              errorMessage: "",
                            })
                          }
                        /> */}
                        <SearchSubject
                          subjectValue={subject}
                          getSubjectValue={(value) =>
                            this.getSubjectValue(value)
                          }
                        />
                      </div>
                      <div class="col-lg-6 home-search-dropdown">
                        <DropdownButton
                          id="dropdown-basic-button"
                          title={
                            <span className="flex-between-center">
                              <span className="search-date">
                                {levelValue ? levelValue : "Your Level"}
                              </span>
                            </span>
                          }
                        >
                          {levels && levels.length ? (
                            levels.map((level, index) => {
                              return (
                                <Dropdown.Item
                                  onClick={() =>
                                    this.setState({
                                      levelValue: level,
                                      errorMessage: "",
                                    })
                                  }
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
                    </div>
                    <div class="row ">
                      <div class="col-lg-12 text-right">
                        <div
                          class="btn btn-success"
                          onClick={this.goTosearchTutor}
                        >
                          Search
                        </div>
                      </div>
                      {errorMessage ? (
                        <div className="flex-center-center error-message">
                          {errorMessage}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default withRouter(RegForm);
