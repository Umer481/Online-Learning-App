import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { WizardSteps } from "./WizardSteps";
import { Nextsteps } from "./NextStep";

export const Eight = (props) => {
  const validate = () => {
    if (window.confirm("Are you sure you want to go back?")) {
      // eslint-disable-line
      props.previousStep();
    }
  };

  const [state, updateState] = useState({
    accountHolderName: "",
    bankAccountShortCode: "",
    accountNumber: "",
    reAccountNumber: "",
    matchMessage: "",
  });

  useEffect(() => {
    let { accountHolderName, bankAccountShortCode, accountNumber } = state;
    let TutorInfoObj = props?.TutorInfoObj ? props?.TutorInfoObj : {};
    accountHolderName = TutorInfoObj?.step8?.accountHolderName;
    bankAccountShortCode = TutorInfoObj?.step8?.bankAccountShortCode;
    accountNumber = TutorInfoObj?.step8?.accountNumber;

    updateState((state) => ({
      ...state,
      accountHolderName,
      bankAccountShortCode,
      accountNumber,
      reAccountNumber: accountNumber,
    }));
    if (props.funcStatus === "loading..." && props.currentStep === 8) {
      submitStep8Info(true);
    }
  }, [props]);

  // step8: {
  //   accountHolderName: "Tawheed Raheem",
  //   bankAccountShortCode: "XDFK",
  //   accountNumber: "1234567",
  // },

  const submitStep8Info = (isCallApi) => {
    const {
      accountHolderName,
      bankAccountShortCode,
      accountNumber,
      reAccountNumber,
    } = state;
    const { TutorInfoObj } = props;

    let step8 = {
      accountHolderName,
      bankAccountShortCode,
      accountNumber,
    };
    TutorInfoObj.step8 = step8;
    props.AddTutorInfo(TutorInfoObj);
    return isCallApi ? props.AddTutorInfoStepBeforeCallApi("done") : null;

    // if (
    //   accountHolderName &&
    //   bankAccountShortCode &&
    //   accountNumber &&
    //   accountNumber === reAccountNumber
    // ) {
    //   TutorInfoObj.step8 = step8;
    //   props.AddTutorInfo(TutorInfoObj);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  const matchReAccount = (e) => {
    const { accountNumber } = state;
    if (e.target.value) {
      updateState({
        ...state,
        reAccountNumber: e.target.value,
        matchMessage:
          accountNumber === e.target.value
            ? "match account number"
            : "unmatch account number",
      });
    } else {
      updateState({
        ...state,
        reAccountNumber: "",
        matchMessage: "",
      });
    }
  };
  const {
    accountHolderName,
    bankAccountShortCode,
    accountNumber,
    reAccountNumber,
    matchMessage,
  } = state;
  const { iscompletedForm } = props;
  return (
    <Row>
      <Col lg={12} md={12} sm={12} xs={12}>
        <WizardSteps step={8} {...props} previousStep={validate} />
        <div className="row">
          <div className="col-lg-9 subject-mode Account-detail">
            <h3 className="step-title">
              Add bank account information for payments to you
            </h3>
            <p className="account_detail_para grey-txt-bold">
              This needs to be a UK Bank account with a UK billing address. You
              can change these details at any point, by entering your new
              details in the fields below.
            </p>
            <span className="label">Account name</span>
            <input
              disabled={!iscompletedForm ? false : true}
              style={{
                borderColor: !accountHolderName
                  ? props?.validationError?.data?.accountHolderName
                    ? "red"
                    : ""
                  : "",
              }}
              type="text"
              className="form-control mb-3 account_detail_input"
              placeholder="Account holder name"
              value={accountHolderName}
              onChange={(e) =>
                updateState({
                  ...state,
                  accountHolderName: e.target.value,
                })
              }
            />
            {!accountHolderName ? (
              props?.validationError?.data?.accountHolderName ? (
                <div className="red-alert-message">
                  {props?.validationError?.data?.accountHolderName}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <div className="row mb-3">
              <div className="col-lg-6">
                <span className="label">Bank account sort code</span>
                <input
                  disabled={!iscompletedForm ? false : true}
                  style={{
                    borderColor: !bankAccountShortCode
                      ? props?.validationError?.data?.bankAccountShortCode
                        ? "red"
                        : ""
                      : "",
                  }}
                  className="form-control account_detail_input"
                  placeholder="e.g 123456"
                  value={bankAccountShortCode}
                  onChange={(e) =>
                    updateState({
                      ...state,
                      bankAccountShortCode: e.target.value,
                    })
                  }
                />
                {!bankAccountShortCode ? (
                  props?.validationError?.data?.bankAccountShortCode ? (
                    <div className="red-alert-message">
                      {props?.validationError?.data?.bankAccountShortCode}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="col-lg-6">
                <span className="label">Account number</span>
                <input
                  disabled={!iscompletedForm ? false : true}
                  style={{
                    borderColor: !accountNumber
                      ? props?.validationError?.data?.accountNumber
                        ? "red"
                        : ""
                      : "",
                  }}
                  type="number"
                  className="form-control account_detail_input"
                  placeholder="e.g 123456"
                  value={accountNumber}
                  onChange={(e) =>
                    updateState({
                      ...state,
                      accountNumber: e.target.value,
                    })
                  }
                />
                {!accountNumber ? (
                  props?.validationError?.data?.accountNumber ? (
                    <div className="red-alert-message">
                      {props?.validationError?.data?.accountNumber}
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <span className="label">Confirm account number</span>
            <input
              disabled={!iscompletedForm ? false : true}
              type="number"
              className="form-control account_detail_input lastinput-field"
              placeholder="Retype account number"
              value={reAccountNumber}
              onChange={(e) => matchReAccount(e)}
              style={{
                borderColor:
                  !matchMessage === "match account number"
                    ? props?.validationError?.data?.accountNumber
                      ? "red"
                      : ""
                    : "",
              }}
            />
            {matchMessage ? (
              <span
                style={{
                  color: !(matchMessage === "match account number")
                    ? "red"
                    : "green",
                }}
              >
                {matchMessage}
              </span>
            ) : !reAccountNumber ? (
              props?.validationError?.data?.accountNumber ? (
                <div className="red-alert-message">
                  {`Confirm ${props?.validationError?.data?.accountNumber}`}
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <Nextsteps step={8} {...props} submitStepInRedux={submitStep8Info} />
      </Col>
    </Row>
  );
};
