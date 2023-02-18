import React from "react";
import { Col, DropdownButton, Dropdown, Image } from "react-bootstrap";
export default ({
  itemArray,
  value,
  onToggle,
  show,
  dropdownTitle,
  ishideArrow,
  dropdowndefaultValue,
  style,
  iconPre,
  titleAlign,
  dropdownTitleWithImage,
  disabled,
  onSelect,
}) => {
  return (
    <Col
      lg={12}
      md={12}
      sm={12}
      xs={12}
      style={{
        padding: "0%",
        fontSize: style?.fontSize ? style.fontSize : "",
      }}
    >
      {dropdownTitle ? (
        <div
          className="commonDrop-head flex-between-center"
          style={{
            marginBottom: style?.titleheadMarginBottom
              ? style.titleheadMarginBottom
              : "",
            ...style?.headTitleStyle,
          }}
        >
          <div className="dropdowntitle">{dropdownTitle}</div>
          {dropdownTitleWithImage?.length ? (
            <div className="dropdowntitleimg">
              {dropdownTitleWithImage.map((img) => (
                <Image src={img} />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          height: style?.height ? style.height : "",
          marginBottom: "1rem",
        }}
      >
        <DropdownButton
          id="dropdown-basic-button"
          className={`commonDropdown ${disabled ? "disabled-style" : ""}`}
          show={show}
          disabled={disabled ? disabled : false}
          onToggle={onToggle}
          title={
            <span
              className={`${
                titleAlign === "center"
                  ? "flex-center-center"
                  : "flex-between-center"
              }`}
              style={{ width: "100%" }}
            >
              <div
                style={{
                  fontSize: style?.fontSize ? style?.fontSize : "",
                  color: style?.titleColor,
                }}
                className="flex-center"
              >
                {value?.image ? (
                  <Image src={value?.image} style={{ marginRight: "10px" }} />
                ) : iconPre ? (
                  <Image src={iconPre} style={{ marginRight: "10px" }} />
                ) : (
                  ""
                )}
                {value?.image ? "........" : ""}
                <div
                  style={{
                    paddingTop: "4px",
                  }}
                >
                  {value?.name
                    ? value.name
                    : dropdowndefaultValue
                    ? dropdowndefaultValue
                    : "No Selected"}
                </div>
              </div>
              {!ishideArrow ? (
                <Image
                  style={{ width: "15px" }}
                  src={require("./../../assets/icons/down-arrow.png")}
                />
              ) : (
                ""
              )}
            </span>
          }
        >
          {itemArray && itemArray.length ? (
            itemArray.map((items, index) => {
              return (
                <Dropdown.Item onClick={() => onSelect(items)} key={index}>
                  <div
                    className="flex-center"
                    style={{
                      fontSize: "20px",
                      color: "#878382",
                    }}
                  >
                    {items.image ? (
                      <div
                        style={{
                          border: style?.imageItemBorder
                            ? style.imageItemBorder
                            : "",
                          height: "21px",
                          padding: "0px 5px",
                        }}
                        className="flex-center-center"
                      >
                        <Image src={items.image} />
                      </div>
                    ) : (
                      ""
                    )}
                    {items.image ? (
                      <span
                        style={{
                          paddingBottom: "5px",
                          marginLeft: "15px",
                          marginRight: "10px",
                        }}
                      >
                        ........
                      </span>
                    ) : (
                      ""
                    )}
                    {items.name}
                  </div>
                </Dropdown.Item>
              );
            })
          ) : (
            <Dropdown.Item>No Data</Dropdown.Item>
          )}
        </DropdownButton>
      </div>
    </Col>
  );
};
