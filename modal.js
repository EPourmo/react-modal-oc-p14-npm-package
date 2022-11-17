import React from "react";
import closeIcon from "./assets/closeIcon.svg";
import "./style/modal.css";

const Modal = ({ setOpenModal, message }) => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="message-wrapper">
          <div className="message">{message}</div>
          <button
            className="close-btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={closeIcon} alt="close button" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
