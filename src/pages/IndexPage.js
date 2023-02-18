import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../styles/pages/index.scss";

import explore1 from "../assets/images/explore1.png";
import explore2 from "../assets/images/explore2.png";
import explore3 from "../assets/images/explore3.png";
import explore4 from "../assets/images/explore4.png";

import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.png";
import team6 from "../assets/images/team6.png";
import team7 from "../assets/images/team7.png";

import events1 from "../assets/images/events1.png";
import events2 from "../assets/images/events2.png";
import events3 from "../assets/images/events3.png";

import shield from "../assets/images/shield.svg";
import certificate from "../assets/images/certificate-lg.svg";

import section2Bg1 from "../assets/images/section2-bg1.png";
import section2Bg2 from "../assets/images/section2-bg2.png";
import playIcon from "../assets/images/play-icon.svg";

import Slider from "react-slick";

class IndexPage extends Component {
  state = {
    galleryItems: [1, 2, 3].map((i, index) => (
      <div key={index} className="item">
        <p className="quote">
          A virtual classroom is an online learning environment that allows for
          live interaction between the tutor and the learners asthey are
          participating in learning activitties.
        </p>
        <div className="row">
          <div className="col-3">
            <img alt="" src={team6} alt="" className="img-fluid" />
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    ))
  };

  responsive = {
    0: { items: 1 },
    128: { items: 2 }
  };

  onSlideChange(e) {
    console.debug("Item`s position during a change: ", e.item);
    console.debug("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.debug("Item`s position after changes: ", e.item);
    console.debug("Slide`s position after changes: ", e.slide);
  }
  componentDidMount = () => {
    let user = JSON.parse(localStorage.getItem("userDetail"));
    return user?.token
      ? this.props.history.push("/tutor-dashboard/home")
      : this.props.history.push("/");
  };

  // handleOnDragStart = (e) => e.preventDefault()
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      dots: true,

      centerPadding: "0",
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <section className="explore">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title">Explore ASKADEMIA </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 ">
                <a href="#" className="explore-card-wrapper">
                  <img alt="" src={explore1} alt="" className="img-fluid" />
                  <div className="explore-card">
                    <h3>Tutoring</h3>
                    <p>
                      Highlight your teaching and tutoring experience by
                      featuring them by referring to library sources,
                    </p>
                    <div className="text-right">
                      <button className="btn btn-success">Learn More</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <a href="#" className="explore-card-wrapper">
                  <img alt="" src={explore2} alt="" className="img-fluid" />
                  <div className="explore-card">
                    <h3>Study Centers</h3>
                    <p>
                      Highlight your teaching and tutoring experience by
                      featuring them by referring to library sources,
                    </p>
                    <div className="text-right">
                      <button className="btn btn-success">Learn More</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <a href="#" className="explore-card-wrapper">
                  <img alt="" src={explore3} alt="" className="img-fluid" />
                  <div className="explore-card">
                    <h3>Blogs</h3>
                    <p>
                      Highlight your teaching and tutoring experience by
                      featuring them by referring to library sources,
                    </p>
                    <div className="text-right">
                      <button className="btn btn-success">Learn More</button>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <a href="#" className="explore-card-wrapper">
                  <img alt="" src={explore4} alt="" className="img-fluid" />
                  <div className="explore-card">
                    <h3>Events</h3>
                    <p>
                      Highlight your teaching and tutoring experience by
                      featuring them by referring to library sources,
                    </p>
                    <div className="text-right">
                      <button className="btn btn-success">Learn More</button>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="video">
          <div className="container">
            <div className="image-container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <h2>
                    Providing <br />
                    Online Classroom
                  </h2>
                  <p className="content">
                    A virtual classroom is an online learning environment that
                    allows for live interaction between the tutor and the
                    learners asthey are participating in learning activities.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="video-image-container">
                  <img alt="" src={playIcon} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customer-satisfaction">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div className="left-image-wrapper">
                  <img alt="" src={section2Bg1} alt="" className="img-1" />
                  <img alt="" src={section2Bg2} alt="" className="img-2" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h2 className="section-title">
                  Ensuring Your <br />
                  Full Satisfication
                </h2>
                <p className="content">
                  A virtual classroom is an online learning environment that
                  allows for live interaction between the tutor and the learners
                  asthey are participating in learning activities.
                </p>
                <div className="row icon-wrapper">
                  <div className="col-3">
                    <div className="circle">
                      <img
                        alt=""
                        src={certificate}
                        alt=""
                        className="img-fluid mt-5"
                      />
                    </div>
                  </div>
                  <div className="col-9">
                    <h3>Well Certification</h3>
                    <p>
                      A virtual classroom is an online learning environment that
                      allows for live interaction
                    </p>
                  </div>
                </div>
                <div className="row icon-wrapper">
                  <div className="col-3">
                    <div className="circle">
                      <img alt="" src={shield} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-9">
                    <h3>Well Certification</h3>
                    <p>
                      A virtual classroom is an online learning environment that
                      allows for live interaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tutors">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title">
                  Tutors For <br />
                  Every Kind Of Learner
                </h2>
                <p className="content">
                  Find a tutor in any subject to help you learn more. A virtual
                  classroom is an online learning environment that allows for
                  live interaction between the tutor and the
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team1} alt="" className="img-fluid" />
                  <div className="info-card">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="badge-tutor">Star Tutor</div>
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="badge-tutor-blue">Star Tutor</div>
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team2} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team3} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team4} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team5} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team6} alt="" className="img-fluid" />
                  <div className="info-card">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="badge-tutor">Startutor</div>
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="badge-tutor-blue">Startutor</div>
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team7} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  ">
                <div className="team-wrapper">
                  <img alt="" src={team1} alt="" className="img-fluid" />
                  <div className="info-card">
                    <h3>Thomas K.</h3>
                    <p>SATs and 11+ entrance</p>
                  </div>
                  <div className="overlay">
                    <div className="rating">
                      <i className="mdi mdi-star"></i> 4.9
                    </div>
                    <div className="name">Ezekiel </div>
                    <div className="quali">
                      GCSE &amp; A-level biology curricula
                    </div>
                    <button className="overlay-btn">
                      View Profile <i className="ml-2 mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button className="btn btn-success-outline">
                  View All <i className="mdi mdi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title">
                  Students <br />
                  Saying About Us
                </h2>
                <p className="content">
                  Find a tutor in any subject to help you learn more. A virtual
                  classroom is an online learning environment that allows for
                  live interaction between the tutor and the
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonial">
                  <Slider {...settings} className="testimonial-slider">
                    {[1, 2, 3, 4].map((item, index) => {
                      return (
                        <div key={index}>
                          <p className="quote">
                            A virtual classroom is an online learning
                            environment that allows for live interaction between
                            the tutor and the learners asthey are participating
                            in learning activities.
                          </p>
                          <div className="row">
                            <div className="col-3">
                              <img
                                alt=""
                                src={team6}
                                alt=""
                                className="user-img"
                              />
                            </div>
                            <div className="col-9"></div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title">
                  Upcoming <br />
                  Events &amp; News
                </h2>
                <p className="content">
                  Find a tutor in any subject to help you learn more. A virtual
                  classroom is an online learning environment that allows for
                  live interaction between the tutor.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <a className="card" href="#">
                  <img alt="" src={events1} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Askademia Revision Courses </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="card" href="#">
                  <img alt="" src={events2} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Askademia Revision Courses </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-md-6">
                <a className="card" href="#">
                  <img alt="" src={events3} alt="" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">Askademia Revision Courses </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button className="btn btn-success-outline">
                  View All <i className="mdi mdi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="subscribe">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2 className="section-title">
                  Subscribe For <br />
                  Getting Newsletter
                </h2>
                <p className="content">
                  Find a tutor in any subject to help you learn more. A virtual
                  classroom is an online learning environment that allows for
                  live interaction between the tutor.
                </p>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    <div className="searchbar">
                      <input
                        type="text"
                        placeholder="Enter your email here"
                        className="search-input"
                      />
                      <a href="#" className="search-btn">
                        Subscribe
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(IndexPage);
