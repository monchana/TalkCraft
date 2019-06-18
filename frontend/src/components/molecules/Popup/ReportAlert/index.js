// after pressing buttons does closes ! should impleament to take actions for report 
// for now all type of reports are counted as one error
// in future by every report we shloud take different actions 

import React from 'react';

import './index.css';

const ReportAlert = (props) => {

    return (

        <div>

            <div className="modal-wrapper"

                style={{

                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',

                    opacity: props.show ? '1' : '0'

                }}>

                <div className="modal-header">

                    <h3>Report</h3>

                    <span className="close-modal-btn" onClick={props.close}>×</span>

                </div>

                <div className="modal-body">


                    <p>Please let us know why you are reporting this user?</p>
                </div>

                <div className="modal-footer">

                    <button className="btn-report" onClick={props.close}>Violence</button>
                    <button className="btn-report" onClick={props.close}>Hate Speech</button>
                    <button className="btn-report" onClick={props.close}>CopyRight</button>
                    <button className="btn-report" onClick={props.close}>Spam or etc</button>


                </div>

            </div>

        </div>

    )

}



export default ReportAlert;