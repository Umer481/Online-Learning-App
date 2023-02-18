import React from "react";

import close from "../../assets/images/close.png";
import tickmark from "../../assets/icons/tickmark.png";

const AvailabilityCalender = () => {
  return (
    <div className="Availability-modal__body__container__data__calender__shift">
      <div className="Availability-modal__body__container__data__calender__shift__days">
        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading"></div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
            <div>Su</div>
          </div>
        </div>
        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading">
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Morning
            </div>
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Pre 12pm
            </div>
          </div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
          </div>
        </div>

        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading">
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Afternoon
            </div>
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Pre 12pm
            </div>
          </div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
          </div>
        </div>

        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading">
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Late Afternoon
            </div>
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Pre 12pm
            </div>
          </div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
          </div>
        </div>

        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading">
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Evening
            </div>
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              6 - 8pm
            </div>
          </div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box ">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
          </div>
        </div>

        <div className="Availability-modal__body__container__data__calender__shift__days__container">
          <div className="Availability-modal__body__container__data__calender__shift__days__container__heading">
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Late Evening
            </div>
            <div
              style={{
                color: "#0f0f0f",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Pre 12pm
            </div>
          </div>
          <div className="Availability-modal__body__container__data__calender__shift__days__container__text">
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box">
              <img
                src={close}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
            <div className="Availability-modal__body__container__data__calender__shift__days__container__text__box color__white">
              <img
                src={tickmark}
                className="Availability-modal__body__container__data__calender__shift__days__container__text__box__close"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalender;
