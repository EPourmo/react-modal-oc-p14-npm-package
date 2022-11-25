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

Modal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
