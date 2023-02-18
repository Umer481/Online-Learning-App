import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ session, allSessions, index }) => {
    return <Col lg={12} md={12} sm={12} xs={12} style={{ borderBottom: allSessions.length - 1 !== index ? "1px solid #ced4da" : "", marginBottom: "30px" }}>
        <Row className="flex-center" style={{ marginBottom: '30px' }}>
            <Col lg={6} md={6} sm={12} xs={12} >
                <div className="time-style">
                    <span>{`${session?.date} | ${session?.time} | ${session?.status}`}</span>
                </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="flex-end-center btn-session"  >
                <Button className="rate-style">{`23.00`}</Button>
                <Button className="accept">Accept</Button>
                <Button className="decline">Decline</Button>
            </Col>
        </Row>
        <Row className="flex-center" style={{ marginBottom: '75px' }}>
            <Col lg={6} md={6} sm={12} xs={12} >
            <Link to={`/tutor-dashboard/lessonDetails`} >
                <div className="session-info">
                    <h5>{session?.name}</h5>
                    <div className="subject">{session?.subject}</div>
                    <div>{session?.notes}</div>
                </div>
                </Link> 
            </Col>

        </Row>
    </Col>

}