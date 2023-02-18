import React from "react";
import { Image } from "react-bootstrap";
export default ({ review, firstName, lastName ,tutorImg}) => {
  var dt = new Date(review.createdAt);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return (
    <div className="profile-div">
      <div className="flex-start-center reply-div">
        <Image
          className="prof-img"
          src={ review.imageUrl
            ? review.imageUrl
            : "https://firebasestorage.googleapis.com/v0/b/askademia-36826.appspot.com/o/no-img.png?alt=media&token=139f8f26-4fa9-4cdf-88d7-a27859180a12"}
          roundedCircle
        />
        <span className="flex-start-center" className="userTxt">
          <h2>James</h2>
          <p className="date-p">{`${
            month[dt.getMonth()]
          } ${dt.getFullYear()}`}</p>
        </span>
        <span className="tag-sub">
          <span>{review.courseTutored.toUpperCase()}</span>
        </span>
      </div>
      <p className="rev-tutor">{review.details}</p>
      {review.response ? (
        <div className="flex-start-center response-tutor">
          <Image
            className="prof-img"
            src={tutorImg}
            roundedCircle
          />
          <span className="flex-start-center" className="userTxt">
            <h2
              style={{ fontSize: "22px" }}
            >{`Response from ${firstName} ${lastName}`}</h2>
            <p style={{ fontSize: "22px" }}> {review.response}</p>
            <p className="date-p">{`${
              month[dt.getMonth()]
            } ${dt.getFullYear()}`}</p>
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
