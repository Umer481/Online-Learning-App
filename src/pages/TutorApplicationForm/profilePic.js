import React from "react";
import upload_photo from "../../assets/images/photo_up.png";
import { Image } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
export default ({
  uploadfileManually,
  isActive,
  files,
  imageUrl,
  loader,
  iscompletedForm,
}) => {
  return (
    <div className={`pic_upload_box ${loader ? "loader-div-show" : ""}`}>
      {imageUrl ? (
        <div className="image-upload-div">
          <Image src={imageUrl} style={{ width: "100%", height: "100%" }} />
          <span>
            {!iscompletedForm ? (
              <input type="file" onChange={uploadfileManually}></input>
            ) : (
              ""
            )}
          </span>
        </div>
      ) : (
        <div className="upload_box_inner">
          {loader ? (
            <Spinner animation="grow" />
          ) : (
            <div className="button_wrap">
              <div className="upload_photo_btn">
                <span className="upload-txt">
                  {" "}
                  <img src={upload_photo} /> Upload photo
                </span>
                <span style={{ opacity: "0" }}>
                  {!iscompletedForm ? (
                    <input type="file" onChange={uploadfileManually}></input>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <p>{isActive ? "Release to drop" : "Or Drag them in"}</p>
              <p>{files?.length ? files[0].name : ""}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
