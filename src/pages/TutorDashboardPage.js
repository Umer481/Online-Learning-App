import React, { Component } from "react";
import Lesson from "./TutorLesson";
import Inbox from "./TutorInbox";
import Availability from "../pages/TutorAvailability";
import Dashboard from "./TutorDashboard";
import { Route } from "react-router-dom";

class TutorDashboardPage extends Component {

  render() {
    return (
      <div>
        <Route
          path={this.props.match.path}
          render={(props) => (
            <div>
              <Route
                exact
                path={this.props.match.path + '/lesson'}
                render={(props) => <Lesson {...props} />}
              />
              <Route
                exact
                path={`${this.props.match.path}/availability`}
                render={(props) => <Availability {...props} />}
              />
              <Route
                exact
                path={`${this.props.match.path}/inbox`}
                render={(props) => <Inbox {...props} />}
              />
              <Route
                exact
                path={`${this.props.match.path}/home`}
                render={(props) => <Dashboard {...props} />}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default TutorDashboardPage;
