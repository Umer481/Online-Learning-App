import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({
  component: C,
  token,
  props: cProps,
  showAlert,
  changeRoute,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <C {...props} changeRoute={changeRoute} />
        ) : (
          (showAlert ? showAlert() : "", (<Redirect to="/" />))
        )
      }
    />
  );
};
