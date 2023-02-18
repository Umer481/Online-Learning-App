import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
export default ({scale}) => {
  return (
    scale.communication?
    <Row className="tutor-progress-Row">
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col">
        <span className="title-span">Communication</span>
        <div className="progress-div">
          <ProgressBar now={scale?.communication} />
        </div>
        <span className="rate-span">{(scale?.communication/100)*5}.0</span>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col-odd">
        <span className="title-span">Interaction</span>
        <div className="progress-div">
          <ProgressBar now={scale?.interaction} />
        </div>
        <span className="rate-span">{(scale?.interaction/100)*5}.0</span>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col">
        <span className="title-span">Teaching style</span>
        <div className="progress-div">
          <ProgressBar now={scale?.teachingStyle} />
        </div>
        <span className="rate-span">{(scale?.teachingStyle/100)*5}.0</span>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col-odd">
        <span className="title-span">Knowledge</span>
        <div className="progress-div">
          <ProgressBar now={scale?.knowledge} />
        </div>
        <span className="rate-span">{(scale?.knowledge/100)*5}.0</span>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col">
        <span className="title-span">Content</span>
        <div className="progress-div">
          <ProgressBar now={scale?.content} />
        </div>
        <span className="rate-span">{(scale?.content/100)*5}.0</span>
      </Col>
      <Col lg={6} md={12} sm={12} xs={12} className="progress-col-odd">
        <span className="title-span">Timelines</span>
        <div className="progress-div">
          <ProgressBar now={scale?.timeliness} />
        </div>
        <span className="rate-span">{(scale?.timeliness/100)*5}.0</span>
      </Col>
    </Row>:<h3 className="flex-center-center">No Review</h3>
  );
};
