import React, { Fragment } from "react";

/** Demo of using instance */
export const InstanceDemo = ({ SW }) => (
  <Fragment>
    <h4>Control from outside component</h4>
    <button className={"btn btn-secondary"} onClick={SW.previousStep}>
      Previous Step
    </button>
    &nbsp;
    <button className={"btn btn-secondary"} onClick={SW.nextStep}>
      Next Step
    </button>
  </Fragment>
);
