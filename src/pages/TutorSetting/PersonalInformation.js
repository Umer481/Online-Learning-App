import React, { Component } from "react";
import {
  SettingHeader,
  ShowInfoPanel,
  NameEditInfoPanel,
  GenderEditInfoPanel,
  DobEditInfoPanel,
  EmailEditInfoPanel,
  PhoneEditInfoPanel,
  AddressEditInfoPanel,
  EmergencyEditInfoPanel,
} from "./../TutorSetting/SpecificSettingComp";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getLangLat,
  updateTutorSettings,
  getSetting,
} from "./../../apis/tutors";
import { TutorSettingAction } from "./../../redux/actions";

class PersonalInformation extends Component {
  constructor() {
    super();

    this.state = {
      panel: "",
      tutorSettingDataState: {},
    };
  }

  componentDidMount = () => {
    const { tutorSettingData } = this.props;

    this.setState({
      tutorSettingDataState: tutorSettingData,
    });
  };

  componentDidUpdate = () => {
    const { tutorSettingData } = this.props;
    const { tutorSettingDataState } = this.state;
    if (
      !tutorSettingDataState?.tutorDetails &&
      tutorSettingData?.tutorDetails
    ) {
      this.setState({
        tutorSettingDataState: { ...tutorSettingData },
      });
    }
  };
  CancelPanel = () => {
    const { tutorSettingData } = this.props;
    this.setState({
      tutorSettingDataState: { ...tutorSettingData },
      panel: "",
    });
  };
  onSave = () => {
    this.setState({
      panel: "",
    });
  };
  getLanlatThenSave = () => {
    let { tutorSettingDataState } = this.state;
    getLangLat(
      `${tutorSettingDataState.tutorDetails.address.street} ${tutorSettingDataState.tutorDetails.address.town} ${tutorSettingDataState.tutorDetails.address.country} ${tutorSettingDataState.tutorDetails.address.postCode}`
    )
      .then((res) => {
        tutorSettingDataState.tutorDetails.addressLatLng._latitude =
          res.results[0].locations[0].latLng.lat;
        tutorSettingDataState.tutorDetails.addressLatLng._longitude =
          res.results[0].locations[0].latLng.lng;
        this.setState({
          tutorSettingDataState,
          panel: "",
        });
      })
      .catch((err) => console.log(err));
  };
  onUpdateTutorSettings = () => {
    const { tutorSettingDataState } = this.state;
    let user = JSON.parse(localStorage.getItem("userDetail"));
    let user_id = user.user.userId;
    let updateSettingParam = {
      updateSetting: tutorSettingDataState,
    };
    updateTutorSettings(updateSettingParam)
      .then((res) => {
        getSetting({ user_id })
          .then((res) => {
            this.props.TutorSettingStoreData(res.data);
            this.setState({
              tutorSettingDataState: {},
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err, "==="));
  };

  render() {
    let monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const { tutorSettingDataState, panel } = this.state;
    let dob = new Date(tutorSettingDataState?.dob?._seconds);
    let date = dob?.getDate();
    let month = monthArray[dob?.getMonth()];
    let year = dob?.getFullYear();

    return (
      <div>
        <div style={{ marginBottom: "100px" }} />

        <Row className="flex-center-center ">
          <Col lg={8} md={10} sm={12} xs={12}>
            <SettingHeader
              headerTitle={"Personal information"}
              headerDesciption={
                "Members of Askademia do not see these details we only share contact details with parents or student after a lesson is confirmed"
              }
            />
            <div style={{ marginBottom: "50px" }} />
            {panel === "name" ? (
              <NameEditInfoPanel
                ValueTitle={"Legal name"}
                firstName={`${
                  tutorSettingDataState?.firstName
                    ? tutorSettingDataState?.firstName
                    : ""
                }`}
                lastName={`${
                  tutorSettingDataState?.lastName
                    ? tutorSettingDataState?.lastName
                    : ""
                }`}
                onChange={(e) => {
                  tutorSettingDataState[e.target.name] = e.target.value;
                  this.setState({
                    tutorSettingDataState,
                  });
                }}
                onCancel={this.CancelPanel}
                onSave={this.onSave}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Legal name"}
                infoValue={`${tutorSettingDataState?.firstName} ${tutorSettingDataState?.lastName}`}
                onEdit={() =>
                  this.setState({
                    panel: "name",
                  })
                }
              />
            )}
            {panel === "gender" ? (
              <GenderEditInfoPanel
                ValueTitle={"Gender"}
                infoValue={
                  tutorSettingDataState?.gender
                    ? tutorSettingDataState?.gender
                    : ""
                }
                onSave={this.onSave}
                onSelectGender={(e) => {
                  tutorSettingDataState.gender = e.name;
                  this.setState({
                    tutorSettingDataState,
                  });
                }}
                onCancel={this.CancelPanel}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Gender"}
                infoValue={
                  tutorSettingDataState?.gender
                    ? tutorSettingDataState?.gender
                    : ""
                }
                onEdit={() =>
                  this.setState({
                    panel: "gender",
                  })
                }
              />
            )}

            {panel === "dob" ? (
              <DobEditInfoPanel
                ValueTitle={"Date of birth"}
                infoValue={tutorSettingDataState?.dob?._seconds}
                onSelect={(e) => {
                  tutorSettingDataState.dob._seconds = new Date(e).getTime();
                  this.setState({
                    tutorSettingDataState,
                  });
                }}
                onCancel={this.CancelPanel}
                onSave={this.onSave}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Date of birth"}
                infoValue={
                  tutorSettingDataState?.dob?._seconds
                    ? `${date} ${month} ${year}`
                    : ""
                }
                onEdit={() =>
                  this.setState({
                    panel: "dob",
                  })
                }
              />
            )}
            {panel === "email" ? (
              <EmailEditInfoPanel
                ValueTitle={"Email address"}
                infoValue={"abc@gmail.com"}
                onChange={() => {}}
                onCancel={this.CancelPanel}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Email address"}
                infoValue={"abc@gmail.com"}
                onEdit={() =>
                  this.setState({
                    panel: "email",
                  })
                }
              />
            )}

            {panel === "phone" ? (
              <PhoneEditInfoPanel
                ValueTitle={"Phone Number"}
                infoValue={
                  tutorSettingDataState?.phoneNumber
                    ? tutorSettingDataState?.phoneNumber
                    : ""
                }
                onChange={(e) => {
                  tutorSettingDataState[e.target.name] = e.target.value;
                  this.setState({
                    tutorSettingDataState,
                  });
                }}
                onCancel={this.CancelPanel}
                onSave={this.onSave}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Phone Number"}
                infoValue={
                  tutorSettingDataState?.phoneNumber
                    ? tutorSettingDataState?.phoneNumber
                    : ""
                }
                onEdit={() =>
                  this.setState({
                    panel: "phone",
                  })
                }
              />
            )}
            {panel === "address" ? (
              <AddressEditInfoPanel
                ValueTitle={"Address"}
                infoValue={"Use a permanent address where you can recive mail."}
                address={
                  tutorSettingDataState?.tutorDetails?.address
                    ? tutorSettingDataState.tutorDetails?.address
                    : ""
                }
                onChange={(e) => {
                  tutorSettingDataState["tutorDetails"]["address"][
                    e.target.name
                  ] = e.target.value;
                  tutorSettingDataState.tutorDetails.addressRaw = `${tutorSettingDataState.tutorDetails.address.street} ${tutorSettingDataState.tutorDetails.address.town} ${tutorSettingDataState.tutorDetails.address.country} ${tutorSettingDataState.tutorDetails.address.postCode}`;
                  this.setState({
                    tutorSettingDataState,
                  });
                }}
                onCancel={this.CancelPanel}
                onSave={this.getLanlatThenSave}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Address"}
                infoValue={
                  tutorSettingDataState?.tutorDetails?.addressRaw
                    ? tutorSettingDataState.tutorDetails?.addressRaw
                    : ""
                }
                onEdit={() =>
                  this.setState({
                    panel: "address",
                  })
                }
              />
            )}
            {panel === "emergency" ? (
              <EmergencyEditInfoPanel
                ValueTitle={"Emergency contact"}
                infoValue={
                  "A trusted contact we can alert in an urgent situation."
                }
                address={
                  tutorSettingDataState?.tutorDetails?.emergency
                    ? tutorSettingDataState.tutorDetails?.emergency
                    : ""
                }
                onSelect={() => {}}
                onCancel={this.CancelPanel}
              />
            ) : (
              <ShowInfoPanel
                ValueTitle={"Emergency contact"}
                infoValue={"Not provided"}
                onEdit={() =>
                  this.setState({
                    panel: "emergency",
                  })
                }
              />
            )}

            <hr />
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="flex-end-center"
              style={{ marginBottom: "40px" }}
            >
              <Button
                className="green-Button"
                style={{ padding: "10px 30px", fontSize: "25px" }}
                onClick={this.onUpdateTutorSettings}
              >
                Update
              </Button>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    TutorSettingReducer: { tutorSettingData },
  } = state;

  return {
    tutorSettingData,
  };
};
const mapDispatchToprops = (dispatch) => {
  return {
    TutorSettingStoreData: (payload) =>
      dispatch(TutorSettingAction.TutorSettingStoreData(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(PersonalInformation);
