import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import logoImg from "../../assets/images/logo.png";
import fb from "./../../assets/icons/facebook.png";
import insta from "./../../assets/icons/instagram.png";
import twitter from "./../../assets/icons/twitter.png";
import linkdin from "./../../assets/icons/linkedin (1).png";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <h3>Askademia</h3>
                <ul class="footer-links">
                  <li>
                    <a routerLink="/about">About</a>
                  </li>
                  <li>
                    <a routerLink="/profile">Profile</a>
                  </li>
                  <li>
                    <a routerLink="/login">Login</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Policies</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Volunteer</a>
                  </li>
                  <li>
                    <a href="#">Diversity and belonging</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <h3>Discover</h3>
                <ul class="footer-links">
                  <li>
                    <a href="#">Trust and safety</a>
                  </li>
                  <li>
                    <a href="#">Enrichment</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <h3>Tutoring</h3>
                <ul class="footer-links">
                  <li>
                    <a href="#">Why tutor</a>
                  </li>
                  <li>
                    <a href="#">Responsible tutoring</a>
                  </li>
                  <li>
                    <a href="#">Tution centres</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3">
                <h3>Social</h3>
                <ul class="footer-links">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Site Map</a>
                  </li>
                </ul>
                <div style={{ marginTop: "20px" }}>
                  <Image style={{ marginRight: "5px" }} src={fb} />
                  <Image style={{ margin: "0px 5px" }} src={insta} />
                  <Image style={{ margin: "0px 5px" }} src={twitter} />
                  <Image style={{ margin: "0px 5px" }} src={linkdin} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="container">
            <div class="d-flex align-items-center">
              <img src={logoImg} alt="" class="img-fluid footer-logo" />
              <p>&copy; 2020 Askademia . All Rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Footer);
