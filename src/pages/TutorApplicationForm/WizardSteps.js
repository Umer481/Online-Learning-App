import React from "react";
import { Col, Row } from "react-bootstrap";

export const WizardSteps = ({ firstStep, goToStep, lastStep, currentStep }) => (
  <Row>
    <Col lg={12} md={12} sm={12} xs={12} className="flex-center steps-style">
      <button
        onClick={firstStep}
        className={currentStep === 1 ? "btn-green active_tab" : "btn-green"}
      >
        Subjects & mode
      </button>
      <button
        className={currentStep === 2 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(2)}
      >
        Skillset
      </button>
      <button
        className={currentStep === 3 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(3)}
      >
        Bio
      </button>
      <button
        className={currentStep === 4 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(4)}
      >
        Profile Picture
      </button>
      <button
        className={currentStep === 5 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(5)}
      >
        Work & Education
      </button>
      <button
        className={currentStep === 6 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(6)}
      >
        Rates
      </button>
      <button
        className={currentStep === 7 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(7)}
      >
        Background & Identity Check
      </button>
      <button
        className={currentStep === 8 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(8)}
      >
        Account Details
      </button>
      <button
        className={currentStep === 9 ? "btn-green active_tab" : "btn-green"}
        onClick={() => goToStep(9)}
      >
        Review and submit
      </button>
    </Col>
  </Row>
);
