//corrently it only closes after showing the alert! it needs to connect to delete after pressing on yes !! 

import React from 'react';

import './index.css';

const DebateNow = (props) => {

    return (

        <div>

            <div className="modal-wrapper"

                style={{

                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',

                    opacity: props.show ? '1' : '0'

                }}>

                <div className="modal-header">

                    <h3>Debate Now</h3>

                    <span className="close-modal-btn" onClick={props.close}>×</span>

                </div>

                <div className="modal-body">

                    <p>Choose your role in the debate!</p>



                </div>

                <div className="modal-footer">

                    <button className="btn-debater" onClick={props.close}>Debater</button>
                    <button className="btn-observer" onClick={props.close}>Observer</button>

                </div>

            </div>

        </div>

    )

}



export default DebateNow;