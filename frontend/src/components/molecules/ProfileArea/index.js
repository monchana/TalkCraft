import React, { PropTypes } from 'react';
//change the user image yesor no and debate
//temp img is applied
//yes or no list and debate list !! for now just show one
import './index.css';

const ProfileArea = (props) => {
    return (
        <div id="user-profile-2" class="user-profile">
            <div class="tabbable">
                <ul class="nav nav-tabs padding-18">
                    <li class="active">
                        <a data-toggle="tab" href="#home">
                            <i class="green ace-icon fa fa-user bigger-120"></i>
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

                <div class="tab-content no-border padding-24">
                    <div id="home" class="tab-pane in active">
                        <div class="row">
                            <div class="col-xs-12 col-sm-3 center">
                                <span class="profile-picture">
                                    <img class="editable img-responsive" alt=" Avatar" id="avatar2" src="http://bootdey.com/img/Content/avatar/avatar6.png" />
                                </span>

                                <div class="space space-4"></div>


                                <a href="#" class="btn btn-sm btn-block btn-primary">
                                    <i class="ace-icon fa fa-envelope-o bigger-110"></i>
                                    <span class="bigger-110">Send a message</span>
                                </a>
                            </div>

                            <div class="col-xs-12 col-sm-9">
                                <h4 class="blue">
                                    <span class="middle"> {props.name} </span>

                                </h4>

                                <div class="profile-user-info">
                                    <div class="profile-info-row">
                                        <div class="profile-info-name"> Username </div>

                                        <div class="profile-info-value">
                                            <span> {props.username} </span>
                                        </div>
                                    </div>
                                      <div class="profile-user-info">
                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Email </div>

                                            <div class="profile-info-value">
                                                <span> {props.Email} </span>
                                            </div>
                                        </div>
                                      </div>
                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Age </div>

                                            <div class="profile-info-value">
                                                <span> {props.age}</span>
                                            </div>
                                        </div>

                                        <div class="profile-info-row">
                                            <div class="profile-info-name"> Joined </div>

                                            <div class="profile-info-value">
                                                <span> {props.joined}</span>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div class="space-20"></div>

                            <div class="row">
                                <div class="col-xs-12 col-sm-6">
                                    <div class="widget-box transparent">
                                        <div class="widget-header widget-header-small">
                                            <h4 class="widget-title smaller">
                                                <i class="ace-icon fa fa-check-square-o bigger-110"></i>
                                                Little About Me
                                    </h4>
                                        </div>

                                        <div class="widget-body">
                                            <div class="widget-main">
                                                <p>
                                                    {props.LittleAboutMe}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="yesorno" class="tab-pane">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="profile-activity clearfix">
                                        <div>
                                            <img class="pull-left" alt="yes" src="get from user" />
                                            <img class="pull-left" alt="no" src="get from user" />
                                            <a class="title" href="#"> yes/or title</a>
                                            <a href="#">more</a>
                                            <div class="time">
                                                <i class="ace-icon fa fa-clock-o bigger-110"></i>
                                                post time
                                     </div>
                                        </div>

                                        <div class="tools action-buttons">
                                            <a href="#" class="blue">
                                                <i class="ace-icon fa fa-pencil bigger-125"></i>
                                            </a>

                                            <a href="#" class="red">
                                                <i class="ace-icon fa fa-times bigger-125"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hr hr10 hr-double"></div>

                            <ul class="pager pull-right">
                                <li class="previous disabled">
                                    <a href="#">← Prev</a>
                                </li>

                                <li class="next">
                                    <a href="#">Next →</a>
                                </li>
                            </ul>
                        </div>

                        <div id="debate" class="tab-pane">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="profile-activity clearfix">
                                        <div>
                                            <img class="pull-left" alt="picture" src="gdebate-picture" />
                                            <a class="title" href="#"> debate title</a>
                                            <div class="time">
                                                <i class="ace-icon fa fa-clock-o bigger-110"></i>
                                                post time
                                 </div>
                                        </div>

                                        <div class="tools action-buttons">
                                            <a href="#" class="blue">
                                                <i class="ace-icon fa fa-pencil bigger-125"></i>
                                            </a>

                                            <a href="#" class="red">
                                                <i class="ace-icon fa fa-times bigger-125"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hr hr10 hr-double"></div>

                            <ul class="pager pull-right">
                                <li class="previous disabled">
                                    <a href="#">← Prev</a>
                                </li>

                                <li class="next">
                                    <a href="#">Next →</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            )
        };
        
ProfileArea.propTypes = {
                name: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                Email: PropTypes.string.isRequired,
                age: PropTypes.string.isRequired
                
            
        };
        
export default ProfileArea;