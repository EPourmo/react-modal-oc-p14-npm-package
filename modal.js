import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="bg-black opacity-60 fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center">
        <div className="flex-col justify-center bg-white py-5 px-10 border-4 border-black rounded-xl relative">
          <div className="flex text-lg text-zinc-600 mb-10">
            Employee Created!
          </div>
          <button
            className="absolute right-0 top-0"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
