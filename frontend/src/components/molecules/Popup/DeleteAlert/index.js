//corrently it only closes after showing the alert! it needs to connect to delete after pressing on yes !! 

import React from 'react';

import './index.css';

const DeleteAlert = (props) => {

    return (

        <div>

            <div className="modal-wrapper"

                style={{

                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',

                    opacity: props.show ? '1' : '0'

                }}>

                <div className="modal-header">

                    <h3>Delete Alert</h3>

                    <span className="close-modal-btn" onClick={props.close}>×</span>

                </div>

                <div className="modal-body">

                    <p>Are you sure you are going to delete?</p>

                    <p>

                        {props.children}

                    </p>

                </div>

                <div className="modal-footer">

                    <button className="btn-yes" onClick={props.close}>Yes</button>
                    <button className="btn-no" onClick={props.close}>No</button>

                </div>

            </div>

        </div>

    )

}



export default DeleteAlert;