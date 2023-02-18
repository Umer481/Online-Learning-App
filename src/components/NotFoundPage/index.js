import React from "react";
import sadface from "./../../assets/icons/sadface.png";
import Arrow from "./../../assets/icons/next-blue.png";
import Header from "./../../components/layout/Header";
import NavbarAfterLogin from "./../modals/NavbarAfterLogin";
import { Image, Row, Col } from "react-bootstrap";

export default ({ props }) => {
  const sucssesLogin = (data) => {
    localStorage.setItem("userDetail", JSON?.stringify(data.data));
  };

  const changeRoute = () => {
    localStorage.clear();
  };

  const token = localStorage.getItem("FBIdToken");
  return (
    <div>
      {!token ? (
        <Header notFoundPage={true} sucssesLogin={sucssesLogin} />
      ) : (
        <NavbarAfterLogin changeRoute={changeRoute} {...props} />
      )}
      <div
        className="flex-center-center"
        style={{ flexDirection: "column", height: "500px" }}
      >
        <Image src={sadface} style={{ marginBottom: "40px" }} />
        <Row style={{ width: "100%" }} className="flex-center-center">
          <Col lg={6} md={8} sm={12} xs={12} className="flex-center-center">
            <h1
              className="circularStd"
              style={{
                color: "#000",
                textAlign: "center",
                fontSize: "2.7rem",
              }}
            >
              The page you're looking for can't be found
            </h1>
          </Col>
        </Row>
        <div
          style={{
            fontWeight: "500",
            color: "#48a0cb",
            marginTop: "10px",
            cursor: "pointer",
            fontSize: "17px",
          }}
          onClick={props.history.goBack}
        >
          Go To homepage <Image src={Arrow} style={{ width: "16px" }} />
        </div>
      </div>
    </div>
  );
};
