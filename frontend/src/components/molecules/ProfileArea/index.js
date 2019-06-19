import React, { PropTypes } from 'react';
//change the user image yesor no and debate
//temp img is applied
//yes or no list and debate list !! for now just show one
import './index.css';

const ProfileArea = (props) => {
    return (
        <div id="user-profile-2" className="user-profile">
            <div className="tabbable">
                <ul className="nav nav-tabs padding-18">
                    <li className="active">
                        <a data-toggle="tab" href="#home">
                            <i className="green ace-icon fa fa-user bigger-120"></i>
                            Profile
                </a>
                    </li>

                    <li>
                        <a data-toggle="tab" href="#yesorno">
                            <i class="pink ace-icon fa fa-picture-o bigger-120"></i>
                            Yes/No
                </a>
                    </li>

                    <li>
                        <a data-toggle="tab" href="#debate">
                            <i class="pink ace-icon fa fa-picture-o bigger-120"></i>
                            Debate
                </a>
                    </li>
                </ul>

                <div className="tab-content no-border padding-24">
                    <div id="home" className="tab-pane in active">
                        <div className="row">
                            <div cclassName="col-xs-12 col-sm-3 center">
                                <span className="profile-picture">
                                    <img className="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                </span>
                            </div>



                            <div className="profile-user-info">
                                <div className="profile-info-row">
                                    <div className="profile-info-name"> Username </div>

                                    <div className="profile-info-value">
                                        <span> {props.username} </span>
                                    </div>
                                </div>

                                <div className="profile-info-row">
                                    <div className="profile-info-name"> Rank </div>

                                    <div className="profile-info-value">
                                        <span> {props.myrank}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-20"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="widget-box transparent">
                                <div className="widget-header widget-header-small">
                                    <h4 className="widget-title smaller">
                                        <i className="ace-icon fa fa-check-square-o bigger-110"></i>
                                        Little About Me
                                    </h4>
                                </div>

                                <div className="widget-body">
                                    <div className="widget-main">
                                        <p>
                                            {props.aboutMe}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id="yesorno" className="tab-pane">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="profile-activity clearfix">
                                    <div>
                                        <img className="pull-left" alt="yes" src="get from user" />
                                        <img className="pull-left" alt="no" src="get from user" />
                                        <a className="title" href="#"> yes/or title</a>
                                        <a href="#">more</a>
                                        <div className="time">
                                            <i className="ace-icon fa fa-clock-o bigger-110"></i>
                                            post time
                                     </div>
                                    </div>

                                    <div className="tools action-buttons">
                                        <a href="#" className="blue">
                                            <i className="ace-icon fa fa-pencil bigger-125"></i>
                                        </a>

                                        <a href="#" className="red">
                                            <i className="ace-icon fa fa-times bigger-125"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hr hr10 hr-double"></div>

                        <ul className="pager pull-right">
                            <li className="previous disabled">
                                <a href="#">← Prev</a>
                            </li>

                            <li className="next">
                                <a href="#">Next →</a>
                            </li>
                        </ul>
                    </div>

                    <div id="debate" className="tab-pane">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="profile-activity clearfix">
                                    <div>
                                        <img className="pull-left" alt="picture" src="gdebate-picture" />
                                        <a className="title" href="#"> debate title</a>
                                        <div className="time">
                                            <i className="ace-icon fa fa-clock-o bigger-110"></i>
                                            post time
                                 </div>
                                    </div>

                                    <div className="tools action-buttons">
                                        <a href="#" className="blue">
                                            <i className="ace-icon fa fa-pencil bigger-125"></i>
                                        </a>

                                        <a href="#" className="red">
                                            <i className="ace-icon fa fa-times bigger-125"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hr hr10 hr-double"></div>

                        <ul className="pager pull-right">
                            <li className="previous disabled">
                                <a href="#">← Prev</a>
                            </li>

                            <li className="next">
                                <a href="#">Next →</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >

    )
};
export default ProfileArea;
