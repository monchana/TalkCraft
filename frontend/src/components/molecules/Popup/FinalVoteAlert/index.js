// after pressing yes or no it does closes ! should impleament to count votes from all users  

import React from 'react';

import './index.css';

const FinalVoteAlert = (props) => {

    return (

        <div>

            <div className="modal-wrapper"

                style={{

                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',

                    opacity: props.show ? '1' : '0'

                }}>

                <div className="modal-header">

                    <h3>Times up! you have 10 seconds to vote</h3>

                    <span className="close-modal-btn" onClick={props.close}>×</span>

                </div>

                <div className="modal-body">



                    <p>What side does better in the debate?</p>

                    <p>Final results will appear in the debate page soon!</p>
                </div>

                <div className="modal-footer">

                    <button className="btn-yes" onClick={props.close}>Yes</button>
                    <button className="btn-no" onClick={props.close}>No</button>

                </div>

            </div>

        </div>

    )

}



export default FinalVoteAlert;