import React, { Component } from "react";
import { Button } from "react-bootstrap";

class StudentDashboardPage extends Component {
  LogOut = () => {
    localStorage.clear();
    this.props.changeRoute();
    setTimeout(() => {
      this.props.history.push("/");
    }, 1000);
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
        >
          <Button onClick={this.LogOut}>Logout</Button>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "500px",
          }}
        >
          <h1>Student Dashboard Page</h1>
        </div>
      </div>
    );
  }
}

export default StudentDashboardPage;
