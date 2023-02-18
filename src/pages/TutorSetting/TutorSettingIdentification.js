import React, { Component } from "react";
import { connect } from "react-redux";
import CertificatePic from "../TutorApplicationForm/CertificatePic";
import Backend from "react-dnd-html5-backend";
import DraggableComponent from "./../../components/DraggableComponent";
import { DndProvider } from "react-dnd";
import { Col, Row,Button, DropdownButton, Dropdown } from "react-bootstrap";
import FrontIdPic from "../TutorApplicationForm/FrontIdPic";
import BackIdPic from "../TutorApplicationForm/BackIdPic";
class TutorSettingIdentification extends Component {
    constructor() {
        super();
        this.state = {
            typeOfDocument: 0,
            authorizeToRunBgCheck: false,
            frontOfCardUrl: "",
            backOfCardUrl: "",
            dBSCertUrl: "",
            country: "United kingdom",
            imageErrorMessage: "",
            certificateError: false,
            showAlert: false,
            show: false,
            show1: false
        };
    }
    show = (e) => {
        e.preventDefault()
        this.setState({
            show: true
        })
    }
    hide = (e) => {
        e.preventDefault()
        this.setState({
            show: false
        })
    }
    show1 = (e) => {
        e.preventDefault()
        this.setState({
            show1: true
        })
    }
    hide1 = (e) => {
        e.preventDefault()
        this.setState({
            show1: false
        })
    }
    handleChange = (checked) => {
        this.setState({
            authorizeToRunBgCheck: !checked,
        });
    }
    handleCountry = (countryRegion) => {
        this.setState({
            countryRegion: countryRegion,
        });
    }
    handleDocument = (docID) => {
        if(docID === 6){
            this.setState({
                typeOfDocument: docID,
            });
        }else if(docID === 4){
            this.setState({
                typeOfDocument: docID,
            });
        }else{
            this.setState({
                typeOfDocument: docID,
            });
        }
    }
    render() {
        const {
            updateState,
            iscompletedForm,
        } = this.props;
        const {
            authorizeToRunBgCheck,
            country,
            dBSCertUrl,
            frontOfCardUrl,
            backOfCardUrl,
            typeOfDocument,
            imageErrorMessage,
            certificateError,
            show,
            show1
        } = this.state;
        return (
        <div className="row flex-center-center tutor-setting-Identification">
            <div className="col-lg-8 col-md-10 col-sm-12 col-12 subject-mode background">
                <div className="cancel-btn">
                    <i className="mdi mdi-close"></i>
                </div>
                <h3 className="step-title">
                Background and identity
                </h3>
                <p className="certifcate_para grey-txt-bold">
                Update your ID or provide us with the enhanced DBS or PVG certificates.
                </p>
                {
                    !show1 ?
                    <div>
                        <hr className="mt-5 mb-5"/>
                        <div className="d-flex justify-content-between">
                            <label className="label"> Official ID</label>
                            <a className={ show ? "gray-link" : "green-link"} onClick={this.show1}>
                            Update
                            </a>
                        </div>
                        
                        <p className="certifcate_para grey-txt-bold">
                            You have verified your identity.
                        </p>
                    </div> 
                    : ""
                }
                {
                    show1 ?
                    <div>
                        <hr className="mt-5 mb-5"/>
                        <div className="d-flex justify-content-between">
                        <label className="label">Add your official ID</label>
                        <a className="green-link" onClick={this.hide1}>
                            Cancel
                        </a>
                        </div>
                        <p className="certifcate_para grey-txt-bold">
                        This helps us check that you are really you. Identity verification
                        is one of the ways to keep Askademia secure.
                        </p>
                        <span className="label">Issuing country/region</span>
                        <div className="row" >
                            <div className="input-group country">
                                <input 
                                    type="text" 
                                    value={country} 
                                    disabled = {(country)? "disabled" : ""}
                                    className="form-control"/>
                                <i className="mdi mdi-lock mr-1"></i>
                            </div>
                        </div>
                        <span
                        className="label"
                        style={{ marginBottom: "30px", display: "flex" }}
                        >
                        Type of document
                        </span>
                        <div className="row mb-3">
                        <div className="col-lg-12 green-radio">
                            <div className="custom-control custom-radio custom-control-inline radio-btn">
                            <input
                                type="radio"
                                id="customRadioInline73"
                                name="customRadioInline73"
                                className="custom-control-input"
                                checked={typeOfDocument === 6 ? true : false}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customRadioInline73"
                                onClick={
                                    !iscompletedForm
                                        ? () =>
                                        {this.handleDocument(6)}
                                        : () => {}
                                    }
                            >
                                Driver’s licence
                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline radio-btn">
                            <input
                                type="radio"
                                id="customRadioInline74"
                                name="customRadioInline73"
                                className="custom-control-input"
                                checked={typeOfDocument === 4 ? true : false}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customRadioInline74"
                                onClick={
                                !iscompletedForm
                                    ? () =>
                                        {this.handleDocument(4)}
                                    : () => {}
                                }
                            >
                                Passport
                            </label>
                            </div>
                            <div className="custom-control custom-radio custom-control-inline radio-btn">
                            <input
                                type="radio"
                                id="customRadioInline75"
                                name="customRadioInline73"
                                className="custom-control-input"
                                checked={typeOfDocument === 1 ? true : false}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customRadioInline75"
                                onClick={
                                !iscompletedForm
                                    ? () =>
                                    {this.handleDocument(1)}
                                    : () => {}
                                }
                            >
                                Identity card
                            </label>
                            </div>
                        </div>
                        </div>
                        <span
                        className="label"
                        style={{ marginBottom: "30px", display: "flex" }}
                        >
                        Upload images of your ID
                        </span>
                        <p className="certifcate_para grey-txt-bold">
                        Upload images of the front and back of your ID. Make sure your
                        images are not cropped, covered or blurred and the front clearly
                        shows your face.
                        </p>
                        <div className="row" style={{ marginBottom: "40px" }}>
                        <div className="flex-center-center image-message">
                            {!typeOfDocument ? (
                            imageErrorMessage ? (
                                imageErrorMessage
                            ) : this.props?.validationError?.data?.typeOfDocument ? (
                                <div
                                className="red-alert-message"
                                style={{ textAlign: "center" }}
                                >
                                {this.props?.validationError?.data?.typeOfDocument}
                                </div>
                            ) : (
                                ""
                            )
                            ) : (
                            ""
                            )}
                        </div>
                        <div className="col-md-6">
                            <DndProvider backend={Backend}>
                            <DraggableComponent
                                TargetChildComponent={FrontIdPic}
                                iscompletedForm={iscompletedForm}
                                errorMessagehandling={(error) =>
                                updateState({
                                    ...this.state,
                                    imageErrorMessage: error,
                                })
                                }
                                updateImageUrl={(e) =>
                                updateState({
                                    ...this.state,
                                    frontOfCardUrl: e,
                                })
                                }
                                imageUrl={frontOfCardUrl}
                                typeNo={
                                typeOfDocument
                                    ? typeOfDocument === 1
                                    ? "1"
                                    : typeOfDocument === 6
                                    ? "6"
                                    : "4"
                                    : ""
                                }
                            />
                            </DndProvider>
                            {!frontOfCardUrl ? (
                            this.props?.validationError?.data?.frontOfCardUrl ? (
                                <div className="red-alert-message">
                                {this.props?.validationError?.data?.frontOfCardUrl}
                                </div>
                            ) : (
                                ""
                            )
                            ) : (
                            ""
                            )}
                        </div>
                        <div className="col-md-6 ">
                            <DndProvider backend={Backend}>
                            <DraggableComponent
                                TargetChildComponent={BackIdPic}
                                iscompletedForm={iscompletedForm}
                                errorMessagehandling={(error) =>
                                updateState({
                                    ...this.state,
                                    imageErrorMessage: error,
                                })
                                }
                                updateImageUrl={(e) =>
                                updateState({
                                    ...this.state,
                                    backOfCardUrl: e,
                                })
                                }
                                imageUrl={backOfCardUrl}
                                typeNo={
                                typeOfDocument
                                    ? typeOfDocument === 1
                                    ? "2"
                                    : typeOfDocument === 6
                                    ? "7"
                                    : "5"
                                    : ""
                                }
                            />
                            </DndProvider>
                            {!backOfCardUrl ? (
                            this.props?.validationError?.data?.backOfCardUrl ? (
                                <div className="red-alert-message">
                                {this.props?.validationError?.data?.backOfCardUrl}
                                </div>
                            ) : (
                                ""
                            )
                            ) : (
                            ""
                            )}
                        </div>
                        </div>
                        <p className="certfcate_small">
                        <i className="mdi mdi-lock mr-1"></i>Your ID is used to verify
                        your identity and is not shared with other users of Askademia
                        </p>
                    </div>
                    : ""
                }
            
                {
                    !show ?
                    <div>
                        <hr className="mt-5 mb-5"/>
                        <div className="d-flex justify-content-between">
                            <label className="label"> DBS or Criminal record certificate</label>
                            <a className={show1 ? "gray-link" : "green-link"} onClick={this.show}>
                                ADD
                            </a>
                        </div>

                        <p className="certifcate_para grey-txt-bold">
                        Not provided.
                        </p>
                        <hr className="mt-5 mb-5"/>
                    </div>
                    : ""
                }
            
                {
                show ?
                <div>
                    <hr className="mt-5 mb-5"/>
                    <div className="d-flex justify-content-between">
                    <label className="label">Add your background check Certificate</label>
                    <a className="green-link" onClick={this.hide}>
                        Cancel
                    </a>
                    </div>
                    <p className="certifcate_para grey-txt-bold">
                    You do not need a background check to use our platform tutor,
                    however you may miss on opportunities where students or parents
                    require you to have a background check certificate. All tutors who
                    upload a copy of their enhanced background check certificate such
                    as the DBS or PVG will be awarded a verification badge on their
                    tutor profile and have access all tutoring jobs within their
                    speciality.
                    </p>
                    <label className="label">Your certificate</label>
                    <p className="certifcate_para grey-txt-bold">
                    Upload a colour copy of your enhanced DBS or PVG certificate which
                    has been issued within the last 2 years
                    </p>

                    <DndProvider backend={Backend}>
                    <DraggableComponent
                        TargetChildComponent={CertificatePic}
                        certificateError={certificateError}
                        ImageUploadAction={this.props.ImageUploadAction}
                        uploadedImage={this.props.uploadImage}
                        iscompletedForm={iscompletedForm}
                        errorMessagehandling={(error) => {
                        updateState({
                            ...this.state,
                            certificateError: error,
                        });
                        setTimeout(() => {
                            updateState({
                            ...this.state,
                            certificateError: false,
                            });
                        }, 1000);
                        }}
                        updateImageUrl={(e) =>
                        updateState({
                            ...this.state,
                            dBSCertUrl: e,
                        })
                        }
                        imageUrl={dBSCertUrl}
                        typeNo={"3"}
                    />
                    </DndProvider>

                    <p className="small-text certfcate_small">
                    <i className="mdi mdi-lock mr-1"></i>Your certificate is used to
                    verify and award you with a badge on your tutor profile and is not
                    shared with other users of Askademia
                    </p>
                    <p className="certifcate_para grey-txt-bold">
                    We request updates from the{" "}
                    <span style={{ color: "#2cb46d" }}>DBS update service</span>{" "}
                    periodically to keep your DBS status updated. Other users of
                    Askademia will not see this information.
                    </p>
                    <div className="custom-control custom-checkbox mb-3 cerfcate_check">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck61"
                            checked={authorizeToRunBgCheck}
                            onChange={() => {this.handleChange(authorizeToRunBgCheck)}}
                        />
                        <label
                            className="custom-control-label certifcate_para grey-txt-bold"
                            htmlFor="customCheck61"
                            style={{ cursor: "pointer", marginBottom: "0px" }}
                        >
                            By checking this box you authorise Askademia running your DBS
                            Check through the DBS Update Service
                        </label>
                        {!authorizeToRunBgCheck ? (
                            this.props?.validationError?.data?.authorizeToRunBgCheck ? (
                            <div className="red-alert-message">
                                {this.props?.validationError?.data?.authorizeToRunBgCheck}
                            </div>
                            ) : (
                            ""
                            )
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex- mb-4">
                    <Button className="green-save-btn">Save</Button>
                    </div>
                </div> : ""
                }
                
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {
        UserReducer: { user },
    } = state;

    return {
        user,
    };
};

export default connect(mapStateToProps, null)(TutorSettingIdentification);
