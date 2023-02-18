import React from "react";
import {
  Col,
  FormControl,
  InputGroup,
  FormGroup,
  Image,
} from "react-bootstrap";

export default ({
  style,
  InputHeadTitle,
  onChange,
  placeholder,
  disabled,
  name,
  value,
  type,
  image,
}) => {
  return (
    <Col lg={12} md={12} sm={12} xs={12} style={{ padding: "0%" }}>
      {InputHeadTitle ? (
        <div
          style={{
            fontSize: style?.headTitle?.fontSize
              ? style?.headTitle?.fontSize
              : "24px",
            color: style?.headTitle?.color ? style?.headTitle?.color : "#000",
            marginBottom: "30px",
            fontWeight: style?.headTitle?.fontWeight
              ? style?.headTitle?.fontWeight
              : "",
          }}
        >
          {InputHeadTitle}
        </div>
      ) : null}

      <FormGroup
        controlId="search"
        className={`${disabled ? "disabled-input-field" : ""} form_search`}
      >
        <InputGroup
          style={{ border: "0.08em solid #eaeaea", borderRadius: "7px" }}
        >
          <FormControl
            style={style}
            type={type}
            placeholder={placeholder ? placeholder : ""}
            value={value}
            name={name}
            onChange={(e) => onChange(e)}
            disabled={disabled}
          />
          {image ? (
            <InputGroup.Append
              style={{
                background: "none",
                border: "none",
                padding: "0 3px",
              }}
              className="flex-center-center"
            >
              <Image
                style={{
                  height: style?.imageheight ? style.imageheight : "20px",
                  marginRight: "5px",
                  marginLeft: "5px",
                }}
                src={image}
              />
            </InputGroup.Append>
          ) : null}
        </InputGroup>
      </FormGroup>
    </Col>
  );
};
