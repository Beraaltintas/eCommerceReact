
import React from 'react'
import "./Dialog.css";
import PropTypes from  "prop-types";
const Dialog = ({ isDialogShow, setIsDialogShow }) => {
    const handleCloseDialog= (e)=>{
        const checked = e.target.checked;
        localStorage.setItem("dialog",JSON.stringify(!checked));
        
    }
  return (
    <div className={`modal-dialog ${isDialogShow ? "show":""}`}>
        <div className="modal-content">
          <button className="modal-close" onClick={()=>setIsDialogShow(false)}>
            <i className="bi bi-x" ></i>
          </button>
          <div className="modal-image">
            <img src="img/modal-dialog.jpg" alt=""/>
          </div>
          <div className="popup-wrapper">
            <div className="popup-content"></div>
              <div className="popup-title">
                <h3>NEWSLETTER</h3>
              </div>
              <p className="popup-text">Sign up to our newsletter and get exclusive deals you won find any where else straight to your inbox!</p>
              <form className="popup-form">
                <input type="text" placeholder="Enter Email Adress Here"/>
                <button className="btn btn-primary">Subscribe</button>
                <label>
                  <input type="checkbox" onChange={handleCloseDialog}/>
                  <span>Don`t show this popup again</span>
                </label>
              </form>
          </div>

        </div>
        <div className="modal-overlay" onClick={()=>setIsDialogShow(false)}></div>
      </div>
  )
}

export default Dialog
Dialog.PropTypes = {
    isDialogShow: PropTypes.bool,
    setIsDialogShow: PropTypes.func
}