import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import InputField from "../../components/InputFieldComponent";
import { SettingHeader } from "./../TutorSetting/SpecificSettingComp";
class ChangePasswordSetting extends Component {
  render() {
    return (
      <div>
        <div style={{ marginBottom: "100px" }} />

        <Row className="flex-center-center ">
          <Col lg={8} md={10} sm={12} xs={12}>
            <SettingHeader
              headerTitle={"Change password"}
              headerDesciption={
                "Choose a unique password to protect your account"
              }
            />
            <div style={{ marginBottom: "40px" }} />

            <hr />

            <InputField
              InputHeadTitle={"Type your current password"}
              type="password"
              onChange={() => {}}
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "80px",
                borderRadius: "10px",
                headTitle: {
                  fontSize: "30px",
                  fontWeight: "500",
                },
              }}
            />
            <hr />
            <InputField
              InputHeadTitle={"Type your new password"}
              type="password"
              onChange={() => {}}
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "80px",
                borderRadius: "10px",
                headTitle: {
                  fontSize: "30px",
                  fontWeight: "500",
                },
              }}
            />
            <hr />

            <InputField
              InputHeadTitle={"Re-type your new password"}
              type="password"
              onChange={() => {}}
              style={{
                border: "1px solid #eaeaea",
                outline: "none",
                boxShadow: "none",
                height: "80px",
                borderRadius: "10px",
                headTitle: {
                  fontSize: "30px",
                  fontWeight: "500",
                },
              }}
            />
            <div style={{ marginBottom: "40px" }} />

            <Button
              style={{ height: "61px", fontSize: "30px" }}
              className="green-Button"
            >
              Update password
            </Button>
            <div style={{ marginBottom: "40px" }} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChangePasswordSetting;
