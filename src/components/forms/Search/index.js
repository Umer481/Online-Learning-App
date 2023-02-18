import React from "react";
import {
  Col,
  Image,
  FormGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";

export const SearchComponent = ({ handleChange, searchValue }) => {
  return (
    <div>
      <Col lg={12} md={12} sm={12} xs={12} style={{ padding: "0" }}>
        <FormGroup controlId="search" className="form_search">
          <InputGroup
            style={{ border: "0.08em solid #eaeaea", borderRadius: "7px" }}
          >
            <FormControl
              type="text"
              value={searchValue}
              placeholder="Search review"
              style={{
                border: "none",
                outline: "none",
                height: "55px",
                fontSize: "20px",
              }}
              onChange={(e) => handleChange(e.target.value)}
            />
            <InputGroup.Append
              style={{
                background: "none",
                border: "none",
                padding: "0 3px",
                height: "55px",
              }}
              className="flex-center-center"
            >
              <Image
                style={{
                  height: "25px",
                  marginRight: "5px",
                  marginLeft: "5px",
                }}
                src={require("./../../../assets/icons/search.png")}
              />
            </InputGroup.Append>
          </InputGroup>
        </FormGroup>
      </Col>
    </div>
  );
};
