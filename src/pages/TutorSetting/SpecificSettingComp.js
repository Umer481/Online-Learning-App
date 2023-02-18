import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import InputComp from "./../../components/InputFieldComponent";
import CommonDropdown from "./../../components/commonDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export let SettingHeader = ({ headerTitle, headerDesciption }) => {
  return (
    <div>
      <h1 style={{ fontSize: "3rem", color: "#000", marginBottom: "35px" }}>
        {headerTitle}
      </h1>
      <div style={{ fontSize: "28px" }}>{headerDesciption}</div>
    </div>
  );
};

export let ShowInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onEdit,
  infoValue,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onEdit}>
            Edit
          </Button>
        ) : (
          ""
        )}
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
        <div className="name-div">{infoValue}</div>
      </Col>
    </div>
  );
};

export let NameEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  firstName,
  lastName,
  onChange,
  onSave,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>
      <Row style={{ margin: "0px" }}>
        <Col lg={6} md={6} sm={12} xs={12} className="flex-between-center">
          <InputComp
            value={firstName}
            name="firstName"
            style={{
              height: "70px",
              fontSize: "27px",
              headTitle: { fontSize: "27px" },
            }}
            InputHeadTitle={"First name"}
            onChange={onChange}
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="flex-between-center">
          <InputComp
            value={lastName}
            name="lastName"
            style={{
              height: "70px",
              fontSize: "27px",
              headTitle: { fontSize: "27px" },
            }}
            InputHeadTitle={"Last name"}
            onChange={onChange}
          />
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
          <Button
            className="green-Button "
            style={{
              fontSize: "27px",
              padding: "10px 38px",
              borderRadius: "5px",
            }}
            onClick={onSave}
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export let GenderEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  onSelectGender,
  onSave,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>

      <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
        <CommonDropdown
          value={{ name: infoValue }}
          itemArray={[{ name: "Male" }, { name: "Female" }, { name: "other" }]}
          style={{
            height: "80px",
            fontSize: "27px",
          }}
          onSelect={onSelectGender}
        />
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </Col>
    </div>
  );
};

export let DobEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  onSelect,
  onSave,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>

      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex-between-center datePicker-Custom-style"
      >
        <DatePicker
          selected={new Date(new Date(infoValue).getTime())}
          onChange={(date) => onSelect(date)}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
        />
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </Col>
    </div>
  );
};

export let EmailEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  onSelect,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>

      <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
        <InputComp
          value={infoValue}
          style={{
            height: "70px",
            fontSize: "27px",
            headTitle: { fontSize: "27px", color: "#495057" },
          }}
          InputHeadTitle={"Use an address you'll always have access to."}
          onChange={() => {}}
        />
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
        >
          Save
        </Button>
      </Col>
    </div>
  );
};

export let PhoneEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  onChange,
  onSave,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>

      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex-between-center"
        style={{ flexDirection: "column" }}
      >
        <InputComp
          value={"United Kingdom (+44)"}
          disabled={true}
          image={require("./../../assets/icons/lock.png")}
          style={{
            height: "70px",
            fontSize: "27px",
            imageheight: "30px",
          }}
        />
        <InputComp
          name="phoneNumber"
          value={infoValue}
          style={{
            height: "70px",
            fontSize: "27px",
          }}
          onChange={onChange}
        />
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
          onClick={onSave}
        >
          Verify
        </Button>
      </Col>
    </div>
  );
};

export let AddressEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  flatSuit,
  address,
  onChange,
  onSave
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
        <div className="name-div">{infoValue}</div>
      </Col>
      <div style={{ marginBottom: "10px" }} />

      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex-start-center"
        style={{ flexDirection: "column" }}
      >
        <InputComp
          InputHeadTitle={"Country / region"}
          value={"United Kingdom"}
          disabled={true}
          image={require("./../../assets/icons/lock.png")}
          style={{
            height: "70px",
            fontSize: "27px",
            imageheight: "30px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
        />
        <div style={{ marginBottom: "20px" }} />
        <InputComp
          InputHeadTitle={"Street address"}
          value={address?.street}
          onChange={onChange}
          name={"street"}
          style={{
            height: "70px",
            fontSize: "27px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
        />
        <div style={{ marginBottom: "20px" }} />
        <InputComp
          InputHeadTitle={"Flat,suit, (optional)"}
          value={address?.suit}
          onChange={onChange}
          name={"suit"}
          style={{
            height: "70px",
            fontSize: "27px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
        />
        <Row style={{ margin: "0px", width: "100%" }}>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ paddingLeft: "0px" }}
          >
            <InputComp
              value={address?.town}
              name={"town"}
              onChange={onChange}
              style={{
                height: "70px",
                fontSize: "27px",
                headTitle: {
                  fontSize: "34px",
                  fontWeight: "500",
                },
              }}
              InputHeadTitle={"City"}
  
            />
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ paddingRight: "0px" }}
          >
            <InputComp
              value={address?.country}
              name={"country"}
              onChange={onChange}
              style={{
                height: "70px",
                fontSize: "27px",
                headTitle: {
                  fontSize: "34px",
                  fontWeight: "500",
                },
              }}
              InputHeadTitle={"Country"}
  
            />
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ paddingLeft: "0px" }}
          >
            <InputComp
              value={address?.postCode}
              name={"postCode"}
              onChange={onChange}
              style={{
                height: "70px",
                fontSize: "27px",
                headTitle: {
                  fontSize: "34px",
                  fontWeight: "500",
                },
              }}
              InputHeadTitle={"Postcode"}
  
            />
          </Col>
        </Row>
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
          onClick={onSave}
        >
          Save
        </Button>
      </Col>
    </div>
  );
};

export let EmergencyEditInfoPanel = ({
  ValueTitle,
  isEditBtnHide,
  onCancel,
  infoValue,
  onSelect,
  emergency,
}) => {
  return (
    <div style={{ width: "100%" }} className="ShowInfoPanel-div">
      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="ShowInfoPanel-col flex-between-center"
        style={{ marginBottom: "10px" }}
      >
        <div className="setting-title-div">{ValueTitle}</div>
        {!isEditBtnHide ? (
          <Button className="green-unfill-btn" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          ""
        )}
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
        <div className="name-div">{infoValue}</div>
      </Col>
      <div style={{ marginBottom: "10px" }} />

      <Col
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="flex-start-center"
        style={{ flexDirection: "column" }}
      >
        <InputComp
          InputHeadTitle={"Name"}
          value={""}
          style={{
            height: "80px",
            fontSize: "27px",
            imageheight: "30px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
        />
        <div style={{ marginBottom: "20px" }} />
        <InputComp
          InputHeadTitle={"Relationship"}
          value={emergency?.relation}
          style={{
            height: "80px",
            fontSize: "27px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
          onChange={() => {}}
        />
        <div style={{ marginBottom: "20px" }} />
        <CommonDropdown
          dropdownTitle="Preferred language"
          value={{ name: "" }}
          itemArray={[]}
          style={{
            height: "80px",
            fontSize: "27px",
            headTitleStyle: {
              fontSize: "34px",
              color: "rgb(0, 0, 0)",
              marginBottom: "30px",
              fontWeight: "500",
            },
          }}
          onSelect={onSelect}
        />
        <div style={{ marginBottom: "70px" }} />
        <InputComp
          InputHeadTitle={"Email"}
          value={emergency?.relation}
          style={{
            height: "80px",
            fontSize: "27px",
            headTitle: {
              fontSize: "34px",
              fontWeight: "500",
            },
          }}
          onChange={() => {}}
        />
        <Row style={{ margin: "0px", width: "100%" }}>
          <Col
            lg={4}
            md={5}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ paddingLeft: "0px" }}
          >
            <CommonDropdown
              dropdownTitle="Country code"
              value={{ name: "" }}
              dropdowndefaultValue={"Choose..."}
              itemArray={[]}
              style={{
                height: "80px",
                fontSize: "27px",
                headTitleStyle: {
                  fontSize: "34px",
                  color: "rgb(0, 0, 0)",
                  marginBottom: "30px",
                  fontWeight: "500",
                },
              }}
              onSelect={onSelect}
            />
          </Col>
          <Col
            lg={8}
            md={7}
            sm={12}
            xs={12}
            className="flex-between-center"
            style={{ paddingRight: "0px" }}
          >
            <InputComp
              value={emergency?.country}
              style={{
                height: "80px",
                fontSize: "27px",
                headTitle: {
                  fontSize: "34px",
                  fontWeight: "500",
                },
              }}
              InputHeadTitle={"Phone number"}
              onChange={() => {}}
            />
          </Col>
        </Row>
      </Col>
      <div style={{ marginBottom: "20px" }} />
      <Col lg={12} md={12} sm={12} xs={12} style={{ marginTop: "10px" }}>
        <Button
          className="green-Button "
          style={{
            fontSize: "27px",
            padding: "10px 38px",
            borderRadius: "5px",
          }}
        >
          Save
        </Button>
      </Col>
    </div>
  );
};
