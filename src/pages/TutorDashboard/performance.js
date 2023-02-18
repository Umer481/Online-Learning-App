import React from 'react';
import { Row, Col, Form, Button, Image, Card } from 'react-bootstrap';

export default ({ performance }) => {
   
    return <div className="performance-div">
        <Row className="flex-center">
            <Col lg={12} md={12} sm={12} xs={12}>
                <Row className="flex-center" style={{ marginBottom: '10px' }}>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div className="header">
                            <h4>Performance Summary</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/fillStar.png')} /></div>
                                <div className="flex-center-center"><strong>{performance?.totalRating}</strong></div>
                                <div className="flex-center-center txt-style">Total rating</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/review.png')} /></div>
                                <div className="flex-center-center"><strong>{performance?.totalReviews}</strong></div>
                                <div className="flex-center-center txt-style">Total reviews</div>
                            </Card.Body>
                        </Card>
                    </Col> <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/check-mark (1).png')} /></div>
                                <div className="flex-center-center"><strong>{performance?.responseRate}</strong></div>
                                <div className="flex-center-center txt-style">Response rate</div>
                            </Card.Body>
                        </Card>
                    </Col> <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/pound-sterling.png')} /></div>
                                <div className="flex-center-center"><strong>{performance?.lastMonthEarnings}</strong></div>
                                <div className="flex-center-center txt-style">december earnings</div>
                            </Card.Body>
                        </Card>
                    </Col> <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/fillStar.png')} /></div>
                                <div className="flex-center-center"><strong>{[performance?.profileViews]}</strong></div>
                                <div className="flex-center-center txt-style">30-Day profile views</div>
                            </Card.Body>
                        </Card>
                    </Col> <Col lg={4} md={4} sm={12} xs={12} className="flex-center">
                        <Card>
                            <Card.Body>
                                <div className="flex-center-center"><Image src={require('./../../assets/icons/fillStar.png')} /></div>
                                <div className="flex-center-center"><strong>{performance?.upcomingSessionCount}</strong></div>
                                <div className="flex-center-center txt-style">30-Day upcoming sessions</div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="flexcenter requirment">
                        <span className="icon">!</span><span style={{ color: "#025277" }}>Tutor  requirment needs your attention</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}