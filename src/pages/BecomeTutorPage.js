import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Accordion, Card, Collapse } from "react-bootstrap";

import "../styles/pages/becometutor.scss";

import bookImg from "../assets/images/book.svg";
import boardImg from "../assets/images/book.svg";
import studentImg from "../assets/images/student.svg";
import feedbackImg from "../assets/images/feedback.svg";
import testimonialUser from "../assets/images/testimonial-user.png";
import tickImg from "../assets/images/tick.svg";
import midBgImg from "../assets/images/mid-bg.png";
import t1Img from "../assets/images/t1.png";
import t2Img from "../assets/images/t2.png";
import t3Img from "../assets/images/t3.png";
import tbottom from "../assets/images/t-bottom.png";
import bannerbg from "../assets/images/banner-bg.png";

class BecomeTutorPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open0: false,
      open1: true,
      open2: true,
      open3: true,
      open4: true
    };
  }
  componentDidMount() {
    document.body.classList.add("inner");
  }

  componentWillUnmount() {
    document.body.classList.remove("inner");
  }
  render() {
    const { open0 } = this.state;
    const { open1 } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    const { open4 } = this.state;
    return (
      <div>
        <section
          className="bg-wrapper"
          style={{
            backgroundImage:
              "linear-gradient(150deg,transparent 15%,transparent 70%,transparent 94%), url(" +
              bannerbg +
              ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="banner-card-wrapper">
              <div className="banner-card">
                <div className="banner-header">
                  <h3 className="title">Lorem ipsum doler sit amet</h3>
                </div>
                <div className="card-body">
                  <label>Nullam</label>
                  <div className="form-group row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="constetuor"
                      />
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="custom-select"
                        placeholder="Your Level"
                      >
                        <option>Your Level</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                  <div className="price">
                    <span>£1148</span> per month{" "}
                    <i className="mdi mdi-help-circle-outline"></i>
                  </div>
                  <button className="btn-block">Gev nullam</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tutor-intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 left-section">
                <h3 className="title">Usu ea urbanitas &amp;</h3>
                <div className="text-wrapper">
                  <p className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad. Vim id quot quando, cum ne hinc aliquam
                    commune, mel an possit quaerendum ullamcorper. Ne suas
                    tibique officiis vix,{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 right-section">
                <h3 className="title">
                  Per nullam scripserit conclusionemque{" "}
                </h3>
                <div className="text-wrapper">
                  <div className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad. Vim id quot quando, cum ne hinc aliquam
                    commune, mel an possit quaerendum ullamcorper. Ne suas
                    tibique officiis vix,
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="card-holder">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">In nec quas 4 squam</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <a className="tutor-card" href="#">
                  <img src={bookImg} alt="" className="image" />
                  <div className="title">Lorem ipsum dolor sit amet</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a className="tutor-card" href="#">
                  <img src={boardImg} alt="" className="image" />
                  <div className="title">Lorem ipsum dolor sit amet</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a className="tutor-card" href="#">
                  <img src={studentImg} alt="" className="image" />
                  <div className="title">Lorem ipsum dolor sit amet</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                </a>
              </div>
              <div className="col-lg-3">
                <a className="tutor-card" href="#">
                  <img src={feedbackImg} alt="" className="image" />
                  <div className="title">Lorem ipsum dolor sit amet</div>
                  <div className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-holder">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="testimonial-wrapper">
                  <div className="testimonial-text">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                  <div className="name">Causae inermis honestatis</div>
                  <button className="btn-outline">Ne suas tibique</button>
                </div>
              </div>
              <div className="col-lg-5  offset-lg-1">
                <img src={testimonialUser} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Quas nusquam</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <p className="desc">
                  Lorem ipsum dolor sit amet, qui ex velit scaevola percipitur,
                  cum alienum verterem in, sit liber iusto convenire ad. Vim id
                  quot quando, cum ne hinc aliquam commune, an possit quaerendum
                  ullamcorper. Vim id quot quando, cum ne hinc aliquam commu mel
                  an possit quaerendum ullamcorper. aliquam commune, mel an
                  possit quaerend ullamcorper. Vim id quot quando, cum ne
                  aliquam commune, mel an possit quaerend ullamcorper.
                </p>
                <a href="#" className="text-link">
                  Nec quas nusquam efficiantu
                </a>
              </div>
              <div className="col-lg-6 offset-lg-2">
                <ul className="ticklist">
                  <li>
                    <img src={tickImg} alt="" className="tick" /> Amet a refence
                  </li>
                  <li>
                    <img src={tickImg} alt="" className="tick" />
                    Vim id quot du be hinc aliquam commune
                  </li>
                  <li>
                    <img src={tickImg} alt="" className="tick" />
                    In cum quot refirnuda
                  </li>
                  <li>
                    <img src={tickImg} alt="" className="tick" />
                    Ne suas tibique officiis vix, cu causae prompta{" "}
                  </li>
                  <li>
                    <img src={tickImg} lt="" className="tick" />
                    Amet a refence
                  </li>
                  <li>
                    <img src={tickImg} alt="" className="tick" />
                    Amet a refence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="mid-bg">
          <div className="container">
            <img src={midBgImg} alt="" className="img-fluid" />
          </div>
        </section>
        <section className="faq">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="q-wrapper">
                  <h3 className="question">Liber iusto convenire</h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad. Vim id quot quando, cum ne hinc aliquam
                    commune, mel an possit
                  </p>
                </div>
                <div className="q-wrapper">
                  <h3 className="question">Nec quas nusquam</h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad. Vim id quot quando, cum ne hinc aliquam
                    commune, mel an possit
                  </p>
                </div>
                <div className="q-wrapper">
                  <h3 className="question">Usu ea urbanitas adipiscing</h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad. Vim id quot quando, cum ne hinc aliquam
                    commune, mel an possit
                  </p>
                </div>
                <a href="#" className="text-link">
                  Nec quas nusquam efficiantu
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-holder">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5  ">
                <img src={testimonialUser} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="testimonial-wrapper">
                  <div className="testimonial-text">
                    Lorem ipsum dolor sit amet, qui ex velit scaevola
                    percipitur, cum alienum verterem in, sit liber iusto
                    convenire ad.
                  </div>
                  <div className="name">Causae inermis honestatis</div>
                  <button className="btn-outline">Ne suas tibique</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="accordion-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Lorem ipsum dolor sit amet</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="accordion-holder">
                  <Accordion defaultActiveKey="0">
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        onClick={() => this.setState({ open0: !open0 })}
                        aria-expanded={open0}
                      >
                        Causae inermis honestatis?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          {" "}
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="1"
                        onClick={() => this.setState({ open1: !open1 })}
                        aria-expanded={open1}
                      >
                        Usu ea urbanitas adipiscing.
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="2"
                        onClick={() => this.setState({ open2: !open2 })}
                        aria-expanded={open2}
                      >
                        Usu ea urbanitas adipiscing Cu mel causae inermis
                        honestatis.
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="3"
                        onClick={() => this.setState({ open3: !open3 })}
                        aria-expanded={open3}
                      >
                        Ne his porro mollies acoasms, posted prodesset sit cu.
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                          <i className="mdi mdi-plus"></i>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="4"
                        onClick={() => this.setState({ open4: !open4 })}
                        aria-expanded={open4}
                      >
                        Usu ea urbanitas adipiscing?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="img-card">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="title">Porro mollis accusamus</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <img src={t1Img} alt="" className="img-fluid" />
                <h3 className="card-title">Causae </h3>
                <p className="desc">Ne his porro mollis </p>
                <a href="#" className="link-text">
                  Learn More
                </a>
              </div>
              <div className="col-lg-4">
                <img src={t2Img} alt="" className="img-fluid" />
                <h3 className="card-title">Tipi-que </h3>
                <p className="desc">Usu ea urbanitas </p>
                <a href="#" className="link-text">
                  Learn More
                </a>
              </div>
              <div className="col-lg-4">
                <img src={t3Img} alt="" className="img-fluid" />
                <h3 className="card-title">mollis </h3>
                <p className="desc">
                  Est ut scaevola pertinax ye be ye Keshia{" "}
                </p>
                <a href="#" className="link-text">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="tutor-bottom">
          <div className="container">
            <div
              className="bg-tutor"
              style={{
                backgroundImage:
                  "linear-gradient(150deg, rgba(44, 180, 109, 0.7)15%, rgba(44, 180, 109, 0.7)70%, rgba(44, 180, 109, 0.7)94%), url(" +
                  tbottom +
                  ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <h3>Lorem ipsum dolor!</h3>
              <button className="btn-outline">Ne his</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(BecomeTutorPage);
