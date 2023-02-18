import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationFormAction } from "./../../redux/actions";
import { getLangLat } from "./../../apis/tutors";
import {
  Col,
  Row,
  DropdownButton,
  Dropdown,
  Image,
  FormControl,
} from "react-bootstrap";

const ModeForTeach = (props) => {
  const [state, updateState] = useState({
    modeOfTeaching: 2,
    street: "",
    town: "",
    country: "",
    postCode: "",
    willignessToTravel: 0,
  });

  const selectMode = (value) => {
    updateState({
      ...state,
      modeOfTeaching: value,
    });
  };

  useEffect(() => {
    let modeOfTeaching = props?.TutorInfoObj?.step1?.modeOfTeaching;
    let willignessToTravel = props?.TutorInfoObj?.step1?.willignessToTravel;
    let address = props?.TutorInfoObj?.step1?.address;
    updateState((state) => ({
      ...state,
      modeOfTeaching:
        modeOfTeaching === 0 || modeOfTeaching ? modeOfTeaching : 2,
      willignessToTravel,
      street: address?.street,
      town: address?.town,
      country: address?.country,
      postCode: address?.postCode,
    }));
  }, [props?.TutorInfoObj]);

  const getAndSetinputValue = (event) => {
    updateState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  /*this api for after user*/

  const SaveAndCancel = () => {
    const {
      modeOfTeaching,
      street,
      town,
      country,
      postCode,
      willignessToTravel,
    } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    let address = {
      street: street ? street : "",
      town: town ? town : "",
      country: country ? country : "",
      postCode: postCode ? postCode : "",
    };
    let step1 = {
      subjects: TutorInfoObj?.step1?.subjects,
      modeOfTeaching: modeOfTeaching,
      address: address,
      willignessToTravel: willignessToTravel ? willignessToTravel : "",
      addressLatLng: [],
      addressRaw:
        modeOfTeaching !== 0
          ? `${address.street} ${address.town} ${address.country} ${address.postCode}`
          : "",
    };
    if (modeOfTeaching !== 0) {
      getLangLat(
        `${address.street},${address.town},${address.country},${address.postCode}`
      )
        .then((res) => {
          step1.addressLatLng.push(res.results[0].locations[0].latLng.lat);
          step1.addressLatLng.push(res.results[0].locations[0].latLng.lng);
          props.AddTutorInfo({ step1 });
          props.history.push("/tutor-application-form");
        })
        .catch((err) => console.log(err));
    } else {
      props.AddTutorInfo({ step1 });
      props.history.push("/tutor-application-form");
    }
  };
  const {
    modeOfTeaching,
    willignessToTravel,
    street,
    town,
    country,
    postCode,
  } = state;
  const { validationError } = props;
  console.log("validationError", validationError);
  return (
    <div>
      <Row className="ModeForTeach-Col flex-center-center">
        <Col lg={10} md={10} sm={12} xs={12} className="modal-content">
          <Row className="header">
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="modal-title flex-center-center"
            >
              <Row className="header_options ">Select mode for teaching</Row>
            </Col>
          </Row>
          <div style={{ borderBottom: "1px solid #00000033" }} />
          <Row className="ModeForTeach-body">
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={12}
              style={{
                paddingLeft: "70px",
                borderTop: modeOfTeaching === 2 ? `4px solid #056b9a` : "",
                cursor: "pointer",
              }}
              className="flex-start-center"
            >
              <div
                className="custom-control custom-radio custom-control-inline"
                onClick={() => selectMode(2)}
              >
                <input
                  type="radio"
                  id="customRadioInline1"
                  name="customRadioInline1"
                  className="custom-control-input"
                  checked={modeOfTeaching === 2 ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline1"
                >
                  Online and In-person
                </label>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={12}
              style={{
                borderTop: modeOfTeaching === 0 ? `4px solid #056b9a` : "",
                cursor: "pointer",
              }}
              className="flex-center-center"
            >
              <div
                className="custom-control custom-radio custom-control-inline"
                onClick={() => selectMode(0)}
              >
                <input
                  type="radio"
                  id="customRadioInline2"
                  name="customRadioInline1"
                  className="custom-control-input"
                  checked={modeOfTeaching === 0 ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline2"
                >
                  Online
                </label>
              </div>
            </Col>
            <Col
              lg={4}
              md={4}
              sm={4}
              xs={12}
              style={{
                paddingRight: "70px",
                borderTop: modeOfTeaching === 1 ? `4px solid #056b9a` : "",
                cursor: "pointer",
              }}
              className="flex-end-center"
            >
              <div
                className="custom-control custom-radio custom-control-inline"
                onClick={() => selectMode(1)}
              >
                <input
                  type="radio"
                  id="customRadioInline3"
                  name="customRadioInline1"
                  className="custom-control-input"
                  checked={modeOfTeaching === 1 ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor="customRadioInline3"
                >
                  In-person
                </label>
              </div>
            </Col>
          </Row>
          {(modeOfTeaching === 1 || modeOfTeaching === 2) && (
            <Row style={{ margin: 0 }}>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  color: "#7c7c7b",
                  fontSize: "19px",
                  padding: "0px 70px",
                }}
              >
                if you will be teaching in-person, how far you willing to travel
                from your address to teach the student
              </Col>
              <Col
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className="ModeForTeach-body-down"
              >
                <DropdownButton
                  onSelect={(e) =>
                    updateState({
                      ...state,
                      willignessToTravel: e,
                    })
                  }
                  id="dropdown-basic-button"
                  className={`${
                    !willignessToTravel
                      ? props?.validationError?.data?.willignessToTravel
                        ? "alertRed"
                        : ""
                      : ""
                  }`}
                  title={
                    <span className="flex-between-center">
                      <span
                        style={{
                          textAlign: "left",
                          fontSize: "25px",
                          color: "#000",
                        }}
                      >
                        {willignessToTravel
                          ? willignessToTravel
                          : "I only teach at my address"}
                      </span>
                      <Image
                        style={{ width: "15px", marginLeft: "20px" }}
                        src={require("./../../assets/icons/down-arrow.png")}
                      />
                    </span>
                  }
                >
                  <Dropdown.Item eventkey="I only teach at my address">
                    I only teach at my address
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1 miles">1 miles</Dropdown.Item>
                  <Dropdown.Item eventKey="2 miles">2 miles</Dropdown.Item>
                  <Dropdown.Item eventKey="10 miles">10 miles</Dropdown.Item>
                  <Dropdown.Item eventKey="15 miles">15 miles</Dropdown.Item>
                  <Dropdown.Item eventKey="20 miles">20 miles</Dropdown.Item>
                </DropdownButton>
                {!willignessToTravel ? (
                  props?.validationError?.data?.willignessToTravel ? (
                    <div className="red-alert-message">
                      {`street ${props?.validationError?.data?.willignessToTravel}`}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                <div className="Ques-txt">What is your address?</div>
                <div className="para-txt">
                  To complete your application,you need to provide address.
                  Other people who use Askademia Won't see your address. if you
                  teach from house this will only be provided to students and
                  parent's once you have accepted booking.
                </div>
                <FormControl
                  placeholder="Street"
                  name="street"
                  onChange={getAndSetinputValue}
                  style={{
                    borderColor: !street
                      ? props?.validationError?.data?.address
                        ? "red"
                        : ""
                      : "",
                  }}
                  value={street}
                />
                {!street ? (
                  props?.validationError?.data?.address ? (
                    <div className="red-alert-message">
                      {`street ${props?.validationError?.data?.address}`}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                <FormControl
                  placeholder="Town"
                  name="town"
                  onChange={getAndSetinputValue}
                  style={{
                    borderColor: !town
                      ? props?.validationError?.data?.address
                        ? "red"
                        : ""
                      : "",
                  }}
                  value={town}
                />
                {!town ? (
                  props?.validationError?.data?.address ? (
                    <div className="red-alert-message">
                      {`town ${props?.validationError?.data?.address}`}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                <FormControl
                  placeholder="Country"
                  name="country"
                  onChange={getAndSetinputValue}
                  style={{
                    borderColor: !country
                      ? props?.validationError?.data?.address
                        ? "red"
                        : ""
                      : "",
                  }}
                  value={country}
                />
                {!country ? (
                  props?.validationError?.data?.address ? (
                    <div className="red-alert-message">
                      {`country ${props?.validationError?.data?.address}`}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
                <FormControl
                  placeholder="PostCode"
                  name="postCode"
                  onChange={getAndSetinputValue}
                  style={{
                    borderColor: !postCode
                      ? props?.validationError?.data?.address
                        ? "red"
                        : ""
                      : "",
                  }}
                  value={postCode}
                />
                {!postCode ? (
                  props?.validationError?.data?.address ? (
                    <div className="red-alert-message">
                      {`postCode ${props?.validationError?.data?.address}`}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </Col>
            </Row>
          )}

          <div className="modal-footer">
            <div className="row flex-center" style={{ width: "100%" }}>
              <div className="col-lg-6 text-left">
                <a
                  href="#"
                  className="green-link"
                  onClick={() => props.history.push("/tutor-application-form")}
                >
                  <i className="mdi mdi-chevron-left mr-1"></i>Cancel
                </a>
              </div>
              <div className="col-lg-6 text-right">
                <button className="btn-theme-green" onClick={SaveAndCancel}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    ApplicationFormReducer: { TutorInfoObj, validationError },
  } = state;

  return {
    TutorInfoObj,
    validationError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    AddTutorInfo: (payload) =>
      dispatch(ApplicationFormAction.AddTutorInfo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeForTeach);
