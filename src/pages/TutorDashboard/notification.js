import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default ({ notifations }) => {
    return <div className="notification">
        <Row className="flex-center">
            <Col lg={12} md={12} sm={12} xs={12}>
                <Row className="flex-center" style={{ marginBottom: '10px', borderBottom: "1px solid", paddingBottom: "30px", paddingLeft: '25px' }}>
                    <div className="header">
                        <h4>Notification</h4>
                    </div>
                </Row>
                <Row>
                    {
                        notifations?.length && notifations.map((notifation, index) => {
                            return (
                                <Col key={index} lg={12} md={12} sm={12} xs={12} style={{ borderBottom: notifations.length !== index ? "1px solid #ced4da" : "", padding: "27px 25px" }}>
                                    <div className="text-style">{notifation.message}</div>
                                    <div className="time-style">{notifation.date}</div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </Row>
    </div>
}