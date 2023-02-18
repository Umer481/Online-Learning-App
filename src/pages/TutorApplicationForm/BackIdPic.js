import React from "react";
import { Image } from "react-bootstrap";
import card_back from "../../assets/images/id_back.png";
import { Spinner } from "react-bootstrap";

export default ({
  uploadfileManually,
  isActive,
  imageUrl,
  loader,
  iscompletedForm,
}) => {
  return (
    <div className={`id_upload_box ${loader ? "loader-div-show" : ""}`}>
      <div className="id_upload_box_inner">
        {loader ? (
          <Spinner animation="grow" />
        ) : imageUrl ? (
          <div className="image-upload-div">
            <Image src={imageUrl} style={{ width: "100%", height: "100%" }} />
            <span>
              {!iscompletedForm ? (
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={uploadfileManually}
                ></input>
              ) : (
                ""
              )}
            </span>
          </div>
        ) : (
          <div className="button_wrap">
            <div className="id_upload_btn">
              <img src={card_back} />
              <p className="id_type">Add Back Of ID</p>
              <p>JPEG or PNG</p>
              <p>{isActive ? "Release to drop" : "Or Drag them in"}</p>
              {!iscompletedForm ? (
                <input
                  type="file"
                  style={{ cursor: "pointer" }}
                  onChange={uploadfileManually}
                ></input>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
