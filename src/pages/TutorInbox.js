import React, { Component } from 'react';
import { Row, Col, DropdownButton, Dropdown, Image, Form } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { format } from 'timeago.js';

import {
    getMessages
} from "./../apis/tutors";
class Inbox extends Component {
    constructor() {
        super();

        this.state = {
            AllMessages: [],
            page: 1,
            paginationpages: 1
        };
    }

   

     // getMessages
    getAllMessages = data => {
        let { paginateMessage, paginationpages } = this.state;
        getMessages({ token: data.token, id: data.id })
            .then(res => {
                paginationpages = Math.ceil(res.data.length / 5);
                paginateMessage = res.data.filter((message, i) => (i + 1) < 6)
                this.setState({
                    AllMessages: res.data,
                    paginateMessage,
                    paginationpages
                })
            }
            )
            .catch(err =>
                this.setState({
                    error: err
                })
            );
    };
    componentDidMount = () => {
        // get Token
        let token = JSON.parse(localStorage.getItem("userDetail"));
        token = `Bearer ${token?.token}`;

        // getMessages
        this.getAllMessages({ id: "1234", token });
    };

   
   
    handlePageClick = data => {
        let { AllMessages, paginateMessage } = this.state;
        let selected = data.selected + 1;
        let start = (selected * 5) - 4;
        let end = selected * 5;
        paginateMessage = AllMessages.filter((value, i) => (start <= i && end >= i))
        this.setState({ page: selected, paginateMessage })
    };
    render() {
        const { paginationpages, paginateMessage, offset } = this.state;
        return (
            <div className="inbox-div">
                <Row className="flex-center">
                    <Col lg={10} md={8} sm={8} xs={6}>
                        <div className="header">
                            <h2>My Inbox</h2>
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={4} xs={6} className="dropdown-message">
                        <DropdownButton id="dropdown-basic-button" title={<span className="flex-between-center"><span style={{ fontSize: "14px" }}>All message(7)</span><Image style={{ width: "15px", height: "25px" }} src={require('./../assets/icons/fill-down-arrow.png')} /></span>}>
                            <Dropdown.Item href="#/action-1">Search Date</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ padding: '0px', marginBottom: "8px" }}>
                        <Form.Group as={Col} controlId="validationCustom01">
                            <div className="search-icon">
                                <Image style={{ width: "20px", height: "20px" }} src={require('./../assets/icons/search.png')} />
                            </div>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Search..."

                            />
                        </Form.Group>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} className="inbox-room-col">
                        {
                            paginateMessage?.length && paginateMessage.map((inboxdetail, index) => {
                                return (
                                    <Col key={index} lg={12} md={12} sm={12} xs={12} className="room-col flex-between-center">
                                        <Col lg={3} md={3} sm={4} xs={4} className="flex-center">
                                            <Image roundedCircle className="avator-img" src={inboxdetail.userOneProfileImg} />
                                            <span className="flex-col namespan" >
                                                <span className="name">{inboxdetail.userOne}</span>
                                                <span style={{ fontSize: "13px" }}>{format(new Date("2020-03-03T08:51:57.164Z").valueOf())}</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} md={6} sm={6} xs={6} className="message-col grid-style">
                                            {(inboxdetail.lastmessage)}
                                        </Col>
                                        <Col lg={3} md={3} sm={2} xs={2} className="flex-end-center">
                                            {
                                                inboxdetail.status === "unfillstar" ?
                                                    <Image style={{ width: "25px" }} src={require('./../assets/icons/star.png')} />
                                                    : inboxdetail.status === "fillstar" ?
                                                        <Image style={{ width: "25px" }} src={require('./../assets/icons/fillStar.png')} />
                                                        :
                                                        <span className={inboxdetail.status === "Accepted" ? "Accepted-style" : inboxdetail.status === "Declined" ? "Declined-style" : inboxdetail.status === "Expired" ? "expired-style" : "completed-style"}>{inboxdetail.status}</span>

                                            }
                                        </Col>
                                    </Col>
                                );
                            })}
                        <Col className="pagnination-Col">
                            <ReactPaginate
                                previousLabel={
                                    <span>
                                        <Image
                                            style={{ transform: "rotate(90deg)", width: "18px" }}
                                            src={require("./../assets/icons/down-arrow-blue.png")}
                                        />
                                    </span>
                                }
                                nextLabel={
                                    <span>
                                        <Image
                                            style={{ transform: "rotate(270deg)", width: "18px" }}
                                            src={require("./../assets/icons/down-arrow-blue.png")}
                                        />
                                    </span>
                                }
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={paginationpages}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Inbox;
