import React from "react";
import closeIcon from "./assets/closeIcon.svg";
import "./style/modal.css";

/**
 * Modal react component
 * @param {String} message message displayed by the modal
 * @param {Function} setOpenModal function to be passed in order to control modal opening (boolean)
 * @returns react component
 */
const Modal = ({ setOpenModal, message }) => {
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="message-wrapper">
          <div className="message">{message}</div>
          <div
            className="close-btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={closeIcon} alt="close button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
