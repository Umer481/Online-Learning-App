import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import search from "./../../assets/icons/searchbox.png";
import pound from "./../../assets/icons/pound-sterling1.png";
import market from "./../../assets/icons/marketplace.png";

export default ({ TipsData }) => {
    return <div className="tips-div">
        <Row className="flex-center">
            <Col lg={12} md={12} sm={12} xs={12}>
                <Row className="flex-center" style={{ marginBottom: '10px' }}>
                    <Col lg={6} md={6} sm={12} xs={12} >
                        <div className="header">
                            <h4>Tips</h4>
                        </div>
                    </Col>
                </Row>
                {TipsData?.length ?
                    TipsData.map((tips, index) => 
                        <Row key={index} style={{ borderBottom: "1px solid #ced4da", padding: '35px 0px' }}>
                            <Col lg={12} md={12} sm={12} xs={12} className="flex-between-center">
                                <Col lg={8} md={8} sm={8} xs={8} className="flex-center" style={{ padding: "0px" }}>
                                    <Image src={tips?.icon === "searchbox.png" ? search : tips?.icon === "pound-sterling1.png" ? pound : market} />
                                    <div style={{ marginLeft: "20px", fontWeight: "500", color: "#000" }}>{tips?.text}</div>
                                </Col>
                                <Col lg={4} md={4} sm={4} xs={4} className="flex-end-center tips-btn-col">
                                    <Button className="flex-center-center" > {tips?.linkAction}</Button>
                                </Col>
                            </Col>

                        </Row>
                    ) : ""

                }


            </Col>
        </Row>
    </div>
}