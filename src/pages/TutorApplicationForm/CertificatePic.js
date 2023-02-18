import React from "react";
import upload_photo from "../../assets/images/photo_up.png";
import { Image } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import { Shake } from "reshake";
import PDFImage from "./../../assets/images/PDFimg.png";

export default ({
  uploadfileManually,
  isActive,
  imageUrl,
  loader,
  shakeActive,
  files,
  uploadedImage,
  iscompletedForm,
}) => {
  return (
    <Shake
      h={5}
      v={5}
      r={3}
      dur={300}
      int={10}
      max={100}
      fixed={true}
      active={shakeActive}
    >
      <div className={`file_upload_box ${loader ? "loader-div-show" : ""}`}>
        <div className="file_upload_box_inner">
          {loader ? (
            <Spinner animation="grow" />
          ) : imageUrl ? (
            <div
              className="image-upload-div flex-center-center"
              style={{ flexDirection: "column" }}
            >
              <Image src={PDFImage} style={{ height: "100%" }} />
              <span>
                {!iscompletedForm ? (
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={uploadfileManually}
                    title=""
                  ></input>
                ) : (
                  ""
                )}
              </span>
              <div
                className="flex-center-center"
                style={{
                  fontSize: "23px",
                  background: "#efefef",
                  width: "100%",
                }}
              >
                {!iscompletedForm
                  ? files.length && files[0].type === "application/pdf"
                    ? files[0].name
                    : uploadedImage?.name
                    ? uploadedImage?.name
                    : ""
                  : ""}
              </div>
            </div>
          ) : (
            <div className="button_wrap">
              <div className="upload_photo_btn">
                <span className="upload-txt">
                  {" "}
                  <img src={upload_photo} /> Upload PDF
                </span>
                <span style={{ opacity: "0" }}>
                  {!iscompletedForm ? (
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={uploadfileManually}
                      title=""
                    ></input>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <p>{isActive ? "Release to drop" : "Or Drag them in"}</p>
            </div>
          )}
        </div>
      </div>
    </Shake>
  );
};
