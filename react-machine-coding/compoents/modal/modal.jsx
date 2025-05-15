import React from "react";
import { createPortal } from "react-dom";
import "./style.css";
const Modal = ({
  children,
  title,
  setShowModal,

}) => {
  return createPortal(
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="modal-layout-container">
        <div className="modal-header">
          <h3>{title}</h3>
          <span onClick={()=> setShowModal(false)}>❌</span>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
export default Modal;
